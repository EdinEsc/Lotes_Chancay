import React, { useEffect, useState } from 'react';
import api from "../../api/axios"; 

const Galeria = () => {
  const [activeTab, setActiveTab] = useState('fotos');
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [fotos, setFotos] = useState([]);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    api
      .get('/gallery?section=home')
      .then(res => setFotos(res.data))
      .catch(err => console.error('Error cargando galería', err));

    api
      .get('/videos')
      .then(res => setVideos(res.data))
      .catch(err => console.error('Error cargando videos', err));
  }, []);

  const nextVideo = () => {
    setCurrentVideoIndex(prev =>
      prev === videos.length - 1 ? 0 : prev + 1
    );
  };

  const prevVideo = () => {
    setCurrentVideoIndex(prev =>
      prev === 0 ? videos.length - 1 : prev - 1
    );
  };

  return (
    <div className="min-h-screen bg-[#2c976a] py-10 px-2 sm:px-4 lg:px-6">
      <div className="max-w-[90%] mx-auto">

        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Galería de Fotos y Videos
          </h1>
          <div className="w-28 h-1 bg-white mx-auto"></div>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">

          <div className="flex border-b">
            <button
              onClick={() => setActiveTab('fotos')}
              className={`flex-1 py-5 text-xl font-semibold transition ${
                activeTab === 'fotos'
                  ? 'bg-[#2c976a] text-white'
                  : 'bg-gray-100 hover:bg-gray-200'
              }`}
            >
              Fotos
            </button>

            <button
              onClick={() => setActiveTab('videos')}
              className={`flex-1 py-5 text-xl font-semibold transition ${
                activeTab === 'videos'
                  ? 'bg-[#2c976a] text-white'
                  : 'bg-gray-100 hover:bg-gray-200'
              }`}
            >
              Videos
            </button>
          </div>

          <div className="p-10">

            {activeTab === 'fotos' && (
              <>
                <h2 className="text-3xl font-semibold text-center mb-10">
                  Conoce nuestro proyecto en imágenes
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8">
                  {fotos.map(foto => (
                    <div
                      key={foto.id}
                      className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition"
                    >
                      <img
                        src={foto.url}
                        alt="Galería"
                        className="w-full h-72 sm:h-80 lg:h-96 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                  ))}
                </div>
              </>
            )}

            {activeTab === 'videos' && videos.length > 0 && (
              <>
                <h2 className="text-2xl font-semibold text-center mb-6">
                  {videos[currentVideoIndex].title}
                </h2>

                <div className="relative max-w-6xl mx-auto">
                  <button
                    onClick={prevVideo}
                    className="absolute left-0 top-1/2 -translate-y-1/2 
                    -translate-x-16 lg:-translate-x-24
                    bg-[#2c976a] text-white w-12 h-12 rounded-full shadow-lg hover:scale-110 transition z-10"
                  >
                    ❮
                  </button>

                  <div className="rounded-xl overflow-hidden shadow-2xl bg-black">
                    <div className="relative pt-[56.25%]">
                      <video
                        className="absolute inset-0 w-full h-full"
                        src={videos[currentVideoIndex].url}
                        controls
                      />
                    </div>
                  </div>

                  <button
                    onClick={nextVideo}
                    className="absolute right-0 top-1/2 -translate-y-1/2 
                    translate-x-16 lg:translate-x-24
                    bg-[#2c976a] text-white w-12 h-12 rounded-full shadow-lg hover:scale-110 transition z-10"
                  >
                    ❯
                  </button>
                </div>

                <p className="text-center mt-4 text-gray-600 text-lg">
                  Video {currentVideoIndex + 1} de {videos.length}
                </p>
              </>
            )}

          </div>
        </div>
      </div>
    </div>
  );
};

export default Galeria;

