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

const chemistryKnowledge = {
  // Estructura Atómica y Partículas Subatómicas
  atomo:
    "El átomo es la unidad básica de la materia, compuesto por protones, neutrones y electrones. La estructura atómica determina las propiedades químicas y físicas de los elementos. Los protones y neutrones forman el núcleo, mientras los electrones orbitan en niveles de energía específicos.",
  "particulas subatomicas":
    "Las principales partículas subatómicas son protones (carga positiva), neutrones (sin carga) y electrones (carga negativa). Los protones y neutrones están en el núcleo, los electrones en orbitales alrededor del núcleo.",
  protones:
    "Los protones son partículas subatómicas con carga positiva (+1) ubicadas en el núcleo del átomo. Su número define el número atómico del elemento y determina la identidad química del átomo.",
  neutrones:
    "Los neutrones no tienen carga eléctrica y también se ubican en el núcleo junto a los protones. Afectan la masa atómica y contribuyen a la estabilidad nuclear. Los isótopos difieren en el número de neutrones.",
  electrones:
    "Partículas con carga negativa (-1) que se mueven alrededor del núcleo en niveles de energía cuantizados. Participan en enlaces químicos y reacciones. Su distribución determina las propiedades químicas.",
  "nucleo atomico":
    "El núcleo es la región central del átomo donde se concentra casi toda la masa. Contiene protones y neutrones unidos por fuerzas nucleares fuertes. Es extremadamente pequeño comparado con el átomo completo.",

  // Rayos y Radiactividad
  "rayos catodicos":
    "Corrientes de electrones que se mueven desde el cátodo al ánodo en tubos de descarga. Fueron clave en el descubrimiento del electrón por J.J. Thomson. Generan fluorescencia al impactar superficies.",
  "rayos anodicos":
    "Corrientes de iones positivos observadas en experimentos con tubos de descarga de gas. Ayudaron a entender la estructura del átomo y la existencia de partículas con carga positiva.",
  radiactividad:
    "Fenómeno por el cual núcleos inestables se desintegran espontáneamente emitiendo partículas alfa, beta o radiación gamma. Descubierta por Becquerel, tiene aplicaciones en medicina, datación y energía nuclear.",
  "decaimiento alfa":
    "Tipo de desintegración radiactiva donde el núcleo emite una partícula alfa (núcleo de helio: 2 protones + 2 neutrones). Reduce el número atómico en 2 y la masa en 4.",
  "decaimiento beta":
    "Desintegración donde se emite un electrón (β-) o positrón (β+). En β-, un neutrón se convierte en protón; en β+, un protón se convierte en neutrón.",
  "radiacion gamma":
    "Radiación electromagnética de alta energía emitida por núcleos excitados. Acompaña otros tipos de desintegración y ayuda a estabilizar el núcleo.",

  // Modelos Atómicos
  "modelo de thomson":
    "Conocido como el modelo del 'pudín de pasas'. Propone que los electrones están incrustados uniformemente en una esfera de carga positiva, como pasas en un pudín.",
  "modelo de rutherford":
    "Describe un núcleo central denso con carga positiva donde está concentrada casi toda la masa. Los electrones giran a su alrededor en órbitas, similar al sistema solar.",
  "modelo de bohr":
    "Propone que los electrones orbitan el núcleo en niveles de energía cuantizados y estacionarios. Explica los espectros de emisión del hidrógeno mediante transiciones entre niveles.",
  "modelo de bohr sommerfeld":
    "Extensión del modelo de Bohr que introduce órbitas elípticas y números cuánticos adicionales. Explica mejor los espectros de átomos multielectrónicos.",
  "modelo cuantico":
    "Modelo actual del átomo basado en probabilidades y funciones de onda. Describe orbitales como regiones de probabilidad y aplica principios como el de exclusión de Pauli.",

  // Teoría Cuántica
  "teoria cuantica":
    "Explica el comportamiento de partículas subatómicas mediante conceptos como cuantización de energía, dualidad onda-partícula y principio de incertidumbre. Base de la química moderna.",
  "efecto fotoelectrico":
    "Cuando la luz incide sobre una superficie metálica, libera electrones. Einstein lo explicó con fotones: partículas de luz con energía E=hf. Demostró la naturaleza cuántica de la luz.",
  "radiacion cuerpo negro":
    "Radiación electromagnética emitida por un cuerpo que absorbe toda la radiación incidente. Planck explicó su espectro introduciendo la cuantización de energía.",
  "teoria de planck":
    "Planck propuso que la energía se emite en cuantos discretos (E=hf), resolviendo el problema del ultravioleta catastrófico. Fundamento de la mecánica cuántica.",
  "dualidad onda particula":
    "Postulado de De Broglie: partículas como electrones tienen comportamiento tanto de partícula como de onda. λ=h/p relaciona longitud de onda con momento.",
  "principio de incertidumbre":
    "Principio de Heisenberg: no se puede conocer simultáneamente con precisión la posición y el momento de una partícula. Δx·Δp ≥ ℏ/2.",
  "ecuacion de schrodinger":
    "Ecuación fundamental de la mecánica cuántica que describe la evolución temporal de la función de onda. Base matemática para calcular propiedades atómicas.",
  "funcion de onda":
    "Función matemática ψ que describe el estado cuántico de una partícula. |ψ|² da la probabilidad de encontrar la partícula en una posición específica.",

  // Números Cuánticos y Orbitales
  "numeros cuanticos":
    "Valores que describen completamente el estado de un electrón: n (principal), l (azimutal), ml (magnético), ms (espín). Cada electrón tiene una combinación única.",
  "numero cuantico principal":
    "Número cuántico n que indica el nivel de energía principal del electrón. Determina el tamaño del orbital y la energía. Valores: 1, 2, 3, 4...",
  "numero cuantico azimutal":
    "Número cuántico l que describe la forma del orbital. Valores de 0 a n-1. l=0(s), l=1(p), l=2(d), l=3(f). Determina el subnivel de energía.",
  "numero cuantico magnetico":
    "Número cuántico ml que describe la orientación espacial del orbital. Valores de -l a +l. Indica cuántos orbitales hay en cada subnivel.",
  "numero cuantico de espin":
    "Número cuántico ms que describe el espín del electrón. Valores +1/2 o -1/2. Cada orbital puede contener máximo 2 electrones con espines opuestos.",
  orbital:
    "Región del espacio donde existe alta probabilidad (90-95%) de encontrar un electrón. Tienen formas características: s (esférica), p (bilobular), d (compleja), f (muy compleja).",
  "orbitales s":
    "Orbitales esféricos centrados en el núcleo. Cada nivel tiene un orbital s que puede contener máximo 2 electrones. Son los de menor energía en cada nivel.",
  "orbitales p":
    "Orbitales con forma bilobular (mancuerna). Hay 3 orbitales p por nivel (px, py, pz) orientados perpendicularmente. Aparecen desde n=2.",
  "orbitales d":
    "Orbitales de formas complejas. Hay 5 orbitales d por nivel que pueden contener hasta 10 electrones. Aparecen desde n=3. Característicos de metales de transición.",
  "orbitales f":
    "Orbitales de formas muy complejas. Hay 7 orbitales f por nivel que pueden contener hasta 14 electrones. Aparecen desde n=4. Característicos de lantánidos y actínidos.",

  // Configuración Electrónica
  "configuracion electronica":
    "Distribución de los electrones de un átomo en niveles y subniveles de energía. Se escribe siguiendo el orden de llenado: 1s² 2s² 2p⁶ 3s² 3p⁶...",
  "principio de aufbau":
    "Principio de construcción: los electrones ocupan orbitales de menor energía antes que los de mayor energía. Orden: 1s, 2s, 2p, 3s, 3p, 4s, 3d...",
  "principio de exclusion de pauli":
    "Ningún electrón en un átomo puede tener los mismos cuatro números cuánticos. Máximo 2 electrones por orbital con espines opuestos.",
  "principio de hund":
    "Regla de máxima multiplicidad: los electrones ocupan orbitales degenerados individualmente con espines paralelos antes de emparejarse.",
  "regla de hund":
    "Los electrones ocupan orbitales degenerados (misma energía) individualmente con espines paralelos antes de que se emparejen. Minimiza la repulsión electrónica.",
  "electrones de valencia":
    "Electrones en la capa más externa del átomo. Determinan las propiedades químicas y la capacidad de formar enlaces. Su número coincide con el grupo en la tabla periódica.",

  // Tabla Periódica
  "tabla periodica":
    "Organización de los elementos según su número atómico creciente. Agrupa elementos con propiedades similares en columnas (grupos) y filas (períodos).",
  periodos:
    "Filas horizontales de la tabla periódica numeradas del 1 al 7. Indican el número de niveles de energía ocupados por los electrones del átomo.",
  grupos:
    "Columnas verticales en la tabla periódica numeradas del 1 al 18. Los elementos de un mismo grupo tienen propiedades químicas similares por tener igual número de electrones de valencia.",
  familias:
    "Otro nombre para los grupos de la tabla periódica. Elementos de la misma familia tienen configuraciones electrónicas similares en su capa de valencia.",
  bloques:
    "Divisiones de la tabla periódica según el último orbital ocupado: bloque s (grupos 1-2), bloque p (grupos 13-18), bloque d (grupos 3-12), bloque f (lantánidos y actínidos).",
  "metales alcalinos":
    "Elementos del grupo 1 (excepto hidrógeno): Li, Na, K, Rb, Cs, Fr. Tienen un electrón de valencia, son muy reactivos, forman iones +1.",
  "metales alcalinoterreos":
    "Elementos del grupo 2: Be, Mg, Ca, Sr, Ba, Ra. Tienen dos electrones de valencia, forman iones +2, menos reactivos que alcalinos.",
  halogenos:
    "Elementos del grupo 17: F, Cl, Br, I, At. Tienen 7 electrones de valencia, muy reactivos, forman iones -1, existen como moléculas diatómicas.",
  "gases nobles":
    "Elementos del grupo 18: He, Ne, Ar, Kr, Xe, Rn. Tienen configuración electrónica completa, son químicamente inertes bajo condiciones normales.",
  "metales de transicion":
    "Elementos de los grupos 3-12. Tienen orbitales d parcialmente llenos, forman iones coloreados, múltiples estados de oxidación.",
  lantanidos:
    "Serie de 14 elementos desde La hasta Lu. Tienen orbitales f parcialmente llenos, propiedades muy similares, se separan con dificultad.",
  actinidos:
    "Serie de 14 elementos desde Ac hasta Lr. Todos son radiactivos, muchos son sintéticos, tienen orbitales f parcialmente llenos.",

  // Clasificación de Elementos
  metales:
    "Elementos buenos conductores de calor y electricidad, maleables, dúctiles y con brillo metálico. Tienden a perder electrones formando cationes.",
  "no metales":
    "Elementos que no conducen bien la electricidad ni el calor. Pueden ser gases, líquidos o sólidos quebradizos. Tienden a ganar electrones formando aniones.",
  metaloides:
    "Elementos con propiedades intermedias entre metales y no metales: B, Si, Ge, As, Sb, Te, Po, At. Son semiconductores.",
  "elementos representativos":
    "Elementos de los grupos 1, 2 y 13-18. Sus propiedades se predicen bien por su posición en la tabla periódica.",

  // Propiedades Periódicas
  "propiedades periodicas":
    "Propiedades que varían de manera predecible a lo largo de períodos y grupos: radio atómico, energía de ionización, electronegatividad, afinidad electrónica.",
  "radio atomico":
    "Distancia entre el núcleo del átomo y su electrón más externo. Aumenta hacia abajo en grupos y disminuye hacia la derecha en períodos.",
  "radio ionico":
    "Tamaño de un ion. Los cationes son más pequeños que su átomo original; los aniones son más grandes. Varía según la carga del ion.",
  "radio covalente":
    "Mitad de la distancia entre núcleos de dos átomos idénticos unidos covalentemente. Útil para predecir longitudes de enlace.",
  "energia de ionizacion":
    "Energía necesaria para remover un electrón de un átomo gaseoso en estado fundamental. Aumenta hacia arriba y hacia la derecha.",
  "primera energia de ionizacion":
    "Energía para remover el primer electrón. Varía periódicamente y es menor para metales alcalinos.",
  "segunda energia de ionizacion":
    "Energía para remover el segundo electrón. Siempre mayor que la primera debido a mayor carga nuclear efectiva.",
  "afinidad electronica":
    "Energía liberada cuando un átomo gaseoso neutro gana un electrón. Generalmente aumenta hacia la derecha en períodos.",
  electronegatividad:
    "Capacidad de un átomo para atraer electrones compartidos en un enlace químico. Escala de Pauling: F=4.0 (máximo).",
  "carga nuclear efectiva":
    "Carga positiva neta que experimenta un electrón, considerando el apantallamiento de otros electrones. Aumenta a lo largo de un período.",
  "efecto pantalla":
    "Reducción de la atracción nuclear sobre electrones externos debido a la repulsión de electrones internos. Explica tendencias periódicas.",

  // Enlaces Químicos
  "enlace ionico":
    "Se forma por transferencia completa de electrones entre un metal y un no metal. Resulta en iones con cargas opuestas que se atraen electrostáticamente.",
  "enlace covalente":
    "Se forma por compartición de pares de electrones entre átomos no metálicos. Puede ser simple, doble o triple según electrones compartidos.",
  "enlace metalico":
    "Enlace entre átomos metálicos donde los electrones de valencia se mueven libremente creando un 'mar de electrones'. Explica conductividad y maleabilidad.",
  "enlace covalente polar":
    "Enlace covalente donde los electrones se comparten desigualmente debido a diferencias de electronegatividad. Crea dipolos moleculares.",
  "enlace covalente no polar":
    "Enlace covalente donde los electrones se comparten igualmente entre átomos de igual electronegatividad.",
  "enlace coordinado":
    "Enlace covalente donde ambos electrones del par compartido provienen del mismo átomo (donador). También llamado enlace dativo.",
  "teoria de lewis":
    "Teoría que explica enlaces mediante compartición o transferencia de electrones. Usa estructuras de Lewis con puntos para representar electrones.",
  "estructura de lewis":
    "Representación de moléculas mostrando átomos, enlaces (líneas) y pares de electrones libres (puntos). Útil para predecir geometría molecular.",
  "regla del octeto":
    "Tendencia de los átomos a ganar, perder o compartir electrones para alcanzar 8 electrones en su capa de valencia (configuración de gas noble).",

  // Isótopos y Masa Atómica
  isotopos:
    "Átomos del mismo elemento con igual número de protones pero diferente número de neutrones. Tienen propiedades químicas idénticas pero masas diferentes.",
  "masa atomica":
    "Promedio ponderado de las masas de todos los isótopos naturales de un elemento. Se expresa en unidades de masa atómica (uma).",
  "numero masico":
    "Suma del número de protones y neutrones en el núcleo de un átomo. Se representa como superíndice a la izquierda del símbolo.",
  "numero atomico":
    "Número de protones en el núcleo de un átomo. Define la identidad del elemento y su posición en la tabla periódica.",
  "unidad de masa atomica":
    "Unidad para expresar masas atómicas. 1 uma = 1/12 de la masa del átomo de carbono-12. Equivale a 1.66 × 10⁻²⁷ kg.",

  // Estados de la Materia
  "estados de la materia":
    "Formas en que puede presentarse la materia: sólido, líquido, gas y plasma. Dependen de la energía cinética y fuerzas intermoleculares.",
  solido:
    "Estado de la materia con forma y volumen definidos. Las partículas están muy unidas en posiciones fijas, solo vibran.",
  liquido:
    "Estado de la materia con volumen definido pero forma variable. Las partículas están unidas pero pueden moverse unas sobre otras.",
  gas: "Estado de la materia sin forma ni volumen definido. Sus partículas están muy separadas y en movimiento aleatorio rápido.",
  plasma:
    "Cuarto estado de la materia donde los gases están ionizados. Común en estrellas y descargas eléctricas de alta energía.",
  "cambios de estado":
    "Transiciones entre estados de la materia: fusión, solidificación, vaporización, condensación, sublimación, deposición.",
  fusion:
    "Cambio de estado de sólido a líquido mediante aporte de calor. Ocurre a temperatura constante (punto de fusión).",
  vaporizacion: "Cambio de estado de líquido a gas. Incluye evaporación (superficie) y ebullición (todo el líquido).",
  ebullicion:
    "Vaporización que ocurre en todo el volumen del líquido cuando la presión de vapor iguala la presión externa.",
  sublimacion: "Paso directo de sólido a gas sin pasar por líquido. Ejemplo: hielo seco (CO₂ sólido).",
  condensacion: "Cambio de gas a líquido mediante enfriamiento o aumento de presión.",
  solidificacion: "Cambio de líquido a sólido mediante enfriamiento. También llamado congelación.",

  // Reacciones Químicas
  "reaccion quimica":
    "Proceso en el cual una o más sustancias (reactivos) se transforman en otras nuevas (productos) con diferentes propiedades químicas.",
  reactivos:
    "Sustancias que se consumen en una reacción química. Se escriben del lado izquierdo de la ecuación química.",
  productos: "Sustancias que se forman en una reacción química. Se escriben del lado derecho de la ecuación química.",
  "ecuacion quimica":
    "Representación simbólica de una reacción química usando fórmulas químicas y coeficientes para mostrar reactivos y productos.",
  "balanceo de ecuaciones":
    "Proceso de ajustar coeficientes en una ecuación química para que se cumpla la ley de conservación de la masa.",
  "ley de conservacion de la masa":
    "La masa total en una reacción química se conserva: la masa de reactivos equals la masa de productos. Propuesta por Lavoisier.",
  estequiometria:
    "Parte de la química que estudia las relaciones cuantitativas entre reactivos y productos en una reacción química.",
  "coeficientes estequiometricos":
    "Números que preceden las fórmulas en una ecuación balanceada. Indican las proporciones molares de reactivos y productos.",

  // Mol y Cálculos
  mol: "Unidad del SI que representa 6.022×10²³ partículas (número de Avogadro). Permite contar átomos, moléculas o iones a escala macroscópica.",
  "numero de avogadro":
    "6.022×10²³, número de partículas en un mol de cualquier sustancia. Conecta el mundo atómico con el macroscópico.",
  "masa molar":
    "Masa en gramos de un mol de sustancia. Se obtiene sumando las masas atómicas de todos los átomos en la fórmula molecular.",
  "volumen molar": "Volumen ocupado por un mol de gas en condiciones estándar (STP): 22.4 L a 0°C y 1 atm.",
  "formula molecular":
    "Fórmula que indica el número exacto de átomos de cada elemento en una molécula. Ejemplo: C₆H₁₂O₆ para glucosa.",
  "formula empirica":
    "Fórmula que muestra la proporción más simple de átomos en un compuesto. Ejemplo: CH₂O para glucosa.",

  // Soluciones
  disolucion:
    "Mezcla homogénea de dos o más sustancias. El soluto se disuelve uniformemente en el disolvente a nivel molecular.",
  solucion: "Sinónimo de disolución. Mezcla homogénea donde no se distinguen las fases de los componentes.",
  soluto: "Sustancia que se disuelve en una solución. Generalmente es el componente en menor cantidad.",
  disolvente:
    "Sustancia que disuelve al soluto. Generalmente es el componente en mayor cantidad. El agua es el disolvente universal.",
  concentracion:
    "Cantidad de soluto disuelto en una cantidad específica de disolvente o solución. Se expresa de varias formas.",
  molaridad: "Concentración expresada como moles de soluto por litro de solución. M = moles soluto / L solución.",
  molalidad:
    "Concentración expresada como moles de soluto por kilogramo de disolvente. m = moles soluto / kg disolvente.",
  normalidad:
    "Concentración expresada como equivalentes de soluto por litro de solución. Depende del tipo de reacción.",
  "porcentaje en masa": "Concentración expresada como gramos de soluto por 100 gramos de solución.",
  "partes por millon": "Concentración muy diluida: mg de soluto por kg de solución. Útil para contaminantes traza.",

  // Ácidos y Bases
  acido:
    "Sustancia que libera iones hidrógeno (H⁺) en solución acuosa según Arrhenius, o donador de protones según Brønsted-Lowry.",
  base: "Sustancia que libera iones hidroxilo (OH⁻) en solución acuosa según Arrhenius, o aceptor de protones según Brønsted-Lowry.",
  ph: "Escala logarítmica que mide la acidez o basicidad de una solución. pH = -log[H⁺]. Rango de 0 a 14: <7 ácido, =7 neutro, >7 básico.",
  poh: "Escala que mide la concentración de iones OH⁻. pOH = -log[OH⁻]. pH + pOH = 14 a 25°C.",
  "acido fuerte": "Ácido que se ioniza completamente en solución acuosa. Ejemplos: HCl, HNO₃, H₂SO₄.",
  "base fuerte": "Base que se disocia completamente en solución acuosa. Ejemplos: NaOH, KOH, Ca(OH)₂.",
  "acido debil":
    "Ácido que se ioniza parcialmente en solución. Establece equilibrio entre forma molecular e iónica. Ejemplo: CH₃COOH.",
  "base debil": "Base que se disocia parcialmente en solución. Ejemplo: NH₃ que acepta protones del agua.",
  neutralizacion: "Reacción entre un ácido y una base que produce una sal y agua. H⁺ + OH⁻ → H₂O.",
  sal: "Compuesto iónico formado por la reacción de un ácido y una base. Contiene catión metálico y anión no metálico.",
  indicador: "Sustancia que cambia de color dependiendo del pH de la solución. Ejemplos: tornasol, fenolftaleína.",
  buffer:
    "Solución que resiste cambios de pH al agregar pequeñas cantidades de ácido o base. Contiene ácido débil y su sal conjugada.",

  // Química Orgánica e Inorgánica
  "quimica organica":
    "Rama de la química que estudia los compuestos del carbono, incluyendo hidrocarburos, alcoholes, ácidos carboxílicos, etc.",
  "quimica inorganica":
    "Estudia los compuestos que no contienen enlaces carbono-hidrógeno, incluyendo sales, ácidos, óxidos, minerales.",
  hidrocarburo:
    "Compuesto orgánico formado solo por carbono e hidrógeno. Incluye alcanos, alquenos, alquinos y aromáticos.",
  "grupo funcional":
    "Átomo o grupo de átomos que confiere propiedades químicas características a los compuestos orgánicos.",
  polimero:
    "Macromolécula formada por la unión de muchas unidades pequeñas llamadas monómeros. Ejemplos: plásticos, proteínas, ADN.",

  // Compuestos Inorgánicos
  oxido: "Compuesto binario formado por un elemento y oxígeno. Pueden ser metálicos (básicos) o no metálicos (ácidos).",
  "oxido basico": "Óxido de metal que reacciona con agua para formar hidróxidos. Ejemplo: CaO + H₂O → Ca(OH)₂.",
  "oxido acido": "Óxido de no metal que reacciona con agua para formar ácidos. Ejemplo: SO₃ + H₂O → H₂SO₄.",
  hidroxido: "Compuesto que contiene el grupo OH⁻. Las bases metálicas son hidróxidos. Ejemplo: NaOH.",
  hidruro: "Compuesto binario del hidrógeno con otro elemento. Pueden ser metálicos, covalentes o salinos.",

  // Termodinámica y Cinética
  energia:
    "Capacidad para realizar trabajo o transferir calor. En química: energía cinética, potencial, de activación, de enlace.",
  entalpia: "Contenido de calor de un sistema a presión constante. ΔH negativo: exotérmico; ΔH positivo: endotérmico.",
  entropia: "Medida del desorden de un sistema. Los procesos espontáneos tienden a aumentar la entropía total.",
  "energia libre de gibbs": "Función termodinámica que predice la espontaneidad de procesos. ΔG = ΔH - TΔS.",
  "reaccion exotermica":
    "Reacción que libera energía al entorno. ΔH < 0. Los productos tienen menor energía que reactivos.",
  "reaccion endotermica":
    "Reacción que absorbe energía del entorno. ΔH > 0. Los productos tienen mayor energía que reactivos.",
  "energia de activacion":
    "Energía mínima necesaria para iniciar una reacción química. Determina la velocidad de reacción.",
  catalizador: "Sustancia que aumenta la velocidad de una reacción sin consumirse. Reduce la energía de activación.",
  "cinetica quimica":
    "Estudia la velocidad de las reacciones químicas y los factores que la afectan: concentración, temperatura, catalizadores.",
  "velocidad de reaccion":
    "Cambio en la concentración de reactivos o productos por unidad de tiempo. Depende de varios factores.",

  // Equilibrio Químico
  "equilibrio quimico":
    "Estado dinámico donde las velocidades de reacción directa e inversa son iguales. Las concentraciones permanecen constantes.",
  "constante de equilibrio":
    "Relación entre concentraciones de productos y reactivos en equilibrio. Kc para concentraciones, Kp para presiones.",
  "ley de le chatelier":
    "Si se modifica un sistema en equilibrio, este se ajusta para contrarrestar el cambio y restablecer el equilibrio.",
  "principio de le chatelier":
    "El equilibrio se desplaza para minimizar el efecto de cambios en concentración, presión o temperatura.",
  "equilibrio dinamico":
    "Estado donde procesos opuestos ocurren a la misma velocidad. Macroscópicamente estático, microscópicamente dinámico.",

  // Aplicaciones y Tecnología
  espectroscopia:
    "Técnica que estudia la interacción de la luz con la materia para identificar sustancias y determinar estructuras moleculares.",
  cristalografia:
    "Estudio de la estructura cristalina de sólidos mediante difracción de rayos X. Revela arreglos atómicos tridimensionales.",
  "quimica ambiental":
    "Estudia los procesos químicos en aire, agua y suelo, así como el impacto de actividades humanas en el medio ambiente.",
  "quimica verde":
    "Diseño de productos y procesos químicos que reducen o eliminan el uso y generación de sustancias peligrosas.",
  nanotecnologia:
    "Manipulación de materia a escala nanométrica (1-100 nm) para crear materiales y dispositivos con propiedades únicas.",
  polimeros: "Macromoléculas formadas por repetición de unidades monoméricas. Incluyen plásticos, fibras, elastómeros.",
  semiconductores:
    "Materiales con conductividad eléctrica intermedia entre conductores y aislantes. Base de la electrónica moderna.",
  superconductores:
    "Materiales que conducen electricidad sin resistencia a temperaturas muy bajas. Aplicaciones en medicina y transporte.",

  // Elementos Específicos
  hidrogeno:
    "Elemento más simple y abundante del universo. Un protón y un electrón. Combustible limpio, forma agua al combinarse con oxígeno.",
  helio:
    "Gas noble más ligero después del hidrógeno. Inerte químicamente, usado en globos y como refrigerante criogénico.",
  carbono:
    "Base de la química orgánica. Forma cuatro enlaces covalentes. Alótropos: diamante, grafito, fullerenos, grafeno.",
  nitrogeno:
    "Gas diatómico que forma 78% de la atmósfera. Esencial para proteínas y ácidos nucleicos. Ciclo del nitrógeno.",
  oxigeno: "Gas diatómico esencial para respiración y combustión. Forma 21% de la atmósfera. Muy electronegativo.",
  fluor: "Halógeno más electronegativo. Muy reactivo, forma compuestos con todos los elementos excepto He y Ne.",
  sodio: "Metal alcalino muy reactivo. Forma sal común (NaCl). Esencial para función nerviosa y equilibrio hídrico.",
  cloro: "Halógeno gaseoso amarillo-verdoso. Usado en desinfección y producción de PVC. Forma ácido clorhídrico.",
  hierro: "Metal de transición esencial para hemoglobina. Forma aleaciones como acero. Múltiples estados de oxidación.",
  cobre: "Metal de transición excelente conductor. Usado en cables eléctricos y aleaciones como bronce y latón.",

  // Conceptos Avanzados
  hibridacion:
    "Mezcla de orbitales atómicos para formar orbitales híbridos que explican geometrías moleculares. sp³, sp², sp.",
  resonancia:
    "Fenómeno donde una molécula se representa por varias estructuras de Lewis. La estructura real es un híbrido.",
  "polaridad molecular":
    "Distribución desigual de carga eléctrica en una molécula debido a diferencias de electronegatividad.",
  "fuerzas intermoleculares":
    "Atracciones entre moléculas: van der Waals, dipolo-dipolo, puentes de hidrógeno. Determinan propiedades físicas.",
  "puente de hidrogeno":
    "Atracción especialmente fuerte entre hidrógeno unido a N, O o F y otro átomo electronegativo.",
  "momento dipolar": "Medida de la separación de cargas en una molécula polar. Se expresa en Debye (D).",
  "geometria molecular": "Arreglo tridimensional de átomos en una molécula. Predicha por teoría VSEPR.",
  "teoria vsepr":
    "Teoría de repulsión de pares electrónicos de valencia. Predice geometría molecular basada en minimizar repulsiones.",

  // Química Analítica
  "analisis cualitativo": "Determinación de qué elementos o compuestos están presentes en una muestra.",
  "analisis cuantitativo": "Determinación de cuánto de cada componente está presente en una muestra.",
  titulacion:
    "Técnica analítica para determinar concentración mediante reacción con solución de concentración conocida.",
  "punto de equivalencia": "Punto en una titulación donde moles de titulante equals moles de analito.",
  gravimetria: "Análisis cuantitativo basado en medición de masa de precipitados o residuos.",
  cromatografia: "Técnica de separación basada en distribución diferencial entre fase móvil y estacionaria.",

  // Química Industrial
  "proceso haber": "Síntesis industrial de amoníaco a partir de nitrógeno e hidrógeno usando catalizador de hierro.",
  "proceso contact": "Producción industrial de ácido sulfúrico mediante oxidación catalítica de dióxido de azufre.",
  electrolisis: "Descomposición de compuestos mediante corriente eléctrica. Usado para obtener metales puros.",
  refinacion: "Purificación de materiales crudos como petróleo para obtener productos útiles.",
  destilacion: "Separación de mezclas líquidas basada en diferencias de puntos de ebullición.",

  // Seguridad y Medio Ambiente
  toxicidad:
    "Capacidad de una sustancia para causar daño a organismos vivos. Depende de dosis, vía de exposición y tiempo.",
  contaminacion: "Introducción de sustancias dañinas en el medio ambiente que alteran ecosistemas naturales.",
  biodegradabilidad: "Capacidad de una sustancia para ser descompuesta por microorganismos en productos inofensivos.",
  bioacumulacion: "Concentración progresiva de sustancias en organismos vivos a través de la cadena alimentaria.",
  "efecto invernadero":
    "Retención de calor en la atmósfera por gases como CO₂, CH₄, N₂O que absorben radiación infrarroja.",
  "lluvia acida":
    "Precipitación con pH menor a 5.6 causada por óxidos de azufre y nitrógeno que forman ácidos en la atmósfera.",
  "capa de ozono": "Región de la estratosfera rica en O₃ que protege la Tierra de radiación UV dañina.",
  cfc: "Clorofluorocarbonos que destruyen la capa de ozono. Prohibidos por el Protocolo de Montreal.",
}

// Función mejorada para normalizar texto (eliminar acentos, mayúsculas, etc.)
function normalizeText(text) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // Eliminar acentos
    .replace(/[^a-z0-9\s]/g, "") // Eliminar caracteres especiales
    .trim()
}

// Función para calcular similitud entre strings (algoritmo de Levenshtein simplificado)
function calculateSimilarity(str1, str2) {
  const len1 = str1.length
  const len2 = str2.length

  if (len1 === 0) return len2
  if (len2 === 0) return len1

  const matrix = Array(len2 + 1)
    .fill()
    .map(() => Array(len1 + 1).fill(0))

  for (let i = 0; i <= len1; i++) matrix[0][i] = i
  for (let j = 0; j <= len2; j++) matrix[j][0] = j

  for (let j = 1; j <= len2; j++) {
    for (let i = 1; i <= len1; i++) {
      const cost = str1[i - 1] === str2[j - 1] ? 0 : 1
      matrix[j][i] = Math.min(matrix[j - 1][i] + 1, matrix[j][i - 1] + 1, matrix[j - 1][i - 1] + cost)
    }
  }

  const maxLen = Math.max(len1, len2)
  return (maxLen - matrix[len2][len1]) / maxLen
}

// Función mejorada para obtener respuesta local con búsqueda inteligente
function getLocalResponse(userMessage) {
  const normalizedMessage = normalizeText(userMessage)

  // Buscar coincidencias exactas primero
  for (const [keyword, response] of Object.entries(chemistryKnowledge)) {
    const normalizedKeyword = normalizeText(keyword)
    if (normalizedMessage.includes(normalizedKeyword)) {
      return response
    }
  }

  // Buscar coincidencias parciales con tolerancia a errores
  let bestMatch = null
  let bestSimilarity = 0
  const threshold = 0.6 // Umbral de similitud mínima

  for (const [keyword, response] of Object.entries(chemistryKnowledge)) {
    const normalizedKeyword = normalizeText(keyword)

    // Verificar si alguna palabra del mensaje coincide parcialmente con la palabra clave
    const messageWords = normalizedMessage.split(" ")
    const keywordWords = normalizedKeyword.split(" ")

    for (const messageWord of messageWords) {
      for (const keywordWord of keywordWords) {
        if (messageWord.length > 3 && keywordWord.length > 3) {
          const similarity = calculateSimilarity(messageWord, keywordWord)
          if (similarity > bestSimilarity && similarity >= threshold) {
            bestSimilarity = similarity
            bestMatch = response
          }
        }
      }
    }

    // También verificar similitud de la frase completa
    const phraseSimilarity = calculateSimilarity(normalizedMessage, normalizedKeyword)
    if (phraseSimilarity > bestSimilarity && phraseSimilarity >= threshold) {
      bestSimilarity = phraseSimilarity
      bestMatch = response
    }
  }

  if (bestMatch) {
    return bestMatch
  }

  // Respuestas para saludos y despedidas
  if (
    normalizedMessage.includes("hola") ||
    normalizedMessage.includes("saludos") ||
    normalizedMessage.includes("buenos dias") ||
    normalizedMessage.includes("buenas tardes")
  ) {
    return "¡Hola! Soy QuimiBot, tu asistente personal de química. ¿En qué puedo ayudarte hoy? Puedo explicarte conceptos sobre átomos, tabla periódica, enlaces químicos, reacciones, y mucho más."
  }

  if (normalizedMessage.includes("gracias") || normalizedMessage.includes("muchas gracias")) {
    return "¡De nada! Me alegra poder ayudarte con tus dudas de química. ¿Hay algo más en lo que pueda asistirte?"
  }

  if (
    normalizedMessage.includes("adios") ||
    normalizedMessage.includes("hasta luego") ||
    normalizedMessage.includes("chao") ||
    normalizedMessage.includes("nos vemos")
  ) {
    return "¡Hasta luego! Espero haber sido de ayuda. Si tienes más preguntas sobre química, no dudes en volver a consultarme. ¡Que tengas un excelente día!"
  }

  if (
    normalizedMessage.includes("ayuda") ||
    normalizedMessage.includes("que puedes hacer") ||
    normalizedMessage.includes("como funcionas")
  ) {
    return "Soy tu asistente especializado en química y puedo ayudarte con:\n\n• **Estructura atómica**: protones, neutrones, electrones, modelos atómicos\n• **Teoría cuántica**: números cuánticos, orbitales, configuración electrónica\n• **Tabla periódica**: grupos, períodos, propiedades periódicas\n• **Enlaces químicos**: iónico, covalente, metálico\n• **Reacciones químicas**: balanceo, estequiometría\n• **Estados de la materia**: sólido, líquido, gas\n• **Ácidos y bases**: pH, neutralización\n• **Soluciones**: concentración, molaridad\n• **Química orgánica e inorgánica**\n• **Aplicaciones tecnológicas**\n\n¡Pregúntame lo que necesites!"
  }

  if (
    normalizedMessage.includes("que es") ||
    normalizedMessage.includes("define") ||
    normalizedMessage.includes("explica") ||
    normalizedMessage.includes("concepto")
  ) {
    return "Puedo explicarte muchos conceptos de química. Algunos temas que manejo incluyen:\n\n• **Átomos y partículas subatómicas**\n• **Modelos atómicos** (Thomson, Rutherford, Bohr, cuántico)\n• **Números cuánticos y orbitales**\n• **Tabla periódica** y propiedades periódicas\n• **Enlaces químicos** y estructuras moleculares\n• **Reacciones químicas** y estequiometría\n• **Estados de la materia** y cambios de fase\n• **Ácidos, bases y pH**\n• **Soluciones y concentraciones**\n\n¿Sobre qué tema específico te gustaría aprender?"
  }

  if (normalizedMessage.includes("formula") || normalizedMessage.includes("ecuacion")) {
    return "Puedo ayudarte con fórmulas químicas y ecuaciones. Por ejemplo:\n\n• **Fórmulas moleculares**: H₂O, CO₂, CH₄\n• **Ecuaciones químicas**: balanceo y estequiometría\n• **Fórmulas de concentración**: Molaridad = moles/L\n• **Ecuaciones de gases**: PV = nRT\n• **Ecuación de Schrödinger** para mecánica cuántica\n• **Fórmulas de energía**: E = hf, E = mc²\n\n¿Qué fórmula o ecuación específica necesitas?"
  }

  // Respuesta por defecto mejorada
  return "Esa es una pregunta interesante. Mi base de conocimientos cubre muchos temas de química, pero quizás puedas reformular tu pregunta o ser más específico. \n\nAlgunos temas que domino bien son:\n\n• **Estructura atómica**: átomos, protones, neutrones, electrones\n• **Modelos atómicos**: Thomson, Rutherford, Bohr, cuántico\n• **Tabla periódica**: elementos, grupos, períodos, propiedades\n• **Enlaces químicos**: iónico, covalente, metálico\n• **Reacciones químicas**: tipos, balanceo, estequiometría\n• **Ácidos y bases**: pH, neutralización\n• **Estados de la materia**: sólido, líquido, gas\n\n¿Podrías preguntarme sobre alguno de estos temas?"
}

// Función para usar Google Gemini (si está configurado)
async function getGeminiResponse(userMessage) {
  if (!process.env.GEMINI_API_KEY || process.env.GEMINI_API_KEY === "AIzaSyCxUIXXKwR4dV9k3uzf4v2Tq592kaToP3g") {
    return null
  }

  try {
    const { GoogleGenerativeAI } = require("@google/generative-ai")
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY)
    const model = genAI.getGenerativeModel({ model: "gemini-pro" })

    const prompt = `Eres QuimiBot, un asistente educativo especializado en química. Responde de manera clara, educativa y precisa sobre: ${userMessage}. 
        
        Enfócate en conceptos como estructura atómica, tabla periódica, enlaces químicos, reacciones, estequiometría, ácidos y bases, estados de la materia, y aplicaciones tecnológicas. 
        
        Usa un lenguaje accesible pero científicamente correcto.`

    const result = await model.generateContent(prompt)
    const response = result.response
    return response.text()
  } catch (error) {
    console.error("Error con Gemini:", error)
    return null
  }
}

// Endpoint principal del chatbot
app.get("/", (req, res) => {
  res.json({
    message: "QuimiBot - Backend de Química Mejorado ✅",
    version: "2.0",
    features: [
      "Base de conocimientos expandida (90+ conceptos)",
      "Búsqueda inteligente con tolerancia a errores",
      "Normalización de texto (acentos, mayúsculas)",
      "Respuestas contextuales mejoradas",
    ],
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

    // Intentar respuesta local primero con búsqueda mejorada
    response = getLocalResponse(message)

    // Si la respuesta sugiere reformular, intentar Gemini
    if (
      response.includes("reformular") &&
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
      source: response.includes("reformular") ? "local_fallback" : "knowledge_base",
      confidence: response.includes("reformular") ? "low" : "high",
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

// Endpoint de verificación mejorado
app.get("/api/health", (req, res) => {
  const knowledgeBaseSize = Object.keys(chemistryKnowledge).length

  res.json({
    status: "OK",
    message: "QuimiBot funcionando correctamente",
    version: "2.0",
    knowledgeBase: {
      concepts: knowledgeBaseSize,
      categories: [
        "Estructura Atómica",
        "Teoría Cuántica",
        "Tabla Periódica",
        "Enlaces Químicos",
        "Reacciones Químicas",
        "Estados de la Materia",
        "Ácidos y Bases",
        "Química Orgánica/Inorgánica",
        "Aplicaciones Tecnológicas",
      ],
    },
    features: [
      "Búsqueda inteligente con tolerancia a errores",
      "Normalización de texto avanzada",
      "Respuestas contextuales",
      "Base de conocimientos expandida",
    ],
    timestamp: new Date().toISOString(),
    geminiConfigured: !!(
      process.env.GEMINI_API_KEY && process.env.GEMINI_API_KEY !== "AIzaSyCxUIXXKwR4dV9k3uzf4v2Tq592kaToP3g"
    ),
  })
})

app.get("/api/suggested-questions", (req, res) => {
  const suggestedQuestions = [
    "¿Qué es un átomo?",
    "Explícame la tabla periódica",
    "¿Qué son los enlaces químicos?",
    "¿Qué es la electronegatividad?",
    "¿Cuáles son los números cuánticos?",
    "¿Qué es el modelo atómico de Bohr?",
    "Explícame los orbitales atómicos",
    "¿Qué es la configuración electrónica?",
    "¿Cuáles son los estados de la materia?",
    "¿Qué es el pH?",
    "¿Qué son los isótopos?",
    "Explícame las reacciones químicas",
    "¿Qué es la estequiometría?",
    "¿Qué son los metales alcalinos?",
    "¿Qué es la radiactividad?",
    "Explícame el efecto fotoeléctrico",
    "¿Qué es la teoría cuántica?",
    "¿Qué son los gases nobles?",
    "¿Qué es un mol?",
    "Explícame los enlaces covalentes",
  ]

  res.json({
    success: true,
    questions: suggestedQuestions,
    total: suggestedQuestions.length,
  })
})

app.use(express.static("../"))

// Iniciar servidor
app.listen(PORT, () => {
  const knowledgeBaseSize = Object.keys(chemistryKnowledge).length

  console.log(`🚀 QuimiBot v2.0 iniciado en http://localhost:${PORT}`)
  console.log(`📊 Verificar estado: http://localhost:${PORT}/api/health`)
  console.log(`🧪 Base de conocimientos: ${knowledgeBaseSize} conceptos de química`)
  console.log(`🔍 Características: Búsqueda inteligente, tolerancia a errores, normalización de texto`)
  console.log(
    `🔑 Google Gemini: ${process.env.GEMINI_API_KEY && process.env.GEMINI_API_KEY !== "AIzaSyCxUIXXKwR4dV9k3uzf4v2Tq592kaToP3g" ? "Configurado ✅" : "No configurado (usando respuestas locales) ⚠️"}`,
  )

  if (!process.env.GEMINI_API_KEY || process.env.GEMINI_API_KEY === "AIzaSyCxUIXXKwR4dV9k3uzf4v2Tq592kaToP3g") {
    console.log(`\n💡 Para habilitar IA avanzada:`)
    console.log(`   1. Obtén una API key en: https://makersuite.google.com/app/apikey`)
    console.log(`   2. Agrega GEMINI_API_KEY=tu_clave_real en el archivo .env`)
    console.log(`   3. Reinicia el servidor\n`)
  }
})

// Manejo de errores
process.on("uncaughtException", (error) => {
  console.error("Error no capturado:", error)
})

process.on("unhandledRejection", (reason, promise) => {
  console.error("Promesa rechazada:", reason)
})

module.exports = app
