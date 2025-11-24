// components/Lotes/ViewControls.jsx
import React from 'react';

const ViewControls = ({ viewMode, focusOnLargestLots, showFullTerrain, mapConfig }) => {
  return (
    <div style={{
      position: "absolute",
      top: "20px",
      left: "50%",
      transform: "translateX(-50%)",
      display: "flex",
      gap: "12px",
      zIndex: 1000
    }}>
      <button
        onClick={focusOnLargestLots}
        style={{
          background: viewMode === "lotes" ? 
            `linear-gradient(135deg, ${mapConfig.COLOR_SECUNDARIO} 0%, #45a049 100%)` : 
            `linear-gradient(135deg, ${mapConfig.COLOR_PRINCIPAL} 0%, #1B5E7A 100%)`,
          color: "white",
          border: "none",
          borderRadius: "25px",
          padding: "10px 20px",
          fontSize: "13px",
          fontWeight: "bold",
          cursor: "pointer",
          boxShadow: "0 6px 20px rgba(0,0,0,0.25)",
          transition: "all 0.3s ease",
          display: "flex",
          alignItems: "center",
          gap: "6px"
        }}
        onMouseOver={(e) => {
          if (viewMode !== "lotes") {
            e.target.style.transform = "translateY(-2px)";
            e.target.style.boxShadow = "0 8px 25px rgba(0,0,0,0.35)";
          }
        }}
        onMouseOut={(e) => {
          if (viewMode !== "lotes") {
            e.target.style.transform = "translateY(0)";
            e.target.style.boxShadow = "0 6px 20px rgba(0,0,0,0.25)";
          }
        }}
      >
        👑 Lotes Grandes
      </button>
      
      <button
        onClick={showFullTerrain}
        style={{
          background: viewMode === "completo" ? 
            `linear-gradient(135deg, ${mapConfig.COLOR_SECUNDARIO} 0%, #45a049 100%)` : 
            `linear-gradient(135deg, ${mapConfig.COLOR_PRINCIPAL} 0%, #1B5E7A 100%)`,
          color: "white",
          border: "none",
          borderRadius: "25px",
          padding: "10px 20px",
          fontSize: "13px",
          fontWeight: "bold",
          cursor: "pointer",
          boxShadow: "0 6px 20px rgba(0,0,0,0.25)",
          transition: "all 0.3s ease",
          display: "flex",
          alignItems: "center",
          gap: "6px"
        }}
        onMouseOver={(e) => {
          if (viewMode !== "completo") {
            e.target.style.transform = "translateY(-2px)";
            e.target.style.boxShadow = "0 8px 25px rgba(0,0,0,0.35)";
          }
        }}
        onMouseOut={(e) => {
          if (viewMode !== "completo") {
            e.target.style.transform = "translateY(0)";
            e.target.style.boxShadow = "0 6px 20px rgba(0,0,0,0.25)";
          }
        }}
      >
        🌍 Vista Completa
      </button>
    </div>
  );
};

export default ViewControls;