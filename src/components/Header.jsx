import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { 
  Mail, 
  UserPlus, 
  Phone, 
  MapPin, 
  Home, 
  Users, 
  Map, 
  X 
} from 'lucide-react';

import logo from '../assets/header/LogoChancay2.png';

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);

  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => {
    setMenuActive(!menuActive);
    if (menuActive) setOpenSubmenu(null);
  };

  const closeMenu = () => {
    setMenuActive(false);
    setOpenSubmenu(null);
  };


  const scrollToPlano = () => {
    if (location.pathname !== "/") {
      navigate("/#go-plano");
      return;
    }

    const section = document.getElementById("plano-lotes");
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };


const scrollToContacto = () => {
  if (location.pathname !== "/") {
    navigate("/#contacto");
    return;
  }

  const section = document.getElementById("contacto");
  if (section) {
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};



  return (
    <header className="fixed top-0 left-0 w-full bg-white z-50 shadow-lg border-b-2 border-[#2c976a]">

      <div className="bg-[#2c976a] text-white py-2 px-4 text-sm">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center space-y-1 sm:space-y-0">
          <div className="flex items-center space-x-6">
            <div className="flex items-center">
              <Phone className="h-4 w-4 mr-2" />
              <span>+51 983 722 524</span>
            </div>

            <div className="flex items-center">
              <MapPin className="h-4 w-4 mr-2" />
              <span>Chancay 101, Lima Norte</span>
            </div>
          </div>

          <div className="text-green-100 font-medium">
            ¡Oportunidad de inversión! Lotes desde S/ 17,200
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-20">

          <Link 
            to="/" 
            className="flex-shrink-0 flex items-center ml-4 lg:ml-8 xl:ml-12 mr-8 lg:mr-12"
          >
            <img
              src={logo}
              alt="Lotes Chancay"
              className="h-16 sm:h-18 md:h-20 w-auto object-contain hover:scale-105 transition-transform duration-300"
            />
          </Link>

          <div className="hidden lg:flex lg:items-center lg:space-x-10">

            <Link 
              to="/" 
              className="relative text-[#2c976a] font-bold text-[1.1rem] group flex items-center"
            >
              <Home className="h-5 w-5 mr-2" />
              Inicio
              <span className="absolute left-0 bottom-[-6px] w-0 h-1 bg-[#cb4a2a] group-hover:w-full transition-all"></span>
            </Link>

            <Link 
              to="/conocenos" 
              className="relative text-[#2c976a] font-bold text-[1.1rem] group flex items-center"
            >
              <Users className="h-5 w-5 mr-2" />
              Nosotros
              <span className="absolute left-0 bottom-[-6px] w-0 h-1 bg-[#cb4a2a] group-hover:w-full transition-all"></span>
            </Link>

            <button
              onClick={scrollToPlano}
              className="relative text-[#2c976a] font-bold text-[1.1rem] group flex items-center"
            >
              <Map className="h-5 w-5 mr-2" />
              Plano de Lotes
              <span className="absolute left-0 bottom-[-6px] w-0 h-1 bg-[#cb4a2a] group-hover:w-full transition-all"></span>
            </button>

          </div>

          <div className="hidden lg:flex items-center mr-4 space-x-4">

            <button
              onClick={scrollToContacto}
              className="flex items-center space-x-2 px-6 py-3 rounded-full bg-[#cb4a2a] text-white font-bold hover:bg-[#b54325] transition-all shadow-lg hover:shadow-xl transform hover:scale-105 animate-pulse"
            >
              <UserPlus className="h-5 w-5" />
              <span>CONTACTANOS</span>
            </button>

            <img
              src="/sunarp-blanco.png"
              alt="Sunarp"
              className="h-14 w-auto object-contain"

            />

          </div>


          <div className="lg:hidden mr-4">
            <button
              className="p-3 rounded-xl text-[#2c976a] hover:bg-[#2c976a]/10 transition-all"
              onClick={toggleMenu}
            >
              <svg className="h-7 w-7" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>
              </svg>
            </button>
          </div>

        </nav>
      </div>

      <div
        className={`lg:hidden fixed inset-0 z-40 transition-all ${
          menuActive ? 'bg-black/50' : 'bg-transparent pointer-events-none'
        }`}
        onClick={toggleMenu}
      >
        <div
          className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl transition-transform duration-300 ${
            menuActive ? 'translate-x-0' : 'translate-x-full'
          }`}
          onClick={(e) => e.stopPropagation()}
        >

          <div className="flex justify-between items-center p-6 border-b border-[#2c976a]/20 bg-[#2c976a]/10">
            <img src={logo} className="h-14 w-auto" alt="Lotes" />
            <button className="p-2 rounded-lg text-[#2c976a] hover:bg-[#2c976a]/10" onClick={toggleMenu}>
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="p-6 space-y-2 h-[calc(100vh-80px)] overflow-y-auto">

            <Link 
              to="/" 
              className="flex items-center px-4 py-4 text-lg font-bold text-[#2c976a] rounded-xl hover:bg-[#2c976a]/10 border-l-4 border-[#2c976a]"
              onClick={closeMenu}
            >
              <Home className="h-5 w-5 mr-3" />
              Inicio
            </Link>

            <Link 
              to="/conocenos" 
              className="flex items-center px-4 py-4 text-lg font-bold text-[#2c976a] rounded-xl hover:bg-[#2c976a]/10 border-l-4 border-[#2c976a]"
              onClick={closeMenu}
            >
              <Users className="h-5 w-5 mr-3" />
              Nosotros
            </Link>

            <button 
              onClick={() => {
                scrollToPlano();
                closeMenu();
              }}
              className="flex items-center px-4 py-4 text-lg font-bold text-[#2c976a] rounded-xl hover:bg-[#2c976a]/10 border-l-4 border-[#2c976a]"
            >
              <Map className="h-5 w-5 mr-3" />
              Plano de Lotes
            </button>

            <div className="border-t border-[#2c976a]/20 my-2"></div>

         
            <button
                onClick={() => {
                  scrollToContacto();
                  closeMenu();
                }}
                className="flex items-center justify-center space-x-2 px-4 py-4 bg-[#cb4a2a] text-white font-bold rounded-xl hover:bg-[#b54325] shadow-lg animate-pulse"
              >
                <UserPlus className="h-5 w-5" />
                <span>CONTACTANOS</span>
              </button>



            <div className="mt-6 p-4 bg-[#2c976a]/10 rounded-xl text-sm text-[#2c976a] space-y-2">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                <span>+51 983 722 524</span>
              </div>

              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                <span>Chancay, Lima</span>
              </div>
            </div>

          </div>

        </div>
      </div>

    </header>
  );
};

export default Header;
