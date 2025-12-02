import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  MapPin,
  Ruler,
  DollarSign,
  Clock,
  Play,
  Star,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

// Animaciones
const containerVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      duration: 0.8,
    },
  },
};

const itemVariants = {
  initial: { opacity: 0, y: 30 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
};

const Proyecto = () => {
  const navigate = useNavigate();

  const beneficios = [
    { icon: ShieldCheck, text: "Títulos registrados", highlight: true },
    { icon: DollarSign, text: "Financiamiento directo", highlight: true },
    { icon: MapPin, text: "Ubicación estratégica" },
    { icon: Clock, text: "Entrega inmediata" },
  ];

  // 📌 Estados del Zoom y Pan
  const imgRef = useRef(null);
  const [scale, setScale] = useState(1);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const [start, setStart] = useState({ x: 0, y: 0 });

  const handleMouseDown = (e) => {
    setDragging(true);
    setStart({ x: e.clientX - pos.x, y: e.clientY - pos.y });
  };

  const handleMouseMove = (e) => {
    if (!dragging) return;
    setPos({ x: e.clientX - start.x, y: e.clientY - start.y });
  };

  const handleMouseUp = () => {
    setDragging(false);
  };

  // 📌 Zoom IN
  const zoomIn = () => {
    setScale((prev) => Math.min(prev + 0.2, 2.2));
  };

  // 📌 Zoom OUT
  const zoomOut = () => {
    setScale((prev) => Math.max(prev - 0.2, 1));
    setPos({ x: 0, y: 0 });
  };

  const handleVideoClick = () => {
    console.log("Abrir video del proyecto");
  };

  const handleVerProyecto = () => {
    navigate("/mapa-lotes");
  };

  const handleSolicitarInfo = () => {
    navigate("/contacto");
  };

  return (
    <motion.section
      className="relative py-16 lg:py-24 px-4 sm:px-6 bg-cover bg-center"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('Home/FondoChancay2.jpg')",
      }}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-50px" }}
      variants={containerVariants}
    >
      <div className="relative max-w-7xl mx-auto">
        {/* ENCABEZADO */}
        <motion.div className="text-center mb-12 lg:mb-16" variants={itemVariants}>
          <motion.div
            className="inline-flex items-center gap-2 bg-[#cb4a2a] text-white text-sm font-bold px-4 py-2 rounded-full mb-4 shadow-lg"
            whileHover={{ scale: 1.05 }}
          >
            <Star className="w-4 h-4" fill="currentColor" />
            PROYECTO DESTACADO 2024
          </motion.div>

          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4"
            variants={itemVariants}
          >
            <span className="text-[#2c976a] block">Chancay 101</span>
            <span className="text-xl sm:text-2xl text-gray-300 font-normal">
              Tu Oportunidad en Lima Norte
            </span>
          </motion.h2>

          <motion.p
            className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            Invierte en el proyecto con los mejores precios y financiamiento
            directo
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* TARJETA DEL PROYECTO */}
          <motion.div className="relative" variants={containerVariants}>
            <motion.div
              className="bg-white rounded-2xl lg:rounded-3xl shadow-2xl overflow-hidden group hover:shadow-3xl transition-all duration-300"
              variants={itemVariants}
              whileHover={{ y: -8 }}
            >
              <div
                className="relative h-64 sm:h-72 lg:h-80 bg-cover bg-center"
                style={{
                  backgroundImage: "url('Home/ChancayProeycto.jpg')",
                }}
              >
                <div className="absolute top-4 left-4 right-4 flex flex-wrap gap-2">
                  <motion.div
                    className="bg-[#2c976a] text-white text-xs font-bold px-3 py-2 rounded-full shadow-lg flex items-center gap-1"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <Star className="w-3 h-3" fill="currentColor" />
                    ÚLTIMA ETAPA
                  </motion.div>

                  <motion.div
                    className="bg-[#cb4a2a] text-white text-xs font-bold px-3 py-2 rounded-full shadow-lg"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    OPORTUNIDAD ÚNICA
                  </motion.div>
                </div>

                <motion.button
                  className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-white hover:scale-110 transition-all duration-200"
                  onClick={handleVideoClick}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Play className="w-5 h-5 text-[#cb4a2a]" fill="#cb4a2a" />
                </motion.button>

                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent text-white p-6">
                  <motion.h3 className="text-xl sm:text-2xl font-bold mb-3">
                    Chancay 101 - Carabayllo
                  </motion.h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                    <motion.div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2 text-[#2c976a]" />
                      <span className="font-medium">
                        Lima Norte - Zona en crecimiento
                      </span>
                    </motion.div>
                    <motion.div className="flex items-center">
                      <Ruler className="w-4 h-4 mr-2 text-[#2c976a]" />
                      <span className="font-medium">Lotes 90m² - 200m²</span>
                    </motion.div>
                  </div>
                </div>

                <motion.div
                  className="absolute -bottom-4 right-4 bg-gradient-to-r from-[#2c976a] to-[#3aa876] text-white text-center px-5 py-3 rounded-2xl shadow-2xl"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="flex items-center justify-center gap-1 text-xs mb-1">
                    <DollarSign className="w-3 h-3" />
                    <span className="font-semibold">Cuota inicial desde</span>
                  </div>
                  <p className="text-lg font-bold">S/ 1,978</p>
                </motion.div>
              </div>

              <div className="p-6 bg-gray-50">
                <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2 text-base">
                  <ShieldCheck className="w-5 h-5 text-[#2c976a]" />
                  Beneficios incluidos:
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                  {beneficios.map((beneficio, index) => (
                    <motion.div
                      key={index}
                      className={`flex items-center gap-3 text-sm p-2 rounded-lg ${
                        beneficio.highlight
                          ? "bg-green-50 border border-green-100"
                          : "text-gray-700"
                      }`}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                    >
                      <beneficio.icon
                        className={`w-4 h-4 ${
                          beneficio.highlight
                            ? "text-[#2c976a]"
                            : "text-gray-600"
                        }`}
                      />
                      <span
                        className={`font-medium ${
                          beneficio.highlight
                            ? "text-[#2c976a]"
                            : "text-gray-700"
                        }`}
                      >
                        {beneficio.text}
                      </span>
                    </motion.div>
                  ))}
                </div>

                <motion.button
                  className="w-full bg-[#2c976a] text-white font-semibold py-3 px-4 rounded-xl hover:bg-[#24855f] transition-colors duration-300 flex items-center justify-center gap-2 shadow-lg"
                  onClick={handleVerProyecto}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>Ver Proyecto</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </div>
            </motion.div>
          </motion.div>

          {/* ------------------------ */}
          {/* 🔹 LADO DERECHO COMPLETO CON ZOOM + PAN */}
          {/* ------------------------ */}

          <motion.div className="text-white" variants={containerVariants}>
            <motion.div
              className="relative bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 transition-all duration-300"
              variants={itemVariants}
              whileHover={{ scale: 1.01 }}
            >
              {/* Título */}
              <div className="p-4 border-b border-white/10">
                <h3 className="text-xl font-bold flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-[#2c976a]" />
                  Plano General del Proyecto
                </h3>
                <p className="text-gray-300 text-sm mt-1">
                  Distribución completa de lotes disponibles
                </p>
              </div>

              {/* CONTENEDOR ZOOM + PAN */}
              <div
                className="relative w-full h-[600px] overflow-hidden bg-black/20"
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
              >
                {/* Botón zoom + */}
                <button
                  className="absolute top-4 right-4 z-20 bg-white/80 text-black font-bold w-10 h-10 rounded-full shadow-lg hover:bg-white transition flex items-center justify-center"
                  onClick={zoomIn}
                >
                  +
                </button>

                {/* Botón zoom - */}
                <button
                  className="absolute top-4 right-16 z-20 bg-white/80 text-black font-bold w-10 h-10 rounded-full shadow-lg hover:bg-white transition flex items-center justify-center"
                  onClick={zoomOut}
                >
                  –
                </button>

                {/* Imagen con Zoom + Pan */}
                <img
                  ref={imgRef}
                  src="Home/plano.jpg"
                  alt="Plano del Proyecto"
                  draggable={false}
                  onMouseDown={handleMouseDown}
                  className="absolute inset-0 m-auto object-contain max-h-[1200px] cursor-grab active:cursor-grabbing transition-transform duration-200"
                  style={{
                    transform: `translate(${pos.x}px, ${pos.y}px) scale(${scale})`,
                    transformOrigin: "center center",
                  }}
                />
              </div>
            </motion.div>

            {/* BOTONES */}
            <motion.div
              className="flex flex-col sm:flex-row gap-3 mt-6"
              variants={itemVariants}
            >
              <motion.button
                className="flex-1 bg-[#cb4a2a] text-white font-bold py-4 px-6 rounded-2xl shadow-2xl hover:bg-[#b54326] transition-all text-lg"
                onClick={handleSolicitarInfo}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Solicitar Información
              </motion.button>

              <motion.button
                className="flex-1 bg-transparent border-2 border-white text-white font-bold py-4 px-6 rounded-2xl hover:bg-white hover:text-gray-900 transition-all text-lg"
                onClick={() =>
                  window.open("https://wa.me/51923066370", "_blank")
                }
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Contactar Asesor
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Proyecto;
