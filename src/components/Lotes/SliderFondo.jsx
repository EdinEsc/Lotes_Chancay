import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const fondos = [
  "url('/Lotes/Fondolotes1.jpg')",
  "url('/Lotes/Fondolotes2.jpg')",
  "url('/Lotes/Fondolotes3.jpg')"
];

const SliderFondo = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % fondos.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[85vh] overflow-hidden"> {/* 🔹 menos alto */}
      <AnimatePresence>
        <motion.div
          key={index}
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: fondos[index] }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        ></motion.div>
      </AnimatePresence>

      {/* 🔶 Tarjeta fija en la parte izquierda (más hacia la derecha) */}
      <div className="absolute top-1/3 left-24 bg-[#cb4a2a] text-white rounded-xl shadow-lg px-8 py-5 flex items-center space-x-4 max-w-md">
        <div>
          <h3 className="text-lg font-bold">COMPRA</h3>
          <h2 className="text-4xl font-extrabold text-yellow-300">100% SEGURA</h2>
          <p className="text-base mt-1">Nuevo proyecto</p>
        </div>
        <div className="bg-yellow-400 text-[#cb4a2a] text-sm font-semibold rounded-full px-3 py-2">
          Crédito directo
        </div>
      </div>

      {/* 🟩🟧 Franja inferior con transparencia */}
      <div className="absolute bottom-0 left-0 w-full flex text-white text-center font-semibold">
        {/* Parte verde */}
        <div className="w-1/2 bg-[#2c976a]/90 py-6 flex flex-col justify-center items-center space-y-2">
          <p className="text-sm uppercase tracking-wide">Urbanización</p>
          <h3 className="text-2xl font-bold">Brisas de Huanchaco</h3>

          {/* Precio en horizontal */}
          <div className="flex items-baseline space-x-2 mt-2">
            <p className="text-base">Cuotas desde</p>
            <span className="text-4xl font-extrabold">S/1,525</span>
          </div>
        </div>

        {/* Parte naranja */}
        <div className="w-1/2 bg-[#cb4a2a]/90 py-6 flex flex-col justify-center items-center space-y-2">
          <h3 className="text-2xl font-bold">Precios de lanzamiento</h3>
          <p className="text-base">Trujillo / Huanchaco</p>
        </div>
      </div>
    </div>
  );
};

export default SliderFondo;
