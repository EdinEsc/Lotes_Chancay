// components/Lotes/LotInfoPanel.jsx
import React from "react";
import { X, Crown, Star, Check, Award, Phone } from "lucide-react";

const LotInfoPanel = ({ showLotInfo, setShowLotInfo, selectedLot, mapConfig, largestLot }) => {
  if (!showLotInfo || !selectedLot) return null;

  return (
    <div
      className="
        absolute 
        top-5 
        right-5            /* Móvil */
        sm:right-10        /* Tablets pequeñas */
        md:right-20        /* Tablets grandes */
        lg:right-[220px]   /* Laptop */
        xl:right-[300px]   /* Desktop grande */

        bg-white/95 
        p-4                /* Móvil */
        sm:p-5             /* Tablet */
        md:p-6             /* Desktop */
        rounded-2xl 
        text-sm 
        z-[1000]
        shadow-2xl 
        max-w-[90vw]       /* Que entre en móviles */
        sm:max-w-[350px]   /* Tamaño normal en pantallas grandes */
        backdrop-blur-xl
        animate-[slideInRight_0.4s_ease-out]
      "
      style={{
        border: `3px solid ${mapConfig.COLOR_PRINCIPAL}`,
      }}
    >
      {/* BOTÓN CERRAR */}
      <button
        onClick={() => setShowLotInfo(false)}
        className="
          absolute 
          top-3 
          right-3 
          w-8 
          h-8 
          rounded-full 
          flex 
          items-center 
          justify-center 
          text-sm
          cursor-pointer
          transition-all 
          border-2
          hover:scale-105
        "
        style={{
          background: `rgba(${parseInt(mapConfig.COLOR_PRINCIPAL.slice(1,3), 16)}, ${parseInt(
            mapConfig.COLOR_PRINCIPAL.slice(3,5),
            16
          )}, ${parseInt(mapConfig.COLOR_PRINCIPAL.slice(5,7), 16)}, 0.1)`,
          borderColor: mapConfig.COLOR_PRINCIPAL,
          color: mapConfig.COLOR_PRINCIPAL,
        }}
      >
        <X size={16} />
      </button>

      {/* TÍTULO */}
      <h3
        className="
          mb-4 
          pb-2 
          text-lg 
          font-bold 
          flex 
          items-center 
          gap-2 
          border-b-2
          text-[17px]
        "
        style={{
          color: mapConfig.COLOR_PRINCIPAL,
          borderColor: mapConfig.COLOR_PRINCIPAL,
        }}
      >
        {selectedLot.name}

        {selectedLot.id === largestLot.id && (
          <Crown size={20} className="text-yellow-500" />
        )}

        {selectedLot.tamañoNumerico >= 450 &&
          selectedLot.id !== largestLot.id && (
            <Star size={18} className="text-yellow-500" />
          )}
      </h3>

      {/* DATOS PRINCIPALES */}
      <div className="mb-5 space-y-2">
        <div className="flex justify-between">
          <span className="font-bold text-gray-600">Tamaño:</span>
          <span className="font-bold text-[15px]">{selectedLot.size}</span>
        </div>

        <div className="flex justify-between">
          <span className="font-bold text-gray-600">Precio:</span>
          <span
            className="font-bold text-lg"
            style={{ color: mapConfig.COLOR_SECUNDARIO }}
          >
            {selectedLot.price}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="font-bold text-gray-600">Estado:</span>
          <span
            className="px-3 py-1 text-[12px] font-bold rounded-full"
            style={{
              color:
                selectedLot.status === "Disponible"
                  ? mapConfig.COLOR_SECUNDARIO
                  : "#FF9800",
              background:
                selectedLot.status === "Disponible"
                  ? `rgba(${parseInt(mapConfig.COLOR_SECUNDARIO.slice(1,3), 16)}, ${parseInt(
                      mapConfig.COLOR_SECUNDARIO.slice(3,5),
                      16
                    )}, ${parseInt(
                      mapConfig.COLOR_SECUNDARIO.slice(5,7),
                      16
                    )}, 0.15)`
                  : "rgba(255, 152, 0, 0.15)",
            }}
          >
            {selectedLot.status}
          </span>
        </div>
      </div>

      {/* CARACTERÍSTICAS DESTACADAS */}
      <div className="mb-6">
        <div className="flex items-center gap-2 font-bold mb-3 text-[15px] text-gray-700">
          <Award size={18} className="text-[#cb4a2a]" />
          Características destacadas:
        </div>

        {selectedLot.features.map((feature, index) => (
          <div
            key={index}
            className="flex items-center mb-2 text-[13px] py-1.5"
          >
            <span
              className="
                mr-3 
                rounded-full 
                w-6 
                h-6 
                flex 
                items-center 
                justify-center
              "
              style={{
                background: `rgba(${parseInt(mapConfig.COLOR_SECUNDARIO.slice(1,3), 16)}, ${parseInt(
                  mapConfig.COLOR_SECUNDARIO.slice(3,5),
                  16
                )}, ${parseInt(mapConfig.COLOR_SECUNDARIO.slice(5,7), 16)}, 0.15)`,
              }}
            >
              <Check size={14} style={{ color: mapConfig.COLOR_SECUNDARIO }} />
            </span>
            {feature}
          </div>
        ))}
      </div>

      {/* BOTÓN CONTACTAR */}
      <a
  href="tel:983722524"
  className="
    w-full 
    py-3.5 
    rounded-xl 
    text-white 
    font-bold 
    text-[15px] 
    cursor-pointer 
    shadow-lg
    flex 
    items-center 
    justify-center 
    gap-2
    transition-transform 
    hover:-translate-y-[2px]
  "
  style={{
    background: `linear-gradient(135deg, ${mapConfig.COLOR_SECUNDARIO} 0%, #45a049 100%)`,
    boxShadow: `0 6px 20px rgba(${parseInt(
      mapConfig.COLOR_SECUNDARIO.slice(1,3),
      16
    )}, ${parseInt(mapConfig.COLOR_SECUNDARIO.slice(3,5), 16)}, ${parseInt(
      mapConfig.COLOR_SECUNDARIO.slice(5,7),
      16
    )}, 0.4)`,
  }}
>
  <Phone size={18} />
  Llamar al 983 722 524
</a>

    </div>
  );
};

export default LotInfoPanel;
