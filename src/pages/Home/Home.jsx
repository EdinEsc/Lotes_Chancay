import { useState, useEffect } from "react";
import { MapPin, Ruler } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Testimonios from '../../components/Testimonios/Testimonios';
import Team from '../../components/Team/Team';
import Hero from '../../components/Hero/Hero';
import Formulario from '../../components/Formulario/Formulario';
import Formulario22 from '../../components/Formulario/Formulario22';
import Compra from "../../components/Compra/Compra";
import Noticias from "../../components/Noticias/Noticias";
import Proyecto from "../../components/Proyecto/Proyecto";


const Home = () => {

  return (
  <div className="w-full overflow-x-hidden -mt-[80px] sm:-mt-[96px] md:-mt-[112px] lg:-mt-[128px]">


      {/* SECCIÓN PRINCIPAL HERO - Lo primero que se ve */}
      <section id="inicio">
        <Hero />
      </section>

      {/* SECCIÓN FORMULARIO */}
      <section id="formulario">
        <Formulario />
      </section>

      {/* Otras secciones */}
      <Proyecto />

      
      {/* 🔹 SECCIÓN DE TESTIMONIOS - Aquí va el componente */}
      <section id="testimonios" className="testimonios-section">
        <Testimonios />
      </section>
      

      {/* 🔹 NUEVA SECCIÓN - Equipo */}
      <section id="equipo">
        <Team />
      </section>

      {/* Otras secciones */}
      <Compra />
  

      {/* Otras secciones */}
      <Noticias />




      {/* SECCIÓN FORMULARIO */}
      <section id="formulario">
        <Formulario22 />
      </section>

    </div>
  );
};

export default Home;