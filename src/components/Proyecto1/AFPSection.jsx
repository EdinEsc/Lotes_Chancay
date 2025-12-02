import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

export default function AFPSection() {
  const lotesImages = [
    "/Home/lote-1.jpg",
    "/Home/lote-2.jpg",
    "/Home/lote-4.jpg",
    "/Home/lote-3.jpg",
  ];

  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const handlePlay = () => {
    setIsPlaying(true);
    videoRef.current.play();
  };

  const handleEnded = () => setIsPlaying(false);

  return (
    <section className="relative w-full py-16 px-4 sm:px-8 lg:px-16 overflow-hidden rounded-3xl mt-20 bg-white">
      <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">

        {/* ---------------- TEXTO + VIDEO ---------------- */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-8 text-center flex flex-col items-center"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
            <span className="text-[#2c976a]">Convierte tus ahorros en el terreno de tus sueños</span>
          </h2>

          <p className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed font-medium max-w-xl">
            Mientras esperas, un terreno puede ser la inversión que se multiplica más rápido.
          </p>

          {/* Video */}
          <div className="w-full max-w-sm sm:max-w-md mx-auto relative">
            {!isPlaying && (
              <div className="relative cursor-pointer" onClick={handlePlay}>
                <img
                  src="/Home/afp-imagen.jpg"
                  alt="Imagen"
                  className="w-full h-auto object-cover rounded-xl"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white/80 rounded-full flex items-center justify-center">
                    <Play className="w-7 h-7 sm:w-8 sm:h-8 text-[#2c976a]" />
                  </div>
                </div>
              </div>
            )}

            <video
              ref={videoRef}
              className={`w-full h-auto object-cover rounded-xl ${isPlaying ? "block" : "hidden"}`}
              controls
              src="/Home/afp-video.mp4"
              onEnded={handleEnded}
            />
          </div>

          <div className="w-20 h-1 bg-[#2c976a] rounded-full"></div>
        </motion.div>

        {/* -------- GALERÍA DERECHA RESPONSIVA -------- */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative w-full flex flex-col gap-6"
        >
          {/* Estilos base */}
          <style>{`
            .img-esc {
              width: 100%;
              height: 180px;
              object-fit: cover;
              border-radius: 16px;
            }

            @media (min-width: 640px) {
              .img-esc { height: 200px; }
            }

            @media (min-width: 1024px) {
              .img-esc { height: 210px; }
            }
          `}</style>

          {/* VERSION MÓVIL = COLUMNA */}
          <div className="flex flex-col gap-6 lg:hidden">
            {lotesImages.map((img, i) => (
              <img key={i} src={img} className="img-esc shadow-xl" />
            ))}
          </div>

          {/* VERSION DESKTOP = ESCALERA */}
          <div className="hidden lg:flex flex-col gap-8">
            {/* Fila 1 */}
            <div className="flex justify-between gap-6">
              <img
                src={lotesImages[0]}
                className="img-esc translate-y-10 shadow-xl"
              />
              <img
                src={lotesImages[1]}
                className="img-esc -translate-y-10 shadow-xl"
              />
            </div>

            {/* Fila 2 */}
            <div className="flex justify-between gap-6">
              <img
                src={lotesImages[2]}
                className="img-esc translate-y-10 shadow-xl"
              />
              <img
                src={lotesImages[3]}
                className="img-esc -translate-y-10 shadow-xl"
              />
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
