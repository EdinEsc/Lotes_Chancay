import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MapPin, Home, Star, ArrowRight, Users, Trophy, Percent } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [cargando, setCargando] = useState(false);
  const [mensaje, setMensaje] = useState("");
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

  // 🔹 Enviar datos SOLO a FormSubmit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setCargando(true);
    setMensaje("⏳ Enviando datos...");

    if (!formData.terminos) {
      setMensaje("⚠️ Debes aceptar los Términos y Condiciones.");
      setCargando(false);
      return;
    }

    try {
      const formDataEmail = new FormData();
      
      // Agregamos todos los campos del formulario
      Object.entries(formData).forEach(([key, value]) => {
        if (value !== '') {
          formDataEmail.append(key, value.toString());
        }
      });

      // Configuración para FormSubmit
      formDataEmail.append("_subject", "Nuevo contacto - Información de Terrenos");
      formDataEmail.append("_captcha", "false");
      formDataEmail.append("_template", "table");
      formDataEmail.append("_autoresponse", "¡Gracias por tu interés! Te contactaremos pronto con información sobre nuestros terrenos.");
      
      const response = await fetch("https://formsubmit.co/ajax/eescobarc@autonoma.edu.pe", {
        method: "POST",
        body: formDataEmail,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        const result = await response.json();
        console.log("✅ Email enviado:", result);
        setMensaje("✅ ¡Tu información se envió correctamente! Te contactaremos pronto.");
        limpiarFormulario();
      } else {
        throw new Error(`Error HTTP: ${response.status}`);
      }

    } catch (error) {
      console.error("Error:", error);
      setMensaje("❌ Error al enviar. Por favor, intenta nuevamente o contáctanos directamente.");
    } finally {
      setCargando(false);
      setTimeout(() => setMensaje(""), 5000);
    }
  };

  return (
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
            {/* Gradiente para mejorar contraste del texto */}
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
              <motion.div className="flex flex-col sm:flex-row gap-4 mb-8 lg:mb-0" variants={fadeInUp}>
                <Link to="/contacto" className="flex-1">
                  <motion.button
                    className="w-full bg-[#32d28a] hover:bg-[#27a56f] text-white font-bold py-4 px-6 lg:px-10 rounded-xl text-lg shadow-lg transition-all flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(50,210,138,0.5)" }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ArrowRight className="w-5 h-5" />
                    ¡Quiero mi Lote!
                  </motion.button>
                </Link>

                <Link to="/mapa-lotes" className="flex-1">
                  <motion.button
                    className="w-full bg-white/15 hover:bg-white/30 text-white font-semibold py-4 px-6 lg:px-10 rounded-xl text-lg backdrop-blur-md transition-all border border-white/30 flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <MapPin className="w-5 h-5" />
                    Ver Proyectos
                  </motion.button>
                </Link>
              </motion.div>
            </motion.div>

            {/* Formulario a la derecha - Movido MUCHO más a la derecha */}
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

              <form className="space-y-6" onSubmit={handleSubmit}>
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
                      <a href="/Nosotros" className="text-[#2c976a] font-semibold">Términos y Condiciones</a>{" "}
                      y la{" "}
                      <a href="/Nosotros" className="text-[#2c976a] font-semibold">Política de Privacidad</a>.
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
                      <a href="/Nosotros" className="text-[#2c976a] font-semibold">Política de Privacidad</a>.
                    </span>
                  </motion.label>
                </motion.div>

                {/* 🔹 Mensaje visual */}
                {mensaje && (
                  <motion.p 
                    className={`text-center text-sm font-medium mt-2 ${
                      mensaje.includes("✅") ? "text-green-700" : 
                      mensaje.includes("⚠️") ? "text-yellow-700" : 
                      mensaje.includes("❌") ? "text-red-700" : 
                      "text-blue-700"
                    }`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    {mensaje}
                  </motion.p>
                )}

                {/* 🔹 Botón con loader */}
                <motion.button
                  type="submit"
                  disabled={cargando}
                  className={`w-full font-semibold py-3 rounded-lg transition ${
                    cargando
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-[#2c976a] hover:bg-[#247b57] text-white"
                  }`}
                  whileHover={!cargando ? { scale: 1.05 } : {}}
                  whileTap={!cargando ? { scale: 0.95 } : {}}
                >
                  {cargando ? (
                    <div className="flex items-center justify-center gap-2">
                      <span className="w-5 h-5 border-2 border-t-transparent border-white rounded-full animate-spin"></span>
                      Enviando...
                    </div>
                  ) : (
                    "Solicitar información"
                  )}
                </motion.button>
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
  );
};

export default Hero;