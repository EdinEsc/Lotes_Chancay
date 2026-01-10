// import { useState } from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// const referencias = [
//   {
//     nombre: "Patricia Montell",
//     ciudad: "Mi Vivienda – Chilca",
//     texto:
//       "Compramos en Los Portales por su transparencia, buen precio y el gran potencial de Chilca.",
//     imagen: "/img/ref1.jpg",
//   },
//   {
//     nombre: "Franklin Suarez",
//     ciudad: "HU – Huampani",
//     texto:
//       "Compré pensando en el futuro de mis hijos y logré el sueño de la casa propia.",
//     imagen: "/img/ref2.jpg",
//   },
//   {
//     nombre: "Giovanna García",
//     ciudad: "HU – El Retablo de Oro",
//     texto:
//       "Un lugar tranquilo y verde para nuestra familia. Excelente decisión.",
//     imagen: "/img/ref3.jpg",
//   },
//   {
//     nombre: "Carlos Pérez",
//     ciudad: "HU – Santa Clara",
//     texto:
//       "Muy buena atención desde el inicio hasta la entrega.",
//     imagen: "/img/ref4.jpg",
//   },
//   {
//     nombre: "Rosa Medina",
//     ciudad: "Mi Vivienda – Lurín",
//     texto:
//       "Siempre nos acompañaron en todo el proceso de compra.",
//     imagen: "/img/ref5.jpg",
//   },
//   {
//     nombre: "Luis Ramírez",
//     ciudad: "HU – Pachacámac",
//     texto:
//       "Precios accesibles y excelente ubicación.",
//     imagen: "/img/ref6.jpg",
//   },
//   {
//     nombre: "María Torres",
//     ciudad: "Mi Vivienda – Carabayllo",
//     texto:
//       "Ahora tenemos nuestro propio hogar gracias a Los Portales.",
//     imagen: "/img/ref7.jpg",
//   },
//   {
//     nombre: "Jorge Castillo",
//     ciudad: "HU – Cieneguilla",
//     texto:
//       "Un proyecto bien planificado y con áreas verdes.",
//     imagen: "/img/ref8.jpg",
//   },
//   {
//     nombre: "Ana López",
//     ciudad: "Mi Vivienda – Puente Piedra",
//     texto:
//       "Muy buena experiencia, todo claro desde el inicio.",
//     imagen: "/img/ref9.jpg",
//   },
//   {
//     nombre: "Pedro Salazar",
//     ciudad: "HU – Lomas de Ancón",
//     texto:
//       "La mejor inversión que pudimos hacer como familia.",
//     imagen: "/img/ref10.jpg",
//   },
//   {
//     nombre: "Claudia Ríos",
//     ciudad: "Mi Vivienda – Villa El Salvador",
//     texto:
//       "Cumplimos el sueño de tener casa propia.",
//     imagen: "/img/ref11.jpg",
//   },
//   {
//     nombre: "Miguel Huamán",
//     ciudad: "HU – Ate",
//     texto:
//       "Excelente atención y proyectos bien ubicados.",
//     imagen: "/img/ref12.jpg",
//   },
// ];

// export default function Referencias() {
//   const [index, setIndex] = useState(0);

//   // mostramos 3 tarjetas
//   const totalSlides = referencias.length - 3;

//   const prev = () => {
//     setIndex(index === 0 ? totalSlides : index - 1);
//   };

//   const next = () => {
//     setIndex(index === totalSlides ? 0 : index + 1);
//   };

//   return (
//     <section className="w-full py-16 bg-white">
//       <h2 className="text-3xl font-bold text-center text-green-700 mb-10">
//         Nuestros clientes nos respaldan
//       </h2>

//       <div className="relative max-w-7xl mx-auto overflow-hidden px-6">
//         {/* Carrusel */}
//         <div
//           className="flex transition-transform duration-500 ease-in-out"
//           style={{ transform: `translateX(-${index * 33.333}%)` }}
//         >
//           {referencias.map((ref, i) => (
//             <div key={i} className="w-1/3 px-3 flex-shrink-0">
//               <div className="relative rounded-2xl overflow-hidden shadow-lg">
//                 <img
//                   src={ref.imagen}
//                   alt={ref.nombre}
//                   className="w-full h-[320px] object-cover"
//                 />

//                 {/* Tarjeta */}
//                 <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white rounded-xl p-4 w-[90%] shadow-xl text-center">
//                   <p className="text-green-700 text-sm italic mb-2">
//                     “{ref.texto}”
//                   </p>
//                   <p className="font-bold text-gray-800 text-sm">
//                     {ref.nombre}
//                   </p>
//                   <p className="text-xs text-gray-500">
//                     {ref.ciudad}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Flechas */}
//         <button
//           onClick={prev}
//           className="absolute left-2 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow hover:bg-green-50"
//         >
//           <ChevronLeft className="text-green-700" />
//         </button>

//         <button
//           onClick={next}
//           className="absolute right-2 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow hover:bg-green-50"
//         >
//           <ChevronRight className="text-green-700" />
//         </button>
//       </div>
//     </section>
//   );
// }

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import api from "../../api/axios";

export default function Referencias() {
  const [referencias, setReferencias] = useState([]);
  const [index, setIndex] = useState(0);

  // 🔹 cargar referencias desde backend
  useEffect(() => {
    api.get("/referencias")
      .then(res => setReferencias(res.data))
      .catch(err => console.error(err));
  }, []);

  // mostramos 3 tarjetas
  const totalSlides =
    referencias.length > 3 ? referencias.length - 3 : 0;

  const prev = () => {
    if (totalSlides === 0) return;
    setIndex(index === 0 ? totalSlides : index - 1);
  };

  const next = () => {
    if (totalSlides === 0) return;
    setIndex(index === totalSlides ? 0 : index + 1);
  };

  if (referencias.length === 0) return null;

  return (
    <section className="w-full py-16 bg-white">
      <h2
        className="
            text-5xl md:text-7xl
            font-extrabold tracking-tight
            text-center
            bg-gradient-to-r from-[#2c976a] via-[#4ac48e] to-[#2c976a]
            bg-clip-text text-transparent
            mb-10 drop-shadow-xl
        "
        >
        Nuestros clientes nos respaldan
        </h2>


      <div className="relative max-w-7xl mx-auto overflow-hidden px-6">
        {/* Carrusel */}
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${index * 33.333}%)` }}
        >
          {referencias.map((ref) => (
            <div key={ref.id} className="w-1/3 px-3 flex-shrink-0">
              <div className="relative rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={`http://127.0.0.1:8000/storage/${ref.imagen}`}
                  alt={ref.nombre}
                  className="w-full h-[320px] object-cover"
                />

                {/* Tarjeta */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white rounded-xl p-4 w-[90%] shadow-xl text-center">
                  <p className="text-green-700 text-sm italic mb-2">
                    “{ref.texto}”
                  </p>
                  <p className="font-bold text-gray-800 text-sm">
                    {ref.nombre}
                  </p>
                  <p className="text-xs text-gray-500">
                    {ref.ciudad}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Flechas */}
        {totalSlides > 0 && (
          <>
            <button
              onClick={prev}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow hover:bg-green-50"
            >
              <ChevronLeft className="text-green-700" />
            </button>

            <button
              onClick={next}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow hover:bg-green-50"
            >
              <ChevronRight className="text-green-700" />
            </button>
          </>
        )}
      </div>
    </section>
  );
}

