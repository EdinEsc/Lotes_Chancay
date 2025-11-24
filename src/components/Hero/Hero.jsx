import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MapPin, Home, Star, ArrowRight, Users, Trophy } from "lucide-react";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroImages = [
    "/Home/FondoChancay2.jpg",
    "/Home/FondoChancay3.jpg",
    "/Home/Chan1.jpg",
    "/Home/Chan2.jpg"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === heroImages.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const slideInLeft = {
    initial: { opacity: 0, x: -80 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 1.2, ease: "easeOut" }
  };

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Fondo con gradiente */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <motion.div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 10, ease: "linear" }}
          >
            <img src={image} alt={`Slide ${index}`} className="w-full h-full object-cover" />
            {/* Gradiente para mejorar contraste del texto */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
          </motion.div>
        ))}
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Texto principal */}
            <motion.div
              className="text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]"
              initial="initial"
              animate="animate"
            >
              <motion.div
                className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6"
                variants={fadeInUp}
              >
                <Star className="w-4 h-4 text-yellow-400" fill="currentColor" />
                <span className="text-sm font-semibold tracking-wide">+50 años creando hogares</span>
              </motion.div>

              <motion.h1
                className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-tight mb-6 text-white"
                variants={slideInLeft}
              >
                Tu Terreno
                <span className="block text-[#32d28a] drop-shadow-lg">Tu Futuro</span>
                <span className="block text-3xl md:text-4xl mt-4 font-semibold text-gray-100">Garantizado</span>
              </motion.h1>

              <motion.p
                className="text-lg md:text-2xl mb-10 text-gray-200 max-w-2xl leading-relaxed"
                variants={fadeInUp}
              >
                Construye el hogar de tus sueños con los mejores terrenos
                <span className="text-[#32d28a] font-bold"> desde S/ 1,978</span> de cuota inicial.
              </motion.p>

              {/* Estadísticas */}
              <motion.div className="flex flex-wrap gap-8 mb-10" variants={fadeInUp}>
                {[
                  { icon: Home, number: "5,000+", text: "Lotes Vendidos" },
                  { icon: MapPin, number: "25+", text: "Proyectos" },
                  { icon: Users, number: "50,000+", text: "Familias Felices" }
                ].map((stat, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="bg-[#32d28a] p-3 rounded-xl shadow-md">
                      <stat.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-white">{stat.number}</div>
                      <div className="text-gray-300 text-sm">{stat.text}</div>
                    </div>
                  </div>
                ))}
              </motion.div>

              {/* Botones */}
              <motion.div className="flex flex-col sm:flex-row gap-4" variants={fadeInUp}>
                <motion.button
                  className="bg-[#32d28a] hover:bg-[#27a56f] text-white font-bold py-4 px-10 rounded-xl text-lg shadow-lg transition-all flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(50,210,138,0.5)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ArrowRight className="w-5 h-5" />
                  ¡Quiero mi Lote!
                </motion.button>

                <motion.button
                  className="bg-white/15 hover:bg-white/30 text-white font-semibold py-4 px-10 rounded-xl text-lg backdrop-blur-md transition-all border border-white/30 flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <MapPin className="w-5 h-5" />
                  Ver Proyectos
                </motion.button>
              </motion.div>
            </motion.div>

            {/* Tarjeta destacada mejorada */}
            <motion.div
              className="hidden lg:block"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-md ml-auto border border-gray-100">
                {/* Etiqueta superior */}
                <div className="flex items-center gap-2 bg-[#cb4a2a] text-white text-sm font-bold px-4 py-2 rounded-full inline-flex mb-5 shadow-md">
                  <Trophy className="w-4 h-4" />
                  <span>Proyecto Destacado</span>
                </div>

                {/* Imagen del proyecto */}
                <div className="rounded-2xl overflow-hidden mb-6 shadow-lg">
                  <img
                    src="/Home/ChancayProeycto.jpg"
                    alt="Proyecto Destacado"
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Información principal */}
                <h3 className="text-3xl font-extrabold text-gray-900 mb-1 flex items-center gap-2">
                  <Home className="w-6 h-6 text-[#2c976a]" />
                  Chancay 101
                </h3>
                <p className="text-gray-600 flex items-center gap-2 mb-6">
                  <MapPin className="w-4 h-4 text-[#cb4a2a]" />
                  Lima Norte / Carabayllo
                </p>

                {/* Datos destacados */}
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between items-center text-gray-700">
                    <div className="flex items-center gap-2">
                      <Star className="w-4 h-4 text-[#facc15]" />
                      <span>Desde</span>
                    </div>
                    <span className="text-[#2c976a] font-bold text-xl">90 m²</span>
                  </div>

                  <div className="flex justify-between items-center text-gray-700">
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-[#cb4a2a]" />
                      <span>Cuota inicial</span>
                    </div>
                    <span className="text-[#cb4a2a] font-bold text-xl">S/ 1,978</span>
                  </div>
                </div>

                {/* Botón CTA */}
                <button className="w-full bg-[#2c976a] hover:bg-[#247b57] text-white font-semibold py-3.5 rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-[#2c976a]/40">
                  <ArrowRight className="w-5 h-5" />
                  Solicitar Información
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Indicadores del carrusel */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3 z-20">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3.5 h-3.5 rounded-full transition-all ${
              index === currentSlide ? "bg-[#32d28a] scale-125" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
