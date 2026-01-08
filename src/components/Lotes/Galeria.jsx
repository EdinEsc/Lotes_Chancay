// import React, { useState } from 'react';

// const Galeria = () => {
//   const [activeTab, setActiveTab] = useState('fotos');
//   const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

//   // Fotos
//   const fotos = [
//     { id: 1, src: "Lotes/1.jpg", alt: "Vista del proyecto" },
//     { id: 2, src: "Lotes/2.jpg", alt: "Área común" },
//     { id: 3, src: "Lotes/3.jpg", alt: "Losa deportiva" },
//     { id: 4, src: "Lotes/4.jpg", alt: "Juegos infantiles" },
//     { id: 5, src: "Lotes/5.jpg", alt: "Entrada principal" },
//     { id: 6, src: "Lotes/6.jpg", alt: "Terreno disponible" },
//     { id: 7, src: "Lotes/7.jpg", alt: "Terreno disponible" },
//     { id: 8, src: "Lotes/8.jpg", alt: "Terreno disponible" },
//     { id: 9, src: "Lotes/9.jpg", alt: "Terreno disponible" }
//   ];

//   // Videos
//   const videos = [
//     {
//       id: 1,
//       title: "Video principal del proyecto",
//       src: "https://www.youtube.com/embed/xSPur6p6PNs"
//     },
//     {
//       id: 2,
//       title: "Recorrido por la urbanización",
//       src: "https://www.youtube.com/embed/bpmKd9iv63Y?start=8"
//     },
//     {
//       id: 3,
//       title: "Vista aérea y áreas comunes",
//       src: "https://www.youtube.com/embed/VBYnWBHeInc?start=8"
//     }
//   ];

//   const nextVideo = () => {
//     setCurrentVideoIndex((prev) =>
//       prev === videos.length - 1 ? 0 : prev + 1
//     );
//   };

//   const prevVideo = () => {
//     setCurrentVideoIndex((prev) =>
//       prev === 0 ? videos.length - 1 : prev - 1
//     );
//   };

//   return (
//     <div className="min-h-screen bg-[#2c976a] py-10 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">

//         {/* TÍTULO */}
//         <div className="text-center mb-12">
//           <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
//             Galería de Fotos y Videos
//           </h1>
//           <div className="w-24 h-1 bg-white mx-auto"></div>
//         </div>

//         {/* CONTENEDOR */}
//         <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">

//           {/* TABS */}
//           <div className="flex border-b">
//             <button
//               onClick={() => setActiveTab('fotos')}
//               className={`flex-1 py-4 text-lg font-semibold transition ${
//                 activeTab === 'fotos'
//                   ? 'bg-[#2c976a] text-white'
//                   : 'bg-gray-100 hover:bg-gray-200'
//               }`}
//             >
//               Fotos
//             </button>

//             <button
//               onClick={() => setActiveTab('videos')}
//               className={`flex-1 py-4 text-lg font-semibold transition ${
//                 activeTab === 'videos'
//                   ? 'bg-[#2c976a] text-white'
//                   : 'bg-gray-100 hover:bg-gray-200'
//               }`}
//             >
//               Videos
//             </button>
//           </div>

//           <div className="p-8">

//             {/* ================= FOTOS ================= */}
//             {activeTab === 'fotos' && (
//               <>
//                 <h2 className="text-2xl font-semibold text-center mb-8">
//                   Conoce nuestro proyecto en imágenes
//                 </h2>

//                 <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
//                   {fotos.map((foto) => (
//                     <div
//                       key={foto.id}
//                       className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition"
//                     >
//                       <img
//                         src={foto.src}
//                         alt={foto.alt}
//                         className="w-full h-64 sm:h-72 md:h-80 lg:h-96 object-cover transition-transform duration-500 group-hover:scale-110"
//                       />
//                       <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition flex items-center justify-center">
//                         <div className="opacity-0 group-hover:opacity-100 bg-white rounded-full p-3">
//                           🔍
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </>
//             )}

//             {/* ================= VIDEOS ================= */}
//             {activeTab === 'videos' && (
//               <>
//                 <h2 className="text-2xl font-semibold text-center mb-6">
//                   {videos[currentVideoIndex].title}
//                 </h2>

//                 <div className="relative max-w-6xl mx-auto">

//                   {/* FLECHA IZQ */}
//                   <button
//                     onClick={prevVideo}
//                     className="absolute left-0 top-1/2 -translate-y-1/2 
//                     -translate-x-16 lg:-translate-x-24
//                     bg-[#2c976a] text-white w-12 h-12 rounded-full shadow-lg hover:scale-110 transition z-10"
//                   >
//                     ❮
//                   </button>

//                   {/* VIDEO */}
//                   <div className="rounded-xl overflow-hidden shadow-2xl bg-black">
//                     <div className="relative pt-[56.25%]">
//                       <iframe
//                         className="absolute inset-0 w-full h-full"
//                         src={videos[currentVideoIndex].src}
//                         title={videos[currentVideoIndex].title}
//                         allowFullScreen
//                       />
//                     </div>
//                   </div>

//                   {/* FLECHA DER */}
//                   <button
//                     onClick={nextVideo}
//                     className="absolute right-0 top-1/2 -translate-y-1/2 
//                     translate-x-16 lg:translate-x-24
//                     bg-[#2c976a] text-white w-12 h-12 rounded-full shadow-lg hover:scale-110 transition z-10"
//                   >
//                     ❯
//                   </button>
//                 </div>

//                 {/* INDICADORES */}
//                 <div className="flex justify-center gap-2 mt-6">
//                   {videos.map((_, i) => (
//                     <button
//                       key={i}
//                       onClick={() => setCurrentVideoIndex(i)}
//                       className={`w-3 h-3 rounded-full ${
//                         i === currentVideoIndex
//                           ? 'bg-[#2c976a]'
//                           : 'bg-gray-300'
//                       }`}
//                     />
//                   ))}
//                 </div>

//                 <p className="text-center mt-4 text-gray-600 text-lg">
//                   Video {currentVideoIndex + 1} de {videos.length}
//                 </p>
//               </>
//             )}

//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Galeria;



import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Galeria = () => {
  const [activeTab, setActiveTab] = useState('fotos');
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [fotos, setFotos] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:8000/api/gallery?section=home')
      .then(res => setFotos(res.data))
      .catch(err => console.error('Error cargando galería', err));
  }, []);

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
      src: "https://www.youtube.com/embed/VBYnWBHeInc?start=8"
    }
  ];

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
      <div className="max-w-[95%] mx-auto">

        {/* TÍTULO */}
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Galería de Fotos y Videos
          </h1>
          <div className="w-28 h-1 bg-white mx-auto"></div>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">

          {/* TABS */}
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

            {/* ================= FOTOS ================= */}
            {activeTab === 'fotos' && (
              <>
                <h2 className="text-3xl font-semibold text-center mb-10">
                  Conoce nuestro proyecto en imágenes
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8">
                  {fotos.map((foto) => (
                    <div
                      key={foto.id}
                      className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition"
                    >
                      <img
                        src={foto.url}
                        alt="Galería"
                        className="w-full h-72 sm:h-80 lg:h-96 object-cover transition-transform duration-500 group-hover:scale-110"
                      />

                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition flex items-center justify-center">
                        <div className="opacity-0 group-hover:opacity-100 bg-white rounded-full px-6 py-3 text-lg font-semibold">
                          Ver imagen
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}

            {/* ================= VIDEOS (SIN CAMBIOS) ================= */}
            {activeTab === 'videos' && (
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
                      <iframe
                        className="absolute inset-0 w-full h-full"
                        src={videos[currentVideoIndex].src}
                        title={videos[currentVideoIndex].title}
                        allowFullScreen
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

                <div className="flex justify-center gap-2 mt-6">
                  {videos.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentVideoIndex(i)}
                      className={`w-3 h-3 rounded-full ${
                        i === currentVideoIndex
                          ? 'bg-[#2c976a]'
                          : 'bg-gray-300'
                      }`}
                    />
                  ))}
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

