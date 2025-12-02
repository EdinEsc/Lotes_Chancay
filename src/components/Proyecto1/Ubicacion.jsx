import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Play, MapPin, Navigation } from "lucide-react";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
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

const Ubicacion = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

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
      {/* ---------------------- FONDO ---------------------- */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="/Home/chay2.jpg"
          className="absolute inset-0 w-full h-full object-cover opacity-80"
        />
        <div className="absolute top-0 left-0 w-72 h-72 bg-[#2c976a]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#cb4a2a]/10 rounded-full blur-3xl"></div>
      </div>

      {/* ---------------------- CONTENIDO ---------------------- */}
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ---------------------- IZQUIERDA ---------------------- */}
          <motion.div className="space-y-8" variants={fadeInLeft}>
            {/* Header */}
            <div className="flex items-center gap-4 mb-6">
              <div>
                <div className="inline-flex items-center gap-2 bg-[#2c976a]/10 text-[#2c976a] text-sm font-bold px-3 py-1 rounded-full mb-2">
                  <Navigation className="w-3 h-3" />
                  UBICACIÓN ESTRATÉGICA
                </div>

                <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900 space-y-1">
                  <div className="flex items-center gap-2 text-[#2c976a]">
                    <span>Chancay</span>
                    <img
                      src="/Home/101.png"
                      alt="Chancay 101"
                      className="h-[45px] md:h-[55px] lg:h-[65px] object-contain"
                    />
                  </div>
                  <div className="text-[#cb4a2a]">La mejor ubicación</div>
                  <div className="text-[#2c976a]">De Lima Norte</div>
                </h2>
              </div>
            </div>

            {/* Texto descriptivo */}
            <div className="space-y-6">
              <p className="text-xl md:text-2xl text-gray-700 font-medium leading-relaxed">
                Vive en una zona de alto crecimiento, cerca de la nueva 
                <span className="text-[#2c976a] font-bold"> Ciudad Portuaria de Chancay</span>,
                la Panamericana Norte y los principales accesos.
              </p>
            </div>

            {/* ---------------------- MAPA OSM REPLACED ---------------------- */}
            <motion.div className="w-full pt-6" variants={fadeInLeft}>
              <div className="w-full h-72 sm:h-80 md:h-96 lg:h-[450px] rounded-2xl overflow-hidden shadow-xl border-2 border-white/40 backdrop-blur-xl">

                <MapContainer
                  center={[-11.43695054956325, -77.36357859322175]}
                  zoom={16}
                  scrollWheelZoom={true}
                  className="w-full h-full rounded-2xl"
                >
                  {/* Capa OSM */}
                  <TileLayer
                    attribution='&copy; OpenStreetMap'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />

                  {/* Punto GeoJSON */}
                  <GeoJSON
                    data={{
                      "type": "FeatureCollection",
                      "features": [
                        {
                          "type": "Feature",
                          "properties": {},
                          "geometry": {
                            "type": "Point",
                            "coordinates": [
                              -77.36357859322175,
                              -11.43695054956325
                            ]
                          }
                        }
                      ]
                    }}
                    pointToLayer={(feature, latlng) =>
                      L.circleMarker(latlng, {
                        radius: 10,
                        color: "#cb4a2a",      // borde rojo-naranja (color de tu marca)
                        fillColor: "#cb4a2a",
                        fillOpacity: 0.9
                      })
                    }
                  />
                </MapContainer>
              </div>

              {/* Etiqueta del mapa */}
              <div className="mt-4 inline-flex items-center gap-2 bg-[#2c976a] text-white font-bold text-sm px-4 py-2 rounded-full shadow-md">
                <MapPin className="w-4 h-4" />
                Ubicación exacta del proyecto
              </div>
            </motion.div>


          </motion.div>

          {/* ---------------------- DERECHA: VIDEO ---------------------- */}
          <motion.div className="relative" variants={fadeInRight}>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <video
                ref={videoRef}
                src="/Home/UbicacionChancay.mp4"
                controls={isPlaying}
                className="w-full h-[500px] sm:h-[620px] md:h-[750px] lg:h-[900px] xl:h-[1050px] object-cover rounded-3xl"
                poster="/Home/poster-ubicacion.jpg"
                onEnded={handleEnded}
              />

              {/* Botón Play solo si no está reproduciendo */}
              {!isPlaying && (
                <div
                  className="absolute inset-0 flex items-center justify-center cursor-pointer"
                  onClick={handlePlay}
                >
                  <div className="bg-white/90 p-6 rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform">
                    <Play className="w-10 h-10 text-[#2c976a]" />
                  </div>
                </div>
              )}

              {/* Etiqueta de ubicación */}
              <div className="absolute top-4 left-4 bg-[#cb4a2a] text-white text-sm font-bold px-4 py-2 rounded-full shadow-lg flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Ubicación real
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </motion.section>
  );
};

export default Ubicacion;
