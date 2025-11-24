import React from "react";
import { motion } from "framer-motion";
import {
  Home,
  Users,
  CreditCard,
  TrendingUp,
  Building2,
  MapPin,
  Handshake,
  Award,
  Calendar,
  ShieldCheck,
  Target,
  Sparkles
} from "lucide-react";

// 🔹 Variantes de animación
const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

const staggerContainer = {
  initial: {},
  animate: {
    transition: { staggerChildren: 0.2 },
  },
};

const NosotrosSection = () => {
  // Iconos organizados por categorías
  const iconosFlotantes = [
    // Iconos de experiencia y trayectoria
    { top: "5%", left: "5%", icon: <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />, color: "bg-white text-[#2c976a]" },
    { top: "15%", right: "5%", icon: <Award className="w-4 h-4 sm:w-5 sm:h-5" />, color: "bg-[#cb4a2a] text-white" },
    
    // Iconos de servicios
    { top: "30%", left: "3%", icon: <Home className="w-4 h-4 sm:w-5 sm:h-5" />, color: "bg-[#32d28a] text-white" },
    { top: "45%", right: "8%", icon: <Building2 className="w-4 h-4 sm:w-5 sm:h-5" />, color: "bg-white text-[#2c976a]" },
    
    // Iconos de beneficios
    { top: "60%", left: "6%", icon: <CreditCard className="w-4 h-4 sm:w-5 sm:h-5" />, color: "bg-[#cb4a2a] text-white" },
    { top: "75%", right: "4%", icon: <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5" />, color: "bg-white text-[#2c976a]" },
    
    // Iconos de valores
    { bottom: "20%", left: "8%", icon: <Handshake className="w-4 h-4 sm:w-5 sm:h-5" />, color: "bg-[#32d28a] text-white" },
    { bottom: "35%", right: "12%", icon: <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5" />, color: "bg-white text-[#2c976a]" },
    
    // Iconos de alcance
    { bottom: "50%", left: "2%", icon: <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />, color: "bg-[#cb4a2a] text-white" },
    { bottom: "65%", right: "2%", icon: <Users className="w-4 h-4 sm:w-5 sm:h-5" />, color: "bg-white text-[#2c976a]" },
    
    // Iconos destacados
    { top: "50%", left: "50%", transform: "translate(-50%, -50%)", icon: <Target className="w-5 h-5 sm:w-6 sm:h-6" />, color: "bg-[#32d28a] text-white" },
    { bottom: "10%", left: "50%", transform: "translateX(-50%)", icon: <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />, color: "bg-[#cb4a2a] text-white" }
  ];

  const estadisticas = [
    { numero: "95+", texto: "Años de experiencia", icon: Calendar },
    { numero: "25+", texto: "Proyectos ejecutados", icon: Building2 },
    { numero: "5,000+", texto: "Familias beneficiadas", icon: Users },
    { numero: "100%", texto: "Títulos registrados", icon: ShieldCheck }
  ];

  return (
    <motion.section
      className="relative bg-gradient-to-br from-[#2c976a] to-[#247b57] py-16 md:py-20 lg:py-28 -mt-[1px] w-full overflow-hidden"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-50px" }}
      variants={staggerContainer}
    >
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-72 h-72 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#32d28a]/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative container mx-auto flex flex-col lg:flex-row items-center justify-between px-4 sm:px-6 lg:px-8 w-full gap-8 lg:gap-12">
        
        {/* 🔸 Texto principal mejorado */}
        <motion.div
          className="w-full lg:w-1/2 text-center lg:text-left lg:pr-8"
          variants={fadeInLeft}
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white text-sm font-semibold px-4 py-2 rounded-full mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Sparkles className="w-4 h-4" />
            LÍDERES EN EL SECTOR
          </motion.div>

          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-white mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            +95 AÑOS
            <br />
            <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white/90">
              HACIENDO REALIDAD
            </span>
            <br />
            <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white/80">
              EL SUEÑO DEL
            </span>
          </motion.h1>

          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#cb4a2a] mt-4 drop-shadow-lg"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            TERRENO PROPIO
          </motion.h2>

          {/* 🔹 Estadísticas */}
          <motion.div
            className="grid grid-cols-2 gap-4 mt-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            {estadisticas.map((stat, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-3 p-3 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20"
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.15)" }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="bg-white p-2 rounded-lg">
                  <stat.icon className="w-4 h-4 text-[#2c976a]" />
                </div>
                <div>
                  <div className="text-white font-bold text-lg">{stat.numero}</div>
                  <div className="text-white/80 text-xs">{stat.texto}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* 🔸 Imagen con íconos flotantes mejorados */}
        <motion.div
          className="relative w-full lg:w-1/2 max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto flex justify-center items-center"
          variants={fadeInRight}
        >
          <motion.div
            className="relative z-20 w-full mx-auto"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.img
              src="/Nosotros/ChacayNosotros.png"
              alt="Terreno propio - Grupo Centenario"
              className="w-full mx-auto drop-shadow-2xl rounded-2xl"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            />
          </motion.div>

          {/* 🔹 Íconos flotantes mejorados */}
          <div className="absolute inset-0 z-30 pointer-events-none">
            {iconosFlotantes.map((icono, i) => (
              <motion.div
                key={i}
                className={`absolute ${icono.color} p-2 sm:p-3 rounded-xl shadow-lg border border-white/20`}
                style={{ 
                  top: icono.top, 
                  left: icono.left, 
                  right: icono.right, 
                  bottom: icono.bottom,
                  transform: icono.transform
                }}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                animate={{
                  y: [0, (i % 2 === 0 ? -8 : 8), 0],
                  rotate: [0, i % 2 === 0 ? 5 : -5, 0],
                }}
                transition={{
                  duration: 3 + (i % 4) * 0.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.1
                }}
                whileHover={{
                  scale: 1.2,
                  rotate: 360,
                  transition: { duration: 0.3 }
                }}
              >
                {icono.icon}
              </motion.div>
            ))}
          </div>

          {/* 🔹 Efecto de brillo alrededor de la imagen */}
          <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#32d28a]/20 to-[#cb4a2a]/20 rounded-2xl blur-xl opacity-50"></div>
        </motion.div>
      </div>

      {/* 🔹 Llamada a la acción */}
      <motion.div
        className="relative text-center mt-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8 }}
      >
        <motion.p
          className="text-white text-lg md:text-xl font-semibold mb-6 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1 }}
        >
          Confía en la experiencia de <span className="text-[#cb4a2a] font-bold">Grupo Chancay</span> para hacer realidad el sueño de tu terreno propio
        </motion.p>
        
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1.2 }}
        >
          <motion.button
            className="bg-white text-[#2c976a] hover:bg-gray-100 font-bold py-3 px-8 rounded-xl shadow-lg transition-all flex items-center gap-2"
            whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(255,255,255,0.3)" }}
            whileTap={{ scale: 0.95 }}
          >
            <Handshake className="w-5 h-5" />
            Conoce nuestra historia
          </motion.button>
          
          <motion.button
            className="border-2 border-white text-white hover:bg-white/10 font-semibold py-3 px-8 rounded-xl backdrop-blur-sm transition-all flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Target className="w-5 h-5" />
            Nuestros proyectos
          </motion.button>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default NosotrosSection;