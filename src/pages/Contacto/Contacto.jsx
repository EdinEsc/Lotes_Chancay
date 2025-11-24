// import React, { useState } from "react";
// import { motion } from "framer-motion";
import HeroContacto from "../../components/Contacto/HeroContacto";
import Formulario from '../../components/Contacto/Formulario';
     import BlogPie from "../../components/Blog/Blogpie";
const Contacto = () => {
  return (
    <div className="w-full overflow-x-hidden -mt-[80px] sm:-mt-[96px] md:-mt-[112px] lg:-mt-[128px]">

     {/* Primera seccion /> */}
      <HeroContacto />
      
      {/* Sedubda seccion del formulario */}
      <section id="formulario">
        <Formulario />
      </section>

     { /* ...otras secciones del blog... */}
      <BlogPie />

    </div>
  );
};

export default Contacto;