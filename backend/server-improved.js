const express = require("express")
const cors = require("cors")
require("dotenv").config()

const app = express()
const PORT = process.env.PORT || 3000

// Middlewares básicos
app.use(
  cors({
    origin: "*",
    credentials: false,
  }),
)
app.use(express.json())

// Base de conocimientos de química EXPANDIDA (manteniendo tu estructura original)
const chemistryKnowledge = {
  // Tu base original
  atomo:
    "El átomo es la unidad básica de la materia, compuesto por protones, neutrones y electrones. La estructura atómica determina las propiedades químicas y físicas de los elementos.",
  protones:
    "Los protones son partículas subatómicas con carga positiva ubicadas en el núcleo del átomo. Su número define el número atómico del elemento.",
  neutrones:
    "Los neutrones no tienen carga eléctrica y también se ubican en el núcleo. Afectan la masa atómica y contribuyen a la estabilidad nuclear.",
  electrones:
    "Partículas con carga negativa que giran alrededor del núcleo en niveles de energía. Participan en enlaces químicos y reacciones.",
  "rayos catodicos":
    "Corrientes de electrones que se mueven desde el cátodo al ánodo en tubos de descarga. Fueron clave en el descubrimiento del electrón.",
  "rayos anodicos":
    "Corrientes de iones positivos observadas en experimentos con tubos de descarga de gas. Ayudaron a entender la estructura del átomo.",
  "modelo de bohr":
    "Propone que los electrones orbitan el núcleo en niveles de energía cuantizados. Explica los espectros de emisión del hidrógeno.",
  "modelo de thomson":
    "Conocido como el modelo del pudín de pasas. Supone que los electrones están incrustados en una masa con carga positiva.",
  "modelo de rutherford":
    "Describe un núcleo central denso con carga positiva donde está concentrada casi toda la masa. Los electrones giran a su alrededor.",
  "modelo cuantico":
    "Modelo actual del átomo basado en probabilidades y funciones de onda. Describe orbitales y principios como el de exclusión de Pauli.",
  "efecto fotoelectrico":
    "Cuando la luz incide sobre una superficie metálica, libera electrones. Einstein lo explicó con la idea de fotones y energía cuantizada.",
  "teoria cuantica":
    "Explica el comportamiento de partículas subatómicas. Introduce conceptos como niveles de energía, orbitales y dualidad onda-partícula.",
  "principio de incertidumbre":
    "Establece que no se puede conocer simultáneamente con precisión la posición y el momento de una partícula (Heisenberg).",
  "dualidad onda particula":
    "Postula que partículas como los electrones tienen comportamiento tanto de partícula como de onda (De Broglie).",
  "ecuacion de schrodinger":
    "Describe cómo evoluciona la función de onda en el tiempo. Es la base matemática de la mecánica cuántica.",
  "funcion de onda":
    "Representa el estado cuántico de una partícula. El cuadrado de su valor da la probabilidad de encontrar la partícula en un punto.",
  "numeros cuanticos":
    "Son valores que describen las propiedades del electrón en un átomo: n (principal), l (azimutal), m (magnético), y s (espín).",
  "principio de aufbau":
    "Los electrones ocupan orbitales de menor energía antes de los de mayor energía, según un orden determinado.",
  "principio de hund":
    "Los electrones ocupan orbitales degenerados (misma energía) individualmente con espines paralelos antes de emparejarse.",
  "principio de pauli": "Ningún electrón en un mismo átomo puede tener los mismos cuatro números cuánticos.",
  orbital: "Región del espacio donde existe una alta probabilidad de encontrar un electrón.",
  "configuracion electronica": "Distribución de los electrones de un átomo en niveles y subniveles de energía.",
  isotopos: "Átomos del mismo elemento con igual número de protones pero diferente número de neutrones.",
  "masa atomica": "Es el promedio ponderado de las masas de los isótopos de un elemento.",
  "enlace ionico":
    "Se forma por transferencia de electrones entre un metal y un no metal. Resulta en iones con cargas opuestas que se atraen.",
  "enlace covalente": "Se forma por compartición de pares de electrones entre átomos no metálicos.",
  "enlace metalico":
    "Enlace entre átomos metálicos donde los electrones de valencia se mueven libremente creando un mar de electrones.",
  electronegatividad: "Capacidad de un átomo para atraer electrones compartidos en un enlace químico.",
  "afinidad electronica": "Energía liberada cuando un átomo gaseoso neutro gana un electrón.",
  "energia de ionizacion": "Energía necesaria para remover un electrón de un átomo gaseoso en estado fundamental.",
  "radio atomico": "Distancia entre el núcleo del átomo y su electrón más externo.",
  "radio ionico": "Tamaño de un ion. Los cationes son más pequeños que su átomo original; los aniones, más grandes.",
  "tabla periodica":
    "Organiza los elementos según su número atómico creciente. Agrupa elementos con propiedades similares.",
  periodos: "Filas horizontales de la tabla periódica que indican el número de niveles de energía.",
  grupos: "Columnas verticales en la tabla periódica. Los elementos de un mismo grupo tienen propiedades similares.",
  metales: "Elementos buenos conductores de calor y electricidad, maleables y dúctiles. Tienden a perder electrones.",
  "no metales": "Elementos que no conducen bien la electricidad ni el calor. Tienden a ganar electrones.",
  metaloides: "Elementos con propiedades intermedias entre metales y no metales.",
  "reaccion quimica":
    "Proceso en el cual una o más sustancias se transforman en otras nuevas con diferentes propiedades.",
  "ley de conservacion de la masa": "La masa total en una reacción química se conserva, no se crea ni se destruye.",
  estequiometria:
    "Parte de la química que estudia las relaciones cuantitativas entre reactivos y productos en una reacción.",
  mol: "Unidad del SI que representa 6.022×10^23 partículas (átomos, moléculas, iones, etc).",
  "masa molar": "Masa en gramos de un mol de sustancia. Se obtiene sumando las masas atómicas de sus elementos.",
  disolucion: "Mezcla homogénea de dos o más sustancias. El soluto se disuelve en el disolvente.",
  concentracion: "Cantidad de soluto disuelto en una cantidad específica de disolvente o solución.",
  ph: "Escala que mide la acidez o basicidad de una solución. Va de 0 a 14. pH<7: ácido; pH=7: neutro; pH>7: básico.",
  indicador: "Sustancia que cambia de color dependiendo del pH de la solución.",
  "quimica organica":
    "Rama de la química que estudia los compuestos del carbono, como hidrocarburos, alcoholes, ácidos y más.",
  "quimica inorganica":
    "Estudia los compuestos que no tienen carbono-hidrógeno como base, incluyendo sales, ácidos, óxidos, etc.",
  oxido: "Compuesto formado por un elemento y oxígeno. Ej: óxido de calcio (CaO).",
  acido: "Sustancia que libera iones hidrógeno (H+) en solución acuosa.",
  base: "Sustancia que libera iones hidroxilo (OH-) en solución acuosa.",
  sal: "Compuesto iónico formado por la reacción de un ácido y una base.",
  neutralizacion: "Reacción entre un ácido y una base que produce una sal y agua.",
  gas: "Estado de la materia sin forma ni volumen definido. Sus partículas están muy separadas y en movimiento.",
  liquido: "Estado de la materia con volumen definido pero forma variable.",
  solido: "Estado de la materia con forma y volumen definidos. Las partículas están muy unidas.",
  "cambios fisicos": "Transformaciones que no alteran la composición química de la sustancia.",
  "cambios quimicos": "Transformaciones donde se forman nuevas sustancias con diferente composición.",
  "calor especifico":
    "Cantidad de energía necesaria para elevar la temperatura de un gramo de sustancia un grado Celsius.",
  fusion: "Cambio de estado de sólido a líquido.",
  ebullicion: "Paso de líquido a gas mediante aporte de calor.",
  sublimacion: "Paso directo de sólido a gas.",
  "quimica ambiental": "Estudia los procesos químicos que ocurren en el medio ambiente y su impacto.",
  "quimica verde": "Diseño de productos y procesos químicos que reducen o eliminan el uso de sustancias peligrosas.",
  espectroscopia: "Técnica que estudia la interacción de la luz con la materia para identificar sustancias.",
  catalizador: "Sustancia que aumenta la velocidad de una reacción sin consumirse en ella.",
  "equilibrio quimico": "Estado donde las velocidades de reacción directa e inversa son iguales.",
  "ley de le chatelier": "Si se modifica un sistema en equilibrio, este se ajusta para contrarrestar el cambio.",
  "constante de equilibrio":
    "Relación entre concentraciones de productos y reactivos en equilibrio. Indica la extensión de la reacción.",
  "cinetica quimica": "Estudia la velocidad de las reacciones químicas y los factores que la afectan.",
  "energia de activacion": "Energía mínima necesaria para iniciar una reacción química.",

  // NUEVOS CONCEPTOS AGREGADOS (basados en el marco teórico del PDF)
  "particulas subatomicas":
    "Las principales partículas subatómicas son protones (carga positiva), neutrones (sin carga) y electrones (carga negativa). Los protones y neutrones están en el núcleo.",
  "nucleo atomico":
    "Región central del átomo donde se concentra casi toda la masa. Contiene protones y neutrones unidos por fuerzas nucleares fuertes.",
  radiactividad:
    "Fenómeno por el cual núcleos inestables se desintegran espontáneamente emitiendo partículas alfa, beta o radiación gamma. Descubierta por Becquerel.",
  "decaimiento alfa":
    "Tipo de desintegración radiactiva donde el núcleo emite una partícula alfa (núcleo de helio: 2 protones + 2 neutrones).",
  "decaimiento beta":
    "Desintegración donde se emite un electrón (β-) o positrón (β+). En β-, un neutrón se convierte en protón.",
  "radiacion gamma":
    "Radiación electromagnética de alta energía emitida por núcleos excitados. Acompaña otros tipos de desintegración.",
  "modelo de bohr sommerfeld":
    "Extensión del modelo de Bohr que introduce órbitas elípticas y números cuánticos adicionales.",
  "radiacion cuerpo negro":
    "Radiación electromagnética emitida por un cuerpo que absorbe toda la radiación incidente. Planck explicó su espectro.",
  "teoria de planck":
    "Planck propuso que la energía se emite en cuantos discretos (E=hf), resolviendo el problema del ultravioleta catastrófico.",
  "numero cuantico principal":
    "Número cuántico n que indica el nivel de energía principal del electrón. Determina el tamaño del orbital.",
  "numero cuantico azimutal": "Número cuántico l que describe la forma del orbital. l=0(s), l=1(p), l=2(d), l=3(f).",
  "numero cuantico magnetico":
    "Número cuántico ml que describe la orientación espacial del orbital. Valores de -l a +l.",
  "numero cuantico de espin": "Número cuántico ms que describe el espín del electrón. Valores +1/2 o -1/2.",
  "orbitales s":
    "Orbitales esféricos centrados en el núcleo. Cada nivel tiene un orbital s que puede contener máximo 2 electrones.",
  "orbitales p":
    "Orbitales con forma bilobular. Hay 3 orbitales p por nivel (px, py, pz) orientados perpendicularmente.",
  "orbitales d": "Orbitales de formas complejas. Hay 5 orbitales d por nivel que pueden contener hasta 10 electrones.",
  "orbitales f":
    "Orbitales de formas muy complejas. Hay 7 orbitales f por nivel que pueden contener hasta 14 electrones.",
  "principio de exclusion de pauli": "Ningún electrón en un átomo puede tener los mismos cuatro números cuánticos.",
  "regla de hund":
    "Los electrones ocupan orbitales degenerados individualmente con espines paralelos antes de emparejarse.",
  "electrones de valencia":
    "Electrones en la capa más externa del átomo. Determinan las propiedades químicas y la capacidad de formar enlaces.",
  familias:
    "Otro nombre para los grupos de la tabla periódica. Elementos de la misma familia tienen configuraciones electrónicas similares.",
  bloques: "Divisiones de la tabla periódica según el último orbital ocupado: bloque s, p, d, f.",
  "metales alcalinos":
    "Elementos del grupo 1: Li, Na, K, Rb, Cs, Fr. Tienen un electrón de valencia, son muy reactivos.",
  "metales alcalinoterreos":
    "Elementos del grupo 2: Be, Mg, Ca, Sr, Ba, Ra. Tienen dos electrones de valencia, forman iones +2.",
  halogenos:
    "Elementos del grupo 17: F, Cl, Br, I, At. Tienen 7 electrones de valencia, muy reactivos, forman iones -1.",
  "gases nobles":
    "Elementos del grupo 18: He, Ne, Ar, Kr, Xe, Rn. Tienen configuración electrónica completa, químicamente inertes.",
  "metales de transicion":
    "Elementos de los grupos 3-12. Tienen orbitales d parcialmente llenos, forman iones coloreados.",
  lantanidos:
    "Serie de 14 elementos desde La hasta Lu. Tienen orbitales f parcialmente llenos, propiedades muy similares.",
  actinidos: "Serie de 14 elementos desde Ac hasta Lr. Todos son radiactivos, muchos son sintéticos.",
  "elementos representativos":
    "Elementos de los grupos 1, 2 y 13-18. Sus propiedades se predicen bien por su posición en la tabla.",
  "propiedades periodicas":
    "Propiedades que varían de manera predecible: radio atómico, energía de ionización, electronegatividad.",
  "radio covalente": "Mitad de la distancia entre núcleos de dos átomos idénticos unidos covalentemente.",
  "primera energia de ionizacion":
    "Energía para remover el primer electrón. Varía periódicamente y es menor para metales alcalinos.",
  "segunda energia de ionizacion": "Energía para remover el segundo electrón. Siempre mayor que la primera.",
  "carga nuclear efectiva":
    "Carga positiva neta que experimenta un electrón, considerando el apantallamiento de otros electrones.",
  "efecto pantalla":
    "Reducción de la atracción nuclear sobre electrones externos debido a la repulsión de electrones internos.",
  "enlace covalente polar":
    "Enlace covalente donde los electrones se comparten desigualmente debido a diferencias de electronegatividad.",
  "enlace covalente no polar":
    "Enlace covalente donde los electrones se comparten igualmente entre átomos de igual electronegatividad.",
  "enlace coordinado": "Enlace covalente donde ambos electrones del par compartido provienen del mismo átomo.",
  "teoria de lewis": "Teoría que explica enlaces mediante compartición o transferencia de electrones.",
  "estructura de lewis": "Representación de moléculas mostrando átomos, enlaces y pares de electrones libres.",
  "regla del octeto": "Tendencia de los átomos a alcanzar 8 electrones en su capa de valencia.",
  "numero masico": "Suma del número de protones y neutrones en el núcleo de un átomo.",
  "numero atomico": "Número de protones en el núcleo de un átomo. Define la identidad del elemento.",
  "unidad de masa atomica": "Unidad para expresar masas atómicas. 1 uma = 1/12 de la masa del átomo de carbono-12.",
  "estados de la materia": "Formas en que puede presentarse la materia: sólido, líquido, gas y plasma.",
  plasma: "Cuarto estado de la materia donde los gases están ionizados. Común en estrellas.",
  "cambios de estado":
    "Transiciones entre estados de la materia: fusión, solidificación, vaporización, condensación, sublimación.",
  vaporizacion: "Cambio de estado de líquido a gas. Incluye evaporación y ebullición.",
  condensacion: "Cambio de gas a líquido mediante enfriamiento o aumento de presión.",
  solidificacion: "Cambio de líquido a sólido mediante enfriamiento. También llamado congelación.",
  reactivos: "Sustancias que se consumen en una reacción química. Se escriben del lado izquierdo de la ecuación.",
  productos: "Sustancias que se forman en una reacción química. Se escriben del lado derecho de la ecuación.",
  "ecuacion quimica": "Representación simbólica de una reacción química usando fórmulas químicas y coeficientes.",
  "balanceo de ecuaciones":
    "Proceso de ajustar coeficientes en una ecuación química para que se cumpla la ley de conservación de la masa.",
  "coeficientes estequiometricos":
    "Números que preceden las fórmulas en una ecuación balanceada. Indican las proporciones molares.",
  "numero de avogadro": "6.022×10²³, número de partículas en un mol de cualquier sustancia.",
  "volumen molar": "Volumen ocupado por un mol de gas en condiciones estándar: 22.4 L a 0°C y 1 atm.",
  "formula molecular": "Fórmula que indica el número exacto de átomos de cada elemento en una molécula.",
  "formula empirica": "Fórmula que muestra la proporción más simple de átomos en un compuesto.",
  solucion: "Sinónimo de disolución. Mezcla homogénea donde no se distinguen las fases de los componentes.",
  soluto: "Sustancia que se disuelve en una solución. Generalmente es el componente en menor cantidad.",
  disolvente: "Sustancia que disuelve al soluto. Generalmente es el componente en mayor cantidad.",
  molaridad: "Concentración expresada como moles de soluto por litro de solución.",
  molalidad: "Concentración expresada como moles de soluto por kilogramo de disolvente.",
  normalidad: "Concentración expresada como equivalentes de soluto por litro de solución.",
  "porcentaje en masa": "Concentración expresada como gramos de soluto por 100 gramos de solución.",
  "partes por millon": "Concentración muy diluida: mg de soluto por kg de solución.",
  poh: "Escala que mide la concentración de iones OH⁻. pH + pOH = 14 a 25°C.",
  "acido fuerte": "Ácido que se ioniza completamente en solución acuosa. Ejemplos: HCl, HNO₃, H₂SO₄.",
  "base fuerte": "Base que se disocia completamente en solución acuosa. Ejemplos: NaOH, KOH, Ca(OH)₂.",
  "acido debil": "Ácido que se ioniza parcialmente en solución. Establece equilibrio. Ejemplo: CH₃COOH.",
  "base debil": "Base que se disocia parcialmente en solución. Ejemplo: NH₃.",
  buffer: "Solución que resiste cambios de pH al agregar pequeñas cantidades de ácido o base.",
  hidrocarburo: "Compuesto orgánico formado solo por carbono e hidrógeno.",
  "grupo funcional":
    "Átomo o grupo de átomos que confiere propiedades químicas características a los compuestos orgánicos.",
  polimero: "Macromolécula formada por la unión de muchas unidades pequeñas llamadas monómeros.",
  "oxido basico": "Óxido de metal que reacciona con agua para formar hidróxidos.",
  "oxido acido": "Óxido de no metal que reacciona con agua para formar ácidos.",
  hidroxido: "Compuesto que contiene el grupo OH⁻. Las bases metálicas son hidróxidos.",
  hidruro: "Compuesto binario del hidrógeno con otro elemento.",
}

// Función para normalizar texto (eliminar acentos, mayúsculas, etc.)
function normalizeText(text) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // Eliminar acentos
    .replace(/[^a-z0-9\s]/g, "") // Eliminar caracteres especiales
    .trim()
}

// Función para verificar similitud básica
function isTextSimilar(text1, text2) {
  const normalized1 = normalizeText(text1)
  const normalized2 = normalizeText(text2)

  // Verificar si una palabra está contenida en la otra
  if (normalized1.includes(normalized2) || normalized2.includes(normalized1)) {
    return true
  }

  // Verificar similitud por palabras
  const words1 = normalized1.split(" ")
  const words2 = normalized2.split(" ")

  for (const word1 of words1) {
    for (const word2 of words2) {
      if (word1.length > 3 && word2.length > 3) {
        // Verificar si las palabras son similares (tolerancia a 1-2 caracteres diferentes)
        if (Math.abs(word1.length - word2.length) <= 2) {
          let differences = 0
          const minLength = Math.min(word1.length, word2.length)
          for (let i = 0; i < minLength; i++) {
            if (word1[i] !== word2[i]) differences++
          }
          if (differences <= 2) return true
        }
      }
    }
  }

  return false
}

// Función para obtener respuesta local MEJORADA (manteniendo tu estructura original)
function getLocalResponse(userMessage) {
  const message = normalizeText(userMessage)

  // Buscar coincidencias exactas primero
  for (const [keyword, response] of Object.entries(chemistryKnowledge)) {
    const normalizedKeyword = normalizeText(keyword)
    if (message.includes(normalizedKeyword)) {
      return response
    }
  }

  // Buscar coincidencias con tolerancia a errores
  for (const [keyword, response] of Object.entries(chemistryKnowledge)) {
    if (isTextSimilar(message, keyword)) {
      return response
    }
  }

  // Respuestas para saludos y despedidas (manteniendo tu estructura)
  if (message.includes("hola") || message.includes("saludos")) {
    return "¡Hola! Soy tu asistente de química. ¿En qué puedo ayudarte hoy?"
  }

  if (message.includes("gracias")) {
    return "¡De nada! Estoy aquí para ayudarte con tus dudas de química. ¿Hay algo más?"
  }

  if (message.includes("adios") || message.includes("hasta luego")) {
    return "¡Hasta luego! Si tienes más preguntas sobre química, no dudes en consultarme."
  }

  // Respuesta por defecto MEJORADA
  return "Puedo ayudarte con muchos conceptos de química como átomos, tabla periódica, enlaces químicos, reacciones, configuración electrónica, números cuánticos, modelos atómicos, propiedades periódicas, ácidos y bases, estados de la materia, y más. ¿Podrías ser más específico sobre qué te gustaría aprender?"
}

// Función para usar Google Gemini (si está configurado) - SIN CAMBIOS
async function getGeminiResponse(userMessage) {
  if (!process.env.GEMINI_API_KEY || process.env.GEMINI_API_KEY === "AIzaSyCxUIXXKwR4dV9k3uzf4v2Tq592kaToP3g") {
    return null // No usar Gemini si no está configurado
  }

  try {
    const { GoogleGenerativeAI } = require("@google/generative-ai")
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY)
    const model = genAI.getGenerativeModel({ model: "gemini-pro" })

    const prompt = `Eres un asistente educativo especializado en química. Responde de manera clara y educativa sobre: ${userMessage}`

    const result = await model.generateContent(prompt)
    const response = result.response
    return response.text()
  } catch (error) {
    console.error("Error con Gemini:", error)
    return null
  }
}

// Endpoint principal del chatbot - SIN CAMBIOS
app.get("/", (req, res) => {
  res.json({
    message: "Backend de Química - API funcionando ✅",
    endpoints: {
      health: "/api/health",
      chat: "/api/chat (POST)",
    },
  })
})

app.post("/api/chat", async (req, res) => {
  try {
    const { message } = req.body

    if (!message || typeof message !== "string") {
      return res.status(400).json({
        success: false,
        error: "Mensaje inválido",
      })
    }

    console.log(`[${new Date().toISOString()}] Consulta: ${message.substring(0, 50)}...`)

    let response

    // Intentar respuesta local primero
    response = getLocalResponse(message)

    // Si no hay respuesta local satisfactoria, intentar Gemini
    if (
      response.includes("más específico") &&
      process.env.GEMINI_API_KEY &&
      process.env.GEMINI_API_KEY !== "AIzaSyCxUIXXKwR4dV9k3uzf4v2Tq592kaToP3g"
    ) {
      const geminiResponse = await getGeminiResponse(message)
      if (geminiResponse) {
        response = geminiResponse
      }
    }

    res.json({
      success: true,
      response: response,
      timestamp: new Date().toISOString(),
      source: response.includes("más específico") ? "local_fallback" : "knowledge_base",
    })
  } catch (error) {
    console.error("Error en /api/chat:", error)
    res.status(500).json({
      success: false,
      error: "Error interno del servidor",
      timestamp: new Date().toISOString(),
    })
  }
})

// Endpoint de verificación - SIN CAMBIOS
app.get("/api/health", (req, res) => {
  res.json({
    status: "OK",
    message: "Servidor funcionando correctamente",
    timestamp: new Date().toISOString(),
    geminiConfigured: !!(
      process.env.GEMINI_API_KEY && process.env.GEMINI_API_KEY !== "AIzaSyCxUIXXKwR4dV9k3uzf4v2Tq592kaToP3g"
    ),
  })
})

// Servir archivos estáticos (opcional) - SIN CAMBIOS
app.use(express.static("../"))

// Iniciar servidor - SIN CAMBIOS
app.listen(PORT, () => {
  console.log(`🚀 Servidor iniciado en http://localhost:${PORT}`)
  console.log(`📊 Verificar estado: http://localhost:${PORT}/api/health`)
  console.log(
    `🔑 Google Gemini: ${process.env.GEMINI_API_KEY && process.env.GEMINI_API_KEY !== "AIzaSyCxUIXXKwR4dV9k3uzf4v2Tq592kaToP3g" ? "Configurado ✅" : "No configurado (usando respuestas locales) ⚠️"}`,
  )

  if (!process.env.GEMINI_API_KEY || process.env.GEMINI_API_KEY === "AIzaSyCxUIXXKwR4dV9k3uzf4v2Tq592kaToP3g") {
    console.log(`\n💡 Para habilitar IA avanzada:`)
    console.log(`   1. Obtén una API key en: https://makersuite.google.com/app/apikey`)
    console.log(`   2. Agrega GOOGLE_API_KEY=tu_clave_real en el archivo .env`)
    console.log(`   3. Reinicia el servidor\n`)
  }
})

// Manejo de errores - SIN CAMBIOS
process.on("uncaughtException", (error) => {
  console.error("Error no capturado:", error)
})

process.on("unhandledRejection", (reason, promise) => {
  console.error("Promesa rechazada:", reason)
})
module.exports = app
