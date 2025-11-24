import React from "react";
import { motion } from "framer-motion";
import { MessageCircle, Phone, Mail, MapPin, ArrowDown } from "lucide-react";

const HeroContacto = () => {
  const contactMethods = [
    { icon: Phone, text: "Llámanos", subtext: "+51 123 456 789" },
    { icon: Mail, text: "Escríbenos", subtext: "info@centenario.com" },
    { icon: MapPin, text: "Visítanos", subtext: "Oficina principal Lima" }
  ];

  return (
    <section className="relative flex items-center justify-center min-h-screen bg-cover bg-center overflow-hidden">
      {/* Imagen de fondo con parallax effect */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: "url('/contacto/ChancayContacto.png')" }}
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />

      {/* Overlay con gradiente */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/70" />

      {/* Contenido principal MÁS GRANDE Y LLAMATIVO */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          className="text-white"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          {/* Badge más grande */}
          <motion.div
            className="inline-flex items-center gap-3 bg-white/25 backdrop-blur-lg text-white text-lg font-bold px-6 py-4 rounded-full mb-8 border border-white/30"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <MessageCircle className="w-6 h-6" />
            CONTACTO CHANCAY
          </motion.div>

          {/* Título MÁS GRANDE */}
          <motion.h1
            className="text-6xl md:text-8xl lg:text-9xl font-black leading-none mb-8"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <span className="text-white block">¡HOLA!</span>
            <span className="text-[#32d28a] block text-5xl md:text-7xl lg:text-8xl mt-4">
              ¿CÓMO PODEMOS AYUDARTE?
            </span>
          </motion.h1>

          {/* Descripción más grande */}
          <motion.p
            className="text-2xl md:text-3xl lg:text-4xl text-gray-200 leading-relaxed mb-12 max-w-4xl mx-auto font-medium"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Estamos aquí para resolver tus dudas, asesorarte en tu inversión 
            y brindarte la mejor atención personalizada.
          </motion.p>

          {/* Métodos de contacto MÁS GRANDES */}
          <motion.div
            className="flex justify-center gap-6 mb-12 flex-wrap"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
          </motion.div>

          {/* Botones CTA MÁS GRANDES */}
          <motion.div
            className="flex justify-center gap-6 flex-col sm:flex-row"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
          >
            <motion.button
              className="bg-[#32d28a] hover:bg-[#27a56f] text-white font-black py-6 px-12 rounded-2xl text-2xl shadow-2xl transition-all flex items-center justify-center gap-4 min-w-[280px]"
              whileHover={{ 
                scale: 1.1, 
                boxShadow: "0 20px 40px rgba(50, 210, 138, 0.4)" 
              }}
              whileTap={{ scale: 0.95 }}
            >
              <MessageCircle className="w-8 h-8" />
              SOLICITAR INFORMACIÓN
            </motion.button>

            <motion.button
              className="bg-transparent hover:bg-white/20 text-white font-bold py-6 px-12 rounded-2xl border-3 border-white transition-all flex items-center justify-center gap-4 min-w-[240px] text-2xl"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone className="w-8 h-8" />
              LLAMAR AHORA
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroContacto;