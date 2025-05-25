const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares básicos
app.use(cors({
    origin: '*',
    credentials: false
}));
app.use(express.json());

// Base de conocimientos de química
const chemistryKnowledge = {
   "atomo": "El átomo es la unidad básica de la materia, compuesto por protones, neutrones y electrones. La estructura atómica determina las propiedades químicas y físicas de los elementos.",
  "protones": "Los protones son partículas subatómicas con carga positiva ubicadas en el núcleo del átomo. Su número define el número atómico del elemento.",
  "neutrones": "Los neutrones no tienen carga eléctrica y también se ubican en el núcleo. Afectan la masa atómica y contribuyen a la estabilidad nuclear.",
  "electrones": "Partículas con carga negativa que giran alrededor del núcleo en niveles de energía. Participan en enlaces químicos y reacciones.",
  "rayos catodicos": "Corrientes de electrones que se mueven desde el cátodo al ánodo en tubos de descarga. Fueron clave en el descubrimiento del electrón.",
  "rayos anodicos": "Corrientes de iones positivos observadas en experimentos con tubos de descarga de gas. Ayudaron a entender la estructura del átomo.",
  "modelo de bohr": "Propone que los electrones orbitan el núcleo en niveles de energía cuantizados. Explica los espectros de emisión del hidrógeno.",
  "modelo de thomson": "Conocido como el modelo del pudín de pasas. Supone que los electrones están incrustados en una masa con carga positiva.",
  "modelo de rutherford": "Describe un núcleo central denso con carga positiva donde está concentrada casi toda la masa. Los electrones giran a su alrededor.",
  "modelo cuantico": "Modelo actual del átomo basado en probabilidades y funciones de onda. Describe orbitales y principios como el de exclusión de Pauli.",
  "efecto fotoelectrico": "Cuando la luz incide sobre una superficie metálica, libera electrones. Einstein lo explicó con la idea de fotones y energía cuantizada.",
  "teoria cuantica": "Explica el comportamiento de partículas subatómicas. Introduce conceptos como niveles de energía, orbitales y dualidad onda-partícula.",
  "principio de incertidumbre": "Establece que no se puede conocer simultáneamente con precisión la posición y el momento de una partícula (Heisenberg).",
  "dualidad onda particula": "Postula que partículas como los electrones tienen comportamiento tanto de partícula como de onda (De Broglie).",
  "ecuacion de schrodinger": "Describe cómo evoluciona la función de onda en el tiempo. Es la base matemática de la mecánica cuántica.",
  "funcion de onda": "Representa el estado cuántico de una partícula. El cuadrado de su valor da la probabilidad de encontrar la partícula en un punto.",
  "numeros cuanticos": "Son valores que describen las propiedades del electrón en un átomo: n (principal), l (azimutal), m (magnético), y s (espín).",
  "principio de aufbau": "Los electrones ocupan orbitales de menor energía antes de los de mayor energía, según un orden determinado.",
  "principio de hund": "Los electrones ocupan orbitales degenerados (misma energía) individualmente con espines paralelos antes de emparejarse.",
  "principio de pauli": "Ningún electrón en un mismo átomo puede tener los mismos cuatro números cuánticos.",
  "orbital": "Región del espacio donde existe una alta probabilidad de encontrar un electrón.",
  "configuracion electronica": "Distribución de los electrones de un átomo en niveles y subniveles de energía.",
  "isotopos": "Átomos del mismo elemento con igual número de protones pero diferente número de neutrones.",
  "masa atomica": "Es el promedio ponderado de las masas de los isótopos de un elemento.",
  "enlace ionico": "Se forma por transferencia de electrones entre un metal y un no metal. Resulta en iones con cargas opuestas que se atraen.",
  "enlace covalente": "Se forma por compartición de pares de electrones entre átomos no metálicos.",
  "enlace metalico": "Enlace entre átomos metálicos donde los electrones de valencia se mueven libremente creando un mar de electrones.",
  "electronegatividad": "Capacidad de un átomo para atraer electrones compartidos en un enlace químico.",
  "afinidad electronica": "Energía liberada cuando un átomo gaseoso neutro gana un electrón.",
  "energia de ionizacion": "Energía necesaria para remover un electrón de un átomo gaseoso en estado fundamental.",
  "radio atomico": "Distancia entre el núcleo del átomo y su electrón más externo.",
  "radio ionico": "Tamaño de un ion. Los cationes son más pequeños que su átomo original; los aniones, más grandes.",
  "tabla periodica": "Organiza los elementos según su número atómico creciente. Agrupa elementos con propiedades similares.",
  "periodos": "Filas horizontales de la tabla periódica que indican el número de niveles de energía.",
  "grupos": "Columnas verticales en la tabla periódica. Los elementos de un mismo grupo tienen propiedades similares.",
  "metales": "Elementos buenos conductores de calor y electricidad, maleables y dúctiles. Tienden a perder electrones.",
  "no metales": "Elementos que no conducen bien la electricidad ni el calor. Tienden a ganar electrones.",
  "metaloides": "Elementos con propiedades intermedias entre metales y no metales.",
  "reaccion quimica": "Proceso en el cual una o más sustancias se transforman en otras nuevas con diferentes propiedades.",
  "ley de conservacion de la masa": "La masa total en una reacción química se conserva, no se crea ni se destruye.",
  "estequiometria": "Parte de la química que estudia las relaciones cuantitativas entre reactivos y productos en una reacción.",
  "mol": "Unidad del SI que representa 6.022×10^23 partículas (átomos, moléculas, iones, etc).",
  "masa molar": "Masa en gramos de un mol de sustancia. Se obtiene sumando las masas atómicas de sus elementos.",
  "disolucion": "Mezcla homogénea de dos o más sustancias. El soluto se disuelve en el disolvente.",
  "concentracion": "Cantidad de soluto disuelto en una cantidad específica de disolvente o solución.",
  "ph": "Escala que mide la acidez o basicidad de una solución. Va de 0 a 14. pH<7: ácido; pH=7: neutro; pH>7: básico.",
  "indicador": "Sustancia que cambia de color dependiendo del pH de la solución.",
  "quimica organica": "Rama de la química que estudia los compuestos del carbono, como hidrocarburos, alcoholes, ácidos y más.",
  "quimica inorganica": "Estudia los compuestos que no tienen carbono-hidrógeno como base, incluyendo sales, ácidos, óxidos, etc.",
  "oxido": "Compuesto formado por un elemento y oxígeno. Ej: óxido de calcio (CaO).",
  "acido": "Sustancia que libera iones hidrógeno (H+) en solución acuosa.",
  "base": "Sustancia que libera iones hidroxilo (OH-) en solución acuosa.",
  "sal": "Compuesto iónico formado por la reacción de un ácido y una base.",
  "neutralizacion": "Reacción entre un ácido y una base que produce una sal y agua.",
  "gas": "Estado de la materia sin forma ni volumen definido. Sus partículas están muy separadas y en movimiento.",
  "liquido": "Estado de la materia con volumen definido pero forma variable.",
  "solido": "Estado de la materia con forma y volumen definidos. Las partículas están muy unidas.",
  "cambios fisicos": "Transformaciones que no alteran la composición química de la sustancia.",
  "cambios quimicos": "Transformaciones donde se forman nuevas sustancias con diferente composición.",
  "calor especifico": "Cantidad de energía necesaria para elevar la temperatura de un gramo de sustancia un grado Celsius.",
  "fusion": "Cambio de estado de sólido a líquido.",
  "ebullicion": "Paso de líquido a gas mediante aporte de calor.",
  "sublimacion": "Paso directo de sólido a gas.",
  "quimica ambiental": "Estudia los procesos químicos que ocurren en el medio ambiente y su impacto.",
  "quimica verde": "Diseño de productos y procesos químicos que reducen o eliminan el uso de sustancias peligrosas.",
  "espectroscopia": "Técnica que estudia la interacción de la luz con la materia para identificar sustancias.",
  "catalizador": "Sustancia que aumenta la velocidad de una reacción sin consumirse en ella.",
  "equilibrio quimico": "Estado donde las velocidades de reacción directa e inversa son iguales.",
  "ley de le chatelier": "Si se modifica un sistema en equilibrio, este se ajusta para contrarrestar el cambio.",
  "constante de equilibrio": "Relación entre concentraciones de productos y reactivos en equilibrio. Indica la extensión de la reacción.",
  "cinetica quimica": "Estudia la velocidad de las reacciones químicas y los factores que la afectan.",
  "energia de activacion": "Energía mínima necesaria para iniciar una reacción química."
};

// Función para obtener respuesta local
function getLocalResponse(userMessage) {
    const message = userMessage.toLowerCase();
    
    // Buscar coincidencias exactas
    for (const [keyword, response] of Object.entries(chemistryKnowledge)) {
        if (message.includes(keyword)) {
            return response;
        }
    }
    
    // Respuestas para saludos y despedidas
    if (message.includes('hola') || message.includes('saludos')) {
        return '¡Hola! Soy tu asistente de química. ¿En qué puedo ayudarte hoy?';
    }
    
    if (message.includes('gracias')) {
        return '¡De nada! Estoy aquí para ayudarte con tus dudas de química. ¿Hay algo más?';
    }
    
    if (message.includes('adiós') || message.includes('hasta luego')) {
        return '¡Hasta luego! Si tienes más preguntas sobre química, no dudes en consultarme.';
    }
    
    // Respuesta por defecto
    return 'Puedo ayudarte con conceptos de química como átomos, tabla periódica, enlaces químicos, electronegatividad, y más. ¿Podrías ser más específico sobre qué te gustaría aprender?';
}

// Función para usar Google Gemini (si está configurado)
async function getGeminiResponse(userMessage) {
    if (!process.env.GEMINI_API_KEY || process.env.GEMINI_API_KEY === 'AIzaSyCxUIXXKwR4dV9k3uzf4v2Tq592kaToP3g') {
        return null; // No usar Gemini si no está configurado
    }
    
    try {
        const { GoogleGenerativeAI } = require('@google/generative-ai');
        const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
        const model = genAI.getGenerativeModel({ model: "gemini-pro" });
        
        const prompt = `Eres un asistente educativo especializado en química. Responde de manera clara y educativa sobre: ${userMessage}`;
        
        const result = await model.generateContent(prompt);
        const response = result.response;
        return response.text();
    } catch (error) {
        console.error('Error con Gemini:', error);
        return null;
    }
}

// Endpoint principal del chatbot
app.get('/', (req, res) => {
    res.json({
        message: 'Backend de Química - API funcionando ✅',
        endpoints: {
            health: '/api/health',
            chat: '/api/chat (POST)'
        }
    });
});

app.post('/api/chat', async (req, res) => {
    try {
        const { message } = req.body;
        
        if (!message || typeof message !== 'string') {
            return res.status(400).json({
                success: false,
                error: 'Mensaje inválido'
            });
        }
        
        console.log(`[${new Date().toISOString()}] Consulta: ${message.substring(0, 50)}...`);
        
        let response;
        
        // Intentar respuesta local primero
        response = getLocalResponse(message);
        
        // Si no hay respuesta local satisfactoria, intentar Gemini
        if (response.includes('más específico') && process.env.GEMINI_API_KEY && process.env.GEMINI_API_KEY !== 'AIzaSyCxUIXXKwR4dV9k3uzf4v2Tq592kaToP3g') {
            const geminiResponse = await getGeminiResponse(message);
            if (geminiResponse) {
                response = geminiResponse;
            }
        }
        
        res.json({
            success: true,
            response: response,
            timestamp: new Date().toISOString(),
            source: response.includes('más específico') ? 'local_fallback' : 'knowledge_base'
        });
        
    } catch (error) {
        console.error('Error en /api/chat:', error);
        res.status(500).json({
            success: false,
            error: 'Error interno del servidor',
            timestamp: new Date().toISOString()
        });
    }
});

// Endpoint de verificación
app.get('/api/health', (req, res) => {
    res.json({
        status: 'OK',
        message: 'Servidor funcionando correctamente',
        timestamp: new Date().toISOString(),
        geminiConfigured: !!(process.env.GEMINI_API_KEY && process.env.GEMINI_API_KEY !== 'AIzaSyCxUIXXKwR4dV9k3uzf4v2Tq592kaToP3g')
    });
});

// Servir archivos estáticos (opcional)
app.use(express.static('../'));

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`🚀 Servidor iniciado en http://localhost:${PORT}`);
    console.log(`📊 Verificar estado: http://localhost:${PORT}/api/health`);
    console.log(`🔑 Google Gemini: ${process.env.GEMINI_API_KEY && process.env.GEMINI_API_KEY !== 'AIzaSyCxUIXXKwR4dV9k3uzf4v2Tq592kaToP3g' ? 'Configurado ✅' : 'No configurado (usando respuestas locales) ⚠️'}`);
    
    if (!process.env.GEMINI_API_KEY || process.env.GEMINI_API_KEY === 'AIzaSyCxUIXXKwR4dV9k3uzf4v2Tq592kaToP3g') {
        console.log(`\n💡 Para habilitar IA avanzada:`);
        console.log(`   1. Obtén una API key en: https://makersuite.google.com/app/apikey`);
        console.log(`   2. Agrega GOOGLE_API_KEY=tu_clave_real en el archivo .env`);
        console.log(`   3. Reinicia el servidor\n`);
    }
});

// Manejo de errores
process.on('uncaughtException', (error) => {
    console.error('Error no capturado:', error);
});

process.on('unhandledRejection', (reason, promise) => {
    console.error('Promesa rechazada:', reason);
    
});
module.exports = app;
