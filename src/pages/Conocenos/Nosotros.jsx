import NosotrosSection from "../../components/Nosotros/NosotrosSection";
import BeneficiosSection from "../../components/Nosotros/BeneficiosSection";
import SeccionMisionVision from "../../components/Nosotros/SeccionMisionVision";
// import BlogPie from "../../components/Blog/Blogpie";

const Nosotros = () => {

return (
    <div className="w-full overflow-x-hidden -mt-[80px] sm:-mt-[56px] md:-mt-[64px] lg:-mt-[80px] relative">

      <NosotrosSection />
        
      <BeneficiosSection />

      <SeccionMisionVision />

      {/* <BlogPie /> */}
    </div>
  );
};

export default Nosotros;