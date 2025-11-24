import React from "react";
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
  TrendingUp,
  Home,
  Car,
  Trees,
  FileCheck,
  CheckCircle,
  ArrowRight
} from "lucide-react";

// 🔹 Variantes de animación optimizadas
const containerVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      duration: 0.8
    }
  }
};

const itemVariants = {
  initial: { opacity: 0, y: 30 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100
    }
  }
};

const Proyecto = () => {
  const navigate = useNavigate(); // <-- Hook de navegación

  const beneficios = [
    { icon: FileCheck, text: "Títulos registrados", highlight: true },
    { icon: DollarSign, text: "Financiamiento directo", highlight: true },
    { icon: MapPin, text: "Ubicación estratégica" },
    { icon: Clock, text: "Entrega inmediata" },
    { icon: ShieldCheck, text: "Garantía legal" },
    { icon: TrendingUp, text: "Plusvalía asegurada" }
  ];

  const caracteristicas = [
    { icon: Home, text: "Todos los servicios básicos" },
    { icon: Car, text: "Acceso a vías principales" },
    { icon: Trees, text: "Áreas verdes planificadas" },
    { icon: CheckCircle, text: "Documentación completa" }
  ];

  const handleVideoClick = () => {
    console.log("Abrir video del proyecto");
  };

  const handleVerProyecto = () => {
    navigate("/mapa-lotes"); // <-- Navega a la sección de Lotes
  };

  const handleSolicitarInfo = () => {
  navigate("/contacto");
  };

  return (
    <motion.section
      className="relative py-16 lg:py-24 px-4 sm:px-6 bg-cover bg-center"
      style={{ 
        backgroundImage: "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('Home/FondoChancay2.jpg')",
        backgroundAttachment: "scroll"
      }}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-50px" }}
      variants={containerVariants}
    >
      <div className="relative max-w-7xl mx-auto">
        {/* 🔹 Encabezado Rediseñado */}
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
            <span className="text-xl sm:text-2xl text-gray-300 font-normal">Tu Oportunidad en Lima Norte</span>
          </motion.h2>
          
          <motion.p
            className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            Invierte en el proyecto con los mejores precios y financiamiento directo
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* 🔹 Tarjeta del Proyecto */}
          <motion.div className="relative" variants={containerVariants}>
            <motion.div
              className="bg-white rounded-2xl lg:rounded-3xl shadow-2xl overflow-hidden group hover:shadow-3xl transition-all duration-300"
              variants={itemVariants}
              whileHover={{ y: -8 }}
            >
              {/* Imagen Principal */}
              <div
                className="relative h-64 sm:h-72 lg:h-80 bg-cover bg-center"
                style={{ backgroundImage: "url('Home/ChancayProeycto.jpg')" }}
              >
                {/* Badges Superiores */}
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

                {/* Botón de Video */}
                <motion.button
                  className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-white hover:scale-110 transition-all duration-200"
                  onClick={handleVideoClick}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Play className="w-5 h-5 text-[#cb4a2a]" fill="#cb4a2a" />
                </motion.button>

                {/* Información Inferior */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent text-white p-6">
                  <motion.h3 className="text-xl sm:text-2xl font-bold mb-3" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}>
                    Chancay 101 - Carabayllo
                  </motion.h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                    <motion.div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2 text-[#2c976a] flex-shrink-0" />
                      <span className="font-medium">Lima Norte - Zona en crecimiento</span>
                    </motion.div>
                    
                    <motion.div className="flex items-center">
                      <Ruler className="w-4 h-4 mr-2 text-[#2c976a] flex-shrink-0" />
                      <span className="font-medium">Lotes 90m² - 200m²</span>
                    </motion.div>
                  </div>
                </div>

                {/* Precio Destacado */}
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

              {/* 🔹 Beneficios del Proyecto */}
              <div className="p-6 bg-gray-50">
                <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2 text-base">
                  <ShieldCheck className="w-5 h-5 text-[#2c976a]" />
                  Beneficios incluidos:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                  {beneficios.map((beneficio, index) => (
                    <motion.div
                      key={index}
                      className={`flex items-center gap-3 text-sm p-2 rounded-lg ${beneficio.highlight ? 'bg-green-50 border border-green-100' : 'text-gray-700'}`}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                    >
                      <beneficio.icon className={`w-4 h-4 flex-shrink-0 ${beneficio.highlight ? 'text-[#2c976a]' : 'text-gray-600'}`} />
                      <span className={`font-medium ${beneficio.highlight ? 'text-[#2c976a]' : 'text-gray-700'}`}>
                        {beneficio.text}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* 🔹 Botones de Acción */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <motion.button
                    className="flex-1 bg-[#2c976a] text-white font-semibold py-3 px-4 rounded-xl hover:bg-[#24855f] transition-colors duration-300 flex items-center justify-center gap-2 shadow-lg"
                    onClick={handleVerProyecto} // <-- Aquí navega a /mapa-lotes
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span>Ver Proyecto</span>
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* 🔹 Lado Derecho - Información Destacada */}
          <motion.div className="text-white space-y-6 lg:space-y-8" variants={containerVariants}>
            {/* Características Principales */}
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl lg:text-3xl font-bold mb-6 text-[#2c976a] flex items-center gap-3">
                <TrendingUp className="w-6 h-6 lg:w-7 lg:h-7" />
                ¿Por qué Chancay 101?
              </h3>
              <div className="space-y-4">
                {caracteristicas.map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-4 p-4 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors"
                    whileHover={{ x: 5 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="bg-[#2c976a] p-2 rounded-lg flex-shrink-0">
                      <item.icon className="w-4 h-4 lg:w-5 lg:h-5 text-white" />
                    </div>
                    <span className="text-base lg:text-lg font-medium text-white">{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Información de Ubicación */}
            <motion.div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20" variants={itemVariants}>
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-6 h-6 text-[#2c976a]" />
                <h4 className="text-xl font-bold text-white">Ubicación Estratégica</h4>
              </div>
              <p className="text-gray-200 text-sm lg:text-base mb-3">
                Situado en Carabayllo, una de las zonas de mayor crecimiento en Lima Norte, 
                con acceso rápido a Panamericana Norte y futuras vías de desarrollo.
              </p>
              <div className="flex items-center text-sm text-[#2c976a] font-semibold">
                <Clock className="w-4 h-4 mr-2" />
                25 min al Centro de Lima
              </div>
            </motion.div>

            {/* Información Legal */}
            <motion.div className="bg-gradient-to-br from-[#2c976a]/20 to-[#24855f]/20 backdrop-blur-sm rounded-2xl p-6 border border-[#2c976a]/30" variants={itemVariants}>
              <div className="flex items-center gap-3 mb-3">
                <FileCheck className="w-6 h-6 text-[#2c976a]" />
                <h4 className="text-xl font-bold text-white">Garantía Legal Total</h4>
              </div>
              <p className="text-gray-200 text-sm lg:text-base">
                Proyecto 100% legal con títulos de propiedad registrados y toda la documentación 
                aprobada por municipalidad. Inversión segura y respaldada.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div className="flex flex-col sm:flex-row gap-3" variants={itemVariants}>
              <motion.button
                className="flex-1 bg-[#cb4a2a] text-white font-bold py-4 px-6 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 text-lg hover:bg-[#b54326]"
                onClick={handleSolicitarInfo} // <-- Navega a /contacto
                whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(203, 74, 42, 0.3)" }}
                whileTap={{ scale: 0.98 }}
              >
                Solicitar Información
              </motion.button>
              
              <motion.button
                className="flex-1 bg-transparent border-2 border-white text-white font-bold py-4 px-6 rounded-2xl hover:bg-white hover:text-gray-900 transition-all duration-300 text-lg"
                onClick={() => window.open("https://wa.me/51923066370", "_blank")} // <-- reemplaza 519XXXXXXXX con tu número
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
