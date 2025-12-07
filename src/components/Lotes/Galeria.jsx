import React, { useState } from 'react';

const Galeria = () => {
  const [activeTab, setActiveTab] = useState('fotos');
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  
  // Datos de ejemplo para las fotos
  const fotos = [
    { id: 1, src: "Lotes/1.jpg", alt: "Vista del proyecto" },
    { id: 2, src: "Lotes/2.jpg", alt: "Área común" },
    { id: 3, src: "Lotes/3.jpg", alt: "Losa deportiva" },
    { id: 4, src: "Lotes/4.jpg", alt: "Juegos infantiles" },
    { id: 5, src: "Lotes/5.jpg", alt: "Entrada principal" },
    { id: 6, src: "Lotes/6.jpg", alt: "Terreno disponible" },
    { id: 7, src: "Lotes/7.jpg", alt: "Terreno disponible" },
    { id: 8, src: "Lotes/8.jpg", alt: "Terreno disponible" },
    { id: 9, src: "Lotes/9.jpg", alt: "Terreno disponible" }
  ];

  // Datos para los videos
  const videos = [
    {
      id: 1,
      title: "Video principal del proyecto",
      src: "https://www.youtube.com/embed/xSPur6p6PNs"
    },
    {
      id: 2,
      title: "Recorrido por la urbanización",
      src: "https://www.youtube.com/embed/bpmKd9iv63Y?start=8"
    },
    {
      id: 3,
      title: "Vista aérea y áreas comunes",
      src: "https://www.youtube.com/embed/VBYnWBHeInc?si=D0OYPFMkCH1OmvEj&start=8"
    }
  ];

  // Funciones para navegar entre videos
  const nextVideo = () => {
    setCurrentVideoIndex((prevIndex) => 
      prevIndex === videos.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevVideo = () => {
    setCurrentVideoIndex((prevIndex) => 
      prevIndex === 0 ? videos.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="min-h-screen bg-[#2c976a] py-8 md:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Título */}
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 md:mb-4 px-2">
            Galería de Fotos y Videos
          </h1>
          <div className="w-20 sm:w-24 h-1 bg-white mx-auto"></div>
        </div>

        {/* Contenedor principal */}
        <div className="bg-white rounded-xl md:rounded-2xl shadow-xl md:shadow-2xl overflow-hidden">
          
          {/* Tabs de navegación */}
          <div className="flex flex-col sm:flex-row border-b border-gray-200">
            <button
              onClick={() => setActiveTab('fotos')}
              className={`flex-1 py-3 sm:py-4 px-4 sm:px-6 text-base sm:text-lg font-medium transition-colors duration-300 ${
                activeTab === 'fotos'
                  ? 'bg-[#2c976a] text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <div className="flex items-center justify-center gap-2">
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span className="text-sm sm:text-base">Ver Fotos</span>
              </div>
            </button>
            
            <button
              onClick={() => setActiveTab('videos')}
              className={`flex-1 py-3 sm:py-4 px-4 sm:px-6 text-base sm:text-lg font-medium transition-colors duration-300 ${
                activeTab === 'videos'
                  ? 'bg-[#2c976a] text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <div className="flex items-center justify-center gap-2">
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                <span className="text-sm sm:text-base">Ver Videos</span>
              </div>
            </button>
          </div>

          {/* Contenido de las tabs */}
          <div className="p-4 sm:p-6 md:p-8">

            {/* ------------------- FOTOS ------------------- */}
            {activeTab === 'fotos' && (
              <div>
                <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 sm:mb-6 text-center px-2">
                  Conoce nuestro proyecto en imágenes
                </h2>
                <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                  {fotos.map((foto) => (
                    <div key={foto.id} className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                      <img
                        src={foto.src}
                        alt={foto.alt}
                        className="w-full h-48 sm:h-56 md:h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                        <button className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 bg-white bg-opacity-90 rounded-full p-2 sm:p-3">
                          <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3-3H7" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ------------------- VIDEOS ------------------- */}
            {activeTab === 'videos' && (
              <div>
                <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 sm:mb-6 text-center px-2">
                  {videos[currentVideoIndex].title}
                </h2>

                <div className="relative max-w-4xl mx-auto">
                  
                  {/* Flecha izquierda - Posición responsive */}
                  <button
                    onClick={prevVideo}
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 
                      -translate-x-4 sm:-translate-x-6 md:-translate-x-10 lg:-translate-x-12
                      bg-[#2c976a] hover:bg-[#248059] text-white p-2 sm:p-3 rounded-full shadow-lg z-10 
                      transition-all duration-300 hover:scale-110 active:scale-95
                      w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center"
                    aria-label="Video anterior"
                  >
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>

                  {/* Video actual */}
                  <div className="bg-gray-900 rounded-lg md:rounded-xl overflow-hidden shadow-xl md:shadow-2xl mx-2 sm:mx-0">
                    <div className="relative pt-[56.25%]">
                      <iframe
                        className="absolute top-0 left-0 w-full h-full"
                        src={videos[currentVideoIndex].src}
                        title={videos[currentVideoIndex].title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>

                  {/* Flecha derecha - Posición responsive */}
                  <button
                    onClick={nextVideo}
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 
                      translate-x-4 sm:translate-x-6 md:translate-x-10 lg:translate-x-12
                      bg-[#2c976a] hover:bg-[#248059] text-white p-2 sm:p-3 rounded-full shadow-lg z-10 
                      transition-all duration-300 hover:scale-110 active:scale-95
                      w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center"
                    aria-label="Video siguiente"
                  >
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>

                  {/* Indicadores de navegación */}
                  <div className="flex justify-center mt-4 sm:mt-6 space-x-2">
                    {videos.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentVideoIndex(index)}
                        className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                          index === currentVideoIndex 
                            ? 'bg-[#2c976a] scale-125' 
                            : 'bg-gray-300 hover:bg-gray-400'
                        }`}
                        aria-label={`Ir al video ${index + 1}`}
                      />
                    ))}
                  </div>

                  {/* Contador de videos */}
                  <div className="text-center mt-3 sm:mt-4 text-gray-600">
                    <p className="text-sm sm:text-base md:text-lg font-medium">
                      Video {currentVideoIndex + 1} de {videos.length}
                    </p>
                  </div>

                </div>

                <div className="mt-6 sm:mt-8 text-center text-gray-600 max-w-2xl mx-auto px-4">
                  <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                    Navega entre los videos para conocer más sobre nuestra urbanización.
                    Cada video muestra aspectos diferentes del proyecto.
                  </p>
                </div>
              </div>
            )}

          </div>
        </div>

        {/* Tarjeta de contacto */}
        <div className="bg-white rounded-xl md:rounded-2xl shadow-xl md:shadow-2xl p-6 sm:p-8 mt-6 sm:mt-8 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3 sm:mb-4">
              ¿Te gustó el proyecto?
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 mb-4 sm:mb-6">
              ¡Coordina una visita guiada para conocer la urbanización!
            </p>

            {/* Botón de llamada */}
            <a href="tel:+51983722524">
              <button className="bg-[#2c976a] hover:bg-[#248059] text-white font-bold 
                py-3 sm:py-4 px-6 sm:px-8 rounded-lg text-base sm:text-lg 
                transition-all duration-300 transform hover:scale-105 active:scale-95 
                shadow-lg hover:shadow-xl w-full sm:w-auto">
                <div className="flex items-center justify-center gap-2 sm:gap-3">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="text-sm sm:text-base">Coordinar mi visita por favor</span>
                </div>
              </button>
            </a>

            <p className="text-gray-500 mt-3 sm:mt-4 text-xs sm:text-sm">
              Un asesor se comunicará contigo para agendar la visita
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Galeria;