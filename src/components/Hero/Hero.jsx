import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, X } from "lucide-react";
import { Link } from "react-router-dom";

const TermsModal = ({ isOpen, onClose, type }) => {
  if (!isOpen) return null;

  const title = type === "terms" ? "Términos y Condiciones" : "Política de Privacidad";
  
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
    ]
  };

  const items = content[type === "terms" ? "terms" : "privacy"];

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />

        <motion.div
          className="relative bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden"
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          transition={{ type: "spring", damping: 25 }}
        >
          <div className="sticky top-0 z-10 bg-gradient-to-r from-[#2c976a] to-[#32d28a] p-6 text-white">
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
              {type === "terms" 
                ? "Por favor, lee detenidamente cada punto antes de aceptar"
                : "Conoce cómo protegemos y utilizamos tu información personal"}
            </p>
          </div>

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

            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-gray-600 text-sm text-center sm:text-left">
                  Al cerrar este modal, confirmas que has leído y comprendido cada punto.
                </p>
                <div className="flex gap-3">
                  <button
                    onClick={onClose}
                    className="px-6 py-2 bg-[#2c976a] text-white rounded-lg hover:bg-[#247b57] transition"
                  >
                    Entendido, cerrar
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

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState("terms");
  const [formKey, setFormKey] = useState(Date.now());
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    correo: "",
    documento: "",
    numeroDocumento: "",
    telefono: "",
    distrito: "",
    terminos: false,
    publicidad: false,
  });

  const heroImages = [
    "/Home/Chan1.jpg",
    "/Home/Chan2.jpg"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === heroImages.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  // Animaciones
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const slideInLeft = {
    initial: { opacity: 0, x: -80 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 1.2, ease: "easeOut" }
  };

  const fadeInRight = {
    initial: { opacity: 0, x: 60 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  // 🔹 Abrir modal
  const openModal = (type) => {
    setModalType(type);
    setModalOpen(true);
  };

  // 🔹 Limpiar formulario
  const limpiarFormulario = () => {
    setFormData({
      nombre: "",
      apellido: "",
      correo: "",
      documento: "",
      numeroDocumento: "",
      telefono: "",
      distrito: "",
      terminos: false,
      publicidad: false,
    });
    setFormKey(Date.now());
  };

  // 🔹 Manejar cambios en los inputs
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // 🔹 Manejar envío del formulario CORREGIDO
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    
    // Validar términos
    if (!formData.terminos) {
      alert("⚠️ Debes aceptar los Términos y Condiciones.");
      return;
    }

    // Validar campos requeridos
    const camposRequeridos = ['nombre', 'apellido', 'correo', 'documento', 'numeroDocumento', 'telefono', 'distrito'];
    const camposFaltantes = camposRequeridos.filter(campo => !formData[campo].toString().trim());
    
    if (camposFaltantes.length > 0) {
      alert(`⚠️ Completa todos los campos requeridos.`);
      return;
    }

    // Activar estado de envío
    setIsSubmitting(true);

    try {
      // Enviar formulario usando Formspree
      const formDataToSend = new FormData();
      formDataToSend.append('nombre', formData.nombre);
      formDataToSend.append('apellido', formData.apellido);
      formDataToSend.append('correo', formData.correo);
      formDataToSend.append('documento', formData.documento);
      formDataToSend.append('numeroDocumento', formData.numeroDocumento);
      formDataToSend.append('telefono', formData.telefono);
      formDataToSend.append('distrito', formData.distrito);
      formDataToSend.append('terminos', formData.terminos ? 'Aceptado' : 'No aceptado');
      formDataToSend.append('publicidad', formData.publicidad ? 'Aceptado' : 'No aceptado');
      formDataToSend.append('_subject', 'Nuevo contacto - Información de Terrenos');
      
      // Cambia 'xyzrpqjg' por tu ID real de Formspree
      const response = await fetch("https://formspree.io/f/xyzrpqjg", {
        method: "POST",
        body: formDataToSend,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        // Mostrar mensaje de éxito INMEDIATAMENTE
        setShowSuccessMessage(true);
        
        // Limpiar formulario
        limpiarFormulario();
        
        // Ocultar mensaje después de 5 segundos
        setTimeout(() => {
          setShowSuccessMessage(false);
        }, 5000);
      } else {
        throw new Error('Error en el envío');
      }
    } catch (error) {
      console.error('Error:', error);
      alert("❌ Hubo un error al enviar el formulario. Por favor, intenta de nuevo.");
    } finally {
      // Desactivar estado de envío
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section className="relative w-full min-h-screen overflow-hidden">
        {/* Fondo con gradiente */}
        <div className="absolute inset-0">
          {heroImages.map((image, index) => (
            <motion.div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 10, ease: "linear" }}
            >
              <img src={image} alt={`Slide ${index}`} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
            </motion.div>
          ))}
        </div>

        {/* Contenido principal */}
        <div className="relative z-10 min-h-screen flex items-center py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-6 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              
              {/* Texto principal */}
              <motion.div
                className="text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)] pt-8 lg:pt-0"
                initial="initial"
                animate="animate"
              >

                <motion.h1
                  className="text-5xl md:text-5xl lg:text-7xl xl:text-8xl font-extrabold leading-tight mb-8 text-white"
                  variants={slideInLeft}
                >
                  Tu Terreno
                  <span className="block text-[#32d28a] drop-shadow-lg mt-2">Tu Futuro</span>
                  <span className="block text-3xl md:text-3xl lg:text-4xl mt-6 font-semibold text-gray-100">Garantizado</span>
                </motion.h1>

                <motion.p
                  className="text-xl md:text-xl lg:text-2xl mb-10 text-gray-200 max-w-2xl leading-relaxed"
                  variants={fadeInUp}
                >
                  Construye el hogar de tus sueños con los mejores terrenos
                  <span className="text-[#32d28a] font-bold"> desde S/ 17,200</span> soles.
                </motion.p>

                {/* Cuota inicial */}
                <motion.div
                  className="text-white text-2xl lg:text-3xl font-bold mb-10"
                  variants={fadeInUp}
                >
                  Cuota inicial del 50%
                </motion.div>

              {/* Botones */}
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 mb-8 lg:mb-0 justify-center" 
                variants={fadeInUp}
              >
                <Link to="/contacto">
                  <motion.button
                    className="bg-[#32d28a] hover:bg-[#27a56f] text-white font-bold py-3 px-4 lg:px-6 rounded-xl text-base shadow-lg transition-all flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(50,210,138,0.5)" }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ArrowRight className="w-5 h-5" />
                    ¡Quiero mi Lote!
                  </motion.button>
                </Link>
              </motion.div>

              </motion.div>

              {/* Formulario a la derecha */}
              <motion.div 
                className="bg-white shadow-xl rounded-2xl p-6 sm:p-8 md:p-10 border border-green-300 relative z-20 w-full ml-auto lg:ml-32 xl:ml-40 2xl:ml-48"
                variants={fadeInRight}
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
                style={{ minHeight: "650px" }}
              >
                <motion.h3 
                  className="text-[#2c976a] font-bold text-lg sm:text-xl mb-6 text-center"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >     
                  QUIERO RECIBIR INFORMACIÓN
                </motion.h3>

                {/* Mensaje de éxito */}
                <AnimatePresence>
                  {showSuccessMessage && (
                    <motion.div
                      className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg"
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                          <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                        </div>
                        <div>
                          <p className="font-medium text-green-800">¡Datos enviados correctamente!</p>
                          <p className="text-sm text-green-600">Te contactaremos en las próximas 24 horas.</p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* 🔹 FORMULARIO FORMSPREE */}
                <form 
                  key={formKey}
                  onSubmit={handleFormSubmit}
                >
                  <div className="space-y-6">
                    <motion.div 
                      className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                      variants={staggerContainer}
                    >
                      <motion.input
                        type="text"
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                        placeholder="Nombres"
                        required
                        className="border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-400 outline-none w-full"
                        whileFocus={{ scale: 1.02 }}
                      />
                      <motion.input
                        type="text"
                        name="apellido"
                        value={formData.apellido}
                        onChange={handleChange}
                        placeholder="Apellidos"
                        required
                        className="border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-400 outline-none w-full"
                        whileFocus={{ scale: 1.02 }}
                      />
                    </motion.div>

                    <motion.input
                      type="email"
                      name="correo"
                      value={formData.correo}
                      onChange={handleChange}
                      placeholder="Correo Electrónico"
                      required
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-400 outline-none"
                      whileFocus={{ scale: 1.02 }}
                    />

                    <motion.div 
                      className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                      variants={staggerContainer}
                    >
                      <motion.select
                        name="documento"
                        value={formData.documento}
                        onChange={handleChange}
                        className="border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-400 outline-none w-full"
                        required
                        whileFocus={{ scale: 1.02 }}
                      >
                        <option value="">Documento</option>
                        <option value="DNI">DNI</option>
                        <option value="CE">Carnet de Extranjería</option>
                      </motion.select>
                      <motion.input
                        type="text"
                        name="numeroDocumento"
                        value={formData.numeroDocumento}
                        onChange={handleChange}
                        placeholder="N° documento"
                        required
                        className="border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-400 outline-none w-full"
                        whileFocus={{ scale: 1.02 }}
                      />
                    </motion.div>

                    <motion.div className="flex">
                      <span className="bg-gray-100 border border-gray-300 px-4 py-3 rounded-l-lg flex items-center text-sm sm:text-base">
                        🇵🇪 +51
                      </span>
                      <motion.input
                        type="tel"
                        name="telefono"
                        value={formData.telefono}
                        onChange={handleChange}
                        placeholder="Teléfono"
                        required
                        className="flex-1 border border-gray-300 rounded-r-lg px-4 py-3 focus:ring-2 focus:ring-green-400 outline-none text-sm sm:text-base"
                        whileFocus={{ scale: 1.02 }}
                      />
                    </motion.div>

                    <motion.select
                      name="distrito"
                      value={formData.distrito}
                      onChange={handleChange}
                      required
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-400 outline-none text-sm sm:text-base"
                      whileFocus={{ scale: 1.02 }}
                    >
                      <option value="">¿Dónde quieres vivir?</option>
                      <option>Lima Sur (Km75) - Cond. Finca Bonita</option>
                      <option>Lima Sur (Km77.5) - Cond. Montemar</option>
                      <option>Ate - Santa Clara - Proy. Goll de Santa Clara</option>
                      <option>Tacna - Pray. Las Granados</option>
                      <option>Carabayllo - Urb. Alameda del sol</option>
                      <option>Trujillo (Moche) - Urb. Altos del Valle</option>
                      <option>Lima Sur (Km77) - Urb. Arenas de San Antonio</option>
                      <option>Trujillo (Huanchaco) - Urb. Brisas de Huanchaco</option>
                      <option>Chiclayo (JLO) - Urb. Casablanca</option>
                      <option>Ica - Urb. El Haras</option>
                      <option>Lima Sur (Km40) - Urb. Entrevalles</option>
                      <option>Carabayllo - Urb. La Planicie</option>
                      <option>Piura (Castilla) - Urb. Las Palmeras</option>
                      <option>Lima (Huacho) - Urb. El Mirador de Huacho</option>
                      <option>Carabayllo - Urb. Santa Maria</option>
                      <option>Pisco - Urb. Velamar</option>
                      <option>Piura (Santa Maria del Pinar) - Urb. Villa Reall</option>
                    </motion.select>

                    {/* ✅ Checkboxes */}
                    <motion.div className="text-sm text-gray-600 space-y-3" variants={staggerContainer}>
                      <motion.label className="flex items-start gap-2" variants={fadeInUp}>
                        <input
                          type="checkbox"
                          name="terminos"
                          checked={formData.terminos}
                          onChange={handleChange}
                          className="mt-1"
                          required
                        />
                        <span>
                          He leído y acepto los{" "}
                          <button
                            type="button"
                            onClick={() => openModal("terms")}
                            className="text-[#2c976a] font-semibold hover:underline"
                          >
                            Términos y Condiciones
                          </button>
                          .
                        </span>
                      </motion.label>

                      <motion.label className="flex items-start gap-2" variants={fadeInUp}>
                        <input
                          type="checkbox"
                          name="publicidad"
                          checked={formData.publicidad}
                          onChange={handleChange}
                          className="mt-1"
                        />
                        <span>
                          Acepto el envío de publicidad según la{" "}
                          <button
                            type="button"
                            onClick={() => openModal("privacy")}
                            className="text-[#2c976a] font-semibold hover:underline"
                          >
                            Política de Privacidad
                          </button>
                          .
                        </span>
                      </motion.label>
                    </motion.div>

                    {/* 🔹 Botón con loader */}
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full font-semibold py-3 rounded-lg transition ${
                        isSubmitting
                          ? "bg-gray-400 cursor-not-allowed"
                          : "bg-[#2c976a] hover:bg-[#247b57] text-white"
                      }`}
                      whileHover={!isSubmitting ? { scale: 1.05 } : {}}
                      whileTap={!isSubmitting ? { scale: 0.95 } : {}}
                    >
                      {isSubmitting ? (
                        <div className="flex items-center justify-center gap-2">
                          <span className="w-5 h-5 border-2 border-t-transparent border-white rounded-full animate-spin"></span>
                          Enviando...
                        </div>
                      ) : (
                        "Solicitar información"
                      )}
                    </motion.button>

                    {/* 🔹 Nota importante */}
                    <div className="text-xs text-gray-500 text-center mt-2">
                      ✅ Te contactaremos en las próximas 24 horas.
                    </div>
                  </div>
                </form>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Indicadores del carrusel */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3 z-20">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3.5 h-3.5 rounded-full transition-all ${
                index === currentSlide ? "bg-[#32d28a] scale-125" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </section>

      {/* Modal para Términos y Política de Privacidad */}
      <TermsModal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)} 
        type={modalType}
      />
    </>
  );
};

export default Hero;