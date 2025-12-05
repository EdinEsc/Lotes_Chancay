import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Play, MapPin, Navigation, X } from "lucide-react";
import { MapContainer, TileLayer, Marker, Polyline, useMap } from "react-leaflet";
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

// Ícono personalizado del marcador
const redMarkerIcon = L.icon({
  iconUrl: "/Home/red-location.png",
  iconSize: [45, 45],
  iconAnchor: [22, 45],
  popupAnchor: [0, -45],
});

// 🔄 Componente para RECENTRAR MAPA
function ResetCenterView({ coords }) {
  const map = useMap();

  return (
    <button
      onClick={() => map.setView(coords, 16)}
      className="absolute bottom-4 left-4 flex items-center gap-2 bg-[#2c976a] text-white font-semibold text-xs sm:text-sm px-3 py-2 rounded-full shadow-lg z-[9999] font-[Poppins]"
    >
      <MapPin className="w-4 h-4" />
      Regresar
    </button>
  );
}

const Ubicacion = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const proyectoLat = -11.43695054956325;
  const proyectoLng = -77.36357859322175;

  const [ruta, setRuta] = useState([]);

  // 🚗 CÓMO LLEGAR (ruta interna)
  const handleComoLlegar = () => {
    if (!navigator.geolocation) return alert("No pudimos obtener tu ubicación.");

    navigator.geolocation.getCurrentPosition(async (pos) => {
      const user = [pos.coords.latitude, pos.coords.longitude];
      const destino = [proyectoLat, proyectoLng];

      const url = `https://router.project-osrm.org/route/v1/driving/${user[1]},${user[0]};${destino[1]},${destino[0]}?overview=full&geometries=geojson`;

      const res = await fetch(url);
      const data = await res.json();

      if (!data.routes?.length) {
        alert("No se pudo calcular la ruta.");
        return;
      }

      const coords = data.routes[0].geometry.coordinates.map((c) => [c[1], c[0]]);
      setRuta(coords);
    });
  };

  // ❌ LIMPIAR RUTA Y RESTAURAR
  const handleLimpiarRuta = () => {
    setRuta([]);
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
      className="relative bg-gradient-to-br from-white to-gray-50 py-16 md:py-24 lg:py-28 overflow-hidden font-[Poppins]"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-50px" }}
      variants={staggerContainer}
    >
      {/* Fondo */}
      <div className="absolute inset-0 overflow-hidden -z-0">
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

                  <Marker position={[proyectoLat, proyectoLng]} icon={redMarkerIcon} />

                  <ResetCenterView coords={[proyectoLat, proyectoLng]} />

                  {ruta.length > 0 && (
                    <Polyline
                      positions={ruta}
                      color="red"
                      weight={6}
                      opacity={0.8}
                    />
                  )}
                </MapContainer>

                {/* 🔻 BOTONES MAPA */}
                <div className="absolute bottom-4 right-4 flex flex-col gap-2">

                  {/* CÓMO LLEGAR */}
                  <button
                    onClick={handleComoLlegar}
                    className="inline-flex items-center gap-2 bg-[#cb4a2a] hover:bg-[#b63f22] transition text-white font-semibold text-xs sm:text-sm px-4 py-2 rounded-full shadow-lg font-[Poppins]"
                  >
                    <Navigation className="w-4 h-4" />
                    Cómo llegar
                  </button>

                  {/* LIMPIAR RUTA */}
                  {ruta.length > 0 && (
                    <button
                      onClick={handleLimpiarRuta}
                      className="inline-flex items-center gap-2 bg-gray-700 hover:bg-gray-900 transition text-white font-semibold text-xs sm:text-sm px-4 py-2 rounded-full shadow-lg font-[Poppins]"
                    >
                      <X className="w-4 h-4" />
                      Limpiar ruta
                    </button>
                  )}
                </div>

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
