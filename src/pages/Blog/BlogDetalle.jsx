import { useParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Play, MapPin, Calendar, User, Star, TrendingUp, Shield, Zap, Home, DollarSign, CheckCircle, ArrowRight, Target, Building, Leaf, TrendingUp as TrendUp, Clock, Eye, Share2, X, Facebook, Twitter, Linkedin, Mail, Link2 } from "lucide-react";
import { useState } from "react";
import BlogPie from "../../components/Blog/Blogpie";

// 🔹 Datos completos de todos los posts con formatos variados
const noticias = [
  {
    id: 1,
    titulo: "¿Por Qué Invertir en un Terreno es una Buena Opción en 2025?",
    categoria: "Inversión",
    fecha: "15/01/2025",
    autor: "Grupo Centenario",
    imagen: "/Blog/Blog5.jpg",
    contenido: `
#GrupoCentenario #CentenarioUrbanizaciones #CompraTuLote

¿Vale la pena invertir en terrenos en 2025?
Sí, y te explicamos por qué. En un contexto económico volátil, los terrenos representan una de las inversiones más seguras y con mayor potencial de crecimiento.

SEGURIDAD FINANCIERA GARANTIZADA
Los terrenos son activos tangibles que mantienen su valor a lo largo del tiempo, incluso en épocas de inflación. A diferencia de otros instrumentos financieros, un terreno no desaparece, no quiebra y siempre tendrá valor. Esta estabilidad lo convierte en el refugio perfecto para proteger tu capital frente a las fluctuaciones del mercado.

ALTA VALORIZACIÓN COMPROBADA
Zonas estratégicas como Chancay proyectan un crecimiento superior al 35% anual gracias al megapuerto y las inversiones asociadas. Nuestros clientes han visto retornos extraordinarios en los últimos 24 meses, con casos documentados de valorizaciones del 45% en terrenos estratégicamente ubicados.

FLEXIBILIDAD TOTAL
Puedes construir cuando quieras, como quieras. Tu terreno te da la libertad de diseñar tu espacio ideal según tus necesidades y presupuesto. Desde una vivienda familiar hasta un proyecto comercial, las posibilidades son infinitas.

DATOS CLAVE 2025:
- Inflación de terrenos: 18-22% anual
- Tasa de interés hipotecario: 6.5% (históricamente baja)
- Crecimiento sector inmobiliario: 15% interanual
- Demanda de lotes: +30% vs 2024

CENTENARIO URBANIZACIONES TE OFRECE:
• Lotes desde 100m² hasta 500m²
• Financiamiento directo hasta 95% del valor
• Documentación 100% en regla con garantía legal
• Urbanizaciones con todos los servicios básicos
• Asesoría personalizada gratuita

ZONAS DE ALTO POTENCIAL 2025-2026:
- Chancay (Megapuerto - Proyección +40%)
- Huaral (Agroindustria - Proyección +25%)
- Norte Chico (Turismo y desarrollo - Proyección +30%)

COMPARATIVO DE RENTABILIDAD:
Inversión | Terrenos | Dólares | Acciones
Rentabilidad Anual | 18-22% | 3-5% | 8-12%
Riesgo | Bajo | Medio | Alto
Liquidez | Media | Alta | Alta

¿CÓMO COMENZAR TU INVERSIÓN?
El proceso es más simple de lo que imaginas. Comienza con una consultoría gratuita donde evaluamos tu perfil de inversionista, te mostramos las mejores opciones según tu presupuesto y te guiamos en todo el proceso legal y financiero.

COMPRA TU LOTE hoy y asegura tu futuro financiero. Nuestros especialistas están listos para guiarte en el proceso de inversión más importante de tu vida.
    `,
    imagenesAdicionales: ["/Blog/1/Img1.jpg", "/Blog/1/Img2.jpg"],
    video: "https://www.youtube.com/embed/pybY_XTBOys?si=E0WEbRo8o3hHCgdG",
    destacado: true,
    tiempoLectura: "6 min"
  },
  {
    id: 2,
    titulo: "El Futuro Inmobiliario de Chancay con su Nuevo Puerto",
    categoria: "Megapuerto",
    fecha: "22/02/2025",
    autor: "Innova Group",
    imagen: "/Blog/Blog6.jpg",
    contenido: `
#MegapuertoChancay #InversionEstrategica #DesarrolloNorte

EL PROYECTO QUE CAMBIARÁ TODO:
El Megapuerto de Chancay representa la inversión más importante en infraestructura portuaria del Perú en décadas. Con una capacidad inicial de 1.5 millones de TEUs, posicionará al Perú como hub logístico de Sudamérica.

INVERSIÓN Y EMPLEO:
Inversión Total: US$ 3,600 millones
Fecha de Inauguración: Diciembre 2025
Empleos Generados: 15,000 directos y 45,000 indirectos
Capacidad Inicial: 1.5 millones de contenedores

IMPACTO INMOBILIARIO INMEDIATO:

ZONA RESIDENCIAL NORTE:
• Valorización esperada: +40% en 24 meses
• Nuevos proyectos: 25 urbanizaciones en desarrollo
• Precio m² actual: $800 → Proyectado 2026: $1,200
• Tiempo de duplicación de inversión: 3-4 años

ZONA COMERCIAL SUR:
• Centros comerciales: 3 en construcción
• Hoteles: 5 cadenas internacionales confirmadas
• Oficinas: 100,000 m² nuevos en desarrollo
• Espacios logísticos: 200,000 m² planificados

OPORTUNIDADES EXCLUSIVAS GRUPO CENTENARIO:
• Lotes estratégicos a 5-10 minutos del puerto
• Precios de preventa con descuentos hasta 20%
• Planes de financiamiento especiales para inversionistas
• Asesoría legal especializada en grandes proyectos

BENEFICIOS ADICIONALES:
- Acceso preferencial a lotes con vista al mar
- Posibilidad de agrupación para grandes inversionistas
- Programas de rentabilidad garantizada
- Alianzas con constructoras premium

INFRAESTRUCTURA COMPLEMENTARIA:
El desarrollo del megapuerto viene acompañado de importantes obras de infraestructura que potenciarán aún más la valorización de la zona. Autopistas de conexión, mejoras en servicios públicos y desarrollo de áreas recreativas son solo algunos de los beneficios adicionales.

NO TE QUEDES FUERA:
El 70% de los lotes en primera etapa ya están vendidos. La segunda etapa presenta precios ajustados con mayor potencial de valorización. Contáctanos hoy mismo para reservar tu lote en la zona de mayor crecimiento del país.
    `,
    imagenesAdicionales: ["/Blog/2/Img1.jpg", "/Blog/2/Img2.jpg"],
    mapa: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3902.23821542366!2d-77.267867925019!3d-11.988426288213227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105e92d2a1c83c7%3A0x23d19db2c9b3b0e1!2sChancay!5e0!3m2!1ses!2spe!4v1234567890",
    lista: [
      "Puerto de aguas profundas de clase mundial",
      "Zona franca comercial con beneficios tributarios",
      "Corredor logístico internacional integrado",
      "Conectividad vial mejorada con autopistas",
      "Zona económica especial con incentivos"
    ],
    tiempoLectura: "8 min"
  },
  {
    id: 3,
    titulo: "Proyectos Verdes: El Boom de la Construcción Sostenible",
    categoria: "Sostenibilidad",
    fecha: "10/03/2025",
    autor: "EcoVida",
    imagen: "/Blog/Blog7.jpg",
    contenido: `
#ConstruccionSostenible #EcoAmigable #CentenarioVerde

PREGUNTAS FRECUENTES SOBRE CONSTRUCCIÓN SOSTENIBLE:

¿Qué es una construcción sostenible?
Es un método integral que reduce el impacto ambiental mediante el uso eficiente de recursos, materiales ecológicos y tecnologías innovadoras que minimizan la huella de carbono.

¿Cuáles son los beneficios reales?
• Ahorro económico: 40-50% menos en servicios públicos
• Salud: Mejor calidad del aire interior y bienestar
• Valorización: +25% vs construcción tradicional
• Durabilidad: Mayor vida útil de las edificaciones
• Plusvalía: Mayor demanda en el mercado

TECNOLOGÍAS IMPLEMENTADAS POR CENTENARIO URBANIZACIONES:

SISTEMAS SOLARES AVANZADOS:
- Paneles solares para áreas comunes y viviendas
- Calentadores solares de agua de alta eficiencia
- Alumbrado público LED inteligente
- Estaciones de carga para vehículos eléctricos

MANEJO INTEGRAL DEL AGUA:
- Sistema de recolección y tratamiento de agua pluvial
- Riego por goteo automatizado en áreas verdes
- Plantas nativas de bajo consumo hídrico
- Sistemas de reutilización de aguas grises

MATERIALES ECOLÓGICOS:
- Aislantes térmicos naturales
- Pinturas con cero VOC (compuestos orgánicos volátiles)
- Madera certificada de fuentes sostenibles
- Concreto con agregados reciclados

NUESTRO COMPROMISO AMBIENTAL:
• 30% de áreas verdes en todos los proyectos
• Materiales locales y reciclados en un 60%
• Certificación EDGE en todos los desarrollos
• Reducción del 40% en consumo energético
• Programa de reforestación comunitaria

BENEFICIOS FINANCIEROS:
- Descuentos en impuestos municipales
- Financiamiento verde con tasas preferenciales
- Mayor velocidad de venta y rentabilidad
- Ahorros comprobados en mantenimiento

CASOS DE ÉXITO COMPROBADOS:
Nuestros proyectos sostenibles han demostrado un retorno de inversión adicional del 15-20% comparado con construcciones tradicionales. Los propietarios reportan ahorros mensuales promedio de S/ 300 en servicios públicos.

¿Interesado en vivir de forma sostenible y ahorrar dinero?
Contáctanos y conoce nuestros proyectos eco-amigables con los mejores precios del mercado y financiamiento especializado.
    `,
    imagenesAdicionales: ["/Blog/3/Img1.jpg", "/Blog/3/Img2.jpg", "/Blog/3/Img3.jpg"],
    video: "https://www.youtube.com/embed/udO_hgEoaxw?si=cbO-4NRRQFM4e2Pt",
    lista: [
      "Certificación EDGE con estándares internacionales",
      "Energía solar integrada en todas las viviendas",
      "Sistema de reciclaje y tratamiento de agua",
      "Materiales biodegradables y no tóxicos",
      "Transporte eléctrico comunitario gratuito",
      "Techos verdes con jardines productivos"
    ],
    tiempoLectura: "10 min"
  },
  {
    id: 4,
    titulo: "Inversión Estratégica en Terrenos del Norte Chico",
    categoria: "Inversión",
    fecha: "12/04/2025",
    autor: "UrbanPlus",
    imagen: "/Blog/Blog8.jpg",
    contenido: `
#NorteChico #OportunidadUnica #GrupoCentenario

MAPA DE INVERSIÓN - NORTE CHICO:

ZONA 1 - CHANCAY (ALTO POTENCIAL)
• Precio m² actual: $600 - $800
• Crecimiento esperado: +35% anual
• Proyectos en desarrollo: 15 urbanizaciones nuevas
• Tiempo de duplicación: 2-3 años
• Factor clave: Megapuerto de aguas profundas

ZONA 2 - HUARAL (ESTABLE Y SEGURO)
• Precio m² actual: $400 - $550
• Crecimiento esperado: +20% anual
• Ventaja principal: Precios accesibles
• Factor clave: Desarrollo agroindustrial
• Potencial: Zona residencial premium

ZONA 3 - BARRANCA (EMERGENTE)
• Precio m² actual: $300 - $450
• Crecimiento esperado: +25% anual
• Potencial principal: Turístico y comercial
• Factor clave: Conectividad con Lima
• Proyección: Nuevo polo de desarrollo

ANÁLISIS FINANCIERO DETALLADO:

RETORNO SOBRE INVERSIÓN (ROI):
- Corto plazo (1-2 años): 15-25%
- Mediano plazo (3-5 años): 40-60%
- Largo plazo (5+ años): 80-120%
- TIR (Tasa Interna de Retorno): 18-22%

COMPRA TU LOTE CON VENTAJAS EXCLUSIVAS:
• Precios congelados por 60 días
• Financiamiento hasta 95% del valor del lote
• Garantía de documentación legal 100% en regla
• Asesoría personalizada gratuita
• Programa de referidos con beneficios

COMPARATIVO 2024 vs 2025:
Zona | 2024 | 2025 | Crecimiento | Proyección 2026
Chancay | $450 | $650 | +44% | $850
Huaral | $320 | $420 | +31% | $520
Barranca | $250 | $340 | +36% | $430

BENEFICIOS ADICIONALES:
- Acceso a información de mercado privilegiada
- Networking con otros inversionistas
- Asesoría en planificación urbana
- Soporte en trámites municipales

ESTRATEGIA DE INVERSIÓN RECOMENDADA:
Para maximizar tu retorno, recomendamos diversificar entre las tres zonas. Invierte el 50% en Chancay (alto riesgo/alta rentabilidad), 30% en Huaral (riesgo medio) y 20% en Barranca (zona emergente).
    `,
    imagenesAdicionales: ["/Blog/4/Img1.jpg"],
    mapa: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62462.983176084!2d-77.345474!3d-11.725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105e92d2a1c83c7%3A0x23d19db2c9b3b0e1!2sNorte%20Chico!5e0!3m2!1ses!2spe!4v1234567890",
    tiempoLectura: "9 min"
  },
  {
    id: 5,
    titulo: "El Crecimiento del Sector Inmobiliario Peruano",
    categoria: "Mercado",
    fecha: "28/04/2025",
    autor: "Construye Hoy",
    imagen: "/Blog/Blog9.jpg",
    contenido: `
#MercadoInmobiliario #Crecimiento2025 #GrupoCentenario

INFOGRAFÍA DEL CRECIMIENTO 2025:

SECTOR RESIDENCIAL:
• Crecimiento interanual: 18%
• Unidades vendidas: 45,000
• Precio promedio: $85,000
• Tiempo promedio de venta: 45 días
• Inventario disponible: 3.2 meses

SECTOR COMERCIAL:
• Crecimiento interanual: 22%
• Locales vendidos: 12,500
• Precio promedio: $120,000
• Rentabilidad promedio: 8.5% anual
• Vacancia: 12%

SECTOR TERRENOS:
• Crecimiento interanual: 25%
• Lotes vendidos: 8,200
• Precio promedio: $35,000
• Valorización promedio: 20% anual
• Demanda vs Oferta: +30%

CENTENARIO URBANIZACIONES EN CIFRAS 2025:
• 15 proyectos activos en desarrollo
• 2,500 lotes entregados satisfactoriamente
• 98% de satisfacción del cliente certificada
• $45 millones en inversión total
• 12,000 clientes satisfechos

PRONÓSTICOS 2025-2026:
• Escenario Optimista: +28% crecimiento
• Escenario Moderado: +22% crecimiento  
• Escenario Conservador: +18% crecimiento
• Factor determinante: Inversión extranjera

FACTORES DE RIESGO CONTROLADOS:
- Inflación internacional: Monitoreo constante
- Costos de construcción: Estrategias de hedging
- Tasas de interés: Planes de financiamiento flexibles
- Disponibilidad de crédito: Alianzas con múltiples bancos

TENDENCIAS IDENTIFICADAS:
El mercado peruano muestra una madurez creciente con inversionistas más informados y exigentes. La sostenibilidad y la ubicación estratégica se han convertido en factores decisivos de compra.

RECOMENDACIÓN DE EXPERTOS:
Invertir ahora antes del siguiente ajuste de precios programado para junio 2025. Los terrenos en zonas estratégicas presentan el mejor ratio riesgo/beneficio del mercado actual.

VENTAJAS COMPETITIVAS:
- Precios congelados por tiempo limitado
- Financiamiento directo sin intermediarios
- Documentación 100% legal y transparente
- Asesoría profesional especializada
    `,
    imagenesAdicionales: ["/Blog/5/Img1.jpg", "/Blog/5/Img2.jpg"],
    video: "https://www.youtube.com/embed/nfazabJUg5M?si=g9kD25t8LSgk1uZd",
    destacado: true,
    tiempoLectura: "7 min"
  },
  {
    id: 6,
    titulo: "Nuevas Propuestas de Vivienda Sostenible en la Costa",
    categoria: "Sostenibilidad",
    fecha: "08/05/2025",
    autor: "EcoCity",
    imagen: "/Blog/Blog10.jpg",
    contenido: `
#ViviendaSostenible #CostaVerde #CentenarioEco

VIVIENDA COSTERA INTELIGENTE:

CARACTERÍSTICAS ÚNICAS IMPLEMENTADAS:

DISEÑO BIOCLIMÁTICO AVANZADO:
• Orientación estratégica para aprovechamiento de brisa marina natural
• Ventilación cruzada en todos los ambientes
• Protección solar inteligente con aleros dinámicos
• Aislamiento térmico de alta eficiencia

TECNOLOGÍA ECO-AMIGABLE INTEGRADA:
• Sistema de desalinización de agua de mar
• Energía eólica complementaria a solar
• Sensores de consumo energético inteligentes
• Domótica para optimización de recursos

AMENITIES SOSTENIBLES PREMIUM:
- Huertos orgánicos comunitarios con riego automatizado
- Piscina ecológica con sistema de recirculación natural
- Gimnasio al aire libre con equipos generadores de energía
- Sendero ecológico costero con especies nativas
- Club house con materiales reciclados

BENEFICIOS ECONÓMICOS COMPROBADOS:

AHORRO MENSUAL ESTIMADO POR FAMILIA:
• Agua: 50% menos vs vivienda tradicional
• Electricidad: 60% menos con paneles solares
• Mantenimiento: 30% menos por materiales durables
• Impuestos: 15% menos por certificación verde
• Seguros: 10% menos por menor riesgo

COMPARATIVA DE COSTOS DETALLADA:
Concepto | Tradicional | Sostenible | Ahorro | Retorno Inversión
Agua | S/ 80 | S/ 40 | 50% | 18 meses
Luz | S/ 120 | S/ 48 | 60% | 24 meses
Mantenimiento | S/ 200 | S/ 140 | 30% | 36 meses
Total/mes | S/ 400 | S/ 228 | 43% | 26 meses

CERTIFICACIONES OBTENIDAS:
- LEED Platinum (Liderazgo en Energía y Diseño Ambiental)
- EDGE (Excelencia en Diseño para Mayores Eficiencias)
- BREEAM (Método de Evaluación Ambiental)
- WELL Building Standard (Enfoque en salud y bienestar)

EXPERIENCIA DE VIDA MEJORADA:
Los residentes reportan mejoras significativas en calidad de vida: 85% menos casos de alergias respiratorias, 40% más actividad física al aire libre y 30% mayor satisfacción general con su vivienda.

COMPRA TU LOTE SOSTENIBLE:
Precios desde $25,000 con financiamiento verde preferencial y hasta 95% de cobertura. Aprovecha los descuentos por compra anticipada.
    `,
    imagenesAdicionales: ["/Blog/6/Img1.jpg", "/Blog/6/Img2.jpg", "/Blog/6/Img3.jpg"],
    lista: [
      "Certificación LEED Platinum garantizada",
      "Estación de carga para vehículos eléctricos gratuita",
      "Sistema de compostaje comunitario automatizado",
      "Techos verdes con jardines productivos",
      "Iluminación inteligente con sensores de movimiento",
      "Sistema de captación y reutilización de agua de lluvia",
      "Materiales de construcción 100% reciclables"
    ],
    tiempoLectura: "11 min"
  },
  {
    id: 7,
    titulo: "El Auge de la Inversión Privada en Chancay",
    categoria: "Inversión",
    fecha: "19/05/2025",
    autor: "Economía Hoy",
    imagen: "/Blog/Blog11.jpg",
    contenido: `
#InversionPrivada #Chancay #GrupoCentenario

SECTORES QUE ESTÁN INVIRTIENDO MASIVAMENTE:

INMOBILIARIO Y CONSTRUCCIÓN:
• Desarrollos residenciales: 25 proyectos nuevos
• Complejos comerciales: 8 centros planificados
• Oficinas corporativas: 45,000 m² en construcción
• Hoteles y resorts: 12 cadenas internacionales

LOGÍSTICA Y ALMACENAMIENTO:
• Centros de distribución: 15 instalaciones
• Almacenes frigoríficos: 5 complejos
• Patios de contenedores: 3 terminales
• Zonas francas: 2 áreas especiales

COMERCIO Y SERVICIOS:
• Centros comerciales: 4 megaproyectos
• Retail especializado: 120 locales nuevos
• Educación: 3 campus universitarios
• Salud: 2 hospitales de alta especialización

CIFRAS RELEVANTES DEL MERCADO:
• Inversión privada comprometida: US$ 2,500 millones
• Proyectos en cartera: 45 desarrollos mayores
• Generación estimada de empleo: 15,000 puestos directos
• Crecimiento económico esperado: 8% anual en la región
• Población proyectada 2026: +45,000 habitantes

BENEFICIOS EXCLUSIVOS PARA INVERSIONISTAS:
- Preferencia en asignación de lotes estratégicos
- Asesoría legal y financiera especializada
- Acceso a información de mercado privilegiada
- Networking con otros inversionistas premium
- Programas de coinversión disponibles

PROYECTOS DESTACADOS EN DESARROLLO:
• Centro Logístico Chancay (US$ 500M)
• Distrito Comercial Norte (US$ 300M)
• Residencial Vista al Mar (US$ 200M)
• Puerto Deportivo (US$ 150M)
• Parque Tecnológico (US$ 100M)

OPORTUNIDAD ACTUAL DE INVERSIÓN:
- Tasa de retorno esperada: 18-25% anual
- Período de inversión recomendado: 3-5 años
- Liquidez: Alta después del tercer año
- Riesgo: Bajo-Medio (diversificado)

ESTRATEGIAS RECOMENDADAS:
1. Diversificación por sectores
2. Enfoque en localizaciones estratégicas
3. Asociación con desarrolladores experimentados
4. Planificación a mediano plazo
5. Monitoreo constante del mercado

TESTIMONIOS DE INVERSIONISTAS:
"Invirtiendo con Grupo Centenario en Chancay, he obtenido un retorno del 42% en 18 meses. La asesoría profesional hizo la diferencia." - Carlos Mendoza, Inversionista
    `,
    imagenesAdicionales: ["/Blog/7/Img1.jpg", "/Blog/7/Img2.jpg"],
    lista: [
      "Acceso preferencial a lotes estratégicos con vista al mar",
      "Descuentos por pronto pago hasta 15% del valor",
      "Financiamiento flexible hasta 96 meses",
      "Asesoría personalizada por expertos del sector",
      "Garantía de recompra después del tercer año",
      "Programa de rentabilidad asegurada del 12% anual"
    ],
    tiempoLectura: "8 min"
  },
  {
    id: 8,
    titulo: "Tendencias del Mercado Inmobiliario 2025",
    categoria: "Mercado",
    fecha: "03/06/2025",
    autor: "Diario Gestión",
    imagen: "/Blog/Blog12.jpg",
    contenido: `
#Tendencias2025 #MercadoInmobiliario #GrupoCentenario

TENDENCIAS PRINCIPALES IDENTIFICADAS:

1. EXPANSIÓN HACIA REGIONES ESTRATÉGICAS
Chancay, Ica y norte chico lideran el crecimiento con proyecciones superiores al 30% anual. El megapuerto y los corredores logísticos son los principales catalizadores.

2. SOSTENIBILIDAD INTEGRAL
Proyectos verdes con certificaciones ambientales premium. Los compradores premium exigen eficiencia energética y materiales ecológicos.

3. COMUNIDADES PLANIFICADAS INTELIGENTES
Urbanizaciones con amenities integrales y tecnología de punta. Espacios que promueven la comunidad y el bienestar.

4. FLEXIBILIDAD ESPACIAL
Espacios adaptables para teletrabajo, vida familiar y entretenimiento. Diseños modulares que evolucionan con las necesidades.

5. TECNOLOGÍA Y DOMÓTICA
Ciudades inteligentes con infraestructura digital integrada. Conectividad 5G y sistemas de seguridad avanzados.

ZONAS CON MAYOR PROYECCIÓN 2025-2026:
• Chancay: +35% de valorización esperada (Megapuerto)
• Huaral: +25% por desarrollo agroindustrial
• Barranca: +20% por potencial turístico
• Cañete: +18% por proximidad a Lima
• Huacho: +15% por desarrollo portuario

DATOS POR SEGMENTO ESPECIALIZADO:

TERRENOS URBANOS PREMIUM:
- Crecimiento precio: 22% anual
- Demanda: +30% interanual
- Oferta: +15% interanual
- Rentabilidad: 18-25% anual

TERRENOS RÚSTICOS ESTRATÉGICOS:
- Crecimiento precio: 18% anual
- Demanda: +25% interanual
- Oferta: +12% interanual
- Rentabilidad: 15-20% anual

RECOMENDACIONES PARA INVERSIONISTAS 2025:
- Diversificar entre zonas consolidadas y emergentes
- Priorizar proyectos con valor agregado en sostenibilidad
- Considerar el factor tiempo según objetivos de inversión
- Asesorarse con profesionales del sector certificados
- Monitorear políticas de vivienda del gobierno central

FACTORES CRÍTICOS DE ÉXITO:
• Localización estratégica comprobada
• Desarrollador con trayectoria verificable
• Documentación 100% legal y transparente
• Plan de valorización claro y realista
• Salida de inversión definida y alcanzable

PERSPECTIVAS 2026:
- Crecimiento moderado pero sostenido
- Mayor sofisticación del mercado
- Enfoque en desarrollos especializados
- Consolidación de players del sector

ANÁLISIS DE EXPERTOS:
"El 2025 marca un punto de inflexión donde la inversión en terrenos supera a otros instrumentos financieros en rentabilidad ajustada por riesgo." - María Elena Ruiz, Analista Senior
    `,
    imagenesAdicionales: ["/Blog/8/Img1.jpg", "/Blog/8/Img2.jpg"],
    video: "https://www.youtube.com/embed/bLFKBpT9yK8?si=TNt_DCeG14hQ-hOW",
    tiempoLectura: "9 min"
  },
  {
    id: 9,
    titulo: "La Nueva Era de Urbanizaciones en Chancay",
    categoria: "Urbanización",
    fecha: "22/06/2025",
    autor: "Urbano360",
    imagen: "/Blog/Blog13.jpg",
    contenido: `
#UrbanizacionesChancay #CalidadDeVida #GrupoCentenario

CARACTERÍSTICAS INNOVADORAS IMPLEMENTADAS:

DISEÑOS MASTERPLAN INTEGRALES:
- Priorización de espacios peatonales y ciclovías
- Corredores verdes interconectados con parques
- Integración armónica con el entorno natural
- Maximización de vistas y ventilación natural

AMENITIES COMUNITARIOS PREMIUM:
- Piscinas climatizadas con tecnología salina
- Gimnasios completamente equipados 24/7
- Club house con salones multiusos
- Canchas deportivas múltiples profesionales
- Áreas de juegos infantiles tematizadas

SEGURIDAD Y TECNOLOGÍA:
- Vigilancia 24/7 con cámaras de última generación
- Control de acceso biométrico y facial
- Sistema de alarmas comunitario integrado
- Monitoreo remoto desde dispositivos móviles
- Respuesta rápida con guardias capacitados

CONEXIÓN Y SERVICIOS:
- Acceso directo a centros educativos premium
- Conexión con centros comerciales y mercados
- Servicios de salud y emergencias cercanos
- Transporte público eficiente y seguro
- Espacios de trabajo colaborativo

PROYECTOS DESTACADOS EN DESARROLLO:

MARINA GOLF RESIDENCE:
• Integración con campo de golf de 18 hoyos
• Marina privada con 150 amarraderos
• Residencial de lujo con amenities exclusivos
• Precios desde $180,000

ECOVILLAGE SUSTAINABLE:
• Enfoque 100% sostenible y ecológico
• Certificación LEED Platinum garantizada
• Producción propia de energía y alimentos
• Precios desde $120,000

PUERTO AZUL PREMIUM:
• Vista al mar garantizada en todas las unidades
• Amenities premium de clase mundial
• Diseño arquitectónico contemporáneo
• Precios desde $150,000

CHANCAY MODERNO:
• Diseño contemporáneo y servicios integrales
• Ubicación estratégica cerca del megapuerto
• Concepto de comunidad inteligente
• Precios desde $90,000

AMENITIES INCLUIDOS EN TODOS LOS PROYECTOS:
- Parque central con anfiteatro para eventos
- Ciclovías internas iluminadas y seguras
- Áreas de juegos infantiles certificadas
- Canchas deportivas múltiples profesionales
- Salón de usos múltiples completamente equipado
- Guardianía 24 horas con monitoreo constante

BENEFICIOS ADICIONALES EXCLUSIVOS:
• Valorización garantizada del 20% al primer año
• Programa de referidos con beneficios hasta $5,000
• Eventos comunitarios mensuales organizados
• Servicio de mantenimiento incluido por 2 años
• Asesoría personalizada post-venta

CALIDAD DE VIDA DOCUMENTADA:
Estudios independientes muestran que los residentes de nuestras urbanizaciones reportan 35% más satisfacción con su calidad de vida comparado con residentes de proyectos tradicionales.
    `,
    imagenesAdicionales: ["/Blog/9/Img1.jpg", "/Blog/9/Img2.jpg", "/Blog/9/Img3.jpg"],
    lista: [
      "Diseño arquitectónico premium con firmas internacionales",
      "Materiales de primera calidad con garantía extendida",
      "Eficiencia energética certificada y comprobada",
      "Espacios verdes certificados y mantenidos",
      "Conectividad total con fibra óptica incluida",
      "Sistema de aguas tratadas y reutilizadas",
      "Movilidad eléctrica con estaciones de carga"
    ],
    tiempoLectura: "12 min"
  },
  {
    id: 10,
    titulo: "Innovaciones en Construcción Inteligente",
    categoria: "Tecnología",
    fecha: "05/07/2025",
    autor: "SmartBuild",
    imagen: "/Blog/Blog14.jpg",
    contenido: `
#ConstruccionInteligente #Tecnologia #GrupoCentenario

INNOVACIONES REVOLUCIONARIAS IMPLEMENTADAS:

BUILDING INFORMATION MODELING (BIM):
- Modelado 3D inteligente con realidad virtual
- Detección automática de interferencias
- Optimización de materiales y procesos
- Simulación de comportamiento estructural

IMPRESIÓN 3D AVANZADA:
- Componentes estructurales impresos en concreto
- Personalización masiva de elementos arquitectónicos
- Reducción de tiempos de construcción en 40%
- Minimización de desperdicios de materiales

MATERIALES INTELIGENTES:
- Concreto autorreparable con microcápsulas
- Sensores embebidos para monitoreo estructural
- Vidrio inteligente que regula temperatura
- Aceros de alta resistencia sísmica

TECNOLOGÍAS DE MONITOREO:
- Drones para topografía y seguimiento de obras
- Escáneres láser para control de calidad
- Sensores IoT para monitoreo en tiempo real
- Realidad aumentada para supervisiones

BENEFICIOS TANGIBLES PARA EL USUARIO FINAL:
• Mayor precisión en plazos de entrega (99% de cumplimiento)
• Mejor calidad constructiva con tolerancias milimétricas
• Eficiencia energética optimizada con ahorros del 45%
• Sistemas domóticos integrados de fábrica
• Mantenimiento predictivo de todas las instalaciones

TECNOLOGÍAS DOMÓTICAS IMPLEMENTADAS:

SISTEMAS INTELIGENTES DE CONTROL:
- Control de iluminación automático y programable
- Gestión de climatización inteligente por zonas
- Seguridad perimetral con inteligencia artificial
- Riego automatizado de áreas verdes con sensores

MATERIALES INTELIGENTES ESPECIALIZADOS:
- Concreto fotocatalítico que purifica el aire
- Vidrio electrocrómico que regula el paso de luz
- Aceros de ultra alta resistencia (800 MPa)
- Aislantes térmicos avanzados con nanopartículas

VENTAJAS COMPETITIVAS OBTENIDAS:
• Reducción de 30% en tiempo de construcción total
• Ahorro de 25% en costos de materiales por optimización
• Mejora de 40% en eficiencia energética operativa
• Incremento de 35% en vida útil de las estructuras
• Disminución de 50% en residuos de construcción

CERTIFICACIONES Y RECONOCIMIENTOS:
- ISO 9001:2015 en procesos de construcción
- ISO 14001:2015 en gestión ambiental
- Certificación EDGE en eficiencia energética
- Premio Nacional de Innovación en Construcción 2025

INVERSIÓN EN I+D:
- 5% de los ingresos destinados a investigación
- Alianzas con universidades líderes mundiales
- Laboratorio propio de testing de materiales
- Programa de formación continua para el equipo

CASOS DE ÉXITO:
"Hemos reducido el tiempo de construcción de 18 a 12 meses gracias a estas tecnologías, entregando proyectos más rápidos y con mayor calidad." - Ing. Roberto Silva, Director de Proyectos
    `,
    imagenesAdicionales: ["/Blog/10/Img1.jpg", "/Blog/10/Img2.jpg"],
    video: "https://www.youtube.com/embed/BzQJHRmxOX0?si=Yfs7TStr6Wcw5SbG",
    tiempoLectura: "10 min"
  },
  {
    id: 11,
    titulo: "Perspectivas Económicas del Sector Inmobiliario",
    categoria: "Economía",
    fecha: "10/08/2025",
    autor: "Analytica",
    imagen: "/Blog/Blog15.jpg",
    contenido: `
#Perspectivas2025 #Economia #GrupoCentenario

INDICADORES MACROECONÓMICOS POSITIVOS:

CRECIMIENTO Y ESTABILIDAD:
- Crecimiento del PBI nacional por encima del 4% anual
- Tasas de interés estables en niveles históricamente bajos
- Inflación controlada dentro del rango meta (2%-4%)
- Tipo de cambio estable con tendencia a la baja

SECTOR FINANCIERO Y CRÉDITO:
- Incremento del 12% en desembolsos de créditos hipotecarios
- Mayor competencia entre entidades financieras
- Tasas preferenciales para proyectos sostenibles
- Flexibilización de requisitos para primeros compradores

CONFIANZA DEL MERCADO:
- Confianza del consumidor en máximos de los últimos 5 años
- Incremento del 18% en intención de compra de vivienda
- Flujo continuo de inversión extranjera directa
- Fortalecimiento del mercado de capitales local

PROYECCIONES ESPECIALIZADAS POR SEGMENTO:

TERRENOS URBANOS ESTRATÉGICOS:
- Crecimiento de precios: 18-22% en 2025
- Demanda: Incremento del 25% interanual
- Oferta: Crecimiento del 15% vs 2024
- Rentabilidad promedio: 20% anual

VIVIENDA SOSTENIBLE PREMIUM:
- Aumento del 30% en demanda específica
- Precios: +15% sobre vivienda tradicional
- Velocidad de venta: 35% más rápida
- Valorización: +25% en primeros 12 meses

PROYECTOS COMERCIALES Y LOGÍSTICOS:
- Expansión del 15% en superficie construida
- Rentabilidad: 8.5-10.5% anual
- Vacancia: Reducción al 8% desde 12%
- Ocupación: 92% en proyectos premium

ANÁLISIS MACROECONÓMICO DETALLADO:

FACTORES FAVORABLES PRINCIPALES:
- Estabilidad política post-elecciones generales
- Programas de reactivación económica sectorial
- Inversión en infraestructura pública récord
- Acuerdos comerciales internacionales vigentes
- Disciplina fiscal y monetaria mantenida

FACTORES A MONITOREAR ESTRATÉGICAMENTE:
- Inflación internacional y precios de commodities
- Tipo de cambio y flujos de capital
- Costos de construcción y mano de obra
- Disponibilidad y costo del crédito
- Regulaciones sectoriales específicas

RECOMENDACIONES ESTRATÉGICAS 2025-2026:
- Mantener exposición en zonas de crecimiento como Chancay
- Diversificar entre segmentos residenciales y comerciales
- Priorizar proyectos con valor agregado en sostenibilidad
- Monitorear políticas de vivienda del gobierno central
- Considerar asociaciones con desarrolladores experimentados

TENDENCIAS ESTRUCTURALES IDENTIFICADAS:
• Urbanización inteligente y conectada
• Sostenibilidad como estándar mínimo
• Personalización masiva de espacios
• Movilidad eléctrica integrada
• Economía circular en construcción

PERSPECTIVAS A MEDIANO PLAZO:
- Crecimiento sostenido del 15-20% anual
- Mayor sofisticación de productos ofrecidos
- Consolidación de players del sector
- Internacionalización de desarrolladores locales
- Adopción acelerada de nuevas tecnologías

CONCLUSIÓN DE EXPERTOS:
"El sector inmobiliario peruano se encuentra en su mejor momento histórico para inversionistas. La combinación de estabilidad macroeconómica, crecimiento demográfico y megaproyectos de infraestructura crea el escenario perfecto para inversiones de mediano y largo plazo." - Dr. Alejandro Mendoza, Economista Jefe
    `,
    imagenesAdicionales: ["/Blog/11/Img1.jpg", "/Blog/11/Img2.jpg"],
    lista: [
      "Diversificación de portafolio recomendada en 3 zonas mínimas",
      "Enfoque prioritario en zonas de alto crecimiento comprobado",
      "Priorización de proyectos con certificaciones internacionales",
      "Consideración de horizonte de inversión a mediano plazo (3-5 años)",
      "Asesoría profesional especializada obligatoria",
      "Monitoreo continuo de indicadores macroeconómicos",
      "Estrategias de cobertura cambiaria recomendadas"
    ],
    tiempoLectura: "11 min"
  }
];

const BlogDetalle = () => {
  const { id } = useParams();
  const noticia = noticias.find((n) => n.id === parseInt(id));
  const [mostrarModalCompartir, setMostrarModalCompartir] = useState(false);
  const [enlaceCopiado, setEnlaceCopiado] = useState(false);

  const relacionadas = noticias.filter((n) => n.id !== parseInt(id)).slice(0, 3);

  // Obtener la URL actual para compartir
  const urlActual = window.location.href;
  const tituloNoticia = noticia?.titulo || '';

  // Función para compartir en diferentes redes sociales
  const compartirEnRedSocial = (redSocial) => {
    const textoCompartir = `Mira este artículo: ${tituloNoticia}`;
    
    const urls = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(urlActual)}`,
      twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(urlActual)}&text=${encodeURIComponent(textoCompartir)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(urlActual)}`,
      whatsapp: `https://wa.me/?text=${encodeURIComponent(textoCompartir + ' ' + urlActual)}`,
      email: `mailto:?subject=${encodeURIComponent(tituloNoticia)}&body=${encodeURIComponent(textoCompartir + '\n\n' + urlActual)}`
    };

    if (redSocial === 'email') {
      window.location.href = urls[redSocial];
    } else {
      window.open(urls[redSocial], '_blank', 'width=600,height=400');
    }
    
    setMostrarModalCompartir(false);
  };

  // Función para copiar enlace al portapapeles
  const copiarEnlace = async () => {
    try {
      await navigator.clipboard.writeText(urlActual);
      setEnlaceCopiado(true);
      setTimeout(() => setEnlaceCopiado(false), 2000);
    } catch (err) {
      console.error('Error al copiar: ', err);
      // Fallback para navegadores antiguos
      const textArea = document.createElement('textarea');
      textArea.value = urlActual;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setEnlaceCopiado(true);
      setTimeout(() => setEnlaceCopiado(false), 2000);
    }
  };

  // Función para compartir usando Web Share API (dispositivos móviles)
  const compartirNativo = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: tituloNoticia,
          text: `Mira este artículo: ${tituloNoticia}`,
          url: urlActual,
        });
      } catch (err) {
        console.log('Error al compartir:', err);
      }
    } else {
      // Si no soporta Web Share API, mostrar modal personalizado
      setMostrarModalCompartir(true);
    }
  };

  // Función mejorada para formatear el contenido
  const formatearContenido = (contenido) => {
    const lineas = contenido.split('\n').filter(linea => linea.trim() !== '');
    const elementos = [];
    let listaItems = [];
    let tablaActiva = false;
    let filasTabla = [];

    const procesarLista = () => {
      if (listaItems.length > 0) {
        elementos.push(
          <ul key={`lista-${elementos.length}`} className="space-y-3 my-6">
            {listaItems.map((item, index) => (
              <li key={index} className="flex items-start text-gray-700 leading-relaxed">
                <CheckCircle className="text-[#2c976a] mr-3 mt-1 flex-shrink-0" size={20} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        );
        listaItems = [];
      }
    };

    const procesarTabla = () => {
      if (filasTabla.length > 0) {
        elementos.push(
          <div key={`tabla-${elementos.length}`} className="overflow-x-auto my-8">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="bg-[#cb4a2a] text-white">
                  {filasTabla[0].map((encabezado, i) => (
                    <th key={i} className="px-4 py-3 text-left font-bold text-sm">
                      {encabezado}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filasTabla.slice(1).map((fila, filaIndex) => (
                  <tr key={filaIndex} className={filaIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    {fila.map((celda, celdaIndex) => (
                      <td key={celdaIndex} className="px-4 py-3 text-sm text-gray-800 border-b border-gray-200">
                        {celda}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
        tablaActiva = false;
        filasTabla = [];
      }
    };

    lineas.forEach((linea, index) => {
      // Hashtags como badges
      if (linea.startsWith('#') && !linea.startsWith('##')) {
        procesarLista();
        procesarTabla();
        const hashtags = linea.split(' ').filter(word => word.startsWith('#'));
        elementos.push(
          <div key={`hashtags-${index}`} className="flex flex-wrap gap-2 my-6">
            {hashtags.map((hashtag, i) => (
              <span key={i} className="bg-[#2c976a] text-white px-3 py-1 rounded text-sm font-medium">
                {hashtag}
              </span>
            ))}
          </div>
        );
        return;
      }

      // Detectar inicio de tabla
      if (linea.includes('|') && !linea.includes('---')) {
        procesarLista();
        if (!tablaActiva) {
          tablaActiva = true;
          filasTabla = [];
        }
        filasTabla.push(linea.split('|').map(celda => celda.trim()).filter(celda => celda !== ''));
        return;
      }

      // Procesar tabla cuando termina
      if (tablaActiva && (!linea.includes('|') || index === lineas.length - 1)) {
        procesarTabla();
        return;
      }

      // Saltar separadores de tabla
      if (linea.includes('---') || linea.trim() === '') {
        return;
      }

      // Títulos en mayúsculas
      if (linea === linea.toUpperCase() && linea.length > 10 && !linea.startsWith('•') && !linea.startsWith('-') && !linea.startsWith('#')) {
        procesarLista();
        procesarTabla();
        elementos.push(
          <h3 key={`titulo-${index}`} className="text-xl font-bold text-gray-900 mt-8 mb-4 pb-2 border-b border-gray-200">
            {linea}
          </h3>
        );
        return;
      }

      // Preguntas frecuentes
      if (linea.includes('?') && linea.length < 100) {
        procesarLista();
        procesarTabla();
        elementos.push(
          <h4 key={`pregunta-${index}`} className="text-lg font-semibold text-gray-800 mt-6 mb-3">
            {linea}
          </h4>
        );
        return;
      }

      // Listas con bullets
      if ((linea.startsWith('•') || linea.startsWith('-')) && !linea.startsWith('##')) {
        procesarTabla();
        const itemText = linea.substring(1).trim();
        listaItems.push(itemText);
        return;
      }

      // Párrafos normales
      if (linea.trim() && !linea.startsWith('!') && !linea.startsWith('[')) {
        procesarLista();
        procesarTabla();
        elementos.push(
          <p key={`parrafo-${index}`} className="text-gray-700 leading-relaxed mb-4 text-justify">
            {linea}
          </p>
        );
        return;
      }
    });

    // Procesar cualquier lista o tabla pendiente al final
    procesarLista();
    procesarTabla();

    return elementos;
  };

  if (!noticia) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center px-4 py-16">
        <div className="text-center max-w-md">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Noticia no encontrada</h2>
          <p className="text-gray-600 mb-6">La noticia que buscas no existe o ha sido movida.</p>
          <Link 
            to="/blog" 
            className="inline-flex items-center gap-2 bg-[#cb4a2a] text-white font-semibold px-6 py-3 rounded-lg hover:bg-orange-700 transition-colors"
          >
            <ArrowRight className="rotate-180" size={18} />
            Volver al Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Modal de Compartir */}
      <AnimatePresence>
        {mostrarModalCompartir && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
            onClick={() => setMostrarModalCompartir(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl p-6 max-w-md w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-gray-900">Compartir artículo</h3>
                <button
                  onClick={() => setMostrarModalCompartir(false)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="grid grid-cols-4 gap-4 mb-6">
                {/* Facebook */}
                <button
                  onClick={() => compartirEnRedSocial('facebook')}
                  className="flex flex-col items-center p-3 rounded-xl bg-blue-50 hover:bg-blue-100 transition-colors"
                >
                  <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center mb-2">
                    <Facebook className="text-white" size={20} />
                  </div>
                  <span className="text-xs font-medium text-gray-700">Facebook</span>
                </button>

                {/* Twitter */}
                <button
                  onClick={() => compartirEnRedSocial('twitter')}
                  className="flex flex-col items-center p-3 rounded-xl bg-blue-50 hover:bg-blue-100 transition-colors"
                >
                  <div className="w-12 h-12 rounded-full bg-blue-400 flex items-center justify-center mb-2">
                    <Twitter className="text-white" size={20} />
                  </div>
                  <span className="text-xs font-medium text-gray-700">Twitter</span>
                </button>

                {/* LinkedIn */}
                <button
                  onClick={() => compartirEnRedSocial('linkedin')}
                  className="flex flex-col items-center p-3 rounded-xl bg-blue-50 hover:bg-blue-100 transition-colors"
                >
                  <div className="w-12 h-12 rounded-full bg-blue-700 flex items-center justify-center mb-2">
                    <Linkedin className="text-white" size={20} />
                  </div>
                  <span className="text-xs font-medium text-gray-700">LinkedIn</span>
                </button>

                {/* WhatsApp */}
                <button
                  onClick={() => compartirEnRedSocial('whatsapp')}
                  className="flex flex-col items-center p-3 rounded-xl bg-green-50 hover:bg-green-100 transition-colors"
                >
                  <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center mb-2">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893c0-3.176-1.24-6.165-3.495-8.411"/>
                    </svg>
                  </div>
                  <span className="text-xs font-medium text-gray-700">WhatsApp</span>
                </button>
              </div>

              <div className="flex gap-3">
                {/* Email */}
                <button
                  onClick={() => compartirEnRedSocial('email')}
                  className="flex-1 flex items-center justify-center gap-2 p-3 rounded-xl bg-gray-100 hover:bg-gray-200 transition-colors"
                >
                  <Mail size={18} className="text-gray-600" />
                  <span className="text-sm font-medium text-gray-700">Email</span>
                </button>

                {/* Copiar enlace */}
                <button
                  onClick={copiarEnlace}
                  className="flex-1 flex items-center justify-center gap-2 p-3 rounded-xl bg-gray-100 hover:bg-gray-200 transition-colors relative"
                >
                  <Link2 size={18} className="text-gray-600" />
                  <span className="text-sm font-medium text-gray-700">
                    {enlaceCopiado ? '¡Copiado!' : 'Copiar'}
                  </span>
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Contenedor principal ultra ancho (90-95%) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Navegación */}
        <div className="flex items-center justify-between mb-8">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-[#cb4a2a] font-semibold hover:underline transition-all duration-200"
          >
            <ArrowRight className="rotate-180" size={18} />
            <span>Volver a Noticias</span>
          </Link>
          
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-1">
              <Eye size={16} />
              <span>1.2k vistas</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock size={16} />
              <span>{noticia.tiempoLectura || '5 min'}</span>
            </div>
          </div>
        </div>

        {/* Header de la noticia */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          {noticia.destacado && (
            <div className="flex items-center gap-2 text-[#cb4a2a] font-semibold mb-3">
              <Star size={18} />
              <span>ARTÍCULO DESTACADO</span>
            </div>
          )}
          
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
            {noticia.titulo}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-6">
            <div className="flex items-center gap-2">
              <Calendar size={18} />
              <span>{noticia.fecha}</span>
            </div>
            <div className="flex items-center gap-2">
              <User size={18} />
              <span>{noticia.autor}</span>
            </div>
            <div className="bg-[#2c976a] text-white px-3 py-1 rounded-full text-sm font-semibold">
              {noticia.categoria}
            </div>
          </div>

          <img
            src={noticia.imagen}
            alt={noticia.titulo}
            className="w-full h-72 lg:h-[500px] object-cover rounded-xl shadow-lg mb-6"
          />
        </motion.div>

        {/* Contenido principal - Distribución 80/20 */}
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Contenido del artículo - 80% del ancho */}
          <div className="lg:col-span-4">
            <motion.article
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="prose prose-lg max-w-none"
            >
              {formatearContenido(noticia.contenido)}

              {/* Galería de imágenes adicionales */}
              {noticia.imagenesAdicionales && noticia.imagenesAdicionales.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="mt-12"
                >
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Galería del Proyecto</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {noticia.imagenesAdicionales.map((img, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ scale: 1.03 }}
                        className="overflow-hidden rounded-xl cursor-pointer shadow-md"
                      >
                        <img
                          src={img}
                          alt={`Imagen ${index + 1} - ${noticia.titulo}`}
                          className="w-full h-56 object-cover hover:scale-110 transition-transform duration-300"
                        />
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Video embed */}
              {noticia.video && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="mt-12"
                >
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Video Explicativo</h3>
                  <div className="relative aspect-video rounded-xl overflow-hidden bg-gray-100 shadow-lg">
                    <iframe
                      src={noticia.video}
                      className="absolute inset-0 w-full h-full"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      title={`Video - ${noticia.titulo}`}
                    />
                  </div>
                </motion.div>
              )}

              {/* Mapa */}
              {noticia.mapa && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="mt-12"
                >
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Ubicación Estratégica</h3>
                  <div className="relative aspect-video rounded-xl overflow-hidden bg-gray-100 shadow-lg">
                    <iframe
                      src={noticia.mapa}
                      className="absolute inset-0 w-full h-full"
                      frameBorder="0"
                      style={{ border: 0 }}
                      allowFullScreen
                      title={`Mapa - ${noticia.titulo}`}
                    />
                  </div>
                </motion.div>
              )}

              {/* Lista destacada */}
              {noticia.lista && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="mt-12 bg-gradient-to-r from-gray-50 to-gray-100 p-8 rounded-xl border border-gray-200"
                >
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Beneficios Clave</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {noticia.lista.map((item, index) => (
                      <div key={index} className="flex items-start bg-white p-4 rounded-lg shadow-sm">
                        <CheckCircle className="text-[#2c976a] mr-3 mt-1 flex-shrink-0" size={20} />
                        <span className="text-gray-700 font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </motion.article>

            {/* Footer del artículo */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-12 pt-8 border-t border-gray-200"
            >
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3 text-gray-700">
                  <Shield size={20} className="text-[#cb4a2a]" />
                  <span className="font-semibold">Publicado por: </span>
                  <span className="text-gray-900 font-bold">{noticia.autor}</span>
                </div>
                
                <div className="flex items-center gap-3">
                  <span className="text-gray-600 font-semibold">Compartir:</span>
                  <div className="flex gap-2">
                    <button 
                      onClick={compartirNativo}
                      className="bg-[#cb4a2a] text-white p-3 rounded-lg hover:bg-[#b53e24] transition-colors shadow-md flex items-center gap-2"
                    >
                      <Share2 size={18} />
                      <span>Compartir</span>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Sidebar - 20% del ancho */}
          <aside className="lg:col-span-1">
            <div className="sticky top-8 space-y-8">
              {/* Noticias Relacionadas */}
              <div className="bg-white rounded-xl p-4 shadow-md border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                  Noticias Relacionadas
                </h3>
                <div className="space-y-4">
                  {relacionadas.map((rel) => (
                    <Link
                      to={`/blog/${rel.id}`}
                      key={rel.id}
                      className="block group hover:bg-gray-50 p-2 rounded-lg transition-colors"
                    >
                      <div className="flex gap-3">
                        <img
                          src={rel.imagen}
                          alt={rel.titulo}
                          className="w-20 h-16 object-cover rounded-lg flex-shrink-0"
                        />
                        <div>
                          <h4 className="font-semibold text-gray-900 group-hover:text-[#cb4a2a] transition-colors line-clamp-2 text-sm leading-tight">
                            {rel.titulo}
                          </h4>
                          <p className="text-gray-600 text-xs mt-1">
                            {rel.fecha}
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Botón de compartir en sidebar */}
              <div className="bg-gradient-to-br from-[#2c976a] to-[#3ba87d] rounded-xl p-4 text-white shadow-lg">
                <h4 className="font-bold text-base mb-3">¿Te gustó este artículo?</h4>
                <p className="text-white/90 text-sm mb-3">
                  Compártelo con alguien que pueda interesarle.
                </p>
                <button 
                  onClick={compartirNativo}
                  className="w-full text-center bg-white text-[#2c976a] font-bold px-4 py-3 rounded-lg hover:bg-gray-100 transition-colors text-sm shadow-md flex items-center justify-center gap-2"
                >
                  <Share2 size={16} />
                  Compartir Artículo
                </button>
              </div>

              {/* CTA Sidebar */}
              <div className="bg-gradient-to-br from-[#cb4a2a] to-[#e05a3a] rounded-xl p-4 text-white shadow-lg">
                <h4 className="font-bold text-base mb-2">¿Interesado en invertir?</h4>
                <p className="text-white/90 text-sm mb-3">
                  Descubre nuestras mejores oportunidades de terrenos con alto potencial.
                </p>
                <Link
                  to="/contacto"
                  className="block w-full text-center bg-white text-[#cb4a2a] font-bold px-4 py-3 rounded-lg hover:bg-gray-100 transition-colors text-sm shadow-md"
                >
                  Consultar Inversiones
                </Link>
              </div>

              {/* Info adicional */}
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-4 text-white shadow-lg">
                <h4 className="font-bold text-base mb-3">¿Por qué Grupo Centenario?</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle size={16} />
                    <span>+15 años de experiencia</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle size={16} />
                    <span>+2,500 lotes entregados</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle size={16} />
                    <span>98% de satisfacción</span>
                  </li>
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </div>
      {/* ...otras secciones del blog... */}
      <BlogPie />
    </div>
  );
};

export default BlogDetalle;