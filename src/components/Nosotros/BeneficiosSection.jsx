import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Home, 
  CreditCard, 
  Handshake, 
  TrendingUp, 
  ShieldCheck, 
  FileCheck, 
  Zap, 
  Award,
  CheckCircle,
  ArrowRight,
  X,
  Calculator,
  DollarSign,
  Calendar,
  Percent
} from "lucide-react";

// 🔹 Variantes de animación
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
  // 🔹 Estado para controlar el modal
  const [mostrarSimulador, setMostrarSimulador] = useState(false);
  
  // 🔹 Estado para los datos del simulador
  const [datosSimulador, setDatosSimulador] = useState({
    valorTerreno: 25000,
    cuotaInicial: 20,
    plazoMeses: 36
  });

  // 🔹 Función para calcular la cuota mensual
  const calcularCuotaMensual = () => {
    const { valorTerreno, cuotaInicial, plazoMeses } = datosSimulador;
    
    // Cálculo del monto financiado
    const montoCuotaInicial = (valorTerreno * cuotaInicial) / 100;
    const montoFinanciado = valorTerreno - montoCuotaInicial;
    
    // Tasa de interés mensual (1.2% mensual = aproximadamente 14.4% anual)
    const tasaInteresMensual = 0.012;
    
    // Fórmula de cuota fija: Cuota = P * (i * (1 + i)^n) / ((1 + i)^n - 1)
    const factor = Math.pow(1 + tasaInteresMensual, plazoMeses);
    const cuotaMensual = montoFinanciado * (tasaInteresMensual * factor) / (factor - 1);
    
    return {
      cuotaMensual: Math.round(cuotaMensual),
      montoFinanciado: Math.round(montoFinanciado),
      montoCuotaInicial: Math.round(montoCuotaInicial),
      totalPagado: Math.round(cuotaMensual * plazoMeses + montoCuotaInicial)
    };
  };

  const resultados = calcularCuotaMensual();

  // 🔹 Manejar cambios en los inputs
  const handleInputChange = (campo, valor) => {
    setDatosSimulador(prev => ({
      ...prev,
      [campo]: Number(valor)
    }));
  };

  // 🔹 Formatear números a soles
  const formatSoles = (monto) => {
    return `S/ ${monto.toLocaleString('es-PE')}`;
  };

  const beneficios = [
    {
      icon: FileCheck,
      title: "Trámite 100% fácil",
      description: "Solo necesitas tu DNI, un recibo de servicio y el pago de la primera cuota.",
      features: ["Sin trámites complicados", "Documentación simple", "Proceso ágil"],
      color: "from-[#2c976a] to-[#32d28a]",
      bgColor: "bg-gradient-to-br from-[#2c976a]/10 to-[#32d28a]/10"
    },
    {
      icon: CreditCard,
      title: "Crédito directo sin bancos",
      description: "Te financiamos el 100% del valor del terreno directamente con nosotros.",
      features: ["Sin intermediarios", "Aprobación inmediata", "Sin burocracia bancaria"],
      color: "from-[#cb4a2a] to-[#e55c3a]",
      bgColor: "bg-gradient-to-br from-[#cb4a2a]/10 to-[#e55c3a]/10"
    },
    {
      icon: ShieldCheck,
      title: "Compra 100% segura",
      description: "Más de 95 años de experiencia desarrollando urbanizaciones de calidad.",
      features: ["Títulos registrados", "Legalmente constituido", "Experiencia comprobada"],
      color: "from-[#2c976a] to-[#247b57]",
      bgColor: "bg-gradient-to-br from-[#2c976a]/10 to-[#247b57]/10"
    },
    {
      icon: TrendingUp,
      title: "Mejor financiamiento",
      description: "Opciones de pago adaptadas a tus necesidades con las mejores condiciones.",
      features: ["Plazos flexibles", "Cuotas fijas", "Sin sorpresas"],
      color: "from-[#cb4a2a] to-[#d45a3a]",
      bgColor: "bg-gradient-to-br from-[#cb4a2a]/10 to-[#d45a3a]/10"
    },
    {
      icon: Zap,
      title: "Entrega inmediata",
      description: "Una vez completado el proceso, tu terreno está listo para que construyas.",
      features: ["Sin tiempos de espera", "Disponibilidad inmediata", "Listo para construir"],
      color: "from-[#32d28a] to-[#2c976a]",
      bgColor: "bg-gradient-to-br from-[#32d28a]/10 to-[#2c976a]/10"
    },
    {
      icon: Award,
      title: "Plusvalía garantizada",
      description: "Invierte en una zona en crecimiento con alto potencial de revalorización.",
      features: ["Zona en desarrollo", "Infraestructura creciente", "Alta demanda"],
      color: "from-[#247b57] to-[#2c976a]",
      bgColor: "bg-gradient-to-br from-[#247b57]/10 to-[#2c976a]/10"
    }
  ];

  return (
    <motion.section
      className="relative bg-gradient-to-b from-gray-50 to-white py-16 md:py-24 lg:py-28 overflow-hidden"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-50px" }}
      variants={staggerContainer}
    >
      {/* Fondos decorativos */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-[#2c976a]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#cb4a2a]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 🔸 Encabezado mejorado */}
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

          <motion.h2
            className="text-3xl md:text-5xl lg:text-6xl font-extrabold mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[#2c976a]">¿Por qué elegir </span>
            <span className="text-[#cb4a2a]">Chancay 101</span>
            <span className="text-[#2c976a]">?</span>
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Descubre las ventajas exclusivas que hacen de Chancay la mejor opción 
            para invertir en tu terreno propio con <span className="font-semibold text-[#2c976a]">Grupo Chancay</span>
          </motion.p>
        </motion.div>

        {/* 🔸 Grid de beneficios mejorado */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto"
          variants={staggerContainer}
        >
          {beneficios.map((beneficio, index) => (
            <motion.div
              key={index}
              className={`group relative ${beneficio.bgColor} rounded-2xl p-6 lg:p-8 border border-gray-200/50 backdrop-blur-sm hover:border-transparent transition-all duration-300`}
              variants={fadeInUp}
              whileHover={{ 
                y: -8,
                scale: 1.02,
                transition: { type: "spring", stiffness: 300 }
              }}
            >
              {/* Icono con gradiente */}
              <motion.div
                className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${beneficio.color} text-white shadow-lg mb-6`}
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <beneficio.icon className="w-7 h-7 lg:w-8 lg:h-8" />
              </motion.div>

              {/* Contenido */}
              <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4 leading-tight">
                {beneficio.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                {beneficio.description}
              </p>

              {/* Lista de características */}
              <ul className="space-y-2 mb-6">
                {beneficio.features.map((feature, featureIndex) => (
                  <motion.li
                    key={featureIndex}
                    className="flex items-center gap-2 text-gray-700 font-medium"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + (index * 0.1) + (featureIndex * 0.05) }}
                  >
                    <CheckCircle className="w-4 h-4 text-[#32d28a] flex-shrink-0" />
                    <span className="text-sm lg:text-base">{feature}</span>
                  </motion.li>
                ))}
              </ul>

              {/* Efecto de brillo al hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* 🔸 Llamada a la acción */}
        <motion.div
          className="text-center mt-16 lg:mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <motion.div
            className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 lg:p-10 max-w-4xl mx-auto"
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3 className="text-2xl lg:text-3xl font-bold text-[#cb4a2a] mb-4">
              ¿Listo para hacer realidad el sueño de tu terreno propio?
            </h3>
            <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
              Únete a las más de 5,000 familias que ya confiaron en Grupo Centenario
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">  
              <Link to="/contacto">
                <motion.button
                  className="bg-[#2c976a] hover:bg-[#247b57] text-white font-bold py-4 px-8 rounded-xl text-lg shadow-lg transition-all flex items-center justify-center gap-3"
                  whileHover={{ 
                    scale: 1.05, 
                    boxShadow: "0 10px 25px rgba(44, 151, 106, 0.3)" 
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Handshake className="w-5 h-5" />
                  ¡Sí, quiero mi terreno!
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
              
              {/* 🔹 Botón que abre el modal */}
              <motion.button
                onClick={() => setMostrarSimulador(true)}
                className="border-2 border-[#2c976a] text-[#2c976a] hover:bg-[#2c976a] hover:text-white font-semibold py-4 px-8 rounded-xl transition-all flex items-center justify-center gap-3"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Calculator className="w-5 h-5" />
                Simular financiamiento
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* 🔹 Modal del simulador FUNCIONAL */}
      {mostrarSimulador && (
        <motion.div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setMostrarSimulador(false)}
        >
          <motion.div
            className="bg-white rounded-2xl shadow-xl w-full max-w-md relative max-h-[90vh] overflow-y-auto"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", damping: 25 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Botón de cerrar */}
            <button
              onClick={() => setMostrarSimulador(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors z-10 bg-white rounded-full p-1"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Contenido del modal */}
            <div className="p-6">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-[#2c976a] text-white rounded-full mb-3">
                  <Calculator className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold text-[#2c976a] mb-2">
                  Simulador de Financiamiento
                </h2>
                <p className="text-gray-600">
                  Calcula tu cuota mensual de manera fácil y rápida
                </p>
              </div>

              {/* Formulario del simulador */}
              <div className="space-y-4">
                {/* Valor del terreno */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                    <DollarSign className="w-4 h-4" />
                    Valor del terreno
                  </label>
                  <div className="relative">
                    <input
                      type="range"
                      min="15000"
                      max="100000"
                      step="5000"
                      value={datosSimulador.valorTerreno}
                      onChange={(e) => handleInputChange('valorTerreno', e.target.value)}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                    />
                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                      <span>S/ 15,000</span>
                      <span>S/ 100,000</span>
                    </div>
                  </div>
                  <div className="text-center mt-2">
                    <span className="text-lg font-bold text-[#2c976a]">
                      {formatSoles(datosSimulador.valorTerreno)}
                    </span>
                  </div>
                </div>

                {/* Cuota inicial */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                    <Percent className="w-4 h-4" />
                    Cuota inicial ({datosSimulador.cuotaInicial}%)
                  </label>
                  <div className="grid grid-cols-5 gap-2 mb-2">
                    {[10, 20, 30, 40, 50].map((porcentaje) => (
                      <button
                        key={porcentaje}
                        onClick={() => handleInputChange('cuotaInicial', porcentaje)}
                        className={`py-2 px-3 rounded-lg text-sm font-medium transition-all ${
                          datosSimulador.cuotaInicial === porcentaje
                            ? 'bg-[#2c976a] text-white'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        {porcentaje}%
                      </button>
                    ))}
                  </div>
                  <div className="text-center">
                    <span className="text-sm text-gray-600">
                      {formatSoles(resultados.montoCuotaInicial)}
                    </span>
                  </div>
                </div>

                {/* Plazo de pago */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    Plazo de pago
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { meses: 12, texto: '12 meses' },
                      { meses: 24, texto: '24 meses' },
                      { meses: 36, texto: '36 meses' },
                      { meses: 48, texto: '48 meses' },
                      { meses: 60, texto: '60 meses' }
                    ].map((plazo) => (
                      <button
                        key={plazo.meses}
                        onClick={() => handleInputChange('plazoMeses', plazo.meses)}
                        className={`py-3 px-4 rounded-xl text-sm font-medium transition-all ${
                          datosSimulador.plazoMeses === plazo.meses
                            ? 'bg-[#2c976a] text-white'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        {plazo.texto}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Resultados */}
                <div className="bg-gradient-to-br from-[#2c976a] to-[#32d28a] text-white p-6 rounded-2xl space-y-3">
                  <div className="text-center">
                    <p className="text-sm font-medium opacity-90">Tu cuota mensual será de</p>
                    <p className="text-3xl font-bold">{formatSoles(resultados.cuotaMensual)}</p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="text-center">
                      <p className="opacity-80">Financiado</p>
                      <p className="font-semibold">{formatSoles(resultados.montoFinanciado)}</p>
                    </div>
                    <div className="text-center">
                      <p className="opacity-80">Total a pagar</p>
                      <p className="font-semibold">{formatSoles(resultados.totalPagado)}</p>
                    </div>
                  </div>
                </div>

                {/* Información adicional */}
                <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0">
                      <ShieldCheck className="w-5 h-5 text-yellow-600 mt-0.5" />
                    </div>
                    <div className="text-sm">
                      <p className="font-medium text-yellow-800 mb-1">Condiciones especiales</p>
                      <ul className="text-yellow-700 space-y-1">
                        <li>• Tasa de interés: 1.2% mensual</li>
                        <li>• Sin comisiones por desembolso</li>
                        <li>• Seguro incluido en la cuota</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Botones de acción */}
                <div className="space-y-3">
                <Link to="/contacto">
                  <motion.button
                    className="w-full bg-[#cb4a2a] hover:bg-[#b43e25] text-white font-bold py-4 px-6 rounded-xl transition-all flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Handshake className="w-5 h-5" />
                    Solicitar este financiamiento
                  </motion.button>
                  </Link>
                  <button
                    onClick={() => setMostrarSimulador(false)}
                    className="w-full border-2 border-gray-300 text-gray-700 hover:border-gray-400 font-medium py-3 px-6 rounded-xl transition-all"
                  >
                    Cerrar simulador
                  </button>
                </div>

                <p className="text-xs text-gray-500 text-center">
                  * Cálculo referencial. Los montos finales pueden variar según evaluación crediticia.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </motion.section>
  );
};

export default BeneficiosSection;