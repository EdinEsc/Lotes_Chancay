import React from "react";
import { motion } from "framer-motion";
import {
  CreditCard,
  TrendingUp,
  ShieldCheck,
  FileCheck,
  Zap,
  Award,
  CheckCircle,
} from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  initial: {},
  animate: {
    transition: { staggerChildren: 0.15 },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

const BeneficiosSection = () => {
  const beneficios = [
    {
      icon: FileCheck,
      title: "Trámite sencillo",
      description:
        "Proceso claro con requisitos básicos y acompañamiento en cada paso.",
      features: [
        "Sin trámites complicados",
        "Documentación simple",
        "Proceso ágil"
      ],
      color: "from-[#2c976a] to-[#32d28a]",
      bgColor: "bg-gradient-to-br from-[#2c976a]/10 to-[#32d28a]/10",
    },
    {
      icon: CreditCard,
      title: "Crédito directo sin bancos",
      description:
        "Te financiamos el 100% del valor del terreno directamente con nosotros.",
      features: ["Sin intermediarios", "Aprobación inmediata", "Sin burocracia bancaria"],
      color: "from-[#cb4a2a] to-[#e55c3a]",
      bgColor: "bg-gradient-to-br from-[#cb4a2a]/10 to-[#e55c3a]/10",
    },
    {
      icon: ShieldCheck,
      title: "Compra 100% segura",
      description:
        "Trayectoria sólida desarrollando urbanizaciones de calidad.",
      features: [
        "Títulos registrados",
        "Legalmente constituido",
        "Experiencia comprobada"
      ],
      color: "from-[#2c976a] to-[#247b57]",
      bgColor: "bg-gradient-to-br from-[#2c976a]/10 to-[#247b57]/10",
    },
    {
      icon: TrendingUp,
      title: "Mejor financiamiento",
      description:
        "Opciones de pago adaptadas a tus necesidades con las mejores condiciones.",
      features: ["Plazos flexibles", "Cuotas fijas", "Sin sorpresas"],
      color: "from-[#cb4a2a] to-[#d45a3a]",
      bgColor: "bg-gradient-to-br from-[#cb4a2a]/10 to-[#d45a3a]/10",
    },
    {
      icon: Zap,
      title: "Entrega inmediata",
      description:
        "Una vez completado el proceso, tu terreno está listo para que construyas.",
      features: ["Sin tiempos de espera", "Disponibilidad inmediata", "Listo para construir"],
      color: "from-[#32d28a] to-[#2c976a]",
      bgColor: "bg-gradient-to-br from-[#32d28a]/10 to-[#2c976a]/10",
    },
    {
      icon: Award,
      title: "Plusvalía garantizada",
      description:
        "Invierte en una zona en crecimiento con alto potencial de revalorización.",
      features: ["Zona en desarrollo", "Infraestructura creciente", "Alta demanda"],
      color: "from-[#247b57] to-[#2c976a]",
      bgColor: "bg-gradient-to-br from-[#247b57]/10 to-[#2c976a]/10",
    },
  ];

  return (
    <motion.section
      className="relative bg-gradient-to-b from-gray-50 to-white py-16 md:py-24 lg:py-28 overflow-hidden"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-50px" }}
      variants={staggerContainer}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-[#2c976a]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#cb4a2a]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-[#2c976a] text-white text-sm font-bold px-4 py-2 rounded-full mb-4"
            variants={scaleIn}
          >
            <CheckCircle className="w-4 h-4" />
            VENTAJAS EXCLUSIVAS
          </motion.div>

          <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold mb-6">
            <span className="text-[#2c976a]">¿Por qué elegir </span>
            <span className="text-[#cb4a2a]">Chancay 101</span>
            <span className="text-[#2c976a]">?</span>
          </h2>

          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Descubre las ventajas exclusivas que hacen de Chancay la mejor opción
            para invertir en tu terreno propio con{" "}
            <span className="font-semibold text-[#2c976a]">Proyecto Chancay 101</span>
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto"
          variants={staggerContainer}
        >
          {beneficios.map((b, i) => (
            <motion.div
              key={i}
              className={`group relative ${b.bgColor} rounded-2xl p-6 lg:p-8 border border-gray-200/50`}
              variants={fadeInUp}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <div
                className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${b.color} text-white shadow-lg mb-6`}
              >
                <b.icon className="w-7 h-7" />
              </div>

              <h3 className="text-xl font-bold mb-4">{b.title}</h3>
              <p className="text-gray-600 mb-6">{b.description}</p>

              <ul className="space-y-2">
                {b.features.map((f, fi) => (
                  <li key={fi} className="flex items-center gap-2 text-gray-700">
                    <CheckCircle className="w-4 h-4 text-[#32d28a]" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default BeneficiosSection;
