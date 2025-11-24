// components/Lotes/LotInfoPanel.jsx
import React from 'react';

const LotInfoPanel = ({ showLotInfo, setShowLotInfo, selectedLot, mapConfig, largestLot }) => {
  if (!showLotInfo || !selectedLot) return null;

  return (
    <div style={{
      position: "absolute",
      top: "20px",
      right: "300px",
      background: "rgba(255, 255, 255, 0.98)",
      padding: "25px",
      borderRadius: "15px",
      fontSize: "14px",
      zIndex: 1000,
      boxShadow: "0 20px 40px rgba(0,0,0,0.35)",
      maxWidth: "350px",
      backdropFilter: "blur(15px)",
      border: `3px solid ${mapConfig.COLOR_PRINCIPAL}`,
      animation: "slideInRight 0.4s ease-out"
    }}>
      <button
        onClick={() => setShowLotInfo(false)}
        style={{
          position: "absolute",
          top: "12px",
          right: "12px",
          background: `rgba(${parseInt(mapConfig.COLOR_PRINCIPAL.slice(1,3), 16)}, ${parseInt(mapConfig.COLOR_PRINCIPAL.slice(3,5), 16)}, ${parseInt(mapConfig.COLOR_PRINCIPAL.slice(5,7), 16)}, 0.1)`,
          border: `2px solid ${mapConfig.COLOR_PRINCIPAL}`,
          borderRadius: "50%",
          width: "30px",
          height: "30px",
          fontSize: "14px",
          cursor: "pointer",
          color: mapConfig.COLOR_PRINCIPAL,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "all 0.2s ease"
        }}
        onMouseOver={(e) => {
          e.target.style.background = mapConfig.COLOR_PRINCIPAL;
          e.target.style.color = "white";
        }}
        onMouseOut={(e) => {
          e.target.style.background = `rgba(${parseInt(mapConfig.COLOR_PRINCIPAL.slice(1,3), 16)}, ${parseInt(mapConfig.COLOR_PRINCIPAL.slice(3,5), 16)}, ${parseInt(mapConfig.COLOR_PRINCIPAL.slice(5,7), 16)}, 0.1)`;
          e.target.style.color = mapConfig.COLOR_PRINCIPAL;
        }}
      >
        ✕
      </button>

      <h3 style={{ 
        color: mapConfig.COLOR_PRINCIPAL, 
        marginBottom: "15px", 
        borderBottom: `3px solid ${mapConfig.COLOR_PRINCIPAL}`,
        paddingBottom: "8px",
        fontSize: "20px",
        fontWeight: "bold",
        display: "flex",
        alignItems: "center",
        gap: "8px"
      }}>
        {selectedLot.name}
        {selectedLot.id === largestLot.id && <span style={{fontSize: "18px"}}>👑</span>}
        {selectedLot.tamañoNumerico >= 450 && selectedLot.id !== largestLot.id && <span style={{fontSize: "16px"}}>⭐</span>}
      </h3>

      <div style={{ marginBottom: "20px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
          <span style={{ fontWeight: "bold", color: "#555" }}>Tamaño:</span>
          <span style={{ fontWeight: "bold", fontSize: "15px" }}>{selectedLot.size}</span>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
          <span style={{ fontWeight: "bold", color: "#555" }}>Precio:</span>
          <span style={{ color: mapConfig.COLOR_SECUNDARIO, fontWeight: "bold", fontSize: "18px" }}>
            {selectedLot.price}
          </span>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
          <span style={{ fontWeight: "bold", color: "#555" }}>Estado:</span>
          <span style={{ 
            color: selectedLot.status === 'Disponible' ? mapConfig.COLOR_SECUNDARIO : '#FF9800',
            fontWeight: "bold",
            background: selectedLot.status === 'Disponible' ? `rgba(${parseInt(mapConfig.COLOR_SECUNDARIO.slice(1,3), 16)}, ${parseInt(mapConfig.COLOR_SECUNDARIO.slice(3,5), 16)}, ${parseInt(mapConfig.COLOR_SECUNDARIO.slice(5,7), 16)}, 0.15)` : 'rgba(255, 152, 0, 0.15)',
            padding: "4px 12px",
            borderRadius: "15px",
            fontSize: "12px"
          }}>
            {selectedLot.status}
          </span>
        </div>
      </div>

      <div style={{ marginBottom: "25px" }}>
        <div style={{ fontWeight: "bold", marginBottom: "12px", color: "#555", fontSize: "15px" }}>
          🏆 Características Destacadas:
        </div>
        {selectedLot.features.map((feature, index) => (
          <div key={index} style={{ 
            display: "flex", 
            alignItems: "center", 
            marginBottom: "8px",
            fontSize: "13px",
            padding: "6px 0"
          }}>
            <span style={{ 
              color: mapConfig.COLOR_SECUNDARIO, 
              marginRight: "10px",
              background: `rgba(${parseInt(mapConfig.COLOR_SECUNDARIO.slice(1,3), 16)}, ${parseInt(mapConfig.COLOR_SECUNDARIO.slice(3,5), 16)}, ${parseInt(mapConfig.COLOR_SECUNDARIO.slice(5,7), 16)}, 0.15)`,
              borderRadius: "50%",
              width: "20px",
              height: "20px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "11px",
              fontWeight: "bold"
            }}>✓</span>
            {feature}
          </div>
        ))}
      </div>

      <button style={{
        width: "100%",
        padding: "14px",
        background: `linear-gradient(135deg, ${mapConfig.COLOR_SECUNDARIO} 0%, #45a049 100%)`,
        color: "white",
        border: "none",
        borderRadius: "10px",
        fontWeight: "bold",
        fontSize: "15px",
        cursor: "pointer",
        boxShadow: `0 6px 20px rgba(${parseInt(mapConfig.COLOR_SECUNDARIO.slice(1,3), 16)}, ${parseInt(mapConfig.COLOR_SECUNDARIO.slice(3,5), 16)}, ${parseInt(mapConfig.COLOR_SECUNDARIO.slice(5,7), 16)}, 0.4)`,
        transition: "all 0.3s ease"
      }}
      onMouseOver={(e) => {
        e.target.style.transform = "translateY(-3px)";
        e.target.style.boxShadow = `0 8px 25px rgba(${parseInt(mapConfig.COLOR_SECUNDARIO.slice(1,3), 16)}, ${parseInt(mapConfig.COLOR_SECUNDARIO.slice(3,5), 16)}, ${parseInt(mapConfig.COLOR_SECUNDARIO.slice(5,7), 16)}, 0.5)`;
      }}
      onMouseOut={(e) => {
        e.target.style.transform = "translateY(0)";
        e.target.style.boxShadow = `0 6px 20px rgba(${parseInt(mapConfig.COLOR_SECUNDARIO.slice(1,3), 16)}, ${parseInt(mapConfig.COLOR_SECUNDARIO.slice(3,5), 16)}, ${parseInt(mapConfig.COLOR_SECUNDARIO.slice(5,7), 16)}, 0.4)`;
      }}
      >
        📞 Contactar para más información
      </button>
    </div>
  );
};

export default LotInfoPanel;