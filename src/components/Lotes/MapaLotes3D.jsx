// components/Lotes/MapaLotes3D.jsx
import React, { useEffect, useRef, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import terreno from "./terreno.json";

// Importar componentes
import SliderFondo from "./SliderFondo";
import ConfigPanel from "./ConfigPanel";
import LotInfoPanel from "./LotInfoPanel";
import MapModeSelector from "./MapModeSelector";
import ViewControls from "./ViewControls";
import Header from "./Header";

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
  PRECIO_MINIMO: 70000,
  PRECIO_MAXIMO: 100000,
  TAMAÑO_MINIMO: 380,
  TAMAÑO_MAXIMO: 520,
  ANIMACIONES: true,
  TOOLTIPS_INTERACTIVOS: true,
  SONIDOS: false,
};

const MapaLotes3D = () => {
  const [mapInitialized, setMapInitialized] = useState(false);
  const [selectedLot, setSelectedLot] = useState(null);
  const [showLotInfo, setShowLotInfo] = useState(false);
  const [viewMode, setViewMode] = useState("lotes");
  const [mapConfig, setMapConfig] = useState(CONFIGURACION);
  const [showConfigPanel, setShowConfigPanel] = useState(false);
  const [filteredLots, setFilteredLots] = useState([]);
  const [currentMapMode, setCurrentMapMode] = useState("SATELITE");
  
  const mapInstanceRef = useRef(null);
  const mapContainerRef = useRef(null);
  const currentTileLayerRef = useRef(null);

  // 🔹 DATOS DE LOS 7 LOTES REALES (igual que antes)
  const availableLots = [
    // ... (mantener el mismo array de availableLots)
  ];

  // 🔹 Resto de la lógica (useEffects y funciones) se mantiene igual
  // ... (mantener toda la lógica del componente original)

  return (
    <div className="relative w-full h-screen">
      <SliderFondo />
      
      <section style={{
        width: "100%",
        maxWidth: "1600px",
        margin: "0 auto",
        padding: "40px 20px",
        background: "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)",
        minHeight: "100vh"
      }}>
        
        <Header mapConfig={mapConfig} filteredLots={filteredLots} />

        {/* 🔹 CONTENEDOR DEL MAPA */}
        <div style={{ 
          position: "relative", 
          width: "100%", 
          height: "80vh",
          borderRadius: "20px",
          overflow: "hidden",
          marginBottom: "40px"
        }}>
          
          {/* Mapa container y loading */}
          {!mapInitialized && (
            <div style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              background: `radial-gradient(circle at center, #1a5a7a 0%, ${mapConfig.COLOR_PRINCIPAL} 50%, ${mapConfig.COLOR_SECUNDARIO} 100%)`,
              borderRadius: "15px",
              border: `3px solid ${mapConfig.COLOR_PRINCIPAL}`
            }}>
              {/* Loading component */}
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
              display: mapInitialized ? "block" : "none",
              overflow: "hidden",
              position: "relative",
              background: `radial-gradient(circle at center, #1a5a7a 0%, ${mapConfig.COLOR_PRINCIPAL} 50%, ${mapConfig.COLOR_SECUNDARIO} 100%)`
            }}
            onDoubleClick={handleDoubleClick}
          />

          {/* Componentes del mapa */}
          <MapModeSelector 
            currentMapMode={currentMapMode}
            changeMapMode={changeMapMode}
            mapConfig={mapConfig}
          />

          <ConfigPanel
            showConfigPanel={showConfigPanel}
            setShowConfigPanel={setShowConfigPanel}
            mapConfig={mapConfig}
            updateConfig={updateConfig}
            resetConfig={resetConfig}
            filteredLots={filteredLots}
            availableLots={availableLots}
          />

          <LotInfoPanel
            showLotInfo={showLotInfo}
            setShowLotInfo={setShowLotInfo}
            selectedLot={selectedLot}
            mapConfig={mapConfig}
            largestLot={largestLot}
          />

          {mapInitialized && (
            <ViewControls
              viewMode={viewMode}
              focusOnLargestLots={focusOnLargestLots}
              showFullTerrain={showFullTerrain}
              mapConfig={mapConfig}
            />
          )}

          <style jsx>{`
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
          `}</style>
        </div>

        {/* 🔹 INFORMACIÓN ADICIONAL */}
        <div style={{
          background: "white",
          padding: "40px",
          borderRadius: "15px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
          marginTop: "40px"
        }}>
          <h2 style={{ color: mapConfig.COLOR_PRINCIPAL, marginBottom: "20px" }}>Información Adicional</h2>
          <p style={{ lineHeight: "1.6", marginBottom: "15px" }}>
            Usa el panel de control interactivo (⚙️) en la esquina inferior derecha del mapa para personalizar 
            colores, filtros de precio y tamaño, y configuración de zoom según tus preferencias.
          </p>
          <p style={{ lineHeight: "1.6", marginBottom: "15px" }}>
            Actualmente se muestran <strong>{filteredLots.length} lotes</strong> de un total de {availableLots.length}, 
            filtrados por precio (${mapConfig.PRECIO_MINIMO} - ${mapConfig.PRECIO_MAXIMO}) y tamaño ({mapConfig.TAMAÑO_MINIMO}m² - {mapConfig.TAMAÑO_MAXIMO}m²).
          </p>
          <p style={{ lineHeight: "1.6" }}>
            Todos los cambios se aplican en tiempo real. Puedes resetear la configuración en cualquier momento.
          </p>
        </div>
      </section>
    </div>
  );
};

export default MapaLotes3D;