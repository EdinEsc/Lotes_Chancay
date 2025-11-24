import React from "react";
import { MapPin, Ruler, Navigation, CheckCircle, Star } from "lucide-react";
import { useNavigate } from "react-router-dom"; // 👈 IMPORTANTE

const Propiedad = () => {
  const navigate = useNavigate(); // 👈 inicializamos navigate

  const beneficios = [
    "Entorno urbano planificado",
    "Pórtico de ingreso con seguridad",
    "Cerco perimétrico completo",
    "Áreas de recreación y esparcimiento",
    "Parque infantil con juegos",
    "Servicios completos (agua, luz, desagüe)"
  ];

  const caracteristicas = [
    { icon: MapPin, text: "Avenida San Isidro, frente al parque José de San Martín" },
    { icon: Ruler, text: "Terrenos desde 90m² hasta 200m²" },
    { icon: Navigation, text: "A 2 cuadras del Malecón Miranda" }
  ];

  const IconItem = ({ Icon, text }) => (
    <div className="flex flex-col md:flex-row items-center text-center md:text-left gap-4 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
      <div className="w-20 h-20 flex items-center justify-center rounded-full bg-gradient-to-r from-[#cb4a2a] to-[#e67e22] text-white shadow-lg flex-shrink-0">
        <Icon size={32} />
      </div>
      <span className="text-gray-800 font-bold text-lg md:text-xl leading-relaxed max-w-xs md:max-w-sm">
        {text}
      </span>
    </div>
  );

  const irAContacto = () => {
    navigate("/contacto");
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-16 md:py-20 space-y-16 bg-gradient-to-b from-gray-50 to-white">
      {/* Encabezado */}
      <div className="text-center space-y-4">
        <div className="flex justify-center items-center gap-2 mb-4">
          <Star className="text-[#2c976a]" size={28} fill="#2c976a" />
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            VELDMAR - <span className="text-[#2c976a]">Chancay 101</span>
          </h1>
          <Star className="text-[#2c976a]" size={28} fill="#2c976a" />
        </div>
        <p className="text-xl text-gray-600 font-medium">
          La nueva urbanización exclusiva en CHANCAY
        </p>
      </div>

      {/* Características principales */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
        {caracteristicas.map((item, index) => (
          <IconItem key={index} Icon={item.icon} text={item.text} />
        ))}
      </div>

      {/* Descripción destacada */}
      <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 border border-gray-200">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <p className="text-gray-700 leading-relaxed text-lg md:text-xl">
            <span className="font-bold text-[#cb4a2a]">Oportunidad única:</span> Adquiera su terreno desde{" "}
            <span className="font-bold text-[#2c976a]">90 m²</span> en <span className="font-bold text-[#2c976a]">Veldmar</span>, 
            la urbanización más exclusiva de Centenario en Pisco. 
          </p>
          <p className="text-gray-700 leading-relaxed text-lg md:text-xl">
            Ubicación estratégica a solo <span className="font-bold">2 cuadras del Malecón Miranda</span>, 
            con pórtico de ingreso monumental, amplias áreas verdes y todos los servicios implementados. 
            Un proyecto diseñado para familias que buscan calidad de vida y plusvalía inmediata.
          </p>
        </div>
      </div>

      {/* Beneficios */}
      <div className="max-w-5xl mx-auto">
        <h3 className="text-[#2c976a] font-bold text-2xl md:text-3xl text-center mb-12">
          ¡Incluye todo lo que tu familia necesita!
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {beneficios.map((item, index) => (
            <div key={index} className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex-shrink-0">
                <CheckCircle className="text-[#2c976a]" size={28} fill="#2c976a" />
              </div>
              <span className="text-gray-800 font-semibold text-lg">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center bg-gradient-to-r from-[#2c976a] to-[#1e6b4e] rounded-2xl p-8 md:p-10 text-white shadow-2xl">
        <h3 className="text-2xl md:text-3xl font-bold mb-4">
          ¡Oportunidad limitada!
        </h3>
        <p className="text-lg md:text-xl mb-6 opacity-90">
          Contamos con unidades disponibles. Consulte por precios y planes de financiamiento.
        </p>
        <button
          onClick={irAContacto}
          className="bg-white text-[#2c976a] font-bold px-8 py-4 rounded-full text-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg hover:shadow-xl"
        >
          Solicitar información
        </button>
      </div>
    </section>
  );
};

export default Propiedad;
