import React, { useState, useRef, useEffect } from "react";
import { motion, useMotionValue } from "framer-motion";
import { MapPin, Plus, Minus, RefreshCcw } from "lucide-react";

const ChancayPlano = () => {
  const [zoom, setZoom] = useState(1);
  const containerRef = useRef(null);
  const imageRef = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const [constraints, setConstraints] = useState({
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  });

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

    


            {/* ---------------------- HEADER SUPER LLAMATIVO ---------------------- */}
      <div className="text-center mb-20">

        {/* TÍTULO CON EFECTO MÁQUINA DE ESCRIBIR PROFESIONAL */}
        <motion.h2
          className="text-5xl md:text-7xl font-extrabold tracking-tight 
          bg-gradient-to-r from-[#cb4a2a] via-[#ff8b4a] to-[#cb4a2a]
          bg-clip-text text-transparent mb-6 drop-shadow-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.span
            className="inline-block font-extrabold"
            style={{
              overflow: "hidden",
              whiteSpace: "nowrap",
              display: "inline-block",
              borderRight: "4px solid #cb4a2a",
            }}
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{
              duration: 3,
              ease: "linear",
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            Proyecto Chancay
          </motion.span>
        </motion.h2>

      <motion.p
          className="text-xl md:text-2xl text-gray-700 font-light max-w-3xl mx-auto mt-6 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Vive en la zona con el crecimiento más acelerado del norte chico.
          Conecta con nuevas oportunidades e inversión estratégica.
        </motion.p>
      </div>


      {/* ---------------------- 3 IMÁGENES ---------------------- */}
      <div className="container mx-auto px-6 mb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
          <div className="flex flex-col items-center text-center">
            <img
              src="/Home/puerto.jpg"
              className="w-full h-64 object-cover rounded-xl shadow-lg mb-2"
            />
            <MapPin className="w-7 h-7 text-[#cb4a2a] mb-1" />
            <h3 className="font-semibold text-xl text-[#2c976a] mb-1">
              A 15 min. del Mega Puerto Chancay
            </h3>
            <p className="text-gray-600">Nuevo megapuerto internacional.</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <img
              src="/Home/castillo.jpg"
              className="w-full h-64 object-cover rounded-xl shadow-lg mb-2"
            />
            <MapPin className="w-7 h-7 text-[#cb4a2a] mb-1" />
            <h3 className="font-semibold text-xl text-[#2c976a] mb-1">
              A 10 min. del Castillo de Chancay
            </h3>
            <p className="text-gray-600">Turismo, historia y cultura.</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <img
              src="/Home/ubi3.jpg"
              className="w-full h-64 object-cover rounded-xl shadow-lg mb-2"
            />
            <MapPin className="w-7 h-7 text-[#cb4a2a] mb-1" />
            <h3 className="font-semibold text-xl text-[#2c976a] mb-1">
              A 10 min. de las Lomas de Lachay
            </h3>
            <p className="text-gray-600">Naturaleza y áreas verdes.</p>
          </div>
        </div>
      </div>

      {/* ---------------------- CARRUSEL ---------------------- */}
      <div className="w-full max-w-2xl mx-auto mb-14">
        <div className="relative w-full h-20 md:h-28">
          {carouselImages.map((img, index) => (
            <motion.img
              key={index}
              src={img}
              initial={{ opacity: 0 }}
              animate={{ opacity: slide === index ? 1 : 0 }}
              transition={{ duration: 1 }}
              className="absolute top-0 left-0 w-full h-full object-contain"
            />
          ))}
        </div>
      </div>

      {/* ---------------------- PLANO INTERACTIVO ---------------------- */}
      <div id="plano-lotes" className="relative max-w-7xl mx-auto">

        {/* ⭐ LEYENDA MEJORADA - RESPONSIVA */}
        <div className="
          absolute top-4 left-4 z-30 
          bg-white/95 backdrop-blur-md 
          p-3 sm:p-4 md:p-6 
          rounded-xl sm:rounded-2xl 
          shadow-xl border border-gray-300 
          w-48 sm:w-56 md:w-60
        ">
          <h3 className="
            text-lg sm:text-xl md:text-2xl 
            font-extrabold text-[#cb4a2a] 
            mb-2 sm:mb-3 md:mb-4 
            text-center
          ">
            PLANO DE LOTES
          </h3>

          <div className="flex items-center gap-2 sm:gap-3 mb-1 sm:mb-2">
            <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-sm bg-[#e60000]" />
            <span className="text-xs sm:text-sm text-red-900 font-medium">
              Vendidos
            </span>
          </div>

          <div className="flex items-center gap-2 sm:gap-3 mb-1 sm:mb-2">
            <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-sm bg-[#fff700]" />
            <span className="text-xs sm:text-sm text-gray-800 font-medium">
              Separados
            </span>
          </div>

          <div className="flex items-center gap-2 sm:gap-3 mb-1 sm:mb-2">
            <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-sm bg-[#2c976a]" />
            <span className="text-xs sm:text-sm text-gray-800 font-medium">
              Áreas verdes
            </span>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-sm bg-white border border-gray-400" />
            <span className="text-xs sm:text-sm text-gray-800 font-medium">
              Disponibles
            </span>
          </div>
        </div>

        <div
          ref={containerRef}
          className="
            relative w-full overflow-hidden 
            rounded-2xl flex justify-center items-center
            border-4 border-[#cb4a2a]
            h-[70vh] sm:h-[900px] md:h-[1200px]
          "
        >
          {/* ZOOM BUTTONS */}
          <div className="absolute top-4 right-4 z-20 flex flex-col gap-2 sm:gap-3">
            <button
              onClick={handleZoomIn}
              className="p-2 sm:p-3 bg-[#cb4a2a] text-white rounded-full shadow-lg hover:bg-[#a23b21]"
            >
              <Plus className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            <button
              onClick={handleZoomOut}
              className="p-2 sm:p-3 bg-gray-300 text-gray-900 rounded-full shadow-lg hover:bg-gray-400"
            >
              <Minus className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            <button
              onClick={resetZoom}
              className="p-2 sm:p-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700"
            >
              <RefreshCcw className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>

          {/* MAPA */}
          <motion.img
            ref={imageRef}
            src="/Home/PLANO .jpg"
            alt="Plano del Proyecto"
            className="max-w-none object-contain select-none"
            style={{
              height: "100%",
              scale: zoom,
              x,
              y,
              transformOrigin: "center center",
            }}
            drag={zoom > 1}
            dragConstraints={constraints}
            dragElastic={0.05}
            onLoad={() => {
              updateConstraints();
              resetZoom();
            }}
          />
        </div>
      </div>

    </motion.section>
  );
};

export default ChancayPlano;


