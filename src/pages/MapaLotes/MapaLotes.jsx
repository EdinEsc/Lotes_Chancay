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

// Solucionar el problema de iconos por defecto de Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

// PARÁMETROS CONFIGURABLES POR EL USUARIO
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

// MODOS DE MAPA
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

  // FUNCIÓN PARA CARGAR DATOS DESDE GOOGLE SHEETS
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

      const transformedLots = parsedData.map(row => {
        const features = row.Caracteristicas ? row.Caracteristicas.split('|').filter(f => f.trim() !== '') : [];
        
        const tamañoTexto = row.Tamaño ? row.Tamaño.replace('m²', '').trim() : '0';
        const tamañoNumerico = parseInt(tamañoTexto) || 0;
        
        const precioNumerico = parseInt(row.Precio) || 0;
        
        const estado = row.Estado || 'Disponible';
        
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
      }).filter(lot => lot.id > 0);

      console.log('Lotes transformados:', transformedLots);
      setAvailableLots(transformedLots);
      
    } catch (err) {
      console.error('Error fetching data from Google Sheets:', err);
      setError(`Error al cargar datos: ${err.message}`);
      
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

  // FUNCIÓN PARA PARSEAR CSV
  function parseCSV(csvText) {
    try {
      const rows = csvText.split(/\r?\n/).filter(row => row.trim() !== '');
      if (rows.length <= 1) return [];

      const headers = rows[0].split(',').map(header => header.trim());
      const data = [];

      for (let i = 1; i < rows.length; i++) {
        const row = rows[i];
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
        rowData.push(currentField.trim());

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

  // CARGAR DATOS AL MONTAR EL COMPONENTE
  useEffect(() => {
    fetchLotDataFromGoogleSheets();
  }, []);

  // APLICAR FILTROS
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

  // Encontrar el lote más grande
  const largestLot = filteredLots.length > 0 ? filteredLots.reduce((largest, current) => {
    if (!largest) return current;
    return current.tamañoNumerico > largest.tamañoNumerico ? current : largest;
  }, filteredLots[0]) : null;

  // Función para cambiar el modo del mapa
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

  // Función para enfocar en los lotes más grandes
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

  // Función para vista completa del terreno
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

  // Función para manejar clic en lote
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

  // Actualizar configuración
  const updateConfig = (key, value) => {
    setMapConfig(prev => ({
      ...prev,
      [key]: value
    }));
  };

  // Resetear configuración
  const resetConfig = () => {
    setMapConfig(CONFIGURACION);
  };

  // Inicializar mapa
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

        // Capa base inicial
        const initialMode = MAP_MODES[currentMapMode];
        const tileLayer = L.tileLayer(initialMode.url, {
          attribution: initialMode.attribution,
          maxZoom: mapConfig.ZOOM_MAXIMO
        }).addTo(map);

        currentTileLayerRef.current = tileLayer;

        // Polígono principal
        const mainPolygon = L.geoJSON(terreno.features[0], {
          color: mapConfig.COLOR_SECUNDARIO,
          weight: 5,
          fillColor: mapConfig.COLOR_PRINCIPAL,
          fillOpacity: 0.4,
          opacity: 0.9,
        }).addTo(map);

        mainPolygon.bindTooltip("Urbanización Vista Alegre - Terreno Principal", {
          permanent: false,
          direction: 'center',
          className: 'custom-tooltip'
        });

        // Líneas internas como calles
        terreno.features.slice(1, 15).forEach((feature, index) => {
          L.geoJSON(feature, {
            color: "#FFFFFF",
            weight: 3,
            opacity: 0.9,
            dashArray: index % 2 === 0 ? "5, 5" : "8, 3",
          }).addTo(map);
        });

        // Marcadores
        markersRef.current = [];
        filteredLots.forEach(lot => {
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
                  ${isLargest ? '' : lot.id}
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
                ${lot.name} ${isLargest ? '' : isLargeLot ? '' : ''}
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
    <div className="w-full overflow-x-hidden -mt-20 sm:-mt-24 md:-mt-28 lg:-mt-32 relative bg-white">
      
      {loading && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/95 p-8 rounded-xl z-[10000] text-center shadow-2xl border-3 backdrop-blur-sm"
             style={{ borderColor: mapConfig.COLOR_PRINCIPAL }}>
          <div className="text-5xl mb-4 animate-pulse">📍</div>
          <div className="text-xl font-bold mb-3" style={{ color: mapConfig.COLOR_PRINCIPAL }}>
            Cargando datos desde Google Sheets...
          </div>
          <div className="text-gray-600 text-sm">
            Conectando con tu base de datos...
          </div>
        </div>
      )}

      {error && (
        <div className="fixed top-5 left-1/2 transform -translate-x-1/2 bg-red-50 text-red-800 p-4 rounded-xl z-[10000] text-center border-2 border-red-800 max-w-[90%] w-96">
          <div className="font-bold mb-2">Error de carga</div>
          <div className="mb-3 text-sm">{error}</div>
          <button 
            onClick={fetchLotDataFromGoogleSheets}
            className="text-white px-4 py-2 rounded-lg cursor-pointer text-sm font-medium transition-colors duration-200 hover:opacity-90"
            style={{ backgroundColor: mapConfig.COLOR_PRINCIPAL }}
          >
            Reintentar
          </button>
        </div>
      )}

      <div className="relative z-20 bg-white">
        <SliderFondo />
        <Propiedad />
        <Galeria />
      </div>

      <section className="relative z-0 bg-white">
        <div className="w-full max-w-7xl mx-auto px-5 py-10 bg-white flex-1 flex flex-col">
          
          <Header mapConfig={mapConfig} filteredLots={filteredLots} availableLots={availableLots} loading={loading} />

          <div className="map-container-wrapper relative z-0 bg-white">
<div className="relative w-full 
  h-[70vh]          /* SOLO celular - ahora más alto */
  min-h-[360px]     /* SOLO celular */
  sm:h-[500px]      /* Tablet igual que antes */
  lg:h-[600px]      /* Desktop igual que antes */
  rounded-2xl overflow-hidden mb-10 bg-white shadow-2xl">

  {(!mapInitialized || loading) && (
    <div className="flex justify-center items-center h-full rounded-xl backdrop-blur-sm"
      style={{
        background: `radial-gradient(circle at center, #1a5a7a 0%, ${mapConfig.COLOR_PRINCIPAL} 50%, ${mapConfig.COLOR_SECUNDARIO} 100%)`,
        border: `3px solid ${mapConfig.COLOR_PRINCIPAL}`
      }}>
      <div className="text-center p-8 sm:p-10 text-white">
        <div className="text-4xl sm:text-5xl mb-4 sm:mb-5 animate-pulse">🌍</div>
        <div className="text-xl sm:text-2xl font-bold mb-3">
          Urbanización Vista Alegre
        </div>
        <div className="text-sm sm:text-base opacity-90">
          {loading ? "Cargando datos..." : "Inicializando mapa..."}
        </div>
      </div>
    </div>
  )}

  <div
    ref={mapContainerRef}
    id="map-container"
    className="h-full w-full rounded-xl overflow-hidden relative transition-all duration-300"
    style={{
      border: `3px solid ${mapConfig.COLOR_PRINCIPAL}`,
      boxShadow: `0 25px 70px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.2)`,
      display: (mapInitialized && !loading) ? "block" : "none",
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