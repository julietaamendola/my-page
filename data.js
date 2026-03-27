// ============================================================
// DATA.JS — editá este archivo para agregar posts y proyectos
// sin tocar index.html ni script.js
// ============================================================

// ——— POSTS DEL BLOG ———
// Para agregar un post nuevo: copiá un objeto, cambiá el contenido,
// y poné activo: true. Si activo es false, aparece como "próximamente".
// Los primeros 4 con activo:true se muestran en el inicio.
// Todos aparecen en blog.html (próximamente).

var POSTS = [
  {
    fecha_es: 'Mar 2026',
    fecha_en: 'Mar 2026',
    categoria: 'personal',
    titulo_es: 'Algo más que la felicidad',
    titulo_en: 'More than happiness',
    subtitulo_es: 'Sobre <em>El hombre en busca de sentido</em> de Viktor Frankl',
    subtitulo_en: 'On Viktor Frankl\'s <em>Man\'s Search for Meaning</em>',
    tag: 'Personal',
    destacado: true,
    activo: true,
    contenido_es:
      '<p>Hay una escena cerca del final del libro que no me abandona. Los prisioneros acaban de ser liberados. Después de años de campos, de frío, de hambre, de ver morir a los que estaban al lado — de repente, campo abierto. Frankl describe cómo algunos empiezan a caminar entre las plantas y las flores, y simplemente las pisan. Sin malicia, sin conciencia. Como si la libertad recién recuperada no supiera todavía qué hacer consigo misma. Él se detiene en eso y dice algo que me pareció muy razonable: la libertad sin sentido puede volverse tan destructiva como la opresión.</p>'
      + '<p>Llegué a esa escena por un reel de Instagram, que tampoco es el origen más literario del mundo. Pero algo en esa imagen — creo que fue que había una pregunta enorme escondida en un gesto pequeño — me hizo sentir que ese libro tenía algo que yo andaba buscando sin saber bien cómo nombrarlo. Últimamente me doy vueltas con la pregunta del sentido. No solo como ejercicio filosófico sino como algo más personal. Algo en mí no termina de convencerse con la idea de que vivimos para perseguir la felicidad o sólo para disfrutar la vida. Me parece una respuesta demasiado liviana. Tenía la intuición de que tenía que haber algo más. Frankl me mostró que no estoy sola en esa inquietud.</p>'
      + '<p>Lo que más me sorprendió no fue el testimonio de los campos, aunque eso también sacude y remueve. Fue descubrir que Frankl no trata la pregunta por el sentido como una de esas preguntas que se lanzan al aire para que suenen profundas y se queden ahí flotando. La trabaja. La exprime desde adentro, desde la experiencia más extrema que pueda existir, hasta que extrae algo concreto y útil. Eso me parece un acto de valentía intelectual poco común — transformar el propio sufrimiento no en una herida que se exhibe sino en una herramienta que otros pueden usar. La logoterapia, su rama dentro de la psicología, nació de ahí. De alguien que se negó a que la pregunta quedara sin respuesta.</p>'
      + '<p>La logoterapia parte de una idea simple y a la vez bastante radical: la motivación más profunda del ser humano no es el placer ni el poder, sino la búsqueda de sentido. Y el sentido, dice Frankl, no se inventa ni se persigue como si fuera un objeto perdido — se responde. La vida nos hace preguntas a través de las circunstancias, de las personas, de lo que nos toca vivir, y nuestra tarea es contestarlas con acciones, con elecciones, con presencia. Eso invierte algo que yo asumía sin cuestionarlo: no soy yo quien le tiene que preguntar a la vida qué sentido tiene, sino la vida la que me pregunta a mí qué voy a hacer con lo que me da.</p>'
      + '<p>Frankl propone que el sentido se puede encontrar por tres caminos. El primero es crear o hacer algo — cualquier acto que lleve tu marca, que salga de vos hacia el mundo. El segundo es el amor, o más ampliamente, la experiencia profunda de algo o alguien. El tercero, el más difícil de aceptar, es encontrar sentido incluso en el sufrimiento inevitable, eligiendo cómo pararse frente a lo que no se puede cambiar.</p>'
      + '<p>En cada uno hay algo que resuena de manera distinta. Sobre el primero, Frankl es casi categórico: hasta una vida privada de toda posibilidad de crear o disfrutar — como la de un prisionero — conserva un último atisbo de sentido en la actitud con que enfrenta lo que le toca. No es poco.</p>'
      + '<p>El segundo camino es el que más me detiene. En uno de los momentos más bellos del libro, Frankl describe cómo, marchando en la oscuridad hacia el trabajo forzado, con el frío y los golpes de los guardias, su mente se refugia en la imagen de su mujer. No sabe si está viva. Y sin embargo eso, dice, deja de importar — porque el amor trasciende la presencia física de la persona amada, incluso su existencia. Hay algo en esa idea que no es consuelo fácil sino algo más verdadero y más duro: que amar a alguien ya es, en sí mismo, una forma de sentido.</p>'
      + '<p>El tercero lo ilustra con un médico anciano que no podía superar la muerte de su esposa. Frankl le hace una sola pregunta: ¿qué hubiera pasado si él hubiera muerto primero, y ella hubiera tenido que sobrevivir? El hombre comprende de golpe que su propio dolor es el dolor que le ahorró a ella. El sufrimiento no desaparece, pero encuentra un lugar. Se convierte en algo que se puede cargar.</p>'
      + '<p>Pero quizás lo que más me quedó del libro no es ninguno de los tres caminos en particular, sino algo más transversal: la idea de que entre lo que nos pasa y lo que hacemos con eso siempre hay un espacio. Frankl lo vio en los campos, en prisioneros que en las condiciones más extremas elegían compartir su último pedazo de pan, no porque pudieran cambiar su situación sino porque podían elegir quiénes ser dentro de ella. Esa libertad interior, dice, es la última dignidad que nadie puede quitarle a nadie.</p>'
      + '<p>Y sin embargo esa misma libertad, sin algo que la oriente, puede volverse peligrosa. La escena de los brotes pisados al salir del campo no es solo un detalle anecdótico — es una advertencia. Frankl llega a proponer, con una imagen que me pareció muy potente, que la estatua de la Libertad debería tener su contraparte: una estatua de la Responsabilidad. Libertad y sentido no son lo mismo, pero tampoco funcionan la una sin la otra.</p>'
      + '<p>Y el sentido, insiste, no se recibe ni se inventa. Hay que descubrirlo. Es único para cada persona, irrepetible, y nadie puede dártelo desde afuera. Eso puede sonar solitario, pero también es una forma de decir que nadie puede quitártelo.</p>',
    contenido_en:
      '<p>There is a scene near the end of the book that stays with me. The prisoners have just been liberated. After years of camps, cold, hunger, of watching those beside them die — suddenly, open fields. Frankl describes how some of them start walking through the flowers and plants and simply trample them. Without malice, without awareness. As though freedom, so recently recovered, did not yet know what to do with itself. He pauses on this and says something I found deeply reasonable: freedom without meaning can become just as destructive as oppression.</p>'
      + '<p>I came to that scene through an Instagram reel, which is not the most literary of origins. But something in that image — I think it was a huge question hidden inside a tiny gesture — made me feel that this book held something I had been looking for without quite knowing how to name it. Lately I keep circling back to the question of meaning. Not just as a philosophical exercise, but as something more personal. Something in me is not convinced by the idea that we live to pursue happiness or simply to enjoy life. It feels like too light an answer. I had the intuition that there had to be something more. Frankl showed me I am not alone in that unease.</p>'
      + '<p>What surprised me most was not the testimony of the camps, though that shakes and moves you too. It was discovering that Frankl does not treat the question of meaning as one of those questions you throw into the air to sound profound and leave floating there. He works it. He wrings it from the inside, from the most extreme experience imaginable, until he extracts something concrete and useful. That strikes me as an uncommon act of intellectual courage — transforming one\'s own suffering not into a wound one displays, but into a tool others can use. Logotherapy, his branch of psychology, was born from that. From someone who refused to let the question go unanswered.</p>'
      + '<p>Logotherapy starts from a simple and yet quite radical idea: the deepest human motivation is not pleasure or power, but the search for meaning. And meaning, Frankl says, is not invented or pursued as though it were a lost object — it is answered. Life asks us questions through our circumstances, through the people around us, through what we are given to live, and our task is to answer them with actions, with choices, with presence. That inverts something I had assumed without questioning: it is not I who must ask life what meaning it holds, but life that asks me what I will do with what it gives me.</p>'
      + '<p>Frankl proposes that meaning can be found through three paths. The first is creating or doing something — any act that carries your mark, that goes from you out into the world. The second is love, or more broadly, the deep experience of something or someone. The third, the hardest to accept, is finding meaning even in unavoidable suffering, by choosing how to stand before what cannot be changed.</p>'
      + '<p>Each one resonates differently. On the first, Frankl is almost categorical: even a life deprived of all possibility of creating or enjoying — like that of a prisoner — retains a last glimpse of meaning in the attitude with which it faces what it is given. That is not nothing.</p>'
      + '<p>The second path is the one that stops me most. In one of the most beautiful moments of the book, Frankl describes how, marching in the darkness toward forced labour, with the cold and the blows of the guards, his mind takes refuge in the image of his wife. He does not know if she is alive. And yet that, he says, ceases to matter — because love transcends the physical presence of the beloved, even their existence. There is something in that idea that is not easy comfort but something truer and harder: that loving someone is, in itself, already a form of meaning.</p>'
      + '<p>The third he illustrates with an elderly doctor who could not get over the death of his wife. Frankl asks him a single question: what would have happened if he had died first, and she had had to survive? The man understands in an instant that his own pain is the pain he spared her. The suffering does not disappear, but it finds a place. It becomes something that can be carried.</p>'
      + '<p>But perhaps what stayed with me most from the book is not any of the three paths in particular, but something more transversal: the idea that between what happens to us and what we do with it, there is always a space. Frankl saw it in the camps, in prisoners who in the most extreme conditions chose to share their last piece of bread — not because they could change their situation, but because they could choose who to be within it. That inner freedom, he says, is the last dignity no one can take from anyone.</p>'
      + '<p>And yet that same freedom, without something to orient it, can become dangerous. The scene of the trampled flowers leaving the camp is not just an anecdotal detail — it is a warning. Frankl goes so far as to propose, with an image I found very powerful, that the Statue of Liberty should have its counterpart: a Statue of Responsibility. Freedom and meaning are not the same thing, but neither can function without the other.</p>'
      + '<p>And meaning, he insists, is neither received nor invented. It must be discovered. It is unique to each person, unrepeatable, and no one can give it to you from outside. That may sound lonely, but it is also a way of saying that no one can take it from you.</p>',
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
  }
];
