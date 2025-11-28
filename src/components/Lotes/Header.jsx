// components/Lotes/Header.jsx
import React from "react";
import { Home } from "lucide-react";

const Header = () => {
  return (
    <div className="text-center mb-10 px-4">
      <div className="flex items-center justify-center gap-4">
        <Home className="w-12 h-12" style={{ color: "#cb4a2a" }} />

        <h1
          className="text-4xl md:text-5xl font-extrabold tracking-wide"
          style={{ color: "#cb4a2a" }}
        >
          Elige tu terreno ideal
        </h1>
      </div>

      <p className="mt-3 text-lg font-medium opacity-80">
        Disponibilidad actualizada en tiempo real
      </p>
    </div>
  );
};

export default Header;
