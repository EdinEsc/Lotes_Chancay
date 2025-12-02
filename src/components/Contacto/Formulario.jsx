import React, { useState } from "react";

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
      formDataEmail.append("_subject", "Nuevo contacto desde Formulario - Información de Terrenos");
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
              <a href="/Nosotros" className="text-[#cb4a2a] underline">
                Términos y Condiciones
              </a>{" "}
              y la{" "}
              <a href="/Nosotros" className="text-[#cb4a2a] underline">
                Política de Privacidad
              </a>.
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
              Acepto el envío de publicidad según la Política de Privacidad.
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
  );
};

export default Formulario;