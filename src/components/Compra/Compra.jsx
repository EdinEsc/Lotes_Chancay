import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// 🔹 Variantes de animación (puedes ajustarlas o importarlas si ya las tienes)
const fadeInUp = {
  initial: { opacity: 0, y: 50 },
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
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const Compra = () => {
  return (
    <motion.section
      className="bg-[#2c976a] text-white rounded-2xl p-8 flex flex-col md:flex-row justify-between items-center w-full md:w-[80%] mx-auto relative mt-20"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      variants={fadeInUp}
    >
      {/* Imagen a la izquierda */}
      <motion.div
        className="flex-1 flex justify-center items-center mb-8 md:mb-0"
        variants={fadeInLeft}
      >
        <motion.img
          src="/Home/ChancayCompra.png"
          alt="Promoción Centenario"
          className="w-full max-w-[380px] object-contain"
          whileHover={{ scale: 1.05, rotate: -2 }}
          transition={{ type: "spring", stiffness: 200 }}
        />
      </motion.div>

      {/* Contenedor de texto a la derecha */}
      <motion.div
        className="flex-1 flex flex-col justify-center items-start space-y-6 md:pl-12"
        variants={fadeInRight}
      >
        {/* Título principal */}
        <motion.div
          className="relative bg-white text-[#cb4a2a] font-bold text-3xl md:text-4xl px-10 py-6 rounded-xl w-fit shadow-lg
            after:content-[''] after:absolute after:left-1/2 after:bottom-[-14px] after:-translate-x-1/2 
            after:border-[10px] after:border-transparent after:border-t-white"
          whileHover={{ scale: 1.02, y: -5 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          ¡COMPRA HOY TU TERRENO CON CENTENARIO!
        </motion.div>

        {/* Lista de beneficios */}
        <motion.ul className="space-y-4 mt-4" variants={staggerContainer}>
          {[
            "Crédito Directo (incluyendo personas no bancarizadas)",
            "Hasta 15 años para pagarlo",
            "Si pagas al contado, pide tu descuento",
          ].map((item, index) => (
            <motion.li
              key={index}
              className="flex items-start gap-3"
              variants={fadeInRight}
              whileHover={{ x: 10 }}
            >
              <motion.span
                className="text-white text-xl"
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                ✔
              </motion.span>
              <p>{item}</p>
            </motion.li>
          ))}
        </motion.ul>

        {/* Botón */}
        <Link to="/contacto">
          <motion.button
            className="bg-[#cb4a2a] hover:bg-[#a23b21] text-white font-bold py-3 px-8 rounded-lg transition duration-300"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 25px rgba(203, 74, 42, 0.4)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            Solicitar información
          </motion.button>
        </Link>
      </motion.div>
    </motion.section>
  );
};

export default Compra;
