import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Calendar, Building2, Users, Target, Award } from "lucide-react";

// 🔹 Variantes de animación
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  initial: {},
  animate: {
    transition: { staggerChildren: 0.15 },
  },
};

// 🔹 Datos de la línea de tiempo mejorados
const timelineData = [
  {
    year: "1920",
    title: "Fundación de Chancay",
    text: "Pioneros en el desarrollo urbano del Perú, iniciando nuestro compromiso con las familias peruanas.",
    logo: "/Nosotros/Fundacion.png",
    icon: Building2,
    milestone: "Inicio",
    color: "from-[#2c976a] to-[#32d28a]"
  },
  {
    year: "1960",
    title: "Expansión Nacional",
    text: "Ampliación a nuevas regiones, impulsando la vivienda moderna y accesible para todos.",
    logo: "/Nosotros/Expancion.png",
    icon: Target,
    milestone: "Crecimiento",
    color: "from-[#cb4a2a] to-[#e55c3a]"
  },
  {
    year: "1990",
    title: "Consolidación",
    text: "Más de 10 urbanizaciones desarrolladas en todo el país, estableciendo nuevos estándares de calidad.",
    logo: "/Nosotros/Consolidacion.png",
    icon: Award,
    milestone: "Liderazgo",
    color: "from-[#2c976a] to-[#247b57]"
  },
  {
    year: "2010",
    title: "Grandes Proyectos",
    text: "Inicio de desarrollos residenciales masivos en el norte y sur del Perú, transformando comunidades.",
    logo: "/Nosotros/Proyectos.png",
    icon: Building2,
    milestone: "Innovación",
    color: "from-[#cb4a2a] to-[#d45a3a]"
  },
  {
    year: "2025",
    title: "Legado Continuo",
    text: "Más de 50,000 familias viviendo en urbanizaciones Chancay, construyendo el futuro del Perú.",
    logo: "/Nosotros/Legado.png",
    icon: Users,
    milestone: "Legado",
    color: "from-[#32d28a] to-[#2c976a]"
  },
];

const SeccionLineaDeTiempo = () => {
  const [activeIndex, setActiveIndex] = useState(2); // Empezar en el medio

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % timelineData.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => prev === 0 ? timelineData.length - 1 : prev - 1);
  };

  const goToSlide = (index) => {
    setActiveIndex(index);
  };

  return (
    <motion.section
      className="relative bg-gradient-to-b from-white to-gray-50 py-20 lg:py-28 overflow-hidden"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-50px" }}
      variants={staggerContainer}
    >
      {/* Fondos decorativos */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-80 h-80 bg-[#2c976a]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#cb4a2a]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* 🔹 Encabezado mejorado */}
        <motion.div
          className="text-center mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-[#2c976a]/10 text-[#2c976a] text-sm font-bold px-4 py-2 rounded-full mb-4"
            variants={fadeInUp}
          >
            <Calendar className="w-4 h-4" />
            NUESTRA HISTORIA
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[#2c976a]">Chancay</span>
            <br />
            <span className="text-[#cb4a2a]">Urbanizando la Historia</span>
            <br />
            <span className="text-gray-700 text-3xl md:text-4xl">del Perú</span>
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Más de un siglo de trayectoria construyendo sueños y transformando 
            comunidades a lo largo del Perú
          </motion.p>
        </motion.div>

        {/* 🔸 Línea de tiempo mejorada */}
        <div className="relative">
          {/* Controles de navegación */}
          <div className="flex justify-between items-center mb-8 lg:mb-12">
            <motion.button
              onClick={prevSlide}
              className="bg-white hover:bg-gray-50 text-[#2c976a] p-4 rounded-2xl shadow-lg border border-gray-200 transition-all flex items-center gap-2"
              whileHover={{ scale: 1.05, x: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronLeft className="w-6 h-6" />
              <span className="hidden sm:block font-semibold">Anterior</span>
            </motion.button>

            <motion.button
              onClick={nextSlide}
              className="bg-white hover:bg-gray-50 text-[#2c976a] p-4 rounded-2xl shadow-lg border border-gray-200 transition-all flex items-center gap-2"
              whileHover={{ scale: 1.05, x: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="hidden sm:block font-semibold">Siguiente</span>
              <ChevronRight className="w-6 h-6" />
            </motion.button>
          </div>

          {/* Línea central */}
          <div className="relative flex justify-center mb-16">
            <motion.div
              className="absolute w-full h-1 bg-gradient-to-r from-transparent via-gray-300 to-transparent top-1/2 transform -translate-y-1/2"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />
            
            {/* Puntos de la línea de tiempo */}
            <div className="relative flex justify-between w-full max-w-4xl mx-auto">
              {timelineData.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <motion.div
                    key={index}
                    className="relative flex flex-col items-center cursor-pointer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => goToSlide(index)}
                  >
                    {/* Línea conectiva activa */}
                    {index === activeIndex && (
                      <motion.div
                        className="absolute top-12 w-0.5 h-12 bg-[#cb4a2a]"
                        initial={{ height: 0 }}
                        animate={{ height: 48 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                      />
                    )}

                    {/* Punto del año */}
                    <motion.div
                      className={`relative z-20 flex flex-col items-center ${
                        index === activeIndex ? "scale-110" : "scale-90"
                      } transition-transform duration-300`}
                      whileHover={{ scale: 1.1 }}
                    >
                      {/* Año */}
                      <motion.div
                        className={`text-sm font-bold mb-2 px-3 py-1 rounded-full ${
                          index === activeIndex 
                            ? "bg-[#cb4a2a] text-white" 
                            : "bg-gray-200 text-gray-600"
                        } transition-all duration-300`}
                      >
                        {item.year}
                      </motion.div>

                      {/* Icono circular */}
                      <motion.div
                        className={`w-16 h-16 rounded-2xl shadow-lg flex items-center justify-center ${
                          index === activeIndex 
                            ? `bg-gradient-to-r ${item.color} text-white shadow-xl` 
                            : "bg-white text-gray-400 border border-gray-200"
                        } transition-all duration-300`}
                        animate={
                          index === activeIndex
                            ? {
                                scale: [1, 1.1, 1],
                                transition: { duration: 2, repeat: Infinity },
                              }
                            : {}
                        }
                      >
                        <IconComponent className="w-7 h-7" />
                      </motion.div>

                      {/* Milestone */}
                      <motion.div
                        className={`text-xs font-semibold mt-2 px-2 py-1 rounded-full ${
                          index === activeIndex 
                            ? "bg-[#2c976a] text-white" 
                            : "bg-gray-100 text-gray-500"
                        } transition-all duration-300`}
                      >
                        {item.milestone}
                      </motion.div>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* 🔸 Tarjeta de descripción mejorada CON IMÁGENES MÁS GRANDES */}
          <motion.div
            className="max-w-6xl mx-auto" // Aumenté el max-width
            key={activeIndex}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white rounded-3xl shadow-2xl border border-gray-200/50 overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2"> {/* Cambié a 2 columnas para más espacio */}
                {/* Imagen/Logo - MÁS GRANDE */}
                <motion.div
                  className="bg-gradient-to-br from-gray-50 to-gray-100 p-12 flex items-center justify-center min-h-[400px]" // Aumenté el padding y altura mínima
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <motion.div
                    className="relative"
                    whileHover={{ scale: 1.08 }} // Aumenté el efecto hover
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    <motion.img
                      src={timelineData[activeIndex].logo}
                      alt={`Logo ${timelineData[activeIndex].year}`}
                      className="w-64 h-64 object-contain" // Aumenté el tamaño de 32 a 64
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ type: "spring", stiffness: 100, delay: 0.3 }}
                    />
                    <motion.div
                      className="absolute -inset-8 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" // Aumenté el efecto de brillo
                      whileHover={{ opacity: 1 }}
                    />
                  </motion.div>
                </motion.div>

                {/* Contenido */}
                <motion.div
                  className="p-12 flex flex-col justify-center" // Aumenté el padding
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <motion.div
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-[#2c976a] to-[#32d28a] text-white text-sm font-bold px-4 py-2 rounded-full mb-6" // Aumenté el margin-bottom
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <Calendar className="w-4 h-4" />
                    {timelineData[activeIndex].year}
                  </motion.div>

                  <motion.h3
                    className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight" // Aumenté el tamaño de texto y margin
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    {timelineData[activeIndex].title}
                  </motion.h3>

                  <motion.p
                    className="text-xl text-gray-600 leading-relaxed mb-8 flex-grow" // Aumenté el tamaño de texto
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                  >
                    {timelineData[activeIndex].text}
                  </motion.p>

                  {/* Indicadores de progreso */}
                  <motion.div
                    className="flex gap-3 mt-auto" // Aumenté el gap
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                  >
                    {timelineData.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-4 h-4 rounded-full transition-all ${
                          index === activeIndex 
                            ? "bg-[#2c976a] scale-125" 
                            : "bg-gray-300 hover:bg-gray-400"
                        }`}
                      />
                    ))}
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default SeccionLineaDeTiempo;