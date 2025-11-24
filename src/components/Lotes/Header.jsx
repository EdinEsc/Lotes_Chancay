// components/Lotes/Header.jsx
import React from 'react';

const Header = ({ mapConfig, filteredLots }) => {
  return (
    <div style={{
      textAlign: "center",
      marginBottom: "40px",
      padding: "30px 20px",
      background: `linear-gradient(135deg, ${mapConfig.COLOR_PRINCIPAL} 0%, #1B5E7A 100%)`,
      borderRadius: "20px",
      boxShadow: "0 15px 40px rgba(0,0,0,0.2)",
      color: "white",
      border: `3px solid ${mapConfig.COLOR_SECUNDARIO}`,
      position: "relative",
      zIndex: 10
    }}>
      <h1 style={{
        fontSize: "3.2rem",
        fontWeight: "bold",
        marginBottom: "15px",
        textShadow: "2px 2px 4px rgba(0,0,0,0.3)"
      }}>
        🏘️ ELIGE TU TERRENO HOY
      </h1>
    </div>
  );
};

export default Header;