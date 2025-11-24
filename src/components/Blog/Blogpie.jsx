import React from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const BlogPie = () => {
  return (
    <section
      className="relative w-full min-h-[25vh] bg-cover bg-center flex items-center justify-center px-4 sm:px-8 md:px-16 py-5"
      style={{
        backgroundImage: "url('/blog/fondo-pie.jpg')", // 🖼️ Imagen de fondo principal
      }}
    >
      {/* Capa oscura para contraste */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Contenido principal */}
      <div className="relative flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 z-10 text-center md:text-left">
        {/* 🧡 Logo grande */}
        <motion.img
          src="/blog/logo-chancay101.jpg"
          alt="Logo Chancay 101"
          className="w-56 sm:w-72 md:w-96 lg:w-[25rem] drop-shadow-2xl"
          initial={{ opacity: 0, x: -40, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1 }}
        />

        {/* 📄 Contenedor de texto */}
        <motion.div
          className="text-white max-w-md md:max-w-lg"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          {/* 💬 Card destacada */}
          <div className="bg-white text-[#cb4a2a] font-extrabold text-center rounded-2xl shadow-lg px-5 py-3 mb-2">
            <h2 className="text-lg sm:text-xl md:text-2xl">
              Proyecto Chancay 101
            </h2>
          </div>

          {/* 📃 Texto principal */}
          <p className="text-xs sm:text-sm md:text-base text-white/90 mb-2 leading-relaxed">
            Conoce más sobre este exclusivo proyecto en crecimiento en la zona
            más prometedora de Chancay.
          </p>

          {/* ✅ Lista de beneficios */}
          <ul className="space-y-1.5 text-xs sm:text-sm md:text-base">
            <li className="flex items-center justify-center md:justify-start gap-2">
              <CheckCircle className="text-[#2c976a]" size={18} />
              <span>Ubicación estratégica con alto potencial de valorización.</span>
            </li>
            <li className="flex items-center justify-center md:justify-start gap-2">
              <CheckCircle className="text-[#2c976a]" size={18} />
              <span>Terrenos con título inscrito y respaldo de CHANCAY 101.</span>
            </li>
            <li className="flex items-center justify-center md:justify-start gap-2">
              <CheckCircle className="text-[#2c976a]" size={18} />
              <span>
                Visita nuestra página web para conocer más detalles del proyecto.
              </span>
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogPie;
