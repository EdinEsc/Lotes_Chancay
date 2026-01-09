// import { useState, useEffect } from "react";
// import { MapPin, Ruler } from "lucide-react";
// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";
// import Testimonios from '../../components/Testimonios/Testimonios';
import Team from '../../components/Team/Team';
import Hero from '../../components/Hero/Hero';
// import Formulario from '../../components/Formulario/Formulario';
// import Formulario22 from '../../components/Formulario/Formulario22';
// import Compra from "../../components/Compra/Compra";
// import Noticias from "../../components/Noticias/Noticias";
// import Proyecto from "../../components/Proyecto/Proyecto";
import Proyecto1 from "../../components/Proyecto1/Proyecto1";
import Ubicacion from "../../components/Proyecto1/Ubicacion";
// import AFPSection from "../../components/Proyecto1/AFPSection";
import BlogPie from "../../components/Blog/Blogpie";
import Galeria from '../../components/Lotes/Galeria';
import SectionBackground from '../../components/Background/SectionBackground';
import ContactForm from "../../components/Contac/ContactForm";

const Home = () => {

  return (
  <div className="w-full overflow-x-hidden -mt-[80px] sm:-mt-[96px] md:-mt-[112px] lg:-mt-[128px]">



      <SectionBackground />
      {/* <ContactForm /> */}
      <section id="contacto" className="scroll-mt-20">
        <ContactForm />
      </section>


      {/* SECCIÓN PRINCIPAL HERO - Lo primero que se ve */}
      {/* <section id="inicio">
        <Hero />
      </section> */}

      {/* <AFPSection /> */}
      {/* SECCIÓN FORMULARIO */}
      {/* <section id="formulario">
        <Formulario />
      </section> */}
      
      <Proyecto1 />
      {/* <Ubicacion/> */}

      {/* SECCIÓN FORMULARIO */}
      {/* <section id="formulario">
        <Formulario22 />
      </section> */}
      

      
      {/* Otras secciones */}
      {/* <Proyecto /> */}

      
      {/* 🔹 SECCIÓN DE TESTIMONIOS - Aquí va el componente */}
      {/* <section id="testimonios" className="testimonios-section">
        <Testimonios />
      </section> */}
      
      <Galeria />
      {/* 🔹 NUEVA SECCIÓN - Equipo */}
      {/* <section id="equipo">
        <Team />
      </section> */}

      {/* Otras secciones */}
      {/* <Compra /> */}
  
      {/* <ContactForm /> */}
      {/* Otras secciones */}
      {/* <Noticias /> */}

      {/* <BlogPie /> */}

    </div>
  );
};

export default Home;




// import { useEffect } from "react";
// import { useLocation } from "react-router-dom";

// import Testimonios from '../../components/Testimonios/Testimonios';
// import Team from '../../components/Team/Team';
// import Hero from '../../components/Hero/Hero';
// import Proyecto1 from "../../components/Proyecto1/Proyecto1";
// import Ubicacion from "../../components/Proyecto1/Ubicacion";
// import AFPSection from "../../components/Proyecto1/AFPSection";
// import BlogPie from "../../components/Blog/Blogpie";
// import Galeria from '../../components/Lotes/Galeria';

// const Home = () => {

//   // 🔥 DETECTA SI VIENES DE OTRA PÁGINA PARA SCROLLEAR AL PLANO DE LOTES
//   const location = useLocation();

//   useEffect(() => {
//     if (location.hash === "#go-plano") {
//       setTimeout(() => {
//         document.getElementById("plano-lotes")?.scrollIntoView({
//           behavior: "smooth",
//           block: "start",
//         });
//       }, 300);
//     }
//   }, [location]);

//   return (
//     <div className="w-full overflow-x-hidden -mt-[80px] sm:-mt-[96px] md:-mt-[112px] lg:-mt-[128px]">

//       {/* HERO PRINCIPAL */}
//       <section id="inicio">
//         <Hero />
//       </section>

//       <AFPSection />
//       <Ubicacion />
//       <Proyecto1 />

//       {/* GALERÍA DE LOTES (AQUÍ DEBE TENER id="plano-lotes") */}
//       <section id="plano-lotes">
//         <Galeria />
//       </section>

//       {/* EQUIPO */}
//       <section id="equipo">
//         <Team />
//       </section>

//       <BlogPie />

//     </div>
//   );
// };

// export default Home;
