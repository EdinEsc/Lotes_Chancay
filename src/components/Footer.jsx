import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

// Componente Modal que se incluye dentro del Footer
const TermsModal = ({ isOpen, onClose, type }) => {
  if (!isOpen) return null;

  // Contenido para cada tipo de modal
  const content = {
    terms: [
      {
        id: 1,
        title: "Aceptación de términos",
        content: "Al utilizar este formulario, aceptas expresamente los términos y condiciones aquí establecidos para el procesamiento de tu información personal con fines de contacto comercial."
      },
      {
        id: 2,
        title: "Uso de información",
        content: "La información proporcionada será utilizada exclusivamente para contactarte y brindarte información sobre los terrenos disponibles, precios, financiamiento y detalles del proyecto inmobiliario."
      },
      {
        id: 3,
        title: "Confidencialidad",
        content: "Nos comprometemos a proteger tu información personal y a no compartirla con terceros sin tu consentimiento expreso, excepto cuando sea requerido por ley."
      },
      {
        id: 4,
        title: "Responsabilidades",
        content: "Te comprometes a proporcionar información veraz y actualizada. Cualquier dato falso puede resultar en la cancelación del proceso de contacto."
      }
    ],
    privacy: [
      {
        id: 1,
        title: "Recopilación de datos",
        content: "Recopilamos únicamente la información necesaria para contactarte y brindarte el servicio solicitado, incluyendo nombre, contacto y preferencias de ubicación."
      },
      {
        id: 2,
        title: "Uso de datos",
        content: "Tu información será utilizada para enviarte información promocional, actualizaciones sobre proyectos y ofertas especiales relacionadas con terrenos y propiedades."
      },
      {
        id: 3,
        title: "Protección de datos",
        content: "Implementamos medidas de seguridad técnicas y organizativas para proteger tu información contra acceso no autorizado, alteración o destrucción."
      },
      {
        id: 4,
        title: "Derechos del usuario",
        content: "Tienes derecho a acceder, rectificar, cancelar u oponerte al tratamiento de tus datos personales en cualquier momento contactándonos directamente."
      }
    ],
    cookies: [
      {
        id: 1,
        title: "¿Qué son las cookies?",
        content: "Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitas nuestro sitio web. Nos ayudan a mejorar tu experiencia de navegación y a personalizar el contenido."
      },
      {
        id: 2,
        title: "Cookies que utilizamos",
        content: "Utilizamos cookies esenciales para el funcionamiento del sitio, cookies de análisis para entender cómo usas nuestro sitio, y cookies de preferencias para recordar tus ajustes y preferencias."
      },
      {
        id: 3,
        title: "Control de cookies",
        content: "Puedes controlar y gestionar las cookies a través de la configuración de tu navegador web. Sin embargo, deshabilitar ciertas cookies esenciales puede afectar la funcionalidad del sitio."
      },
      {
        id: 4,
        title: "Consentimiento",
        content: "Al continuar navegando en nuestro sitio, aceptas el uso de cookies de acuerdo con esta política. Puedes cambiar o retirar tu consentimiento en cualquier momento mediante la configuración de tu navegador."
      },
      {
        id: 5,
        title: "Cookies de terceros",
        content: "Algunas cookies pueden ser establecidas por servicios de terceros que aparecen en nuestras páginas, como redes sociales o servicios de análisis. No tenemos control sobre estas cookies."
      },
      {
        id: 6,
        title: "Actualización de política",
        content: "Nos reservamos el derecho de modificar esta política de cookies en cualquier momento. Te recomendamos revisarla periódicamente para estar informado sobre cómo usamos las cookies."
      }
    ]
  };

  // Determinar el título según el tipo
  const title = type === "terms" 
    ? "Términos y Condiciones" 
    : type === "privacy" 
      ? "Política de Privacidad" 
      : "Política de Cookies";

  // Determinar el subtítulo según el tipo
  const subtitle = type === "terms" 
    ? "Por favor, lee detenidamente cada punto antes de aceptar"
    : type === "privacy"
      ? "Conoce cómo protegemos y utilizamos tu información personal"
      : "Información sobre el uso de cookies en nuestro sitio web";

  // Obtener los items correspondientes
  const items = content[type === "terms" ? "terms" : type === "privacy" ? "privacy" : "cookies"];

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* Fondo oscuro */}
        <motion.div
          className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />

        {/* Modal */}
        <motion.div
          className="relative bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden"
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          transition={{ type: "spring", damping: 25 }}
        >
          {/* Header */}
          <div className="sticky top-0 z-10 bg-[#2c976a] p-6 text-white">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">{title}</h2>
              <button
                onClick={onClose}
                className="p-2 hover:bg-white/20 rounded-full transition"
              >
                <X size={24} />
              </button>
            </div>
            <p className="mt-2 text-white/90">
              {subtitle}
            </p>
          </div>

          {/* Contenido */}
          <div className="p-6 md:p-8 overflow-y-auto max-h-[calc(90vh-120px)]">
            <div className="space-y-6">
              {items.map((item) => (
                <motion.div
                  key={item.id}
                  className="bg-gray-50 rounded-xl p-6 border border-gray-200"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: item.id * 0.1 }}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-[#2c976a] rounded-full flex items-center justify-center">
                        <span className="text-white font-bold">{item.id}</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {item.content}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Footer del modal */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-gray-600 text-sm text-center sm:text-left">
                  {type === "cookies" 
                    ? "Puedes gestionar tus preferencias de cookies en la configuración de tu navegador."
                    : "Al cerrar este modal, confirmas que has leído y comprendido cada punto."}
                </p>
                <div className="flex gap-3">
                  <button
                    onClick={onClose}
                    className="px-6 py-2 bg-[#2c976a] text-white rounded-lg hover:bg-[#247b57] transition"
                  >
                    {type === "cookies" ? "Aceptar y cerrar" : "Entendido, cerrar"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

// Componente Footer principal
const Footer = () => {
  // Estados para controlar el modal desde el Footer
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState("terms");

  // Función para abrir el modal
  const openModal = (type) => {
    setModalType(type);
    setModalOpen(true);
  };

  return (
    <>
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
                  <Link 
                    to="/" 
                    className="text-gray-300 hover:text-white transition-colors duration-300 block py-1"
                  >
                    Inicio
                  </Link>
                </li>
                <li>
                  <Link
                    to="/conocenos"
                    className="text-gray-300 hover:text-white transition-colors duration-300 block py-1"
                  >
                    Nosotros
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/contacto" 
                    className="text-gray-300 hover:text-white transition-colors duration-300 block py-1"
                  >
                    Contacto
                  </Link>
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
                  <div>+51 983 722 524</div>
                </li>
                <li className="text-gray-300">
                  <div className="font-semibold text-white mb-1">Email</div>
                  <div>ventas@chancay101.org</div>
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
                  href="https://www.facebook.com/asociacionchancay101"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 hover:bg-[#cb4a2a] transition-all duration-300 rounded-lg p-4 text-center group"
                >
                  <div className="font-semibold group-hover:text-white text-gray-300">
                    Facebook
                  </div>
                </a>
                <a 
                  href="https://www.instagram.com/chancay.101?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 hover:bg-[#cb4a2a] transition-all duration-300 rounded-lg p-4 text-center group"
                >
                  <div className="font-semibold group-hover:text-white text-gray-300">
                    Instagram
                  </div>
                </a>
                <a 
                  href="https://youtube.com/@asociaciondeviviendachanca7343?si=ZQMybKXEYFldPjRr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 hover:bg-[#2c976a] transition-all duration-300 rounded-lg p-4 text-center group"
                >
                  <div className="font-semibold group-hover:text-white text-gray-300">
                    YouTube
                  </div>
                </a>
                <a 
                  href="https://www.tiktok.com/@chancay101?is_from_webapp=1&sender_device=pc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 hover:bg-[#2c976a] transition-all duration-300 rounded-lg p-4 text-center group"
                >
                  <div className="font-semibold group-hover:text-white text-gray-300">
                    TikTok
                  </div>
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
                  © {new Date().getFullYear()} <span className="text-white font-bold">Chancay 101</span>. Todos los derechos reservados.
                </div>
                <div className="flex gap-6 text-sm">
                  {/* Botones que abren el modal */}
                  <button
                    onClick={() => openModal("privacy")}
                    className="hover:text-white transition-colors duration-300"
                  >
                    Política de Privacidad
                  </button>
                  <button
                    onClick={() => openModal("terms")}
                    className="hover:text-white transition-colors duration-300"
                  >
                    Términos y Condiciones
                  </button>
                  <button
                    onClick={() => openModal("cookies")}
                    className="hover:text-white transition-colors duration-300"
                  >
                    Política de Cookies
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Modal que se renderiza desde el Footer */}
      <TermsModal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)} 
        type={modalType}
      />
    </>
  );
};

export default Footer;