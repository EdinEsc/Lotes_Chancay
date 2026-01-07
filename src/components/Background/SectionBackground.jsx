import { useEffect, useState } from "react";
import api from "../../api/axios";

export default function SectionBackground() {
  const [images, setImages] = useState([]);
  const [current, setCurrent] = useState(0);

  // Auto-slide cada 3 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images]);

  useEffect(() => {
    api.get("/imagenes-gallery")
      .then(res => setImages(res.data.map(img => img.url)))
      .catch(err => console.error("Error cargando imágenes:", err));
  }, []);

  const nextSlide = () => setCurrent((current + 1) % images.length);
  const prevSlide = () => setCurrent((current - 1 + images.length) % images.length);

  return (
    <section className="relative w-full h-[50rem] overflow-hidden rounded-lg shadow-lg">
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-700 ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
          style={{
            backgroundImage: `url(${img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
      ))}

      {/* Flechas de navegación */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 text-white text-3xl z-20 hover:text-gray-300 bg-black/30 p-2 rounded-full"
      >
        &#10094;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 text-white text-3xl z-20 hover:text-gray-300 bg-black/30 p-2 rounded-full"
      >
        &#10095;
      </button>

      {/* Indicadores (dots) */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
        {images.map((_, idx) => (
          <span
            key={idx}
            className={`w-3 h-3 rounded-full ${
              idx === current ? "bg-white" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
