import React, { useState } from 'react';

const Galeria = () => {
  const [activeTab, setActiveTab] = useState('fotos');
  
  // Datos de ejemplo para las fotos
  const fotos = [
    { id: 1, src: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80", alt: "Vista del proyecto" },
    { id: 2, src: "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80", alt: "Área común" },
    { id: 3, src: "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80", alt: "Losa deportiva" },
    { id: 4, src: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80", alt: "Juegos infantiles" },
    { id: 5, src: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80", alt: "Entrada principal" },
    { id: 6, src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80", alt: "Terreno disponible" }
  ];

  return (
    <div className="min-h-screen bg-[#2c976a] py-12 px-4">
      <div className="max-w-6xl mx-auto">
        
        {/* Título */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Galería de Fotos y Videos
          </h1>
          <div className="w-24 h-1 bg-white mx-auto"></div>
        </div>

        {/* Contenedor principal */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          
          {/* Tabs de navegación */}
          <div className="flex border-b border-gray-200">
            <button
              onClick={() => setActiveTab('fotos')}
              className={`flex-1 py-4 px-6 text-lg font-medium transition-colors duration-300 ${
                activeTab === 'fotos'
                  ? 'bg-[#2c976a] text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <div className="flex items-center justify-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Ver Fotos
              </div>
            </button>
            
            <button
              onClick={() => setActiveTab('videos')}
              className={`flex-1 py-4 px-6 text-lg font-medium transition-colors duration-300 ${
                activeTab === 'videos'
                  ? 'bg-[#2c976a] text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <div className="flex items-center justify-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                Ver Videos
              </div>
            </button>
          </div>

          {/* Contenido de las tabs */}
          <div className="p-6 md:p-8">
            {activeTab === 'fotos' && (
              <div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
                  Conoce nuestro proyecto en imágenes
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {fotos.map((foto) => (
                    <div key={foto.id} className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                      <img
                        src={foto.src}
                        alt={foto.alt}
                        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                        <button className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 bg-white bg-opacity-90 rounded-full p-3">
                          <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3-3H7" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'videos' && (
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
                Video del proyecto
              </h2>

              <div className="bg-gray-900 rounded-lg overflow-hidden shadow-2xl">
                <div className="relative pt-[56.25%]">
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src="https://www.youtube.com/embed/xSPur6p6PNs"
                    title="Video del proyecto"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>

              <div className="mt-6 text-center text-gray-600">
                <p>Conoce más sobre nuestra urbanización en este video.</p>
              </div>
            </div>
            )}
          </div>
        </div>

        {/* Tarjeta de contacto */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 mt-8 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              ¿Te gustó el proyecto?
            </h2>
            <p className="text-xl text-gray-600 mb-6">
              ¡Coordina una visita guiada para conocer la urbanización!
            </p>

            {/* ✅ Botón que realiza una llamada */}
            <a href="tel:+51923066370">
              <button className="bg-[#2c976a] hover:bg-[#248059] text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                <div className="flex items-center justify-center gap-3">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Coordinar mi visita por favor
                </div>
              </button>
            </a>

            <p className="text-gray-500 mt-4 text-sm">
              Un asesor se comunicará contigo para agendar la visita
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Galeria;
