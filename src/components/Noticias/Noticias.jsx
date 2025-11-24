import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Calendar, ArrowRight, Newspaper, TrendingUp, Gift, BarChart3 } from "lucide-react";

// 🔹 Variantes de animación
const fadeInUp = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const scaleIn = {
  initial: { scale: 0.9, opacity: 0 },
  animate: { scale: 1, opacity: 1, transition: { duration: 0.6 } },
};

const Noticias = () => {
  const noticias = [
    {
      src: "/Home/ChanInfo1.jpg",
      title: "¿Por Qué Invertir en un Terreno es una Buena Opción en 2025?",
      date: "15 de enero de 2025",
      link: "/blog/1",
      icon: TrendingUp,
      badge: "Inversión"
    },
    {
      src: "/Home/ChanInfo2.jpg",
      title: "El Futuro Inmobiliario de Chancay con su Nuevo Puerto",
      date: "15 de enero de 2025",
      link: "/blog/2",
      icon: Gift,
      badge: "Promoción"
    },
    {
      src: "/Home/Blog14.jpg",
      title: "Innovaciones en Construcción Inteligente",
      date: "15 de enero de 2025",
      link: "/blog/10",
      icon: BarChart3,
      badge: "Sostenibilidad"
    },
  ];

  return (
    <motion.section
      className="w-full bg-gradient-to-b from-gray-50 to-white py-16 lg:py-20"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-100px" }}
      variants={staggerContainer}
    >
      <div className="w-[90%] md:w-[85%] lg:w-[80%] mx-auto">
        {/* 🔹 Encabezado mejorado */}
        <motion.div
          className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12 lg:mb-16"
          variants={fadeInUp}
        >
          <div className="mb-6 sm:mb-0">
            <div className="inline-flex items-center gap-2 bg-[#cb4a2a]/10 text-[#cb4a2a] text-sm font-semibold px-4 py-2 rounded-full mb-3">
              <Newspaper className="w-4 h-4" />
              ACTUALIDAD
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2c976a]">
              CHANCAY <span className="text-[#cb4a2a]">AL DÍA</span>
            </h2>
            <p className="text-gray-600 mt-3 text-lg max-w-2xl">
              Mantente informado con las últimas noticias, promociones y logros de Grupo Chancay 101
            </p>
          </div>

          {/* 🔗 Botón con enlace al blog */}
          <Link to="/blog">
            <motion.button
              className="group bg-white hover:bg-[#cb4a2a] text-[#cb4a2a] hover:text-white font-semibold px-6 py-3 rounded-xl transition-all border border-[#cb4a2a] shadow-sm hover:shadow-lg flex items-center gap-2"
              whileHover={{ scale: 1.05, x: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              Ver todas las noticias
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </Link>
        </motion.div>

        {/* 🔹 Tarjetas de noticias mejoradas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {noticias.map((noticia, index) => (
            <Link to={noticia.link} key={index}>
              <motion.article
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer border border-gray-100"
                variants={scaleIn}
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              >
                {/* Imagen */}
                <div className="relative overflow-hidden">
                  <motion.img
                    src={noticia.src}
                    alt={`Noticia ${index + 1}`}
                    className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Badge con icono */}
                  <div className="absolute top-4 left-4">
                    <motion.span
                      className="inline-flex items-center gap-1.5 bg-white/95 backdrop-blur-sm text-[#cb4a2a] text-xs font-bold px-3 py-1.5 rounded-full shadow-md"
                      whileHover={{ scale: 1.05 }}
                    >
                      <noticia.icon className="w-3 h-3" />
                      {noticia.badge}
                    </motion.span>
                  </div>
                </div>

                {/* Contenido */}
                <div className="p-6">
                  <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
                    <Calendar className="w-4 h-4" />
                    <span>{noticia.date}</span>
                  </div>

                  <motion.h3
                    className="text-xl font-bold text-gray-900 leading-tight mb-4 group-hover:text-[#cb4a2a] transition-colors line-clamp-3"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                  >
                    {noticia.title}
                  </motion.h3>

                  {/* Botón de leer más */}
                  <motion.div
                    className="inline-flex items-center gap-1 text-[#cb4a2a] font-semibold text-sm group-hover:gap-2 transition-all"
                    whileHover={{ x: 5 }}
                  >
                    Leer más
                    <ArrowRight className="w-4 h-4" />
                  </motion.div>
                </div>
              </motion.article>
            </Link>
          ))}
        </div>

        {/* 🔹 Llamada a la acción para móvil */}
        <motion.div
          className="mt-12 text-center lg:hidden"
          variants={fadeInUp}
        >
          <Link to="/blog">
            <motion.button
              className="bg-[#cb4a2a] hover:bg-[#a53c22] text-white font-semibold px-8 py-4 rounded-xl transition-all shadow-lg hover:shadow-xl flex items-center gap-2 mx-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Ver todas las noticias
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Noticias;