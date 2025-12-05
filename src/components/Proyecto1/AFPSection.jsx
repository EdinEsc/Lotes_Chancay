import React, { useState, useRef, useEffect } from "react";
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

  // ---------------------------------------
  // EFECTO MÁQUINA DE ESCRIBIR
  // ---------------------------------------
  const textos = [
    "Convierte tus ahorros en el terreno de tus sueños",
    "Ahorra con visión, invierte con inteligencia",
    "Haz que tu dinero trabaje por ti"
  ];

  const [textoActual, setTextoActual] = useState("");
  const [indexTexto, setIndexTexto] = useState(0);
  const [borrando, setBorrando] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      const frase = textos[indexTexto];

      if (!borrando) {
        // escribiendo
        if (charIndex < frase.length) {
          setTextoActual(frase.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        } else {
          setTimeout(() => setBorrando(true), 1200);
        }
      } else {
        // borrando
        if (charIndex > 0) {
          setTextoActual(frase.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else {
          setBorrando(false);
          setIndexTexto((indexTexto + 1) % textos.length);
        }
      }
    }, borrando ? 40 : 70);

    return () => clearInterval(intervalo);
  }, [charIndex, borrando, indexTexto]);

  return (
    <section className="relative w-full py-16 px-4 sm:px-8 lg:px-16 overflow-hidden rounded-3xl mt-20 bg-white">
      <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-20 items-center max-w-7xl mx-auto">

        {/* ---------------- TEXTO + VIDEO ---------------- */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-8 text-center flex flex-col items-center"
        >
          {/* TITULO CON EFECTO MÁQUINA DE ESCRIBIR */}
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight"
            style={{ fontFamily: "Playfair Display, serif", color: "#2c976a" }}
          >
            {textoActual}
            <span className="border-r-4 border-[#2c976a] ml-2 animate-pulse"></span>
          </h2>

          <p className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed font-medium max-w-xl">
            Mientras esperas, un terreno puede ser la inversión que se multiplica más rápido.
          </p>

          {/* ----------- VIDEO ----------- */}
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
              src="/Home/afp-video.mp4"
              onEnded={handleEnded}

              // 🔥 EVITAR PANTALLA COMPLETA EN CELULAR
              playsInline
              webkit-playsinline="true"
              x5-playsinline="true"
              controls
              controlsList="nofullscreen nodownload"
            />
          </div>

          <div className="w-20 h-1 bg-[#2c976a] rounded-full"></div>
        </motion.div>

        {/* -------- GALERÍA DERECHA -------- */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-full flex flex-col lg:mt-32"
          >

          <style>{`
            .img-esc {
              width: 100%;
              height: 200px;
              object-fit: cover;
              border-radius: 16px;
              transition: all 0.35s ease;
            }
            .img-esc:hover {
              transform: scale(1.04);
              box-shadow: 0px 14px 30px rgba(0,0,0,0.25);
            }

            @media (min-width: 1024px) {
              .img-esc { height: 230px; }
            }
          `}</style>

          {/* MÓVIL: COLUMNA */}
          <div className="flex flex-col gap-8 lg:hidden">
            {lotesImages.map((img, i) => (
              <motion.img
                key={i}
                src={img}
                className="img-esc shadow-xl"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.45 }}
              />
            ))}
          </div>

          {/* DESKTOP: CUADRÍCULA ORDENADA */}
          <div className="hidden lg:grid grid-cols-2 gap-10">
            {lotesImages.map((img, i) => (
              <motion.img
                key={i}
                src={img}
                className="img-esc shadow-xl"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
              />
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
