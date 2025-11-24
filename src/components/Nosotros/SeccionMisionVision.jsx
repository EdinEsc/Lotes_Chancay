import React from "react";
import { motion } from "framer-motion";
import { Target, Eye, Shield, TrendingUp, Users, Building2 } from "lucide-react";

// 🔹 Variantes de animación
const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const fadeInLeft = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const fadeInRight = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const SeccionMisionVision = () => {
  const cards = [
    {
      type: "misión",
      icon: Target,
      title: "Misión",
      description: "Brindar oportunidades de inversión seguras y accesibles, promoviendo el crecimiento patrimonial de nuestros clientes a través de proyectos urbanísticos innovadores y sostenibles.",
      features: ["Inversiones seguras", "Crecimiento patrimonial", "Proyectos sostenibles"],
      color: "from-[#32d28a] to-[#2c976a]",
      bgColor: "bg-gradient-to-br from-[#32d28a]/20 to-[#2c976a]/20",
      delay: 0.1
    },
    {
      type: "visión",
      icon: Eye,
      title: "Visión",
      description: "Ser reconocidos como la empresa líder en desarrollo inmobiliario, destacando por la confianza, la transparencia y el impacto positivo en la calidad de vida de las familias peruanas.",
      features: ["Líderes del sector", "Transparencia total", "Impacto social positivo"],
      color: "from-[#cb4a2a] to-[#e55c3a]",
      bgColor: "bg-gradient-to-br from-[#cb4a2a]/20 to-[#e55c3a]/20",
      delay: 0.3
    }
  ];

  const valores = [
    { icon: Shield, text: "Confianza y seguridad", color: "text-[#2c976a]" },
    { icon: TrendingUp, text: "Crecimiento sostenible", color: "text-[#32d28a]" },
    { icon: Users, text: "Enfoque en las familias", color: "text-[#cb4a2a]" },
    { icon: Building2, text: "Desarrollo urbano", color: "text-[#2c976a]" }
  ];

  return (
    <motion.section
      className="relative py-16 md:py-24 lg:py-28 overflow-hidden"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-50px" }}
      variants={staggerContainer}
    >
      {/* Fondos decorativos */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white"></div>
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#2c976a]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#cb4a2a]/5 rounded-full blur-3xl"></div>

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
            <Target className="w-4 h-4" />
            COMPROMISO CHANCAY
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-gray-900">Nuestra</span>
            <br />
            <span className="text-[#2c976a]">Misión</span>
            <span className="text-gray-900"> y </span>
            <span className="text-[#cb4a2a]">Visión</span>
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Más de 95 años guiando nuestro trabajo con propósito y compromiso hacia 
            las familias peruanas
          </motion.p>
        </motion.div>

        {/* 🔹 Grid de Misión y Visión */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto mb-16 lg:mb-20">
          {cards.map((card, index) => {
            const IconComponent = card.icon;
            return (
              <motion.div
                key={card.type}
                className={`relative rounded-3xl p-8 lg:p-10 shadow-2xl border border-gray-200/50 backdrop-blur-sm ${card.bgColor}`}
                variants={index === 0 ? fadeInLeft : fadeInRight}
                whileHover={{ 
                  y: -8, 
                  scale: 1.02,
                  transition: { type: "spring", stiffness: 300 }
                }}
                transition={{ delay: card.delay }}
              >
                {/* Icono con gradiente */}
                <motion.div
                  className={`inline-flex p-5 rounded-2xl bg-gradient-to-r ${card.color} text-white shadow-lg mb-6`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <IconComponent className="w-8 h-8" />
                </motion.div>

                {/* Título */}
                <motion.h3
                  className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: card.delay + 0.1 }}
                >
                  {card.title}
                </motion.h3>

                {/* Descripción */}
                <motion.p
                  className="text-lg text-gray-700 leading-relaxed mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: card.delay + 0.2 }}
                >
                  {card.description}
                </motion.p>

                {/* Características */}
                <motion.div
                  className="space-y-3"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: card.delay + 0.3 }}
                >
                  {card.features.map((feature, featureIndex) => (
                    <motion.div
                      key={featureIndex}
                      className="flex items-center gap-3 text-gray-800 font-medium"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: card.delay + 0.4 + (featureIndex * 0.1) }}
                    >
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${card.color}`}></div>
                      <span>{feature}</span>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Efecto de brillo al hover */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 -z-10"></div>
              </motion.div>
            );
          })}
        </div>

        {/* 🔹 Sección de Valores */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <motion.h3
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
          >
            Nuestros <span className="text-[#2c976a]">Valores</span>
          </motion.h3>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
            variants={staggerContainer}
          >
            {valores.map((valor, index) => {
              const ValorIcon = valor.icon;
              return (
                <motion.div
                  key={index}
                  className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-lg border border-gray-200/50 hover:shadow-xl transition-all"
                  variants={fadeInUp}
                  whileHover={{ 
                    y: -5, 
                    scale: 1.05,
                    transition: { type: "spring", stiffness: 300 }
                  }}
                >
                  <motion.div
                    className="bg-gradient-to-br from-[#2c976a] to-[#32d28a] p-4 rounded-2xl mb-4"
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    <ValorIcon className="w-6 h-6 text-white" />
                  </motion.div>
                  <span className={`font-semibold text-sm md:text-base ${valor.color}`}>
                    {valor.text}
                  </span>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>

        {/* 🔹 Llamada a la acción */}
        <motion.div
          className="text-center mt-16 lg:mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.9 }}
        >
          <motion.p
            className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1 }}
          >
            <span className="text-[#2c976a] font-bold">Confía en nuestra trayectoria</span> y 
            sé parte de los miles de peruanos que han hecho realidad su sueño de tener un terreno propio
          </motion.p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default SeccionMisionVision;