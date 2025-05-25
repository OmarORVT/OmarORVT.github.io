const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares básicos
app.use(cors({
    origin: ['http://localhost:3000', 'http://127.0.0.1:3000', 'http://localhost:5500', 'http://localhost:8080', 'file://'],
    credentials: true
}));
app.use(express.json());

// Base de conocimientos de química
const chemistryKnowledge = {
    'átomo': 'El átomo es la unidad básica de la materia, compuesta por protones, neutrones y electrones. Los protones tienen carga positiva, los neutrones no tienen carga, y los electrones tienen carga negativa.',
    'tabla periódica': 'La tabla periódica organiza los elementos químicos según su número atómico y propiedades químicas. Está dividida en períodos (filas) y grupos (columnas).',
    'enlace químico': 'Los enlaces químicos son fuerzas que mantienen unidos a los átomos. Los principales tipos son: iónico, covalente y metálico.',
    'electronegatividad': 'La electronegatividad es la capacidad de un átomo para atraer electrones hacia sí mismo en un enlace químico.',
    'radio atómico': 'El radio atómico es la distancia desde el núcleo hasta el orbital más externo. Disminuye de izquierda a derecha en un período.',
    'energía de ionización': 'La energía de ionización es la energía necesaria para separar un electrón de un átomo en estado gaseoso.',
    'metales': 'Los metales son elementos que tienden a perder electrones. Se caracterizan por su brillo metálico y conductividad.',
    'no metales': 'Los no metales son elementos que tienden a ganar electrones. Tienen baja conductividad eléctrica y térmica.',
    'gases nobles': 'Los gases nobles son elementos del Grupo 18. Tienen su capa de valencia completa, lo que los hace muy estables.',
    'hidrógeno': 'El hidrógeno (H) es el elemento más ligero y abundante en el universo. Es un gas incoloro, inodoro e insípido.',
    'oxígeno': 'El oxígeno (O) es esencial para la respiración y la combustión. Tiene 8 protones y 8 electrones.',
    'carbono': 'El carbono (C) es fundamental para la vida. Puede formar una amplia variedad de compuestos orgánicos.',
    'enlace iónico': 'El enlace iónico se forma por transferencia de electrones de un metal a un no metal.',
    'enlace covalente': 'El enlace covalente se forma por compartición de electrones entre átomos no metálicos.',
    'ph': 'El pH mide la acidez o basicidad de una solución. La escala va de 0 (muy ácido) a 14 (muy básico).',
    'mol': 'El mol es la unidad de cantidad de sustancia. Un mol contiene 6.022 × 10²³ entidades elementales.',
    'orbital': 'Un orbital es una región del espacio donde hay alta probabilidad de encontrar un electrón.',
    'isótopo': 'Los isótopos son átomos del mismo elemento con diferente número de neutrones.'
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
    if (!process.env.GEMINI_API_KEY || process.env.GEMINI_API_KEY === 'tu_api_key_aqui') {
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
        if (response.includes('más específico') && process.env.GEMINI_API_KEY && process.env.GEMINI_API_KEY !== 'tu_api_key_aqui') {
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
        geminiConfigured: !!(process.env.GEMINI_API_KEY && process.env.GEMINI_API_KEY !== 'tu_api_key_aqui')
    });
});

// Servir archivos estáticos (opcional)
app.use(express.static('../'));

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`🚀 Servidor iniciado en http://localhost:${PORT}`);
    console.log(`📊 Verificar estado: http://localhost:${PORT}/api/health`);
    console.log(`🔑 Google Gemini: ${process.env.GEMINI_API_KEY && process.env.GEMINI_API_KEY !== 'tu_api_key_aqui' ? 'Configurado ✅' : 'No configurado (usando respuestas locales) ⚠️'}`);
    
    if (!process.env.GEMINI_API_KEY || process.env.GEMINI_API_KEY === 'tu_api_key_aqui') {
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
