import React from 'react';
import { motion } from 'framer-motion';

const Team = () => {
  // Animaciones
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const fadeInLeft = {
    initial: { opacity: 0, x: -60 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const fadeInRight = {
    initial: { opacity: 0, x: 60 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const scaleIn = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  // Datos de las imágenes del equipo
  const teamImages = [
    {
      src: "/Home/Chan1.jpg",
      alt: "Miembro del equipo",
      className: "w-44 h-56 rounded-2xl object-cover md:mt-20 mx-auto min-[450px]:mr-0"
    },
    {
      src: "/Home/Chan2.jpg",
      alt: "Miembro del equipo",
      className: "w-44 h-56 rounded-2xl object-cover mx-auto min-[450px]:ml-0 md:mx-auto"
    },
    {
      src: "/Home/Chan3.jpg",
      alt: "Miembro del equipo",
      className: "w-44 h-56 rounded-2xl object-cover md:mt-20 mx-auto min-[450px]:mr-0 md:ml-0"
    },
    {
      src: "/Home/Chan4.jpg",
      alt: "Miembro del equipo",
      className: "w-44 h-56 rounded-2xl object-cover mx-auto min-[450px]:ml-0 md:mr-0 md:ml-auto"
    },
    {
      src: "/Home/Chan5.jpg",
      alt: "Miembro del equipo",
      className: "w-44 h-56 rounded-2xl object-cover md:-mt-20 mx-auto min-[450px]:mr-0 md:mx-auto"
    },
    {
      src: "/Home/Chan6.jpg",
      alt: "Miembro del equipo",
      className: "w-44 h-56 rounded-2xl object-cover mx-auto min-[450px]:ml-0 md:mr-0"
    }
  ];

  return (
    <motion.section 
      className="py-24 bg-gray-50"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-100px" }}
      variants={staggerContainer}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center flex-col lg:flex-row md:mt-20">
          
          {/* Columna izquierda - Texto y botón */}
          <motion.div 
            className="w-full lg:w-1/2"
            variants={fadeInLeft}
          >
            <motion.h2
              className="text-5xl text-[#2c976a] font-bold leading-[4rem] mb-7 text-center lg:text-left"
              variants={fadeInUp}
            >
              Nuestro equipo líder, fuerte y creativo
             
            </motion.h2>

           
            <motion.p 
            className="text-lg text-gray-500 mb-16 text-center lg:text-left"
            variants={fadeInUp}
            >
            Invierte con confianza en un futuro seguro para tu familia. <br />
            ¡Haz una compra 100% segura con Centenario!
            </motion.p>
            
            <motion.button 
              className="cursor-pointer py-3 px-8 w-60 bg-[#cb4a2a] text-white text-base font-semibold transition-all duration-500 block text-center rounded-full hover:bg-[#a23b21] mx-auto lg:mx-0"
              variants={fadeInUp}
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 10px 25px rgba(203, 74, 42, 0.3)" 
              }}
              whileTap={{ scale: 0.95 }}
            >
              ¡Conocer mas!
            </motion.button>
          </motion.div>

          {/* Columna derecha - Grid de imágenes */}
          <motion.div 
            className="w-full lg:w-1/2 lg:mt-0 md:mt-40 mt-16 max-lg:max-w-2xl"
            variants={fadeInRight}
          >
            <div className="grid grid-cols-1 min-[450px]:grid-cols-2 md:grid-cols-3 gap-8">
              {teamImages.map((image, index) => (
                <motion.img
                  key={index}
                  src={image.src}
                  alt={image.alt}
                  className={image.className}
                  variants={scaleIn}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -10,
                    transition: { type: "spring", stiffness: 300 }
                  }}
                  whileInView={{ 
                    opacity: 1, 
                    scale: 1,
                    transition: { delay: index * 0.1, duration: 0.6 }
                  }}
                  viewport={{ once: true }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Team;