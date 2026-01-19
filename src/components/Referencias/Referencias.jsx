import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import api from "../../api/axios";

export default function Referencias() {
  const [referencias, setReferencias] = useState([]);
  const [index, setIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3);

  // 🔹 detectar tamaño de pantalla
  useEffect(() => {
    const updateSlides = () => {
      if (window.innerWidth < 640) {
        setSlidesToShow(1);
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(3);
      }
    };

    updateSlides();
    window.addEventListener("resize", updateSlides);
    return () => window.removeEventListener("resize", updateSlides);
  }, []);

  // 🔹 cargar referencias
  useEffect(() => {
    api
      .get("/referencias")
      .then(res => setReferencias(res.data))
      .catch(err => console.error(err));
  }, []);

  const totalSlides =
    referencias.length > slidesToShow
      ? referencias.length - slidesToShow
      : 0;

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
          text-2xl sm:text-4xl md:text-6xl lg:text-7xl
          font-medium tracking-tight
          text-center
          bg-gradient-to-r from-[#2c976a] via-[#4ac48e] to-[#2c976a]
          bg-clip-text text-transparent
          mb-10
          leading-tight
          max-w-xs sm:max-w-none
          mx-auto
        "
      >
        Nuestros clientes nos respaldan
      </h2>


      <div className="relative max-w-7xl mx-auto overflow-hidden px-6">
        {/* Carrusel */}
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${index * (100 / slidesToShow)}%)`,
          }}
        >
          {referencias.map(ref => (
            <div
              key={ref.id}
              className="w-full sm:w-1/2 lg:w-1/3 px-3 flex-shrink-0"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={`https://api.chancay101.org/storage/${ref.imagen}`}
                  alt={ref.nombre}
                  className="w-full h-[240px] sm:h-[280px] lg:h-[320px] object-cover"
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
