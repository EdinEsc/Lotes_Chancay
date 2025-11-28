import React from "react";
import { Crown, Globe } from "lucide-react";

const ViewControls = ({ viewMode, focusOnLargestLots, showFullTerrain }) => {
  return (
    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-4 z-[999]">

      {/* BOTÓN LOTES GRANDES */}
      <button
        onClick={focusOnLargestLots}
        className={`
          flex items-center gap-2 px-5 py-3 rounded-full font-semibold text-white text-sm 
          shadow-lg transition-all
          ${viewMode === "lotes" ? "bg-[#2c976a]" : "bg-[#cb4a2a] hover:opacity-90"}
        `}
      >
        <Crown size={18} />
        Lotes Grandes
      </button>

      {/* BOTÓN VISTA COMPLETA */}
      <button
        onClick={showFullTerrain}
        className={`
          flex items-center gap-2 px-5 py-3 rounded-full font-semibold text-white text-sm 
          shadow-lg transition-all
          ${viewMode === "completo" ? "bg-[#2c976a]" : "bg-[#cb4a2a] hover:opacity-90"}
        `}
      >
        <Globe size={18} />
        Vista Completa
      </button>

    </div>
  );
};

export default ViewControls;
