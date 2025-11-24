import React, { useEffect, useRef, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import terreno from "./terreno.json";
import axios from "axios";

// Importar componentes
import SliderFondo from "../../components/Lotes/SliderFondo";
import LotInfoPanel from "../../components/Lotes/LotInfoPanel";
import MapModeSelector from "../../components/Lotes/MapModeSelector";
import ViewControls from "../../components/Lotes/ViewControls";
import Header from "../../components/Lotes/Header";
import Propiedad from '../../components/Lotes/Propiedad';
import Galeria from '../../components/Lotes/Galeria';

// 🔹 Solucionar el problema de iconos por defecto de Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

// 🔹 PARÁMETROS CONFIGURABLES POR EL USUARIO
const CONFIGURACION = {
  COLOR_PRINCIPAL: "#2E86AB",
  COLOR_SECUNDARIO: "#4CAF50",
  COLOR_ACENTO: "#FFD700",
  ZOOM_INICIAL: 18,
  ZOOM_MAXIMO: 22,
  ZOOM_MINIMO: 14,
  TAMAÑO_MARCADOR_NORMAL: 32,
  TAMAÑO_MARCADOR_GRANDE: 36,
  TAMAÑO_MARCADOR_MAS_GRANDE: 42,
  PRECIO_MINIMO: 15000,
  PRECIO_MAXIMO: 100000,
  TAMAÑO_MINIMO: 380,
  TAMAÑO_MAXIMO: 520,
  ANIMACIONES: true,
  TOOLTIPS_INTERACTIVOS: true,
  SONIDOS: false,
};

// 🔹 MODOS DE MAPA
const MAP_MODES = {
  SATELITE: {
    name: "Satélite",
    url: "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
    attribution: "© Esri, Earthstar Geographics"
  },
  CALLES: {
    name: "Calles",
    url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    attribution: "© OpenStreetMap contributors"
  },
  RELIEVE: {
    name: "Relieve",
    url: "https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png",
    attribution: "© OpenTopoMap contributors"
  },
  OSCURO: {
    name: "Oscuro",
    url: "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",
    attribution: "© CartoDB"
  },
  CLARO: {
    name: "Claro",
    url: "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
    attribution: "© CartoDB"
  },
  HIBRIDO: {
    name: "Híbrido",
    url: "https://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}",
    attribution: "© Google Maps"
  }
};

// 🔹 ESTILOS CSS GLOBALES - ACTUALIZADOS
const styles = `
  @keyframes slideInRight {
    from {
      transform: translateX(100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
  
  @keyframes pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.1); }
  }
  
  .marker:hover {
    transform: scale(1.2) !important;
    box-shadow: 
      0 10px 30px rgba(0,0,0,0.5),
      inset 0 2px 6px rgba(255,255,255,0.6) !important;
  }
  
  .tooltip {
    transition: all 0.3s ease !important;
  }
  
  .largest-lot {
    z-index: 1000 !important;
  }
  
  .large-lot {
    z-index: 900 !important;
  }

  /* 🔹 SOLUCIÓN PARA EL PROBLEMA DE SUPERPOSICIÓN */
  .leaflet-container {
    height: 100%;
    width: 100%;
    border-radius: 15px;
    z-index: 0 !important;
  }

  .leaflet-pane {
    z-index: 0 !important;
  }

  .leaflet-top,
  .leaflet-bottom {
    z-index: 0 !important;
  }

  .leaflet-control {
    z-index: 0 !important;
  }

  /* Asegurar que el mapa no se superponga */
  .map-container-wrapper {
    position: relative;
    z-index: 0;
  }

  .content-section {
    position: relative;
    z-index: 10;
    background: white;
  }
`;








const MapaLotes3D = () => {
  const [mapInitialized, setMapInitialized] = useState(false);
  const [selectedLot, setSelectedLot] = useState(null);
  const [showLotInfo, setShowLotInfo] = useState(false);
  const [viewMode, setViewMode] = useState("lotes");
  const [mapConfig, setMapConfig] = useState(CONFIGURACION);
  const [filteredLots, setFilteredLots] = useState([]);
  const [currentMapMode, setCurrentMapMode] = useState("SATELITE");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [availableLots, setAvailableLots] = useState([]);
  
  const mapInstanceRef = useRef(null);
  const mapContainerRef = useRef(null);
  const currentTileLayerRef = useRef(null);
  const markersRef = useRef([]);

  // 🔹 FUNCIÓN PARA CARGAR DATOS DESDE GOOGLE SHEETS
  const fetchLotDataFromGoogleSheets = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const csvUrl = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSAFDNu6uFxAbWmh2AJZgnOVpNF3-5FXspcOK5mIMEPmv2e6vWKNZdlbNEPVn1nFujmL9f96rl9Ttxr/pub?gid=0&single=true&output=csv';
      
      console.log('Cargando datos desde Google Sheets...');
      const response = await axios.get(csvUrl);
      
      if (response.status !== 200) {
        throw new Error(`Error HTTP: ${response.status}`);
      }
      
      const parsedData = parseCSV(response.data);
      console.log('Datos parseados:', parsedData);
      
      if (parsedData.length === 0) {
        throw new Error('No se encontraron datos en el CSV');
      }

      // Transformar datos del CSV al formato que necesita tu aplicación
      const transformedLots = parsedData.map(row => {
        // Convertir características de string separado por | a array
        const features = row.Caracteristicas ? row.Caracteristicas.split('|').filter(f => f.trim() !== '') : [];
        
        // Extraer valor numérico del tamaño (eliminar "m²" y espacios)
        const tamañoTexto = row.Tamaño ? row.Tamaño.replace('m²', '').trim() : '0';
        const tamañoNumerico = parseInt(tamañoTexto) || 0;
        
        // Convertir precio a número
        const precioNumerico = parseInt(row.Precio) || 0;
        
        // Mapear estado (Vendido, Reservado, Disponible)
        const estado = row.Estado || 'Disponible';
        
        // Validar coordenadas
        const latitud = parseFloat(row.Latitud);
        const longitud = parseFloat(row.Longitud);
        
        if (isNaN(latitud) || isNaN(longitud)) {
          console.warn(`Coordenadas inválidas para lote ${row.Id}:`, row.Latitud, row.Longitud);
        }

        return {
          id: parseInt(row.Id) || 0,
          name: row.Nombre || `Lote ${row.Id}`,
          size: row.Tamaño || `${tamañoNumerico} m²`,
          price: `$${precioNumerico.toLocaleString()}`,
          status: estado,
          features: features,
          coordinates: [latitud, longitud],
          precioNumerico: precioNumerico,
          tamañoNumerico: tamañoNumerico
        };
      }).filter(lot => lot.id > 0); // Filtrar lotes con ID válido

      console.log('Lotes transformados:', transformedLots);
      setAvailableLots(transformedLots);
      
    } catch (err) {
      console.error('Error fetching data from Google Sheets:', err);
      setError(`Error al cargar datos: ${err.message}`);
      
      // Datos de respaldo en caso de error
      const backupLots = [
        {
          id: 1,
          name: "Lote A-01",
          size: "420 m²",
          price: "$78,000",
          status: "Disponible",
          features: ["Ubicación estratégica", "Fácil acceso", "Topografía plana", "Servicios básicos"],
          coordinates: [-11.46861746079999, -77.31060664641772],
          precioNumerico: 78000,
          tamañoNumerico: 420
        }
      ];
      setAvailableLots(backupLots);
    } finally {
      setLoading(false);
    }
  };

  // 🔹 FUNCIÓN PARA PARSEAR CSV
  function parseCSV(csvText) {
    try {
      const rows = csvText.split(/\r?\n/).filter(row => row.trim() !== '');
      if (rows.length <= 1) return []; // Solo headers o vacío

      const headers = rows[0].split(',').map(header => header.trim());
      const data = [];

      for (let i = 1; i < rows.length; i++) {
        const row = rows[i];
        // Manejar comas dentro de campos (básico)
        const rowData = [];
        let currentField = '';
        let insideQuotes = false;

        for (let j = 0; j < row.length; j++) {
          const char = row[j];
          
          if (char === '"') {
            insideQuotes = !insideQuotes;
          } else if (char === ',' && !insideQuotes) {
            rowData.push(currentField.trim());
            currentField = '';
          } else {
            currentField += char;
          }
        }
        rowData.push(currentField.trim()); // Último campo

        const rowObject = {};
        
        for (let j = 0; j < headers.length && j < rowData.length; j++) {
          rowObject[headers[j]] = rowData[j] || '';
        }
        data.push(rowObject);
      }

      return data;
    } catch (error) {
      console.error('Error parsing CSV:', error);
      return [];
    }
  }

  // 🔹 CARGAR DATOS AL MONTAR EL COMPONENTE
  useEffect(() => {
    fetchLotDataFromGoogleSheets();
  }, []);

  // 🔹 APLICAR FILTROS
  useEffect(() => {
    if (availableLots.length > 0) {
      const filtered = availableLots.filter(lot => 
        lot.precioNumerico >= mapConfig.PRECIO_MINIMO && 
        lot.precioNumerico <= mapConfig.PRECIO_MAXIMO &&
        lot.tamañoNumerico >= mapConfig.TAMAÑO_MINIMO &&
        lot.tamañoNumerico <= mapConfig.TAMAÑO_MAXIMO
      );
      setFilteredLots(filtered);
    }
  }, [mapConfig, availableLots]);

  // 🔹 Encontrar el lote más grande
  const largestLot = filteredLots.length > 0 ? filteredLots.reduce((largest, current) => {
    if (!largest) return current;
    return current.tamañoNumerico > largest.tamañoNumerico ? current : largest;
  }, filteredLots[0]) : null;

  // 🔹 Función para cambiar el modo del mapa
  const changeMapMode = (modeKey) => {
    setCurrentMapMode(modeKey);
    if (mapInstanceRef.current && currentTileLayerRef.current) {
      mapInstanceRef.current.removeLayer(currentTileLayerRef.current);
      const newMode = MAP_MODES[modeKey];
      const newTileLayer = L.tileLayer(newMode.url, {
        attribution: newMode.attribution,
        maxZoom: mapConfig.ZOOM_MAXIMO
      });
      newTileLayer.addTo(mapInstanceRef.current);
      currentTileLayerRef.current = newTileLayer;
    }
  };

  // 🔹 Función para enfocar en los lotes más grandes
  const focusOnLargestLots = () => {
    setViewMode("lotes");
    const largeLots = filteredLots.filter(lot => lot.tamañoNumerico >= 450);
    const largeLotCoordinates = largeLots.map(lot => lot.coordinates);
    
    if (mapInstanceRef.current && largeLotCoordinates.length > 0) {
      const lotBounds = L.latLngBounds(largeLotCoordinates);
      mapInstanceRef.current.fitBounds(lotBounds, { 
        padding: [50, 50],
        maxZoom: mapConfig.ZOOM_MAXIMO
      });
    }
  };

  // 🔹 Función para vista completa del terreno
  const showFullTerrain = () => {
    setViewMode("completo");
    if (mapInstanceRef.current) {
      const coordinates = terreno.features[0].geometry.coordinates;
      const bounds = L.latLngBounds(coordinates.map(coord => [coord[1], coord[0]]));
      mapInstanceRef.current.fitBounds(bounds, { 
        padding: [30, 30],
        maxZoom: 17
      });
    }
  };

  // 🔹 Función para manejar clic en lote
  const handleLotClick = (lot, event) => {
    if (event) {
      event.originalEvent?.stopPropagation();
      event.originalEvent?.preventDefault();
    }
    
    setSelectedLot(lot);
    setShowLotInfo(true);
    
    if (mapInstanceRef.current) {
      const currentCenter = mapInstanceRef.current.getCenter();
      const currentZoom = mapInstanceRef.current.getZoom();
      
      setTimeout(() => {
        mapInstanceRef.current.setView(currentCenter, currentZoom, {
          animate: false
        });
      }, 10);
    }
  };

  // 🔹 Actualizar configuración
  const updateConfig = (key, value) => {
    setMapConfig(prev => ({
      ...prev,
      [key]: value
    }));
  };

  // 🔹 Resetear configuración
  const resetConfig = () => {
    setMapConfig(CONFIGURACION);
  };

  // 🔹 Inicializar mapa
  useEffect(() => {
    if (availableLots.length === 0 || loading) return;

    const initMap = () => {
      const mapContainer = document.getElementById('map-container');
      
      if (!mapContainer) {
        console.error('Map container not found');
        return;
      }

      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }

      try {
        const coordinates = terreno.features[0].geometry.coordinates;
        const centerLat = coordinates.reduce((sum, coord) => sum + coord[1], 0) / coordinates.length;
        const centerLng = coordinates.reduce((sum, coord) => sum + coord[0], 0) / coordinates.length;

        const map = L.map('map-container', {
          center: [centerLat, centerLng],
          zoom: mapConfig.ZOOM_INICIAL,
          preferCanvas: true,
          maxZoom: mapConfig.ZOOM_MAXIMO,
          minZoom: mapConfig.ZOOM_MINIMO,
          zoomControl: true,
          scrollWheelZoom: true,
          doubleClickZoom: true,
          boxZoom: true,
          keyboard: true
        });

        // 🔹 Capa base inicial
        const initialMode = MAP_MODES[currentMapMode];
        const tileLayer = L.tileLayer(initialMode.url, {
          attribution: initialMode.attribution,
          maxZoom: mapConfig.ZOOM_MAXIMO
        }).addTo(map);

        currentTileLayerRef.current = tileLayer;

        // 🔹 Polígono principal
        const mainPolygon = L.geoJSON(terreno.features[0], {
          color: mapConfig.COLOR_SECUNDARIO,
          weight: 5,
          fillColor: mapConfig.COLOR_PRINCIPAL,
          fillOpacity: 0.4,
          opacity: 0.9,
        }).addTo(map);

        mainPolygon.bindTooltip("🏘️ Urbanización Vista Alegre - Terreno Principal", {
          permanent: false,
          direction: 'center',
          className: 'custom-tooltip'
        });

        // 🔹 Líneas internas como calles
        terreno.features.slice(1, 15).forEach((feature, index) => {
          L.geoJSON(feature, {
            color: "#FFFFFF",
            weight: 3,
            opacity: 0.9,
            dashArray: index % 2 === 0 ? "5, 5" : "8, 3",
          }).addTo(map);
        });

        // 🔹 Marcadores
        markersRef.current = [];
        filteredLots.forEach(lot => {
          // Validar coordenadas
          if (!lot.coordinates || !Array.isArray(lot.coordinates) || lot.coordinates.length !== 2) {
            console.warn(`Coordenadas inválidas para lote ${lot.id}:`, lot.coordinates);
            return;
          }

          const [lat, lng] = lot.coordinates;
          if (isNaN(lat) || isNaN(lng)) {
            console.warn(`Coordenadas numéricas inválidas para lote ${lot.id}:`, lat, lng);
            return;
          }

          const isLargeLot = lot.tamañoNumerico >= 450;
          const isLargest = largestLot && lot.id === largestLot.id;
          
          const lotMarker = L.marker([lat, lng], {
            icon: L.divIcon({
              className: `lot-marker ${lot.status.toLowerCase()} ${isLargeLot ? 'large-lot' : ''} ${isLargest ? 'largest-lot' : ''}`,
              html: `
                <div class="marker" style="
                  position: relative;
                  width: ${isLargest ? mapConfig.TAMAÑO_MARCADOR_MAS_GRANDE + 10 + 'px' : 
                          isLargeLot ? mapConfig.TAMAÑO_MARCADOR_GRANDE + 4 + 'px' : 
                          mapConfig.TAMAÑO_MARCADOR_NORMAL + 'px'}; 
                  height: ${isLargest ? mapConfig.TAMAÑO_MARCADOR_MAS_GRANDE + 10 + 'px' : 
                           isLargeLot ? mapConfig.TAMAÑO_MARCADOR_GRANDE + 4 + 'px' : 
                           mapConfig.TAMAÑO_MARCADOR_NORMAL + 'px'}; 
                  background: ${isLargest ? 
                    `radial-gradient(circle at 30% 30%, ${mapConfig.COLOR_ACENTO}, #FFA000)` : 
                    lot.status === 'Disponible' ? 
                    `radial-gradient(circle at 30% 30%, ${mapConfig.COLOR_SECUNDARIO}, #2E7D32)` : 
                    lot.status === 'Reservado' ?
                    'radial-gradient(circle at 30% 30%, #FF9800, #EF6C00)' :
                    'radial-gradient(circle at 30% 30%, #9E9E9E, #757575)'}; 
                  border: ${isLargest ? `4px solid ${mapConfig.COLOR_ACENTO}` : '3px solid #FFFFFF'}; 
                  border-radius: 50%; 
                  box-shadow: 
                    0 6px 20px rgba(0,0,0,0.4),
                    inset 0 2px 6px rgba(255,255,255,0.5),
                    ${isLargest ? `0 0 0 4px rgba(255, 215, 0, 0.3), 0 0 0 8px rgba(255, 215, 0, 0.15)` : ''};
                  cursor: pointer;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  font-weight: bold;
                  color: ${isLargest ? '#000' : 'white'};
                  font-size: ${isLargest ? '14px' : '12px'};
                  transition: all 0.3s ease;
                ">
                  ${isLargest ? '👑' : lot.id}
                  <div style="
                    position: absolute;
                    bottom: -10px;
                    left: 50%;
                    transform: translateX(-50%);
                    width: 0;
                    height: 0;
                    border-left: ${isLargest ? '8px' : '6px'} solid transparent;
                    border-right: ${isLargest ? '8px' : '6px'} solid transparent;
                    border-top: ${isLargest ? '12px' : '8px'} solid ${isLargest ? '#FFA000' : lot.status === 'Disponible' ? '#2E7D32' : lot.status === 'Reservado' ? '#EF6C00' : '#757575'};
                  "></div>
                </div>
              `,
              iconSize: isLargest ? [45, 55] : isLargeLot ? [38, 48] : [35, 45],
              iconAnchor: isLargest ? [22, 55] : isLargeLot ? [19, 48] : [17, 45]
            })
          }).addTo(map);

          lotMarker.on('click', (e) => {
            handleLotClick(lot, e);
          });

          lotMarker.bindTooltip(`
            <div class="tooltip" style="
              font-weight: bold; 
              font-size: 12px; 
              background: rgba(255, 255, 255, 0.98);
              padding: 10px; 
              border-radius: 10px; 
              border: 3px solid ${isLargest ? mapConfig.COLOR_ACENTO : lot.status === 'Disponible' ? mapConfig.COLOR_SECUNDARIO : lot.status === 'Reservado' ? '#FF9800' : '#9E9E9E'};
              box-shadow: 0 6px 25px rgba(0,0,0,0.4);
              backdrop-filter: blur(12px);
              max-width: 200px;
            ">
              <div style="color: ${mapConfig.COLOR_PRINCIPAL}; margin-bottom: 6px; font-size: 14px; font-weight: bold;">
                ${lot.name} ${isLargest ? '🌟' : isLargeLot ? '⭐' : ''}
              </div>
              <div style="color: ${lot.status === 'Disponible' ? mapConfig.COLOR_SECUNDARIO : lot.status === 'Reservado' ? '#FF9800' : '#9E9E9E'}; font-size: 11px; margin-bottom: 4px;">
                ${lot.status} • ${lot.size}
              </div>
              <div style="color: #666; font-size: 12px; font-weight: bold;">
                ${lot.price}
              </div>
            </div>
          `, {
            permanent: false,
            direction: 'top',
            offset: [0, -15]
          });

          markersRef.current.push(lotMarker);
        });

        mapInstanceRef.current = map;
        setMapInitialized(true);

        setTimeout(() => {
          if (filteredLots.length > 0) {
            focusOnLargestLots();
          }
        }, 500);

      } catch (error) {
        console.error('Error initializing map:', error);
      }
    };

    const timer = setTimeout(() => {
      initMap();
    }, 100);

    return () => {
      clearTimeout(timer);
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, [mapConfig, filteredLots, currentMapMode, availableLots, loading]);

  const handleDoubleClick = () => {
    if (viewMode === "lotes") {
      focusOnLargestLots();
    } else {
      showFullTerrain();
    }
  };

  return (
    <div className="w-full overflow-x-hidden -mt-[80px] sm:-mt-[96px] md:-mt-[112px] lg:-mt-[128px] relative">
      <style>{styles}</style>
      
      {/* 🔹 INDICADORES DE CARGA Y ERROR */}
      {loading && (
        <div style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          background: 'rgba(255,255,255,0.95)',
          padding: '30px',
          borderRadius: '15px',
          zIndex: 10000,
          textAlign: 'center',
          boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
          border: `3px solid ${mapConfig.COLOR_PRINCIPAL}`
        }}>
          <div style={{ fontSize: '48px', marginBottom: '15px', animation: "pulse 2s infinite" }}>📊</div>
          <div style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '10px', color: mapConfig.COLOR_PRINCIPAL }}>
            Cargando datos desde Google Sheets...
          </div>
          <div style={{ fontSize: '14px', color: '#666' }}>
            Conectando con tu base de datos...
          </div>
        </div>
      )}

      {error && (
        <div style={{
          position: 'fixed',
          top: '20px',
          left: '50%',
          transform: 'translateX(-50%)',
          background: '#ffebee',
          color: '#c62828',
          padding: '15px 20px',
          borderRadius: '10px',
          zIndex: 10000,
          textAlign: 'center',
          border: '2px solid #c62828',
          maxWidth: '90%',
          width: '400px'
        }}>
          <div style={{ fontWeight: 'bold', marginBottom: '8px' }}>⚠️ Error de carga</div>
          <div style={{ marginBottom: '12px', fontSize: '14px' }}>{error}</div>
          <button 
            onClick={fetchLotDataFromGoogleSheets}
            style={{ 
              background: mapConfig.COLOR_PRINCIPAL, 
              color: 'white', 
              border: 'none', 
              padding: '8px 16px', 
              borderRadius: '5px', 
              cursor: 'pointer',
              fontSize: '14px'
            }}
          >
            Reintentar
          </button>
        </div>
      )}

      {/* 🔹 SECCIONES DE CONTENIDO CON z-index ALTO */}
      <div className="relative z-20">
        <SliderFondo />
        <Propiedad />
        <Galeria />
      </div>

      {/* 🔹 CONTENEDOR DEL MAPA CON z-index BAJO */}
      <section className="relative z-0">
        <div style={{
          width: "100%",
          maxWidth: "1600px",
          margin: "0 auto",
          padding: "40px 20px",
          background: "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)",
          flex: 1,
          display: "flex",
          flexDirection: "column"
        }}>
          
          <Header mapConfig={mapConfig} filteredLots={filteredLots} availableLots={availableLots} loading={loading} />

          {/* 🔹 CONTENEDOR DEL MAPA CON z-index BAJO */}
          <div className="map-container-wrapper relative z-0">
            <div style={{ 
              position: "relative", 
              width: "100%", 
              height: "600px",
              borderRadius: "20px",
              overflow: "hidden",
              marginBottom: "40px"
            }}>
              
              {/* Mapa container y loading */}
              {(!mapInitialized || loading) && (
                <div style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                  background: `radial-gradient(circle at center, #1a5a7a 0%, ${mapConfig.COLOR_PRINCIPAL} 50%, ${mapConfig.COLOR_SECUNDARIO} 100%)`,
                  borderRadius: "15px",
                  border: `3px solid ${mapConfig.COLOR_PRINCIPAL}`
                }}>
                  <div style={{
                    textAlign: "center",
                    padding: "40px",
                    color: "white"
                  }}>
                    <div style={{ fontSize: "52px", marginBottom: "20px", animation: "pulse 2s infinite" }}>🏘️</div>
                    <div style={{ fontSize: "26px", fontWeight: "bold", marginBottom: "12px" }}>
                      Urbanización Vista Alegre
                    </div>
                    <div style={{ fontSize: "16px", opacity: 0.9 }}>
                      {loading ? "Cargando datos..." : "Inicializando mapa..."}
                    </div>
                  </div>
                </div>
              )}
              
              <div
                ref={mapContainerRef}
                id="map-container"
                style={{
                  height: "100%",
                  width: "100%",
                  border: `3px solid ${mapConfig.COLOR_PRINCIPAL}`,
                  borderRadius: "15px",
                  boxShadow: `0 25px 70px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.2)`,
                  display: (mapInitialized && !loading) ? "block" : "none",
                  overflow: "hidden",
                  position: "relative",
                  background: `radial-gradient(circle at center, #1a5a7a 0%, ${mapConfig.COLOR_PRINCIPAL} 50%, ${mapConfig.COLOR_SECUNDARIO} 100%)`
                }}
                onDoubleClick={handleDoubleClick}
              />

              <MapModeSelector 
                currentMapMode={currentMapMode}
                changeMapMode={changeMapMode}
                mapConfig={mapConfig}
              />

              <LotInfoPanel
                showLotInfo={showLotInfo}
                setShowLotInfo={setShowLotInfo}
                selectedLot={selectedLot}
                mapConfig={mapConfig}
                largestLot={largestLot}
              />

              {mapInitialized && !loading && (
                <ViewControls
                  viewMode={viewMode}
                  focusOnLargestLots={focusOnLargestLots}
                  showFullTerrain={showFullTerrain}
                  mapConfig={mapConfig}
                />
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MapaLotes3D;