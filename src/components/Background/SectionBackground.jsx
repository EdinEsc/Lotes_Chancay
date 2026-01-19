import { useEffect, useState } from "react";
import api from "../../api/axios";

export default function SectionBackground() {
  const [images, setImages] = useState([]);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (images.length === 0) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images]);

  useEffect(() => {
    api
      .get("/imagenes-gallery")
      .then((res) => {
        setImages(res.data.map((img) => img.url));
      })
      .catch((err) => console.error("Error cargando imágenes:", err));
  }, []);

  return (
    <section className="relative w-full h-[40vh] sm:h-[65vh] md:h-[75vh] lg:h-[85vh] overflow-hidden bg-green-900">
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <img
            src={img}
            alt=""
            className="absolute inset-0 w-full h-full object-cover blur-2xl scale-110 opacity-40 sm:hidden"
          />

          <img
            src={img}
            alt="Imagen del proyecto"
            className="absolute inset-0 w-full h-full object-contain sm:object-cover"
          />
        </div>
      ))}

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {images.map((_, idx) => (
          <span
            key={idx}
            className={`w-3 h-3 rounded-full transition ${
              idx === current ? "bg-white" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
