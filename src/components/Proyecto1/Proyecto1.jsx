import React, { useState, useRef, useEffect } from "react";
import { motion, useMotionValue } from "framer-motion";
import { MapPin } from "lucide-react";
import api from "../../api/axios";

const ChancayPlano = () => {
  const [zoom, setZoom] = useState(1);
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const [planoUrl, setPlanoUrl] = useState(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const [constraints, setConstraints] = useState({
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  });

  useEffect(() => {
    const fetchPlano = async () => {
      try {
        const res = await api.get("/page-image/hero_image");
        setPlanoUrl(res.data.url);
      } catch (error) {
        console.error("Error al cargar imagen del plano", error);
      }
    };

    fetchPlano();
  }, []);

  const updateConstraints = () => {
    const container = containerRef.current;
    const image = imageRef.current;

    if (!container || !image) return;

    const containerRect = container.getBoundingClientRect();
    const imageRect = image.getBoundingClientRect();

    const excessX = (imageRect.width - containerRect.width) / 2;
    const excessY = (imageRect.height - containerRect.height) / 2;

    setConstraints({
      left: -excessX,
      right: excessX,
      top: -excessY,
      bottom: excessY,
    });
  };

  useEffect(() => {
    updateConstraints();
  }, [zoom]);

  const handleZoomIn = () => zoom < 4 && setZoom((z) => z + 0.2);
  const handleZoomOut = () => zoom > 1 && setZoom((z) => z - 0.2);

  const resetZoom = () => {
    setZoom(1);
    x.set(0);
    y.set(0);
    setTimeout(updateConstraints, 300);
  };

  // ------------------ CARRUSEL ------------------------
  const carouselImages = [
    "/Home/1.png",
    "/Home/2.png",
    "/Home/3.png",
    "/Home/4.png",
    "/Home/5.png",
  ];

  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlide((prev) => (prev + 1) % carouselImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="w-full min-h-screen bg-white text-gray-900 py-16 px-6"
    >
      {/* ---------------------- HEADER SIMPLE ---------------------- */}
      <div className="text-center mb-20">
        {/* TÍTULO ESTÁTICO Y NORMAL */}
        <motion.h2
          className="text-5xl md:text-7xl font-extrabold tracking-tight 
            bg-gradient-to-r from-[#2c976a] via-[#4ac48e] to-[#2c976a]
            bg-clip-text text-transparent mb-6 drop-shadow-xl"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Proyecto Chancay 101
        </motion.h2>

        {/* Subtítulo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-xl md:text-2xl text-gray-700 font-light max-w-3xl mx-auto mt-6 leading-relaxed">
            Vive en la zona con el crecimiento más acelerado del norte chico.
            Conecta con nuevas oportunidades e inversión estratégica.
          </p>
        </motion.div>
      </div>

      {/* ---------------------- 3 IMÁGENES MEJORADAS ---------------------- */}
      <div className="container mx-auto px-6 mb-20">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
          <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500">
            <div className="relative overflow-hidden h-72 md:h-80">
              <img
                src="/Home/puerto.jpg"
                alt="Mega Puerto Chancay"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 via-black/70 to-transparent text-white">
              <div className="flex items-center gap-2 mb-3">
                <MapPin className="w-5 h-5" />
                <span className="text-sm font-medium text-gray-200">Ubicación privilegiada</span>
              </div>
              <h3 className="text-xl font-bold mb-2">A 15 min. del Mega Puerto Chancay</h3>
              <p className="text-gray-300 text-sm">Nuevo megapuerto internacional de clase mundial</p>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500">
            <div className="relative overflow-hidden h-72 md:h-80">
              <img
                src="/Home/castillo.jpg"
                alt="Castillo de Chancay"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 via-black/70 to-transparent text-white">
              <div className="flex items-center gap-2 mb-3">
                <MapPin className="w-5 h-5" />
                <span className="text-sm font-medium text-gray-200">Cultura e historia</span>
              </div>
              <h3 className="text-xl font-bold mb-2">A 10 min. del Castillo de Chancay</h3>
              <p className="text-gray-300 text-sm">Turismo, historia y cultura ancestral</p>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500">
            <div className="relative overflow-hidden h-72 md:h-80">
              <img
                src="/Home/ubi3.jpg"
                alt="Lomas de Lachay"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 via-black/70 to-transparent text-white">
              <div className="flex items-center gap-2 mb-3">
                <MapPin className="w-5 h-5" />
                <span className="text-sm font-medium text-gray-200">Naturaleza</span>
              </div>
              <h3 className="text-xl font-bold mb-2">A 10 min. de las Lomas de Lachay</h3>
              <p className="text-gray-300 text-sm">Naturaleza y áreas verdes protegidas</p>
            </div>
          </div>
        </div>
      </div>

      {/* ---------------------- CARRUSEL ---------------------- */}
      {/* <div className="w-full max-w-2xl mx-auto mb-14">
        <div className="relative w-full h-20 md:h-28">
          {carouselImages.map((img, index) => (
            <motion.img
              key={index}
              src={img}
              alt={`Carrusel ${index + 1}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: slide === index ? 1 : 0 }}
              transition={{ duration: 1 }}
              className="absolute top-0 left-0 w-full h-full object-contain"
            />
          ))}
        </div>
      </div> */}

      {/* ---------------------- PLANO INTERACTIVO ---------------------- */}
      <div id="plano-lotes" className="relative max-w-7xl mx-auto">
        {/* ⭐ LEYENDA MUY PEQUEÑA EN CELULAR ⭐ */}
        <div
          className="
            absolute top-3 left-3 z-30
            bg-white/90 backdrop-blur-xl
            p-2.5 sm:p-5
            rounded-lg sm:rounded-2xl
            border border-gray-200/60
            shadow-md shadow-gray-300/10
            w-36 sm:w-56
            transition-all duration-300 hover:shadow-xl hover:shadow-gray-300/15
            overflow-hidden
          "
        >
          <div className="absolute top-0 left-0 w-12 h-12 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-50 to-transparent rounded-full -translate-x-7 -translate-y-7"></div>
          
          <h3 className="text-[11px] sm:text-lg font-semibold text-gray-800 mb-2.5 sm:mb-4 tracking-tight relative">
            <span className="relative z-10">Estado de Terrenos</span>
            <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-300/50 to-transparent mt-1 sm:mt-2"></div>
          </h3>

          <div className="space-y-1.5 sm:space-y-3 relative">
            <div className="flex items-center gap-1.5 sm:gap-3 group cursor-pointer transition-all duration-200 hover:bg-gray-50/50 p-1.5 sm:p-2 rounded-md">
              <div className="relative">
                <div className="w-3.5 h-3.5 sm:w-5 sm:h-5 rounded-md bg-gradient-to-br from-red-500 to-red-600 shadow-sm"></div>
                <div className="absolute inset-0 rounded-md bg-gradient-to-br from-white/30 to-transparent"></div>
              </div>
              <span className="text-[10px] sm:text-sm font-medium text-gray-700 group-hover:text-gray-900 transition-colors">Vendidos</span>
              <div className="ml-auto">
                <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-red-500/80 group-hover:scale-125 transition-transform"></div>
              </div>
            </div>

            <div className="flex items-center gap-1.5 sm:gap-3 group cursor-pointer transition-all duration-200 hover:bg-gray-50/50 p-1.5 sm:p-2 rounded-md">
              <div className="relative">
                <div className="w-3.5 h-3.5 sm:w-5 sm:h-5 rounded-md bg-gradient-to-br from-amber-400 to-amber-500 shadow-sm border border-amber-300/50"></div>
                <div className="absolute inset-0 rounded-md bg-gradient-to-br from-white/40 to-transparent"></div>
              </div>
              <span className="text-[10px] sm:text-sm font-medium text-gray-700 group-hover:text-gray-900 transition-colors">Separados</span>
              <div className="ml-auto">
                <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-amber-400/80 group-hover:scale-125 transition-transform"></div>
              </div>
            </div>

            <div className="flex items-center gap-1.5 sm:gap-3 group cursor-pointer transition-all duration-200 hover:bg-gray-50/50 p-1.5 sm:p-2 rounded-md">
              <div className="relative">
                <div className="w-3.5 h-3.5 sm:w-5 sm:h-5 rounded-md bg-gradient-to-br from-emerald-500 to-emerald-600 shadow-sm"></div>
                <div className="absolute inset-0 rounded-md bg-gradient-to-br from-white/30 to-transparent"></div>
              </div>
              <span className="text-[10px] sm:text-sm font-medium text-gray-700 group-hover:text-gray-900 transition-colors">Áreas verdes</span>
              <div className="ml-auto">
                <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-emerald-500/80 group-hover:scale-125 transition-transform"></div>
              </div>
            </div>

            <div className="flex items-center gap-1.5 sm:gap-3 group cursor-pointer transition-all duration-200 hover:bg-gray-50/50 p-1.5 sm:p-2 rounded-md">
              <div className="relative">
                <div className="w-3.5 h-3.5 sm:w-5 sm:h-5 rounded-md bg-gradient-to-br from-white to-gray-50 shadow-sm border border-gray-300/60"></div>
                <div className="absolute inset-0 rounded-md bg-gradient-to-br from-gray-400/10 to-transparent"></div>
              </div>
              <span className="text-[10px] sm:text-sm font-medium text-gray-700 group-hover:text-gray-900 transition-colors">Disponibles</span>
              <div className="ml-auto">
                <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-gray-400/60 group-hover:scale-125 transition-transform"></div>
              </div>
            </div>
          </div>
        </div>

        {/* CONTENEDOR DEL MAPA */}
        <div
          ref={containerRef}
          className="
            relative w-full overflow-hidden 
            rounded-2xl flex justify-center items-center
            border-4 border-[#2c976a]
            h-[70vh] min-h-[500px] sm:h-[900px] md:h-[1200px]
            bg-white
          "
        >
          {/* ZOOM BUTTONS */}
          <div className="absolute top-4 right-4 z-20 flex flex-col gap-2 sm:gap-3">
            <button
              onClick={handleZoomIn}
              className="
                p-2 sm:p-3 rounded-full
                bg-[#2c976a]
                border-2 border-[#1e6d4c]
                shadow-[2px_2px_0px_#1e6d4c] sm:shadow-[3px_3px_0px_#1e6d4c]
                hover:shadow-[1px_1px_0px_#1e6d4c]
                hover:translate-x-[1px] hover:translate-y-[1px]
                transition-all
              "
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                className="w-4 h-4 sm:w-6 sm:h-6 text-white"
                stroke="currentColor" strokeWidth="2" fill="none"
              >
                <path d="M12 5v14m7-7H5" strokeLinecap="round" />
              </svg>
            </button>

            <button
              onClick={handleZoomOut}
              className="
                p-2 sm:p-3 rounded-full
                bg-[#d1d1d1]
                border-2 border-[#9e9e9e]
                shadow-[2px_2px_0px_#9e9e9e] sm:shadow-[3px_3px_0px_#9e9e9e]
                hover:shadow-[1px_1px_0px_#9e9e9e]
                hover:translate-x-[1px] hover:translate-y-[1px]
                transition-all
              "
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                className="w-4 h-4 sm:w-6 sm:h-6 text-[#333]"
                stroke="currentColor" strokeWidth="2" fill="none"
              >
                <path d="M5 12h14" strokeLinecap="round" />
              </svg>
            </button>

            <button
              onClick={resetZoom}
              className="
                p-2 sm:p-3 rounded-full
                bg-[#1d6fd8]
                border-2 border-[#154fa0]
                shadow-[2px_2px_0px_#154fa0] sm:shadow-[3px_3px_0px_#154fa0]
                hover:shadow-[1px_1px_0px_#154fa0]
                hover:translate-x-[1px] hover:translate-y-[1px]
                transition-all
              "
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                className="w-4 h-4 sm:w-6 sm:h-6 text-white"
                stroke="currentColor" strokeWidth="2" fill="none"
              >
                <path
                  d="M3 4v6h6M21 20v-6h-6M5.64 5.64a9 9 0 0112.72 0M18.36 18.36a9 9 0 01-12.72 0"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>

          {/* MAPA */}
          <motion.img
            ref={imageRef}
            src={planoUrl || "/Home/PLANO .jpg"}
            alt="Plano del Proyecto Chancay 101"
            className="
              max-w-none
              object-contain
              select-none
              cursor-grab active:cursor-grabbing
              will-change-transform
              w-auto
              h-full
              max-h-full
            "
            style={{
              scale: zoom,
              x,
              y,
              transformOrigin: "center center",
              imageRendering: zoom > 1 ? "crisp-edges" : "auto",
              WebkitBackfaceVisibility: "hidden",
              backfaceVisibility: "hidden",
              WebkitTouchCallout: "none",
              WebkitUserSelect: "none",
              userSelect: "none",
            }}
            drag={zoom > 1}
            dragConstraints={constraints}
            dragElastic={0.05}
            dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
            onLoad={() => {
              updateConstraints();
              resetZoom();
            }}
            onDragStart={() => {
              document.body.style.cursor = 'grabbing';
            }}
            onDragEnd={() => {
              document.body.style.cursor = 'default';
            }}
          />
        </div>
      </div>
    </motion.section>
  );
};

export default ChancayPlano;