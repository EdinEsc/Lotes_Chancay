import { useState, useEffect } from "react";
import api from "../../api/axios";
import { motion } from "framer-motion";

export default function ContactForm() {
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    telefono: "",
    mensaje: "",
  });

  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");
  const [bgImage, setBgImage] = useState(null);

  // 🔄 CARGAR IMAGEN DE FONDO DESDE BACKEND
  useEffect(() => {
    api
      .get("/page-image/contact_background") // 👈 KEY
      .then((res) => setBgImage(res.data.url))
      .catch(() => setBgImage(null));
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // 🎬 Animación
  const slideInLeft = {
    initial: { x: -80, opacity: 0 },
    animate: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMsg("");

    try {
      // Backend
      await api.post("/contacto", form);

      // Formspree
      await fetch("https://formspree.io/f/xyzrpqjg", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(form),
      });

      setMsg("✅ Mensaje enviado correctamente");
      setForm({ nombre: "", email: "", telefono: "", mensaje: "" });
    } catch (error) {
      setMsg("❌ Error al enviar el mensaje");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full relative">
      {/* 🔹 BLOQUE BLANCO */}
      <div className="bg-white pt-20 pb-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">

          {/* TEXTO */}
          <motion.div
            className="pt-8 lg:pt-0 text-left ml-0 md:-ml-24 lg:-ml-32"
            initial="initial"
            animate="animate"
          >
            <motion.h2
              className="text-[clamp(1.8rem,6vw,4rem)]
                         font-extrabold leading-snug mb-4
                         text-[#2c976a] tracking-tight uppercase"
              variants={slideInLeft}
            >
              Dueño de una vida mejor
            </motion.h2>

            <motion.p
              className="text-[clamp(1.3rem,4vw,2.6rem)]
                         font-extrabold text-[#2c976a]
                         leading-tight"
              variants={slideInLeft}
            >
              Descubre lo que tenemos para ti
            </motion.p>
          </motion.div>

          {/* FORMULARIO */}
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
                  className="w-full p-3 rounded min-h-[110px]
                             border border-[#2c976a]/50
                             focus:outline-none focus:ring-2 focus:ring-[#2c976a]"
                  required
                />

                <button
                  disabled={loading}
                  className="w-full bg-[#2c976a] hover:brightness-110
                             text-white font-bold py-3 rounded transition"
                >
                  {loading ? "Enviando..." : "Solicitar información"}
                </button>

                {msg && (
                  <p className="text-[#2c976a] text-sm text-center mt-2">
                    {msg}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* 🔹 IMAGEN DE FONDO DINÁMICA */}
      <div
        className="-mt-64 h-[480px] bg-cover bg-center transition-all duration-300"
        style={{
          backgroundImage: bgImage
            ? `url(${bgImage})`
            : "url('/img/fondo.webp')", // fallback
        }}
      />
    </section>
  );
}
