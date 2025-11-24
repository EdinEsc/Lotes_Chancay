import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Mail, 
  UserPlus, 
  Phone, 
  MapPin, 
  Home, 
  Users, 
  FileText, 
  Map, 
  FolderOpen,
  ChevronDown,
  ChevronRight,
  X
} from 'lucide-react';
import logo from '../assets/header/LogoChancay2.png';

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
    if (menuActive) setOpenSubmenu(null);
  };

  const toggleSubmenu = (index) => {
    setOpenSubmenu(openSubmenu === index ? null : index);
  };

  const closeMenu = () => {
    setMenuActive(false);
    setOpenSubmenu(null);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white z-50 shadow-lg border-b-2 border-[#2c976a]">
      {/* Barra superior de contacto */}
      <div className="bg-[#2c976a] text-white py-2 px-4 text-sm">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center space-y-1 sm:space-y-0">
          <div className="flex items-center space-x-6">
            <div className="flex items-center">
              <Phone className="h-4 w-4 mr-2" />
              <span>+51 987 654 321</span>
            </div>
            <div className="flex items-center">
              <MapPin className="h-4 w-4 mr-2" />
              <span>Chancay, Lima</span>
            </div>
          </div>
          <div className="text-green-100 font-medium">
            ¡Oportunidad de inversión! Lotes desde $15,000
          </div>
        </div>
      </div>

      {/* Navegación principal */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-20">
          
          {/* Logo con más espacio en escritorio */}
          <Link to="/" className="flex-shrink-0 flex items-center ml-4 lg:ml-8 xl:ml-12 mr-8 lg:mr-12">

            <img
              src={logo}
              alt="Lotes Chancay - Inversiones Inmobiliarias"
              className="h-16 sm:h-18 md:h-20 w-auto object-contain hover:scale-105 transition-transform duration-300"
            />
          </Link>

          {/* Menú Desktop */}
          <div className="hidden lg:flex lg:items-center lg:space-x-8 xl:space-x-12">
            {[
              { to: '/', label: 'Inicio', icon: Home },
              { to: '/conocenos/nosotros', label: 'Nosotros', icon: Users },
              { to: '/blog', label: 'Blog', icon: FileText },
              { to: '/mapa-lotes', label: 'Lotes', icon: Map },
            ].map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="relative text-[#2c976a] font-bold text-[1.1rem] whitespace-nowrap transition-all duration-300 hover:text-[#247a56] group flex items-center"
              >
                <item.icon className="h-5 w-5 mr-2" />
                {item.label}
                <span className="absolute left-0 bottom-[-6px] w-0 h-1 bg-[#cb4a2a] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}

            {/* Submenú Proyectos */}
            {/* <div className="relative group">
              <button className="relative text-[#2c976a] font-bold text-[1.1rem] whitespace-nowrap hover:text-[#247a56] transition-all flex items-center group">
                <FolderOpen className="h-5 w-5 mr-2" />
                Proyectos
                <ChevronDown className="ml-1 h-5 w-5 transition-transform group-hover:rotate-180" />
                <span className="absolute left-0 bottom-[-6px] w-0 h-1 bg-[#cb4a2a] transition-all duration-300 group-hover:w-full"></span>
              </button>

              <div className="absolute left-0 mt-4 w-64 bg-white rounded-xl shadow-2xl py-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 border border-[#2c976a]/20">
                <div className="absolute -top-2 left-6 w-4 h-4 bg-white transform rotate-45 border-l border-t border-[#2c976a]/20"></div>
                <Link 
                  to="/proyectos/prados-paraiso" 
                  className="flex items-center px-6 py-3 text-base text-gray-800 hover:bg-[#2c976a]/10 hover:text-[#2c976a] hover:font-semibold transition-all border-l-4 border-transparent hover:border-[#cb4a2a]"
                >
                  <Home className="h-4 w-4 mr-3" />
                  Prados Paraíso
                </Link>
                <Link 
                  to="/proyectos/portales" 
                  className="flex items-center px-6 py-3 text-base text-gray-800 hover:bg-[#2c976a]/10 hover:text-[#2c976a] hover:font-semibold transition-all border-l-4 border-transparent hover:border-[#cb4a2a]"
                >
                  <Home className="h-4 w-4 mr-3" />
                  Los Portales
                </Link>
                <Link 
                  to="/proyectos/inversiones-pino" 
                  className="flex items-center px-6 py-3 text-base text-gray-800 hover:bg-[#2c976a]/10 hover:text-[#2c976a] hover:font-semibold transition-all border-l-4 border-transparent hover:border-[#cb4a2a]"
                >
                  <Home className="h-4 w-4 mr-3" />
                  Inversiones El Pino
                </Link>
              </div>
            </div> */}
          </div>

          {/* Botones de acción Desktop */}
          <div className="hidden lg:flex lg:items-center lg:space-x-4 mr-4 ml-6">
            <Link
              to="/contacto"
              className="flex items-center space-x-2 px-6 py-3 rounded-full bg-[#2c976a] text-white font-semibold hover:bg-[#247a56] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              title="Contáctanos"
            >
              <Mail className="h-5 w-5" />
              <span>Contacto</span>
            </Link>

            <a
              href="/#formulario"
              className="flex items-center space-x-2 px-6 py-3 rounded-full bg-[#cb4a2a] text-white font-bold hover:bg-[#b54325] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 animate-pulse"
              title="¡Regístrate y obtén descuento!"
            >
              <UserPlus className="h-5 w-5" />
              <span>¡REGÍSTRATE!</span>
            </a>
          </div>


          {/* Botón hamburguesa móvil */}
          <div className="lg:hidden mr-4">
            <button
              className="p-3 rounded-xl text-[#2c976a] hover:bg-[#2c976a]/10 focus:outline-none focus:ring-2 focus:ring-[#2c976a] transition-all"
              onClick={toggleMenu}
            >
              <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </nav>
      </div>

      {/* Menú móvil */}
      <div className={`lg:hidden fixed inset-0 z-40 transition-all duration-300 ${menuActive ? 'bg-black bg-opacity-50' : 'bg-transparent pointer-events-none'}`} onClick={toggleMenu}>
        <div
          className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out ${menuActive ? 'translate-x-0' : 'translate-x-full'}`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header del menú móvil */}
          <div className="flex justify-between items-center p-6 border-b border-[#2c976a]/20 bg-[#2c976a]/10">
            <img src={logo} alt="Lotes Chancay" className="h-14 w-auto" />
            <button 
              className="p-2 rounded-lg text-[#2c976a] hover:bg-[#2c976a]/10 transition-colors" 
              onClick={toggleMenu}
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Contenido del menú móvil */}
          <div className="p-6 space-y-2 h-[calc(100vh-80px)] overflow-y-auto">
            <Link 
              to="/" 
              className="flex items-center px-4 py-4 text-lg font-bold text-[#2c976a] rounded-xl hover:bg-[#2c976a]/10 transition-all border-l-4 border-[#2c976a]"
              onClick={closeMenu}
            >
              <Home className="h-5 w-5 mr-3" />
              Inicio
            </Link>

            <Link 
              to="/conocenos/nosotros" 
              className="flex items-center px-4 py-4 text-lg font-bold text-[#2c976a] rounded-xl hover:bg-[#2c976a]/10 transition-all border-l-4 border-[#2c976a]"
              onClick={closeMenu}
            >
              <Users className="h-5 w-5 mr-3" />
              Nosotros
            </Link>

            <div className="border-t border-[#2c976a]/20 my-2"></div>

            {/* <button 
              className="flex justify-between items-center w-full px-4 py-4 text-lg font-bold text-[#2c976a] rounded-xl hover:bg-[#2c976a]/10 transition-all"
              onClick={() => toggleSubmenu(2)}
            >
              <div className="flex items-center">
                <FolderOpen className="h-5 w-5 mr-3" />
                <span>Nuestros Proyectos</span>
              </div>
              <ChevronRight className={`h-5 w-5 transition-transform ${openSubmenu === 2 ? 'rotate-90' : ''}`} />
            </button> */}
            
            {/* {openSubmenu === 2 && (
              <div className="ml-8 space-y-1 mt-1 bg-[#2c976a]/5 rounded-lg p-2">
                <Link to="/proyectos/prados-paraiso" className="flex items-center px-4 py-3 text-gray-700 rounded-lg hover:bg-[#2c976a]/10 transition-all" onClick={closeMenu}>
                  <Home className="h-4 w-4 mr-3" />
                  Prados Paraíso
                </Link>
                <Link to="/proyectos/portales" className="flex items-center px-4 py-3 text-gray-700 rounded-lg hover:bg-[#2c976a]/10 transition-all" onClick={closeMenu}>
                  <Home className="h-4 w-4 mr-3" />
                  Los Portales
                </Link>
                <Link to="/proyectos/inversiones-pino" className="flex items-center px-4 py-3 text-gray-700 rounded-lg hover:bg-[#2c976a]/10 transition-all" onClick={closeMenu}>
                  <Home className="h-4 w-4 mr-3" />
                  Inversiones El Pino
                </Link>
              </div>
            )} */}

            <Link 
              to="/blog" 
              className="flex items-center px-4 py-4 text-lg font-bold text-[#2c976a] rounded-xl hover:bg-[#2c976a]/10 transition-all border-l-4 border-[#2c976a]"
              onClick={closeMenu}
            >
              <FileText className="h-5 w-5 mr-3" />
              Blog
            </Link>

            <Link 
              to="/mapa-lotes" 
              className="flex items-center px-4 py-4 text-lg font-bold text-[#2c976a] rounded-xl hover:bg-[#2c976a]/10 transition-all border-l-4 border-[#2c976a]"
              onClick={closeMenu}
            >
              <Map className="h-5 w-5 mr-3" />
              Mapa de Lotes
            </Link>

            <div className="border-t border-[#2c976a]/20 my-2"></div>

            {/* Botones de acción móvil */}
            <div className="space-y-3 pt-4">
              <Link 
                to="/contacto" 
                className="flex items-center justify-center space-x-2 px-4 py-4 bg-[#2c976a] text-white font-bold rounded-xl hover:bg-[#247a56] transition-all shadow-lg"
                onClick={closeMenu}
              >
                <Mail className="h-5 w-5" />
                <span>Contactar Asesor</span>
              </Link>

              <a 
                href="/#formulario" 
                className="flex items-center justify-center space-x-2 px-4 py-4 bg-[#cb4a2a] text-white font-bold rounded-xl hover:bg-[#b54325] transition-all shadow-lg animate-pulse"
                onClick={closeMenu}
              >
                <UserPlus className="h-5 w-5" />
                <span>¡REGÍSTRATE AQUÍ!</span>
              </a>
            </div>

            {/* Info de contacto móvil */}
            <div className="mt-6 p-4 bg-[#2c976a]/10 rounded-xl">
              <div className="text-sm text-[#2c976a] space-y-2">
                <div className="flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  <span>+51 987 654 321</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span>Chancay, Lima</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;