import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Play, Users, Home, Award, Star, Heart, Pause } from "lucide-react";

// 🔹 Variantes de animación
const fadeInLeft = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const fadeInRight = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const pulse = {
  animate: {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
};

const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const SeccionFamiliasFelices = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showOverlay, setShowOverlay] = useState(true);
  const videoRef = useRef(null);

  const estadisticas = [
    { icon: Users, numero: "50,000+", texto: "Familias felices", color: "text-[#cb4a2a]" },
    { icon: Home, numero: "25+", texto: "Proyectos ejecutados", color: "text-[#2c976a]" },
    { icon: Award, numero: "95+", texto: "Años de experiencia", color: "text-[#cb4a2a]" },
    { icon: Star, numero: "5,000+", texto: "Lotes vendidos", color: "text-[#2c976a]" }
  ];

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
        setShowOverlay(false);
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleVideoClick = () => {
    handlePlayPause();
  };

  const handleVideoPlay = () => {
    setIsPlaying(true);
    setShowOverlay(false);
  };

  const handleVideoPause = () => {
    setIsPlaying(false);
    setShowOverlay(true);
  };

  const handleVideoEnd = () => {
    setIsPlaying(false);
    setShowOverlay(true);
  };

  return (
    <motion.section
      className="relative bg-gradient-to-br from-white to-gray-50 py-16 md:py-24 lg:py-28 overflow-hidden"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-50px" }}
      variants={staggerContainer}
    >
      {/* Fondos decorativos */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-72 h-72 bg-[#2c976a]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#cb4a2a]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* 🔹 Contenido izquierdo mejorado */}
          <motion.div
            className="space-y-8"
            variants={fadeInLeft}
          >
            {/* Header con icono */}
            <motion.div
              className="flex items-center gap-4 mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                className="bg-gradient-to-r from-[#cb4a2a] to-[#e55c3a] p-4 rounded-2xl shadow-lg"
                variants={pulse}
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <Heart className="w-8 h-8 text-white" fill="currentColor" />
              </motion.div>
              <div>
                <motion.div
                  className="inline-flex items-center gap-2 bg-[#2c976a]/10 text-[#2c976a] text-sm font-bold px-3 py-1 rounded-full mb-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <Users className="w-3 h-3" />
                  TESTIMONIOS REALES
                </motion.div>
                <motion.h2
                  className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <span className="text-[#2c976a]">50,000+</span>
                  <br />
                  <span className="text-[#cb4a2a]">Familias</span>
                  <br />
                  <span className="text-gray-700">Felices</span>
                </motion.h2>
              </div>
            </motion.div>

            {/* Texto descriptivo */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-medium">
                Con más de <span className="text-[#2c976a] font-bold">95 años de experiencia</span>, 
                Grupo Chancay ha transformado sueños en realidades, desarrollando urbanizaciones 
                de calidad a nivel nacional.
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Hoy celebramos más de <span className="text-[#cb4a2a] font-semibold">50,000 terrenos vendidos</span> 
                y miles de familias que han hecho realidad el sueño de tener un hogar propio.
              </p>
            </motion.div>

            {/* 🔹 Grid de estadísticas */}
            <motion.div
              className="grid grid-cols-2 gap-4 pt-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              {estadisticas.map((stat, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm border border-gray-200/50 hover:shadow-md transition-all"
                  whileHover={{ scale: 1.05, y: -2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="bg-gradient-to-r from-[#2c976a] to-[#32d28a] p-2 rounded-lg">
                    <stat.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className={`text-xl font-bold ${stat.color}`}>{stat.numero}</div>
                    <div className="text-sm text-gray-600 font-medium">{stat.texto}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* 🔹 Sección de video mejorada */}
          <motion.div
            className="relative"
            variants={fadeInRight}
          >
            <motion.div
              className="relative rounded-3xl overflow-hidden shadow-2xl bg-gray-900"
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* Video container */}
              <div className="relative aspect-video cursor-pointer">
                <motion.video
                  ref={videoRef}
                  src="/Nosotros/ChancayVideo.mp4"
                  controls={isPlaying}
                  playsInline
                  className="w-full h-full object-cover"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  poster="/Nosotros/video-poster.jpg"
                  onClick={handleVideoClick}
                  onPlay={handleVideoPlay}
                  onPause={handleVideoPause}
                  onEnded={handleVideoEnd}
                />
                
                {/* Overlay de play button - SOLO cuando no se está reproduciendo */}
                {showOverlay && (
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/20 transition-colors"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={handlePlayPause}
                  >
                    <motion.div
                      className="bg-white/90 backdrop-blur-sm p-6 rounded-full shadow-2xl"
                      whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,1)" }}
                      transition={{ type: "spring", stiffness: 200 }}
                    >
                      {isPlaying ? (
                        <Pause className="w-8 h-8 text-[#2c976a]" fill="#2c976a" />
                      ) : (
                        <Play className="w-8 h-8 text-[#2c976a]" fill="#2c976a" />
                      )}
                    </motion.div>
                  </motion.div>
                )}
              </div>

              {/* Badge del video */}
              <motion.div
                className="absolute top-4 left-4 bg-[#cb4a2a] text-white text-sm font-bold px-4 py-2 rounded-full shadow-lg flex items-center gap-2"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                <Play className="w-4 h-4" />
                Historia real
              </motion.div>
            </motion.div>

            {/* Texto debajo del video */}
            <motion.div
              className="text-center mt-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
            >
              <p className="text-gray-600 font-medium">
                <span className="text-[#2c976a] font-bold">Mira cómo</span> hemos transformado 
                vidas a lo largo de 95 años de trayectoria
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* 🔹 Llamada a la acción */}
        <motion.div
          className="text-center mt-16 lg:mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
        >
          <motion.p
            className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1 }}
          >
            <span className="text-[#2c976a] font-bold">Únete a las miles de familias</span> que ya 
            hicieron realidad su sueño de tener un terreno propio con Grupo Chancay
          </motion.p>
          <Link to="/contacto">
            <motion.button
              className="bg-gradient-to-r from-[#2c976a] to-[#32d28a] hover:from-[#247b57] hover:to-[#2c976a] text-white font-bold py-4 px-8 rounded-xl shadow-lg transition-all flex items-center gap-3 mx-auto"
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 10px 25px rgba(44, 151, 106, 0.3)" 
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Heart className="w-5 h-5" fill="currentColor" />
              ¡Quiero ser una familia feliz!
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default SeccionFamiliasFelices;