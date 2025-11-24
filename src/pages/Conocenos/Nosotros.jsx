// import { useState, useEffect } from "react";
// import {Home, CreditCard, Handshake, TrendingUp, Building2, Users, MapPin } from "lucide-react";
// import { motion } from "framer-motion";
// import HeroSection from "../../components/Nosotros/HeroSection";
import NosotrosSection from "../../components/Nosotros/NosotrosSection";
import BeneficiosSection from "../../components/Nosotros/BeneficiosSection";
import SeccionFamiliasFelices from "../../components/Nosotros/SeccionFamiliasFelices";
import SeccionLineaDeTiempo from "../../components/Nosotros/SeccionLineaDeTiempo";
import SeccionMisionVision from "../../components/Nosotros/SeccionMisionVision";
import BlogPie from "../../components/Blog/Blogpie";

const Nosotros = () => {

return (
    <div className="w-full overflow-x-hidden -mt-[80px] sm:-mt-[56px] md:-mt-[64px] lg:-mt-[80px] relative">
      {/* <HeroSection /> */}

      <NosotrosSection />
        
      <BeneficiosSection />

      <SeccionFamiliasFelices />

      <SeccionLineaDeTiempo />

      <SeccionMisionVision />

       {/* ...otras secciones del blog... */}
      <BlogPie />
    </div>
  );
};

export default Nosotros;