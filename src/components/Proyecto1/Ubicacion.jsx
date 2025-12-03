import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Play, MapPin, Navigation } from "lucide-react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import L from "leaflet";

const fadeInLeft = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const fadeInRight = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  initial: {},
  animate: { transition: { staggerChildren: 0.2 } },
};

// Ícono personalizado
const redMarkerIcon = L.icon({
  iconUrl: "/Home/red-location.png",
  iconSize: [45, 45],
  iconAnchor: [22, 45],
  popupAnchor: [0, -45],
});

const Ubicacion = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const proyectoLat = -11.43695054956325;
  const proyectoLng = -77.36357859322175;

  // CÓMO LLEGAR
  const handleComoLlegar = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const userLat = pos.coords.latitude;
          const userLng = pos.coords.longitude;

          window.open(
            `https://www.google.com/maps/dir/${userLat},${userLng}/${proyectoLat},${proyectoLng}`,
            "_blank"
          );
        },
        () => {
          alert("No pudimos obtener tu ubicación. Puedes ingresar una manual.");
          const ubicacionManual = prompt("Ingresa tu ubicación (ej: Lima, Perú):");

          if (ubicacionManual) {
            window.open(
              `https://www.google.com/maps/dir/${encodeURIComponent(
                ubicacionManual
              )}/${proyectoLat},${proyectoLng}`,
              "_blank"
            );
          }
        }
      );
    }
  };

  const handlePlay = () => {
    setIsPlaying(true);
    videoRef.current.play();
  };

  const handleEnded = () => {
    setIsPlaying(false);
  };

  return (
    <motion.section
      className="relative bg-gradient-to-br from-white to-gray-50 py-16 md:py-24 lg:py-28 overflow-hidden"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-50px" }}
      variants={staggerContainer}
    >
      {/* Fondo */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <img
          src="/Home/chay2.jpg"
          className="absolute inset-0 w-full h-full object-cover opacity-80"
        />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 z-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* IZQUIERDA */}
          <motion.div className="space-y-8" variants={fadeInLeft}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900">
              <span className="text-[#2c976a]">Chancay</span>
              <br />
              <span className="text-[#cb4a2a]">La mejor ubicación</span>
            </h2>

            <p className="text-xl md:text-2xl text-gray-700 font-medium leading-relaxed">
              Vive cerca de la nueva 
              <span className="text-[#2c976a] font-bold"> Ciudad Portuaria de Chancay</span>
              y los principales accesos del norte chico.
            </p>


          {/* MAPA */}
          <motion.div className="w-full pt-6 relative" variants={fadeInLeft}>

            <div className="w-full h-72 sm:h-80 md:h-96 lg:h-[450px] rounded-2xl overflow-hidden shadow-xl border-2 border-white/40 relative z-0">

              <MapContainer
                center={[proyectoLat, proyectoLng]}
                zoom={16}
                scrollWheelZoom={true}
                className="w-full h-full rounded-2xl"
              >
                <TileLayer
                  attribution="&copy; OpenStreetMap"
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                <Marker
                  position={[proyectoLat, proyectoLng]}
                  icon={redMarkerIcon}
                />
              </MapContainer>

              {/* 🔻 BOTÓN UBICACIÓN EXACTA (ABAJO IZQUIERDA)  */}
              <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-[#2c976a] text-white font-bold text-xs sm:text-sm px-3 py-2 rounded-full shadow-lg">
                <MapPin className="w-4 h-4" />
                Ubicación exacta
              </div>

              {/* 🔻 BOTÓN CÓMO LLEGAR (ABAJO DERECHA - FLOTANTE) */}
              <button
                onClick={handleComoLlegar}
                className="absolute bottom-4 right-4 inline-flex items-center gap-2 bg-[#cb4a2a] hover:bg-[#b63f22] transition text-white font-bold text-xs sm:text-sm px-4 py-2 rounded-full shadow-lg"
              >
                <Navigation className="w-4 h-4" />
                Cómo llegar
              </button>
            </div>

          </motion.div>

          </motion.div>

          {/* VIDEO DERECHA */}
          <motion.div className="relative z-0" variants={fadeInRight}>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              
              <video
                ref={videoRef}
                src="/Home/UbicacionChancay.mp4"
                controls={isPlaying}
                
                /* 🔥 EVITA PANTALLA COMPLETA EN CELULAR */
                playsInline
                webkit-playsinline="true"
                x5-playsinline="true"

                className="w-full h-[500px] sm:h-[620px] md:h-[750px] lg:h-[900px] xl:h-[1050px] object-cover rounded-3xl"
                poster="/Home/poster-ubicacion.jpg"
                onEnded={handleEnded}
              />

              {!isPlaying && (
                <div
                  className="absolute inset-0 flex items-center justify-center cursor-pointer"
                  onClick={handlePlay}
                >
                  <div className="bg-white/90 p-6 rounded-full shadow-2xl hover:scale-110 transition-transform">
                    <Play className="w-10 h-10 text-[#2c976a]" />
                  </div>
                </div>
              )}
            </div>
          </motion.div>

        </div>
      </div>
    </motion.section>
  );
};

export default Ubicacion;
