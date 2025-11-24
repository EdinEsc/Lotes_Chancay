// components/Lotes/MapModeSelector.jsx
import React from 'react';

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

const MapModeSelector = ({ currentMapMode, changeMapMode, mapConfig }) => {
  return (
    <div style={{
      position: "absolute",
      top: "20px",
      right: "20px",
      background: "rgba(255, 255, 255, 0.98)",
      padding: "15px",
      borderRadius: "15px",
      fontSize: "14px",
      zIndex: 1000,
      boxShadow: "0 20px 40px rgba(0,0,0,0.35)",
      backdropFilter: "blur(15px)",
      border: `3px solid ${mapConfig.COLOR_PRINCIPAL}`,
      maxWidth: "250px"
    }}>
      <h4 style={{ 
        color: mapConfig.COLOR_PRINCIPAL, 
        marginBottom: "12px", 
        fontSize: "16px",
        fontWeight: "bold",
        display: "flex",
        alignItems: "center",
        gap: "8px"
      }}>
        🗺️ Modo de Mapa
      </h4>
      
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
        {Object.entries(MAP_MODES).map(([key, mode]) => (
          <button
            key={key}
            onClick={() => changeMapMode(key)}
            style={{
              padding: "8px 12px",
              background: currentMapMode === key ? 
                `linear-gradient(135deg, ${mapConfig.COLOR_SECUNDARIO} 0%, #45a049 100%)` : 
                `linear-gradient(135deg, ${mapConfig.COLOR_PRINCIPAL} 0%, #1B5E7A 100%)`,
              color: "white",
              border: "none",
              borderRadius: "8px",
              fontSize: "11px",
              fontWeight: "bold",
              cursor: "pointer",
              transition: "all 0.3s ease",
              textAlign: "center"
            }}
            onMouseOver={(e) => {
              if (currentMapMode !== key) {
                e.target.style.transform = "translateY(-2px)";
              }
            }}
            onMouseOut={(e) => {
              if (currentMapMode !== key) {
                e.target.style.transform = "translateY(0)";
              }
            }}
          >
            {mode.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default MapModeSelector;