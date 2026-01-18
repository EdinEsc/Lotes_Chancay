import Proyecto1 from "../../components/Proyecto1/Proyecto1";
import Galeria from '../../components/Lotes/Galeria';
import SectionBackground from '../../components/Background/SectionBackground';
import ContactForm from "../../components/Contac/ContactForm";
import Referencias from "../../components/Referencias/Referencias"

const Home = () => {

  return (
  <div className="w-full overflow-x-hidden -mt-[80px] sm:-mt-[96px] md:-mt-[112px] lg:-mt-[128px]">

    <SectionBackground />
    
    <section id="contacto" className="scroll-mt-20">
      <ContactForm />
    </section>

    <Proyecto1 />
 
    <Galeria />
 
    <Referencias/>

    </div>
  );
};

export default Home;
