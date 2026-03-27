// NAV SCROLL
window.addEventListener('scroll', function() {
  document.getElementById('nav').classList.toggle('scrolled', window.scrollY > 40);
});

// BLOG FILTER
function filterBlog(cat, btn) {
  document.querySelectorAll('.btab').forEach(function(b) { b.classList.remove('on'); });
  btn.classList.add('on');
  document.querySelectorAll('.bitem').forEach(function(i) {
    i.style.display = (cat === 'all' || i.dataset.cat === cat) ? 'grid' : 'none';
  });
}

// MODAL
function openPost() {
  document.getElementById('modal').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closePostBtn() {
  document.getElementById('modal').classList.remove('open');
  document.body.style.overflow = '';
}
function closePost(e) {
  if (e.target === document.getElementById('modal')) closePostBtn();
}

// CONTENIDO DEL POST EN ESPAÑOL
var postES = '<p>Hay una escena cerca del final del libro que no me abandona. Los prisioneros acaban de ser liberados. Después de años de campos, de frío, de hambre, de ver morir a los que estaban al lado — de repente, campo abierto. Frankl describe cómo algunos empiezan a caminar entre las plantas y las flores, y simplemente las pisan. Sin malicia, sin conciencia. Como si la libertad recién recuperada no supiera todavía qué hacer consigo misma. Él se detiene en eso y dice algo que me pareció muy razonable: la libertad sin sentido puede volverse tan destructiva como la opresión.</p>'
+ '<p>Llegué a esa escena por un reel de Instagram, que tampoco es el origen más literario del mundo. Pero algo en esa imagen — creo que fue que había una pregunta enorme escondida en un gesto pequeño — me hizo sentir que ese libro tenía algo que yo andaba buscando sin saber bien cómo nombrarlo. Últimamente me doy vueltas con la pregunta del sentido. No solo como ejercicio filosófico sino como algo más personal. Frankl me mostró que no estoy sola en esa inquietud.</p>'
+ '<p>Lo que más me sorprendió no fue el testimonio de los campos, aunque eso también sacude y remueve. Fue descubrir que Frankl no trata la pregunta por el sentido como una de esas preguntas que se lanzan al aire para que suenen profundas. La trabaja. La exprime desde adentro, desde la experiencia más extrema que pueda existir, hasta que extrae algo concreto y útil. Eso me parece un acto de valentía intelectual poco común.</p>'
+ '<p>La logoterapia parte de una idea simple y a la vez bastante radical: la motivación más profunda del ser humano no es el placer ni el poder, sino la búsqueda de sentido. Y el sentido, dice Frankl, no se inventa — se responde. La vida nos hace preguntas a través de las circunstancias, y nuestra tarea es contestarlas con acciones, con elecciones, con presencia.</p>'
+ '<p>Frankl propone tres caminos al sentido: crear o hacer algo, amar profundamente a alguien o algo, y — el más difícil — encontrar sentido incluso en el sufrimiento inevitable, eligiendo cómo pararse frente a lo que no se puede cambiar.</p>'
+ '<p>Quizás lo que más me quedó es la idea de que entre lo que nos pasa y lo que hacemos con eso siempre hay un espacio. Esa libertad interior, dice Frankl, es la última dignidad que nadie puede quitarle a nadie.</p>'
+ '<p>Me pregunto si en los libros que leyeron ustedes apareció algo parecido: no necesariamente la pregunta por el sentido, pero sí alguna idea que los haya obligado a mirarse. Eso es lo que más me interesa — no tanto de qué tratan los libros, sino qué les hicieron.</p>';

// CONTENIDO DEL POST EN INGLÉS
var postEN = '<p>There is a scene near the end of the book that stays with me. The prisoners have just been liberated. After years of camps, cold, hunger, of watching those beside them die — suddenly, open fields. Frankl describes how some of them start walking through the flowers and plants and simply trample them. Without malice, without awareness. As though freedom, so recently recovered, did not yet know what to do with itself. He pauses on this and says something I found deeply reasonable: freedom without meaning can become just as destructive as oppression.</p>'
+ '<p>I came to that scene through an Instagram reel, which is not the most literary of origins. But something in that image — I think it was a huge question hidden inside a tiny gesture — made me feel that this book held something I had been looking for without quite knowing how to name it. Lately I keep circling back to the question of meaning. Not just as a philosophical exercise, but as something more personal. Frankl showed me I am not alone in that unease.</p>'
+ '<p>What surprised me most was not the testimony of the camps, though that shakes and moves you too. It was discovering that Frankl does not treat the question of meaning as one of those questions you throw into the air to sound profound and leave floating there. He works it. He wrings it from the inside, from the most extreme experience imaginable, until he extracts something concrete and useful.</p>'
+ '<p>Logotherapy starts from a simple and yet quite radical idea: the deepest human motivation is not pleasure or power, but the search for meaning. And meaning, Frankl says, is not invented — it is answered. Life asks us questions through our circumstances, and our task is to answer them with actions, choices, presence.</p>'
+ '<p>Frankl proposes three paths to meaning: creating or doing something, loving someone or something deeply, and — the hardest — finding meaning even in unavoidable suffering, by choosing how to stand before what cannot be changed.</p>'
+ '<p>Perhaps what stayed with me most is the idea that between what happens to us and what we do with it, there is always a space. That inner freedom, says Frankl, is the last dignity no one can take from anyone.</p>'
+ '<p>I wonder whether in the books you have read something similar appeared — not necessarily the question of meaning, but some idea that forced you to look at yourself. That is what interests me most — not so much what books are about, but what they do to you.</p>';

// CAMBIO DE IDIOMA
function setLang(lang) {
  document.documentElement.lang = lang;
  document.getElementById('btn-es').classList.toggle('active', lang === 'es');
  document.getElementById('btn-en').classList.toggle('active', lang === 'en');

  document.querySelectorAll('[data-es]').forEach(function(el) {
    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA' || el.tagName === 'BUTTON') return;
    var v = el.getAttribute('data-' + lang);
    if (v) el.innerHTML = v;
  });

  document.querySelectorAll('.nav-links a').forEach(function(a) {
    var v = a.getAttribute('data-' + lang);
    if (v) a.textContent = v;
  });

  document.querySelectorAll('.btab').forEach(function(b) {
    var v = b.getAttribute('data-' + lang);
    if (v) b.textContent = v;
  });

  document.querySelectorAll('[data-placeholder-' + lang + ']').forEach(function(el) {
    el.placeholder = el.getAttribute('data-placeholder-' + lang);
  });

  var aboutH = document.querySelector('.about-h');
  if (aboutH) {
    aboutH.innerHTML = lang === 'en'
      ? 'Mathematician, teacher,<br>and <em>incurably curious.</em>'
      : 'Matemática, docente,<br>y <em>curiosa incorregible.</em>';
  }

  document.getElementById('modal-body-content').innerHTML = lang === 'en' ? postEN : postES;
}

// SCROLL REVEAL
var obs = new IntersectionObserver(function(entries) {
  entries.forEach(function(e) {
    if (e.isIntersecting) e.target.classList.add('in');
  });
}, { threshold: 0.08 });

document.querySelectorAll('.reveal').forEach(function(el) {
  obs.observe(el);
});
