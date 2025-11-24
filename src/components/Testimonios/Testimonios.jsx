import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import './Testimonios.css';

const Testimonios = () => {
  const testimonios = [
    {
      id: 1,
      nombre: "Jane D",
      puesto: "Clienta",
      imagen: "/Home/Testimonio2.jpg",
      contenido: "Siempre quise tener un terrenito. Antes me dedicaba a la construccion, pero desde hace 4 anos me dedico a referir clientes para Chancay 101.",
      rating: 5
    },
    {
      id: 2,
      nombre: "Harsh P.",
      puesto: "Cliente",
      imagen: "https://pagedone.io/asset/uploads/1696229994.png",
      contenido: "Vimos varias opciones y la mejor opcion fue Chancay 101. Vinimos porque vimos un cartel, nos ensenaron el terreno y mi esposo dijo: este es.",
      rating: 5
    },
    {
      id: 3,
      nombre: "Atilio Luque",
      puesto: "Cliente",
      imagen: "/Home/Testimonio4.jpg",
      contenido: "Lo que mas me gusto del financiamiento de Chancay 101 fueron las facilidades de pago.",
      rating: 5
    },
    {
      id: 4,
      nombre: "Harsh P.",
      puesto: "Cliente",
      imagen: "https://pagedone.io/asset/uploads/1696229994.png",
      contenido: "Hoy ha sido uno de los dias mas importantes, al fin hemos logrado el sueno que hemos perseguido durante años: tener nuestro propio lote.",
      rating: 5
    }
  ];

  const RatingStars = ({ rating }) => {
    return (
      <div className="flex items-center mb-6 sm:mb-10 gap-2 text-amber-500 transition-all duration-500 scale-110">
        {[...Array(5)].map((_, index) => (
          <svg 
            key={index} 
            className="w-6 h-6" 
            viewBox="0 0 18 17" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z"
              fill="currentColor"
            />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <section className="py-28 bg-white testimonios-container">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="flex justify-center items-center gap-y-10 flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between lg:gap-x-12 max-w-sm sm:max-w-2xl lg:max-w-full mx-auto">
          
          {/* Columna izquierda - Título y controles */}
          <div className="w-full lg:w-2/5 flex flex-col items-center lg:items-start text-center lg:text-left">
            <span className="text-lg text-gray-500 font-semibold mb-5 block">Testimonios</span>
            <h2 className="text-5xl font-extrabold text-[#2c976a] leading-[3.5rem] mb-10">
              23k+ Clientes dieron su{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-tr from-[#cb4a2a] to-[#cb4a2a]">
                Opinión
              </span>
            </h2>
            
            {/* Controles del slider alineados con el texto */}
            <div className="flex items-center justify-center lg:justify-start gap-6 mt-4">
              <button 
                className="testimonios-prev group flex justify-center items-center border border-[#cb4a2a] w-14 h-14 transition-all duration-500 rounded-xl hover:bg-[#cb4a2a]"
              >
                <svg 
                  className="h-7 w-7 text-[#cb4a2a] group-hover:text-white" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.9999 12L4.99992 12M9.99992 6L4.70703 11.2929C4.3737 11.6262 4.20703 11.7929 4.20703 12C4.20703 12.2071 4.3737 12.3738 4.70703 12.7071L9.99992 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              
              <button 
                className="testimonios-next group flex justify-center items-center border border-[#cb4a2a] w-14 h-14 transition-all duration-500 rounded-xl hover:bg-[#cb4a2a]"
              >
                <svg 
                  className="h-7 w-7 text-[#cb4a2a] group-hover:text-white" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 12L19 12M14 18L19.2929 12.7071C19.6262 12.3738 19.7929 12.2071 19.7929 12C19.7929 11.7929 19.6262 11.6262 19.2929 11.2929L14 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Columna derecha - Slider */}
          <div className="w-full lg:w-3/5 scale-[1.05]">
            <Swiper
              modules={[Navigation]}
              spaceBetween={30}
              slidesPerView={2}
              navigation={{
                nextEl: '.testimonios-next',
                prevEl: '.testimonios-prev',
              }}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
                1024: {
                  slidesPerView: 2,
                  spaceBetween: 35,
                },
              }}
              loop={true}
              className="testimonios-swiper"
            >
              {testimonios.map((testimonio) => (
                <SwiperSlide key={testimonio.id}>
                  <div className="testimonio-card group bg-white border border-gray-300 rounded-3xl max-sm:max-w-sm max-sm:mx-auto p-8 transition-all duration-500 hover:border-[#cb4a2a] hover:shadow-lg">
                    <div className="flex items-center gap-6 mb-6 sm:mb-10">
                      <img 
                        className="rounded-full object-cover w-16 h-16" 
                        src={testimonio.imagen} 
                        alt={testimonio.nombre}
                      />
                      <div className="grid gap-1">
                        <h5 className="text-lg text-gray-900 font-semibold transition-all duration-500">
                          {testimonio.nombre}
                        </h5>
                        <span className="text-sm text-gray-500">
                          {testimonio.puesto}
                        </span>
                      </div>
                    </div>
                    
                    <RatingStars rating={testimonio.rating} />
                    
                    <p className="testimonio-text text-base text-gray-600 leading-7 transition-all duration-500 min-h-28 group-hover:text-gray-900">
                      {testimonio.contenido}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonios;
