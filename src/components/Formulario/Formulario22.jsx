import React, { useState } from "react";
import { motion } from "framer-motion";

const Formulario = () => {
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

  // Animaciones
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const fadeInLeft = {
    initial: { opacity: 0, x: -60 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
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

  // 🔹 Enviar datos SOLO a FormSubmit (más confiable)
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
    <motion.section 
      className="bg-white py-16 relative overflow-visible"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-100px" }}
      variants={staggerContainer}
      id="formulario"
    >
      {/* Efecto de superposición */}
      <div className="absolute top-0 left-0 w-full h-12 bg-gradient-to-b from-green-100 to-white -translate-y-1/2"></div>

      {/* ✅ Contenedor general (grid responsivo) */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-4 sm:px-6 lg:px-8 relative overflow-visible">

        {/* 🔸 Tarjeta naranja (izquierda, ancho total en escritorio) */}
        <motion.div 
          className="bg-[#cb4a2a] rounded-2xl shadow-2xl flex items-center justify-center p-6 sm:p-8 md:p-10 overflow-visible"
          variants={fadeInLeft}
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
          style={{
            width: "100vw",
            minHeight: "400px",
            position: "relative",
            left: "calc(-50vw + 50%)",
          }}
        >
          {/* Contenido interno responsivo */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left relative z-10 w-full max-w-2xl md:ml-10 lg:ml-16">
            
            {/* Tarjeta verde con texto */}
            <motion.div 
              className="relative bg-[#2c976a] text-white px-6 sm:px-8 py-5 sm:py-6 rounded-2xl shadow-lg mb-8 w-fit
                        before:absolute before:content-[''] before:-bottom-4 before:left-1/2 
                        before:-translate-x-1/2 before:w-0 before:h-0 before:border-l-[14px] sm:before:border-l-[18px]
                        before:border-r-[14px] sm:before:border-r-[18px] before:border-t-[16px] sm:before:border-t-[18px]
                        before:border-l-transparent before:border-r-transparent before:border-t-[#2c976a]"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold leading-snug max-w-[17rem] sm:max-w-xs md:max-w-sm">
                ¡ESTÁS A UN PASO DE TENER<br />EL TERRENO PARA TU FAMILIA!
              </h2>
            </motion.div>

            {/* Imagen responsiva */}
            <motion.img
              src="/Home/ChancayDatos.png"
              alt="Personas felices"
              className="w-56 sm:w-72 md:w-80 lg:w-96 transition-transform duration-300 ease-in-out hover:scale-105"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
          </div>
        </motion.div>

        {/* 🔹 Formulario */}
        <motion.div 
          className="bg-white shadow-xl rounded-2xl p-6 sm:p-8 md:p-10 border border-green-300 relative z-20 ml-auto w-full"
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
    </motion.section>
  );
};

export default Formulario;