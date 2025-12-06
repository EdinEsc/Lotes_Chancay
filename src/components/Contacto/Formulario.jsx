import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

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
              {type === "terms" 
                ? "Por favor, lee detenidamente cada punto antes de aceptar"
                : "Conoce cómo protegemos y utilizamos tu información personal"}
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

const Formulario = () => {
  const [cargando, setCargando] = useState(false);
  const [mensaje, setMensaje] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState("terms");

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

  // 🔹 Función para verificar si estamos en desarrollo local
  const esDesarrollo = () => {
    return window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
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
  };

  // 🔹 Manejar cambios en los inputs
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // 🔹 Enviar datos - FUNCIONA EN DESARROLLO Y PRODUCCIÓN
  const handleSubmit = async (e) => {
    e.preventDefault();
    setCargando(true);
    setMensaje("⏳ Enviando datos...");

    // Validar términos
    if (!formData.terminos) {
      setMensaje("⚠️ Debes aceptar los Términos y Condiciones.");
      setCargando(false);
      return;
    }

    // Validar campos requeridos
    const camposRequeridos = ['nombre', 'apellido', 'correo', 'documento', 'numeroDocumento', 'telefono', 'distrito'];
    const camposFaltantes = camposRequeridos.filter(campo => !formData[campo].trim());
    
    if (camposFaltantes.length > 0) {
      setMensaje(`⚠️ Completa todos los campos requeridos.`);
      setCargando(false);
      return;
    }

    // 🔹 MODO DESARROLLO (localhost)
    if (esDesarrollo()) {
      console.log("📝 MODO DESARROLLO - Datos del formulario:", formData);
      console.log("📝 Estos datos se enviarían a: eescobarc@autonoma.edu.pe");
      
      // Simular envío exitoso
      setTimeout(() => {
        setMensaje("✅ ¡Formulario enviado correctamente! (Modo desarrollo)");
        limpiarFormulario();
        setCargando(false);
        
        // Mostrar éxito por 5 segundos
        setTimeout(() => {
          setMensaje("");
        }, 5000);
      }, 1500);
      return;
    }

    // 🔹 MODO PRODUCCIÓN - Usar FormSubmit
    try {
      // Crear un formulario dinámico para evitar problemas de CORS
      const form = document.createElement('form');
      form.method = 'POST';
      form.action = 'https://formsubmit.co/eescobarc@autonoma.edu.pe';
      form.style.display = 'none';
      
      // Función para agregar campos al formulario
      const agregarCampo = (nombre, valor) => {
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = nombre;
        input.value = valor;
        form.appendChild(input);
      };

      // Agregar datos del usuario
      agregarCampo('nombre', formData.nombre.trim());
      agregarCampo('apellido', formData.apellido.trim());
      agregarCampo('correo', formData.correo.trim());
      agregarCampo('documento', formData.documento);
      agregarCampo('numeroDocumento', formData.numeroDocumento.trim());
      agregarCampo('telefono', formData.telefono.trim());
      agregarCampo('distrito', formData.distrito);
      agregarCampo('terminos', formData.terminos ? 'Aceptado' : 'No aceptado');
      agregarCampo('publicidad', formData.publicidad ? 'Aceptado' : 'No aceptado');
      
      // Configuración de FormSubmit
      agregarCampo('_subject', 'Nuevo contacto desde Formulario - Información de Terrenos');
      agregarCampo('_captcha', 'false');
      agregarCampo('_template', 'table');
      agregarCampo('_autoresponse', '¡Gracias por tu interés! Te contactaremos pronto con información sobre nuestros terrenos.');
      agregarCampo('_next', `${window.location.origin}/gracias`);
      agregarCampo('_cc', 'eescobarc@autonoma.edu.pe');
      
      // Agregar el formulario al documento y enviarlo
      document.body.appendChild(form);
      form.submit();
      
      // Limpiar el formulario después de enviar
      setTimeout(() => {
        limpiarFormulario();
        setCargando(false);
      }, 1000);
      
    } catch (error) {
      console.error("❌ Error al enviar el formulario:", error);
      setMensaje("❌ Error al enviar. Por favor, intenta nuevamente.");
      setCargando(false);
      
      // Limpiar mensaje después de 5 segundos
      setTimeout(() => {
        setMensaje("");
      }, 5000);
    }
  };

  return (
    <>
      <section className="py-16 bg-white text-center px-4" id="formulario">
        {/* 🔹 Título */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          <span className="text-[#2c976a]">ESCRÍBENOS</span>{" "}
          <span className="text-[#cb4a2a]">AHORA</span>
        </h2>

        {/* 🔹 Descripción */}
        <p className="text-gray-700 max-w-2xl mx-auto mb-10 text-sm md:text-base">
          Estamos a su disposición, para resolver cualquier duda o consulta acerca
          de nuestros servicios. Envíenos un mensaje o contáctese con nosotros,
          llenando el formulario de contacto, responderemos a la brevedad.
        </p>

        {/* 🔹 Formulario */}
        <form className="max-w-4xl mx-auto space-y-6 text-left" onSubmit={handleSubmit}>
          {/* Nombre y Apellido */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              placeholder="NOMBRE"
              required
              className="w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#cb4a2a]"
            />
            <input
              type="text"
              name="apellido"
              value={formData.apellido}
              onChange={handleChange}
              placeholder="APELLIDO"
              required
              className="w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#cb4a2a]"
            />
          </div>

          {/* Correo electrónico */}
          <input
            type="email"
            name="correo"
            value={formData.correo}
            onChange={handleChange}
            placeholder="CORREO ELECTRÓNICO"
            required
            className="w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#cb4a2a]"
          />

          {/* Documento y Número */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <select
              name="documento"
              value={formData.documento}
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-3 text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-[#cb4a2a]"
              required
            >
              <option value="">DOCUMENTO</option>
              <option value="DNI">DNI</option>
              <option value="CE">Carnet de Extranjería</option>
            </select>
            <input
              type="text"
              name="numeroDocumento"
              value={formData.numeroDocumento}
              onChange={handleChange}
              placeholder="NÚMERO DE DOCUMENTO"
              required
              className="w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#cb4a2a]"
            />
          </div>

          {/* Teléfono */}
          <input
            type="tel"
            name="telefono"
            value={formData.telefono}
            onChange={handleChange}
            placeholder="TELÉFONO"
            required
            className="w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#cb4a2a]"
          />

          {/* Dónde quieres vivir */}
          <select
            name="distrito"
            value={formData.distrito}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 px-4 py-3 text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-[#cb4a2a]"
          >
            <option value="">¿DÓNDE QUIERES VIVIR?</option>
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
          </select>

          {/* Checkboxes */}
          <div className="space-y-3 mt-4">
            <label className="flex items-start space-x-2">
              <input
                type="checkbox"
                name="terminos"
                checked={formData.terminos}
                onChange={handleChange}
                className="mt-1 accent-[#cb4a2a]"
                required
              />
              <span className="text-sm text-gray-700">
                He leído y acepto los{" "}
                <button
                  type="button"
                  onClick={() => openModal("terms")}
                  className="text-[#cb4a2a] underline hover:text-[#b43e21]"
                >
                  Términos y Condiciones
                </button>{" "}.
              </span>
            </label>

            <label className="flex items-start space-x-2">
              <input 
                type="checkbox" 
                name="publicidad"
                checked={formData.publicidad}
                onChange={handleChange}
                className="mt-1 accent-[#cb4a2a]" 
              />
              <span className="text-sm text-gray-700">
                Acepto el envío de publicidad según la{" "}
                <button
                  type="button"
                  onClick={() => openModal("privacy")}
                  className="text-[#cb4a2a] underline hover:text-[#b43e21]"
                >
                  Política de Privacidad
                </button>.
              </span>
            </label>
          </div>

          {/* 🔹 Mensaje visual */}
          {mensaje && (
            <p className={`text-center text-sm font-medium mt-2 ${
              mensaje.includes("✅") ? "text-green-700" : 
              mensaje.includes("⚠️") ? "text-yellow-700" : 
              mensaje.includes("❌") ? "text-red-700" : 
              "text-blue-700"
            }`}>
              {mensaje}
            </p>
          )}

          {/* Nota de desarrollo */}
          {esDesarrollo() && (
            <div className="text-xs text-gray-500 text-center mt-2">
              ⚡ Modo desarrollo activado - Los datos se muestran en consola
            </div>
          )}

          {/* Botón */}
          <div className="flex justify-center pt-4">
            <button
              type="submit"
              disabled={cargando}
              className={`bg-[#cb4a2a] hover:bg-[#b43e21] text-white px-10 py-3 font-semibold tracking-wide relative ${
                cargando ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {cargando ? (
                <div className="flex items-center justify-center gap-2">
                  <span className="w-4 h-4 border-2 border-t-transparent border-white rounded-full animate-spin"></span>
                  ENVIANDO...
                </div>
              ) : (
                "ENVIAR"
              )}
              <span className="absolute bottom-0 left-0 w-full h-[3px] bg-[#2c976a] translate-y-[6px]"></span>
            </button>
          </div>
        </form>
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

export default Formulario;