import { useState, useEffect } from "react";
import api from "../../api/axios";
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

export default function ContactForm() {
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    telefono: "",
    mensaje: "",
  });

  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState("terms");
  const [terminosAceptados, setTerminosAceptados] = useState(false);
  const [politicaAceptada, setPoliticaAceptada] = useState(false);
  
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");
  const [bgImage, setBgImage] = useState(null);


  useEffect(() => {
    api
      .get("/page-image/contact_background")
      .then((res) => setBgImage(res.data.url))
      .catch(() => setBgImage(null));
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };


  const slideInLeft = {
    initial: { x: -80, opacity: 0 },
    animate: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const openModal = (type) => {
    setModalType(type);
    setModalOpen(true);
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!terminosAceptados) {
      setMsg("❌ Debes aceptar los Términos y Condiciones");
      return;
    }

    const camposRequeridos = ["nombre", "email", "mensaje"];
    const camposFaltantes = camposRequeridos.filter(
      (campo) => !form[campo].toString().trim()
    );

    if (camposFaltantes.length > 0) {
      setMsg("❌ Completa todos los campos requeridos");
      return;
    }

    setLoading(true);
    setMsg("");

    try {
      await api.post("/contacto", {
        ...form,
        terminos: terminosAceptados ? "Aceptado" : "No aceptado",
        politica: politicaAceptada ? "Aceptada" : "No aceptada",
      });

      await fetch("https://formspree.io/f/xyzrpqjg", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          ...form,
          terminos: terminosAceptados,
          politica: politicaAceptada,
        }),
      });

      setMsg("✅ Mensaje enviado correctamente");
      setForm({ nombre: "", email: "", telefono: "", mensaje: "" });
      setTerminosAceptados(false);
      setPoliticaAceptada(false);

      setTimeout(() => {
        setMsg("");
      }, 4000);

    } catch (error) {
      setMsg("❌ Error al enviar el mensaje");

  
      setTimeout(() => {
        setMsg("");
      }, 5000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className="w-full relative">
 
        <div className="bg-white pt-20 pb-20">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
       

            <motion.div
              className="pt-8 lg:pt-0 mt-6 text-left ml-0 md:-ml-24 lg:-ml-32"
              initial="initial"
              animate="animate"
            >
        
            <motion.h2
                className="
                  text-[clamp(2.2rem,5vw,3.2rem)]
                  md:text-[clamp(2.8rem,4.5vw,4rem)]
                  font-medium tracking-tight
                  bg-gradient-to-r from-[#2c976a] via-[#4ac48e] to-[#2c976a]
                  bg-clip-text text-transparent
                  mb-4
                  whitespace-nowrap
                "
              >
                Dueño de una vida mejor
              </motion.h2>


              <motion.p
                className="
                  text-[clamp(1.1rem,3vw,1.9rem)]
                  font-medium text-[#2c976a]
                  leading-relaxed
                "
                variants={slideInLeft}
              >
                Descubre lo que tenemos para ti
              </motion.p>
              
            </motion.div>



    
            <div className="flex justify-center md:justify-end relative z-20">
              <div
                className="bg-white rounded-xl shadow-2xl p-6 w-full max-w-md
                           border border-[#2c976a]/40"
              >
                <h3 className="text-[#2c976a] font-bold text-lg mb-4 text-center">
                  Quiero recibir información
                </h3>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    name="nombre"
                    placeholder="Nombre"
                    value={form.nombre}
                    onChange={handleChange}
                    className="w-full p-3 rounded border border-[#2c976a]/50
                               focus:outline-none focus:ring-2 focus:ring-[#2c976a]"
                    required
                  />

                  <input
                    name="email"
                    type="email"
                    placeholder="Correo electrónico"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full p-3 rounded border border-[#2c976a]/50
                               focus:outline-none focus:ring-2 focus:ring-[#2c976a]"
                    required
                  />

                  <input
                    name="telefono"
                    placeholder="Teléfono"
                    value={form.telefono}
                    onChange={handleChange}
                    className="w-full p-3 rounded border border-[#2c976a]/50
                               focus:outline-none focus:ring-2 focus:ring-[#2c976a]"
                  />

                 <textarea
                    name="mensaje"
                    placeholder="Mensaje"
                    value={form.mensaje}
                    onChange={handleChange}
                    className="w-full p-3 rounded h-[150px] resize-none
                              border border-[#2c976a]/50
                              focus:outline-none focus:ring-2 focus:ring-[#2c976a]"
                    required
                  />

                
                  <div className="space-y-3">
                    <label className="flex items-start space-x-2">
                      <input
                        type="checkbox"
                        checked={terminosAceptados}
                        onChange={(e) => setTerminosAceptados(e.target.checked)}
                        className="mt-1 accent-[#2c976a]"
                        required
                      />
                      <span className="text-sm text-gray-700">
                        He leído y acepto los{" "}
                        <button
                          type="button"
                          onClick={() => openModal("terms")}
                          className="text-[#2c976a] underline hover:text-[#247b57]"
                        >
                          Términos y Condiciones
                        </button>.
                      </span>
                    </label>

                    <label className="flex items-start space-x-2">
                      <input 
                        type="checkbox" 
                        checked={politicaAceptada}
                        onChange={(e) => setPoliticaAceptada(e.target.checked)}
                        className="mt-1 accent-[#2c976a]" 
                      />
                      <span className="text-sm text-gray-700">
                        Acepto el envío de publicidad según la{" "}
                        <button
                          type="button"
                          onClick={() => openModal("privacy")}
                          className="text-[#2c976a] underline hover:text-[#247b57]"
                        >
                          Política de Privacidad
                        </button>.
                      </span>
                    </label>
                  </div>

                  <button
                    disabled={loading}
                    className="w-full bg-[#2c976a] hover:brightness-110
                               text-white font-bold py-3 rounded transition
                               disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? "Enviando..." : "Solicitar información"}
                  </button>

                  {msg && (
                    <p className={`text-sm text-center mt-2 ${
                      msg.includes("✅") ? "text-green-600" : "text-red-600"
                    }`}>
                      {msg}
                    </p>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>

        <div
          className="
            relative -mt-96
            h-[420px] sm:h-[650px] md:h-[800px]
            overflow-hidden
            bg-green-900
          "
        >
         
          <img
            src={bgImage || "/img/fondo.webp"}
            alt=""
            className="absolute inset-0 w-full h-full object-cover blur-2xl scale-110 opacity-40 sm:hidden"
          />

          
          <img
            src={bgImage || "/img/fondo.webp"}
            alt="Fondo contacto"
            className="
              absolute inset-0 w-full h-full
              object-contain sm:object-cover
            "
          />
        </div>

      </section>

  
      <TermsModal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)} 
        type={modalType}
      />
    </>
  );
}