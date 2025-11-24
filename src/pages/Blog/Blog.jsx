import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import BlogPie from "../../components/Blog/Blogpie";

const images = [
  {
    id: 2, // 🔗 Vinculado al post con id 2
    src: "/Blog/Blog1.jpg",
    title: "Nuevas Tendencias en Chancay",
    description: "Descubre cómo está creciendo la inversión en esta zona costera.",
  },
  {
    id: 1,
    src: "/Blog/Blog2.jpg",
    title: "¿Por Qué Invertir en un Terreno es una Buena Opción en 2025?",
    description: "Iniciativas verdes que transforman el futuro de la ciudad.",
  },
  {
    id: 10,
    src: "/Blog/Blog10.jpg",
    title: "Innovaciones en Construcción Inteligente",
    description: "Beneficios y estilo de vida junto a las playas de Chancay.",
  },
  {
    id: 4,
    src: "/Blog/Blog4.jpg",
    title: "Inversión Estratégica en Terrenos del Norte Chico",
    description: "El impacto del desarrollo inmobiliario en Chancay.",
  },
];

const posts = [
  {
    id: 1,
    categoria: "Noticias",
    titulo: "¿Por Qué Invertir en un Terreno es una Buena Opción en 2025?",
    fecha: "15/01/2025",
    autor: "Centenario",
    descripcion:
      "Invertir en terrenos en 2025 se presenta como una oportunidad estratégica que combina seguridad financiera, flexibilidad y alto potencial de valorización...",
    imagen: "/Blog/Blog5.jpg",
  },
  {
    id: 2,
    categoria: "Novedades",
    titulo: "El Futuro Inmobiliario de Chancay con su Nuevo Puerto",
    fecha: "22/02/2025",
    autor: "Innova Group",
    descripcion:
      "El nuevo puerto de Chancay traerá desarrollo urbano, oportunidades laborales y una gran valorización en la zona costera...",
    imagen: "/Blog/Blog6.jpg",
  },
  {
    id: 3,
    categoria: "Noticias",
    titulo: "Proyectos Verdes: El Boom de la Construcción Sostenible",
    fecha: "10/03/2025",
    autor: "EcoVida",
    descripcion:
      "Cada vez más empresas apuestan por proyectos que respetan el medio ambiente y generan valor a largo plazo...",
    imagen: "/Blog/Blog7.jpg",
  },
  {
    id: 4,
    categoria: "Noticias",
    titulo: "Inversión Estratégica en Terrenos del Norte Chico",
    fecha: "12/04/2025",
    autor: "UrbanPlus",
    descripcion:
      "El norte chico se convierte en una zona clave para la expansión residencial y comercial del país...",
    imagen: "/Blog/Blog8.jpg",
  },
  {
    id: 5,
    categoria: "Noticias",
    titulo: "El Crecimiento del Sector Inmobiliario Peruano",
    fecha: "28/04/2025",
    autor: "Construye Hoy",
    descripcion:
      "El mercado inmobiliario sigue en expansión, impulsado por nuevas oportunidades en regiones costeras...",
    imagen: "/Blog/Blog9.jpg",
  },
  {
    id: 6,
    categoria: "Novedades",
    titulo: "Nuevas Propuestas de Vivienda Sostenible en la Costa",
    fecha: "08/05/2025",
    autor: "EcoCity",
    descripcion:
      "Las viviendas sostenibles se convierten en tendencia, ofreciendo un equilibrio entre confort y sostenibilidad...",
    imagen: "/Blog/Blog10.jpg",
  },
  {
    id: 7,
    categoria: "Noticias",
    titulo: "El Auge de la Inversión Privada en Chancay",
    fecha: "19/05/2025",
    autor: "Economía Hoy",
    descripcion:
      "Con la llegada del puerto, los inversionistas apuestan fuerte por la zona norte de Lima...",
    imagen: "/Blog/Blog11.jpg",
  },
  {
    id: 8,
    categoria: "Noticias",
    titulo: "Tendencias del Mercado Inmobiliario 2025",
    fecha: "03/06/2025",
    autor: "Diario Gestión",
    descripcion:
      "Los precios, proyectos y zonas con mayor proyección para invertir este año...",
    imagen: "/Blog/Blog12.jpg",
  },
  {
    id: 9,
    categoria: "Noticias",
    titulo: "La Nueva Era de Urbanizaciones en Chancay",
    fecha: "22/06/2025",
    autor: "Urbano360",
    descripcion:
      "Los nuevos proyectos inmobiliarios buscan combinar confort, sostenibilidad y conexión con la naturaleza...",
    imagen: "/Blog/Blog13.jpg",
  },
  {
    id: 10,
    categoria: "Novedades",
    titulo: "Innovaciones en Construcción Inteligente",
    fecha: "05/07/2025",
    autor: "SmartBuild",
    descripcion:
      "La tecnología aplicada a la construcción promete revolucionar el sector inmobiliario...",
    imagen: "/Blog/Blog14.jpg",
  },
  {
    id: 11,
    categoria: "Noticias",
    titulo: "Perspectivas Económicas del Sector Inmobiliario",
    fecha: "10/08/2025",
    autor: "Analytica",
    descripcion:
      "Se proyecta un crecimiento sostenido en la inversión inmobiliaria durante el segundo semestre...",
    imagen: "/Blog/Blog15.jpg",
  },
];

const Blog = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const [filtro, setFiltro] = useState("Todos");
  const [busqueda, setBusqueda] = useState("");
  const navigate = useNavigate();

  // 🔹 Auto-slide
  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  // 🔹 Filtrado y búsqueda
  const postsFiltrados = posts.filter(
    (p) =>
      (filtro === "Todos" || p.categoria === filtro) &&
      p.titulo.toLowerCase().includes(busqueda.toLowerCase())
  );

  // 🔹 Contadores
  const totalTodos = posts.length;
  const totalNoticias = posts.filter((p) => p.categoria === "Noticias").length;
  const totalNovedades = posts.filter((p) => p.categoria === "Novedades").length;

  // ✅ Navegación al detalle
  const verDetalle = (id) => {
    navigate(`/blog/${id}`);
  };

  return (
    <div className="w-full overflow-x-hidden -mt-[85px] sm:-mt-[32px] md:-mt-[40px] lg:-mt-[48px] relative">

      {/* 🔹 Carrusel RESPONSIVO */}
      <section className="relative w-full h-[60vh] sm:h-[65vh] md:h-[70vh] lg:h-[75vh] overflow-hidden pt-24 sm:pt-28 md:pt-0">
        {/* Encabezado fijo */}
        <div className="absolute top-0 left-0 w-full bg-[#2c976a] py-8 z-30 text-center shadow-md pt-20 md:pt-0">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-widest drop-shadow-lg">
            BLOG
          </h1>
        </div>

        {/* Imagen animada */}
        <div className="w-full h-full relative overflow-hidden cursor-grab active:cursor-grabbing">
          <AnimatePresence initial={false} custom={direction}>
            <motion.img
              key={images[current].src}
              src={images[current].src}
              alt={images[current].title}
              className="absolute inset-0 w-full h-full object-cover object-center"
              initial={{ opacity: 0, scale: 1.02, x: direction > 0 ? 50 : -50 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 1, x: direction > 0 ? -50 : 50 }}
              transition={{ duration: 0.8 }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.3}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = offset.x * velocity.x;
                if (swipe < -1000) nextSlide();
                else if (swipe > 1000) prevSlide();
              }}
            />
          </AnimatePresence>
        </div>

        {/* Contenido del slide */}
        <motion.div
          key={images[current].title}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute bottom-6 sm:bottom-10 md:bottom-[70px] left-4 sm:left-8 md:left-12 z-20 bg-[#2c976a]/95 backdrop-blur-sm p-5 sm:p-8 md:p-12 rounded-3xl shadow-2xl max-w-[90%] sm:max-w-2xl md:max-w-3xl"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4 leading-tight">
            {images[current].title}
          </h2>
          <p className="text-white text-base sm:text-lg md:text-xl mb-4 sm:mb-6">
            {images[current].description}
          </p>
          <button
            onClick={() => verDetalle(images[current].id)} // ✅ Usa el ID para navegar correctamente
            className="flex items-center gap-2 sm:gap-3 bg-[#cb4a2acc] hover:bg-[#b43f23] text-white font-semibold px-5 sm:px-7 py-2 sm:py-3 rounded-full text-base sm:text-lg transition-all shadow-md"
          >
            Ver más detalles <ChevronRight size={20} />
          </button>
        </motion.div>
      </section>

      {/* 🔸 Indicadores */}
      <div className="w-full flex justify-center gap-3 mt-6 md:mt-8 mb-12">
        {images.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full cursor-pointer transition-all ${
              index === current
                ? "bg-[#2c976a] scale-110 shadow-md"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
          ></div>
        ))}
      </div>

      {/* 🔹 Filtros y búsqueda */}
      <section id="articulos" className="max-w-6xl mx-auto px-6 mb-16">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 gap-4">
          <input
            type="text"
            placeholder="Buscar artículo..."
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            className="w-full sm:w-1/2 border border-gray-300 rounded-full px-5 py-3 focus:outline-none focus:ring-2 focus:ring-[#2c976a]"
          />

          <div className="flex gap-3 flex-wrap justify-center sm:justify-end">
            {[{ cat: "Todos", count: totalTodos },
              { cat: "Noticias", count: totalNoticias },
              { cat: "Novedades", count: totalNovedades }].map(({ cat, count }) => (
              <button
                key={cat}
                onClick={() => setFiltro(cat)}
                className={`px-5 py-2 rounded-full font-semibold transition-all flex items-center gap-2 ${
                  filtro === cat
                    ? "bg-[#2c976a] text-white"
                    : "bg-gray-200 hover:bg-gray-300"
                }`}
              >
                {cat}
                <span
                  className={`text-sm px-2 py-[2px] rounded-full ${
                    filtro === cat
                      ? "bg-white text-[#2c976a]"
                      : "bg-[#2c976a] text-white"
                  }`}
                >
                  {count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* 🔹 Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {postsFiltrados.length > 0 ? (
            postsFiltrados.map((post) => (
              <motion.div
                key={post.id}
                whileHover={{ scale: 1.03 }}
                className="bg-white shadow-lg rounded-2xl overflow-hidden border border-gray-100"
              >
                <img
                  src={post.imagen}
                  alt={post.titulo}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-800">
                    {post.titulo}
                  </h3>
                  <p className="text-sm text-gray-500 mb-2">
                    Fecha: {post.fecha} • Por: {post.autor}
                  </p>
                  <p className="text-gray-600 mb-4">{post.descripcion}</p>
                  <button
                    onClick={() => verDetalle(post.id)}
                    className="text-[#2c976a] font-semibold hover:underline"
                  >
                    Más detalle →
                  </button>
                </div>
              </motion.div>
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500">
              No se encontraron artículos.
            </p>
          )}
        </div>
      </section>

     { /* ...otras secciones del blog... */}
      <BlogPie />
    </div>
  );
};

export default Blog;
