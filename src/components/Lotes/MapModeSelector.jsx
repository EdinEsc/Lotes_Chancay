import React, { useState } from "react";
import { Satellite, Route, Mountain, Moon, Sun, Map, ChevronDown } from "lucide-react";

const MAP_MODES = {
  SATELITE: { name: "Satélite", icon: <Satellite size={16} /> },
  CALLES: { name: "Calles", icon: <Route size={16} /> },
  RELIEVE: { name: "Relieve", icon: <Mountain size={16} /> },
  OSCURO: { name: "Oscuro", icon: <Moon size={16} /> },
  CLARO: { name: "Claro", icon: <Sun size={16} /> },
};

const MapModeSelector = ({ currentMapMode, changeMapMode }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="absolute top-5 right-5 z-[999]">

      {/* BOTÓN PRINCIPAL */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 bg-[#cb4a2a] hover:opacity-90 text-white px-4 py-2 rounded-full shadow-xl font-semibold text-sm transition-all"
      >
        <Map size={18} />
        Modo de mapa
        <ChevronDown
          size={18}
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {/* MENU DESPLEGABLE */}
      {open && (
        <div className="mt-3 bg-white/95 backdrop-blur-md border-2 border-[#cb4a2a] shadow-2xl rounded-xl p-3 w-[220px] animate-fadeIn">

          <div className="grid grid-cols-2 gap-2">
            {Object.entries(MAP_MODES).map(([key, mode]) => {
              const isActive = currentMapMode === key;

              return (
                <button
                  key={key}
                  onClick={() => {
                    changeMapMode(key);
                    setOpen(false); // cerrar menú al seleccionar
                  }}
                  className={`
                    flex items-center justify-center gap-2 px-2 py-2 rounded-md text-white text-[12px] font-semibold
                    shadow-md transition-all
                    ${isActive ? "bg-[#2c976a]" : "bg-[#cb4a2a] hover:opacity-90"}
                  `}
                >
                  {mode.icon}
                  {mode.name}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default MapModeSelector;
