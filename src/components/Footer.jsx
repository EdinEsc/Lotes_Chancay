const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* 🔹 Contenido principal en grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          
          {/* Logo y descripción - 4 columnas */}
          <div className="lg:col-span-4">
            <div className="mb-6">
              <img
                src="/Logo/LogChancay.png"
                alt="Logo"
                className="w-40 h-auto brightness-0 invert"
              />
            </div>
            <p className="text-gray-300 text-lg leading-relaxed max-w-md">
              Construyendo sueños, creando hogares. Líderes en desarrollo inmobiliario 
              con proyectos que transforman vidas y comunidades.
            </p>
          </div>

          {/* Enlaces rápidos - 2 columnas */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-6 text-white border-l-4 border-[#cb4a2a] pl-3">
              Navegación
            </h3>
            <ul className="space-y-4 text-lg">
              <li>
                <a href="#inicio" className="text-gray-300 hover:text-white transition-colors duration-300 block py-1">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#nosotros" className="text-gray-300 hover:text-white transition-colors duration-300 block py-1">
                  Nosotros
                </a>
              </li>
              <li>
                <a href="#proyectos" className="text-gray-300 hover:text-white transition-colors duration-300 block py-1">
                  Proyectos
                </a>
              </li>
              <li>
                <a href="#contacto" className="text-gray-300 hover:text-white transition-colors duration-300 block py-1">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Contacto - 3 columnas */}
          <div className="lg:col-span-3">
            <h3 className="text-2xl font-bold mb-6 text-white border-l-4 border-[#2c976a] pl-3">
              Contacto
            </h3>
            <ul className="space-y-4 text-lg">
              <li className="text-gray-300">
                <div className="font-semibold text-white mb-1">Dirección</div>
                <div>Av. Los Olivos 345, Lima - Perú</div>
              </li>
              <li className="text-gray-300">
                <div className="font-semibold text-white mb-1">Teléfono</div>
                <div>+51 987 654 321</div>
              </li>
              <li className="text-gray-300">
                <div className="font-semibold text-white mb-1">Email</div>
                <div>contacto@almacenas.pe</div>
              </li>
            </ul>
          </div>

          {/* Redes sociales - 3 columnas */}
          <div className="lg:col-span-3">
            <h3 className="text-2xl font-bold mb-6 text-white border-l-4 border-[#cb4a2a] pl-3">
              Conéctate
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <a 
                href="#" 
                className="bg-gray-800 hover:bg-[#cb4a2a] transition-all duration-300 rounded-lg p-4 text-center group"
              >
                <div className="font-semibold group-hover:text-white text-gray-300">Facebook</div>
              </a>
              <a 
                href="#" 
                className="bg-gray-800 hover:bg-[#cb4a2a] transition-all duration-300 rounded-lg p-4 text-center group"
              >
                <div className="font-semibold group-hover:text-white text-gray-300">Instagram</div>
              </a>
              <a 
                href="#" 
                className="bg-gray-800 hover:bg-[#2c976a] transition-all duration-300 rounded-lg p-4 text-center group"
              >
                <div className="font-semibold group-hover:text-white text-gray-300">LinkedIn</div>
              </a>
              <a 
                href="#" 
                className="bg-gray-800 hover:bg-[#2c976a] transition-all duration-300 rounded-lg p-4 text-center group"
              >
                <div className="font-semibold group-hover:text-white text-gray-300">TikTok</div>
              </a>
            </div>
          </div>
        </div>

        {/* 🔹 Línea separadora */}
        <div className="border-t border-gray-700 pt-8">
          
          {/* Información adicional */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h4 className="text-xl font-bold mb-4 text-white">Horario de Atención</h4>
              <div className="text-gray-300 space-y-2">
                <div>Lunes a Viernes: 8:00 AM - 6:00 PM</div>
                <div>Sábados: 9:00 AM - 1:00 PM</div>
                <div>Domingos: Cerrado</div>
              </div>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4 text-white">Newsletter</h4>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Tu correo electrónico"
                  className="flex-1 bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#cb4a2a]"
                />
                <button className="bg-[#cb4a2a] hover:bg-[#b33e24] text-white font-semibold px-6 rounded-lg transition-colors duration-300">
                  Suscribir
                </button>
              </div>
            </div>
          </div>

          {/* 🔹 Línea inferior */}
          <div className="text-center pt-8 border-t border-gray-700">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400">
              <div className="text-lg">
                © {new Date().getFullYear()} <span className="text-white font-bold">Almacenas</span>. Todos los derechos reservados.
              </div>
              <div className="flex gap-6 text-sm">
                <a href="/Nosotros" className="hover:text-white transition-colors duration-300">
                  Política de Privacidad
                </a>
                <a href="/Nosotros" className="hover:text-white transition-colors duration-300">
                  Términos y Condiciones
                </a>
                <a href="/Nosotros" className="hover:text-white transition-colors duration-300">
                  Política de Cookies
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;