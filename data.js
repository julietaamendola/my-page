// ============================================================
// DATA.JS — editá este archivo para agregar posts y proyectos
// sin tocar index.html ni script.js
// ============================================================

// ——— POSTS DEL BLOG ———
// Para agregar un post nuevo: copiá un objeto, cambiá el contenido,
// y poné activo: true. Si activo es false, aparece como "próximamente".
// Los primeros 4 con activo:true se muestran en el inicio.
//
// DOS FORMAS DE CARGAR UN POST:
//
// A) Con notionUrl → el contenido se embebe directo desde Notion.
//    Solo necesitás: fecha, categoria, titulo, tag, activo, notionUrl.
//    (subtitulo/contenido se ignoran si hay notionUrl)
//
// B) Sin notionUrl → contenido local, como antes (subtitulo_es,
//    contenido_es, etc.)
//
// El link de Notion tiene que ser el de "Embed this page"
// (el que arranca con .../ebd/...), no el link normal de compartir.
// Link general del blog en Notion (por si más adelante lo usás,
// ej. como página de "ver todos los posts"):
// https://julietaamendola.notion.site/ebd//3b31101523a780c3abe5f59a8a09977c

var POSTS = [
  {
    fecha_es: 'Abr 2026',
    fecha_en: 'Apr 2026',
    categoria: 'personal',
    titulo_es: 'Entrada 1',
    titulo_en: 'Entry 1',
    tag: 'Personal',
    destacado: true,
    activo: true,
    notionUrl: 'https://julietaamendola.notion.site/ebd//3b31101523a780caa576d8ee9a95e553',
    // notionUrl_en: pegá acá el link de embed de la versión en inglés
    // de esta misma página (si la escribís en Notion en inglés también).
    // Si no la traducís, dejá esta línea comentada/ausente y va a usar
    // siempre el link de notionUrl (español).
    notionUrl_en: 'https://julietaamendola.notion.site/ebd//REEMPLAZAR-CON-LINK-EN-INGLES'
  },
  {
    fecha_es: 'Abr 2026',
    fecha_en: 'Apr 2026',
    categoria: 'stem',
    titulo_es: 'Entrada 2',
    titulo_en: 'Entry 2',
    tag: 'STEM',
    destacado: true,
    activo: true,
    notionUrl: 'https://julietaamendola.notion.site/ebd//3b31101523a780729158f4f7e3c53aad'
    // Este post no tiene notionUrl_en todavía → si alguien lo abre en
    // inglés, va a ver igual la versión en español (fallback automático).
  },
  {
    fecha_es: 'Próximamente',
    fecha_en: 'Coming soon',
    categoria: 'stem',
    titulo_es: 'Qué es la tomografía óptica difusa y por qué me importa',
    titulo_en: 'What is diffuse optical tomography and why it matters',
    tag: 'STEM',
    destacado: true,
    activo: false
  },
  {
    fecha_es: 'Próximamente',
    fecha_en: 'Coming soon',
    categoria: 'personal',
    titulo_es: 'Por qué fundé Women in STEM (y qué aprendí en el camino)',
    titulo_en: 'Why I founded Women in STEM (and what I learned)',
    tag: 'Personal',
    destacado: true,
    activo: false
  },
  {
    fecha_es: 'Próximamente',
    fecha_en: 'Coming soon',
    categoria: 'stem',
    titulo_es: 'Redes neuronales explicadas sin fórmulas (bueno, casi)',
    titulo_en: 'Neural networks explained without formulas (well, almost)',
    tag: 'STEM',
    destacado: true,
    activo: false
  }
];


// ——— PROYECTOS ———
// Para agregar un proyecto: copiá un objeto y completá los campos.
// link: '#' si no tiene link todavía.

var PROYECTOS = [
  {
    num: '01',
    titulo_es: 'Problema inverso en tomografía óptica difusa',
    titulo_en: 'Inverse problem in diffuse optical tomography',
    desc_es: 'Tesis de grado. Reconstrucción de propiedades ópticas de tejido vivo mediante diferentes arquitecturas de redes neuronales artificiales.',
    desc_en: 'Undergraduate thesis. Reconstruction of optical properties of living tissue using different artificial neural network architectures.',
    techs: 'Python · PyTorch · NumPy',
    link: '#'
  },
  {
    num: '02',
    titulo_es: 'Predicción de riesgo cardiovascular con ML',
    titulo_en: 'Cardiovascular risk prediction with ML',
    desc_es: 'Investigación en el Instituto PLADEMA. Modelos matemáticos e IA para predecir enfermedad coronaria a partir de geometría arterial.',
    desc_en: 'Research at PLADEMA Institute. Mathematical and AI models to predict coronary artery disease from arterial geometry.',
    techs: 'Python · scikit-learn · SciPy',
    link: '#'
  },
  {
    num: '03',
    titulo_es: 'Women in STEM UNCPBA',
    titulo_en: 'Women in STEM UNCPBA',
    desc_es: 'Fundadora del club para promover la participación femenina en STEM. Organización del Ada Lovelace Day 2024, con talleres para niñas de 10–12 años.',
    desc_en: 'Founder of the club to promote female participation in STEM. Organised Ada Lovelace Day 2024 with workshops for girls aged 10–12.',
    techs_es: 'Divulgación · Comunidad',
    techs_en: 'Outreach · Community',
    link: '#'
  },
  {
    num: '04',
    titulo_es: 'Embeddings en espacios hiperbólicos para datos con estructura jerárquica',
    titulo_en: 'Embeddings in hyperbolic spaces for hierarchically structured data',
    desc_es: 'Artículo publicado en la Revista TAMI Vol. 4 (Febrero 2025), en el marco del VI Taller de Matemática Industrial. Problema propuesto por Mercado Libre. Exploración de geometría hiperbólica — modelos de Poincaré y Lorentz — para generar embeddings que preserven estructuras jerárquicas mejor que los enfoques euclídeos.',
    desc_en: 'Article published in Revista TAMI Vol. 4 (February 2025), as part of the VI Industrial Mathematics Workshop. Problem proposed by Mercado Libre. Exploration of hyperbolic geometry — Poincaré and Lorentz models — to generate embeddings that preserve hierarchical structures better than Euclidean approaches.',
    techs: 'Python · PyTorch · NumPy',
    link: 'https://www.linkedin.com/feed/update/urn:li:activity:7378797774185652224/?originTrackingId=jRe5C3IBFXkP2KEo9R6dIA%3D%3D'
  },
  {
    num: '05',
    titulo_es: 'Solución publicada en el Noticiero de la UMA',
    titulo_en: 'Solution published in the UMA Newsletter',
    desc_es: 'La solución al problema de la CIMA 2022 —probar que la suma de los cuatro vectores exteriores de un tetraedro es igual a cero— fue incluida en el noticiero de la Unión Matemática Argentina, junto a otras soluciones destacadas. En colaboración con Santiago Giordani.',
    desc_en: 'The solution to a CIMA 2022 problem — proving that the sum of the four outward normal vectors of a tetrahedron equals zero — was included in the Argentine Mathematical Union newsletter, alongside other highlighted solutions. In collaboration with Santiago Giordani.',
    techs_es: 'Geometría · Álgebra lineal',
    techs_en: 'Geometry · Linear algebra',
    link: '#'
  },
];
