// ============================================================
// ESTRELLAS — canvas de fondo completo, encima del tornasol
// ============================================================
(function() {
  var canvas = document.createElement('canvas');
  canvas.style.cssText = 'position:fixed;inset:0;width:100%;height:100%;z-index:0;pointer-events:none;';
  document.body.appendChild(canvas);
  var ctx = canvas.getContext('2d');
  var W, H, stars = [];

  function initStars() {
    stars = [];
    for (var i = 0; i < 90; i++) {
      stars.push({
        x: Math.random() * W,
        y: Math.random() * H,
        r: Math.random() * 1.6 + 0.3,
        speed: Math.random() * 0.6 + 0.1,
        phase: Math.random() * Math.PI * 2,
        driftAmp: Math.random() * 12 + 4,
        driftFreq: Math.random() * 0.0004 + 0.0002
      });
    }
  }

  function resize() {
    W = window.innerWidth;
    H = window.innerHeight;
    canvas.width = W;
    canvas.height = H;
    initStars();
  }

  var scrollProgress = 0;
  window.addEventListener('scroll', function() {
    var max = document.documentElement.scrollHeight - window.innerHeight;
    scrollProgress = max > 0 ? window.scrollY / max : 0;
  }, { passive: true });

  window.addEventListener('resize', resize);
  resize();

  function draw(t) {
    ctx.clearRect(0, 0, W, H);
    stars.forEach(function(s) {
      var yOff = scrollProgress * s.speed * H * 1.5;
      var y = ((s.y - yOff) % H + H) % H;
      var x = s.x + Math.sin(t * s.driftFreq + s.phase) * s.driftAmp;
      var tw = 0.35 + 0.3 * Math.sin(t * 0.0012 + s.phase);
      var g = ctx.createRadialGradient(x, y, 0, x, y, s.r * 4);
      g.addColorStop(0, 'rgba(180,142,200,' + tw + ')');
      g.addColorStop(0.5, 'rgba(124,92,191,' + (tw * 0.35) + ')');
      g.addColorStop(1, 'rgba(124,92,191,0)');
      ctx.beginPath(); ctx.arc(x, y, s.r * 4, 0, Math.PI * 2);
      ctx.fillStyle = g; ctx.fill();
      ctx.beginPath(); ctx.arc(x, y, s.r, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(230,210,255,' + (tw * 0.95) + ')';
      ctx.fill();
    });
    requestAnimationFrame(draw);
  }
  requestAnimationFrame(draw);
})();

// ============================================================
// NAV SCROLL
// ============================================================
window.addEventListener('scroll', function() {
  document.getElementById('nav').classList.toggle('scrolled', window.scrollY > 40);
});


// ============================================================
// RENDER BLOG desde data.js
// ============================================================
var currentPostIndex = -1;
var POSTS_PER_PAGE = 4;

function renderBlog(lang, cat) {
  var lista = document.getElementById('blog-list');
  if (!lista) return;
  lista.innerHTML = '';

  var filtered = (cat && cat !== 'all')
    ? POSTS.filter(function(p) { return p.categoria === cat; })
    : POSTS;

  var shown = filtered.slice(0, POSTS_PER_PAGE);
  var hasMore = filtered.length > POSTS_PER_PAGE;

  shown.forEach(function(p) {
    var realIndex = POSTS.indexOf(p);
    var div = document.createElement('div');
    div.className = 'bitem' + (p.activo ? '' : ' coming');
    div.dataset.cat = p.categoria;
    if (p.activo) {
      div.onclick = (function(idx) {
        return function() { openPost(idx); };
      })(realIndex);
    }
    var titulo = lang === 'en' ? p.titulo_en : p.titulo_es;
    var fecha = p.activo
      ? (lang === 'en' ? p.fecha_en : p.fecha_es)
      : etiquetaPendiente(lang);
    div.innerHTML =
      '<span class="bdate">' + fecha + '</span>' +
      '<span class="bitem-title">' + titulo + '</span>' +
      '<span class="btag ' + p.categoria + '">' + p.tag + '</span>';
    lista.appendChild(div);
  });

  var existing = document.getElementById('ver-mas-btn');
  if (existing) existing.remove();

  if (hasMore) {
    var btn = document.createElement('button');
    btn.id = 'ver-mas-btn';
    btn.className = 'btab';
    btn.style.marginTop = '1.5rem';
    btn.textContent = lang === 'en' ? 'See all posts →' : 'Ver todos →';
    btn.onclick = function() { renderBlogAll(lang, cat); };
    lista.parentElement.appendChild(btn);
  }
}

function renderBlogAll(lang, cat) {
  var lista = document.getElementById('blog-list');
  if (!lista) return;
  lista.innerHTML = '';

  var filtered = (cat && cat !== 'all')
    ? POSTS.filter(function(p) { return p.categoria === cat; })
    : POSTS;

  filtered.forEach(function(p) {
    var realIndex = POSTS.indexOf(p);
    var div = document.createElement('div');
    div.className = 'bitem' + (p.activo ? '' : ' coming');
    div.dataset.cat = p.categoria;
    if (p.activo) {
      div.onclick = (function(idx) {
        return function() { openPost(idx); };
      })(realIndex);
    }
    var titulo = lang === 'en' ? p.titulo_en : p.titulo_es;
    var fecha = p.activo
      ? (lang === 'en' ? p.fecha_en : p.fecha_es)
      : etiquetaPendiente(lang);
    div.innerHTML =
      '<span class="bdate">' + fecha + '</span>' +
      '<span class="bitem-title">' + titulo + '</span>' +
      '<span class="btag ' + p.categoria + '">' + p.tag + '</span>';
    lista.appendChild(div);
  });

  var btn = document.getElementById('ver-mas-btn');
  if (btn) btn.remove();
}


// ============================================================
// MENU EN PANTALLAS CHICAS
// ============================================================
function toggleMenu(forzarCerrado) {
  var nav = document.getElementById('nav');
  var btn = document.getElementById('nav-burger');
  if (!nav || !btn) return;
  var abierto = forzarCerrado === true ? false : !nav.classList.contains('menu-abierto');
  nav.classList.toggle('menu-abierto', abierto);
  btn.setAttribute('aria-expanded', abierto ? 'true' : 'false');
}

// Cerrarlo al elegir una seccion, al tocar fuera o al agrandar la ventana.
document.querySelectorAll('#nav-links a').forEach(function (a) {
  a.addEventListener('click', function () { toggleMenu(true); });
});
document.addEventListener('click', function (ev) {
  var nav = document.getElementById('nav');
  if (nav && nav.classList.contains('menu-abierto') && !nav.contains(ev.target)) toggleMenu(true);
});
window.addEventListener('resize', function () {
  if (window.innerWidth > 900) toggleMenu(true);
});
document.addEventListener('keydown', function (ev) {
  if (ev.key === 'Escape') toggleMenu(true);
});


// ============================================================
// RENDER PROYECTOS desde data.js
// ============================================================
// Mientras una entrada, proyecto o material tenga activo: false, se muestra
// en la portada pero no se puede abrir. Para publicarlo, activo: true.
function etiquetaPendiente(lang) {
  return lang === 'en' ? 'Coming soon' : 'Próximamente';
}

function renderProyectos(lang) {
  var grid = document.getElementById('proy-grid');
  if (!grid) return;
  grid.innerHTML = '';

  PROYECTOS.forEach(function(p) {
    var titulo = lang === 'en' ? p.titulo_en : p.titulo_es;
    var desc = lang === 'en' ? p.desc_en : p.desc_es;
    var techs = (lang === 'en' && p.techs_en) ? p.techs_en : (p.techs_es || p.techs);
    var listo = p.activo !== false && p.link;
    var card = document.createElement('div');
    card.className = 'pcard reveal' + (listo ? '' : ' pendiente');
    card.innerHTML =
      '<div class="pnum">' + p.num + '</div>' +
      '<div class="ptitle">' + titulo + '</div>' +
      '<div class="pdesc">' + desc + '</div>' +
      '<div class="pfoot">' +
        '<span class="ptechs">' + techs + '</span>' +
        (listo
          ? '<a href="' + p.link + '" class="parrow">&#8594;</a>'
          : '<span class="pcoming">' + etiquetaPendiente(lang) + '</span>') +
      '</div>';
    grid.appendChild(card);
  });

  reobserve();
}


// ============================================================
// BLOG FILTER
// ============================================================
var currentCat = 'all';

function filterBlog(cat, btn) {
  currentCat = cat;
  document.querySelectorAll('.btab').forEach(function(b) { b.classList.remove('on'); });
  btn.classList.add('on');
  renderBlog(currentLang, cat);
}


// ============================================================
// MODAL + LINKS PARA COMPARTIR
// ============================================================
function openPost(i) {
  // Los posts que viven en el blog de Quarto tienen su propia pagina.
  if (POSTS[i] && POSTS[i].link) { window.location.href = POSTS[i].link; return; }

  var p = POSTS[i];
  if (!p || !p.activo) return;
  currentPostIndex = i;
  var lang = currentLang;

  var modal = document.querySelector('.modal');
  var bodyEl = document.getElementById('modal-body-content');

  if (p.notionUrl) {
    // Post cuyo contenido vive en Notion: se embebe en un iframe
    modal.classList.add('notion-mode');
    var url = (lang === 'en' && p.notionUrl_en) ? p.notionUrl_en : p.notionUrl;
    bodyEl.innerHTML = '<iframe class="notion-frame" src="' + url + '" loading="lazy" allowfullscreen></iframe>';
  } else {
    // Post con contenido local (comportamiento original)
    modal.classList.remove('notion-mode');
    document.getElementById('modal-label').textContent =
      lang === 'en' ? (p.label_en || '') : (p.label_es || '');
    document.getElementById('modal-title').textContent =
      lang === 'en' ? p.titulo_en : p.titulo_es;
    document.getElementById('modal-sub').innerHTML =
      lang === 'en' ? (p.subtitulo_en || '') : (p.subtitulo_es || '');
    bodyEl.innerHTML = lang === 'en' ? p.contenido_en : p.contenido_es;
  }

  // Actualizar URL sin recargar la página
  var newUrl = window.location.pathname + window.location.search.replace(/[?&]post=\d+/, '');
  var separator = newUrl.indexOf('?') >= 0 ? '&' : '?';
  history.pushState({ post: i }, '', newUrl + separator + 'post=' + i);

  // Actualizar botón de compartir
  updateShareBtn();

  document.getElementById('modal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closePostBtn() {
  document.getElementById('modal').classList.remove('open');
  document.getElementById('modal').classList.remove('notion-mode');
  document.body.style.overflow = '';
  currentPostIndex = -1;
  // Limpiar el parámetro de la URL al cerrar
  history.pushState({}, '', window.location.pathname);
}

function closePost(e) {
  if (e.target === document.getElementById('modal')) closePostBtn();
}

function updateShareBtn() {
  var btn = document.getElementById('share-btn');
  if (!btn) return;
  var lang = currentLang;
  btn.textContent = lang === 'en' ? '⤤ Copy link' : '⤤ Copiar link';
  btn.dataset.copied = 'false';
}

function sharePost() {
  var url = window.location.href;
  var btn = document.getElementById('share-btn');
  var lang = currentLang;

  if (navigator.clipboard) {
    navigator.clipboard.writeText(url).then(function() {
      btn.textContent = lang === 'en' ? '✓ Copied!' : '✓ ¡Copiado!';
      setTimeout(function() { updateShareBtn(); }, 2000);
    });
  } else {
    // fallback para navegadores sin clipboard API
    var ta = document.createElement('textarea');
    ta.value = url;
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    document.body.removeChild(ta);
    btn.textContent = lang === 'en' ? '✓ Copied!' : '✓ ¡Copiado!';
    setTimeout(function() { updateShareBtn(); }, 2000);
  }
}

// Leer ?post=N de la URL al cargar y abrir el post correspondiente
function checkUrlPost() {
  var params = new URLSearchParams(window.location.search);
  var postParam = params.get('post');
  if (postParam !== null) {
    var idx = parseInt(postParam, 10);
    if (!isNaN(idx) && POSTS[idx] && POSTS[idx].activo) {
      // Pequeño delay para que el DOM esté listo
      setTimeout(function() { openPost(idx); }, 300);
    }
  }
}


// ============================================================
// CAMBIO DE IDIOMA
// ============================================================
var currentLang = 'es';

function setLang(lang) {
  currentLang = lang;
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

  renderBlog(lang, currentCat);
  renderProyectos(lang);
  if (planAbierto) renderPlan(lang);
  if (revsAbierto) renderReviews(lang);
  renderMaterial(lang);

  if (currentPostIndex >= 0) {
    var p = POSTS[currentPostIndex];
    if (p && !p.notionUrl) {
      document.getElementById('modal-body-content').innerHTML =
        lang === 'en' ? p.contenido_en : p.contenido_es;
      document.getElementById('modal-title').textContent =
        lang === 'en' ? p.titulo_en : p.titulo_es;
      document.getElementById('modal-sub').innerHTML =
        lang === 'en' ? (p.subtitulo_en || '') : (p.subtitulo_es || '');
      updateShareBtn();
    }
  }
}


// ============================================================
// SCROLL REVEAL
// ============================================================
var revealObserver;

function reobserve() {
  document.querySelectorAll('.reveal:not(.in)').forEach(function(el) {
    if (revealObserver) revealObserver.observe(el);
  });
}

revealObserver = new IntersectionObserver(function(entries) {
  entries.forEach(function(e) {
    if (e.isIntersecting) e.target.classList.add('in');
  });
}, { threshold: 0.08 });

document.querySelectorAll('.reveal').forEach(function(el) {
  revealObserver.observe(el);
});



// ============================================================
// MATERIAL DE ESTUDIO
// ============================================================
function renderMaterial(lang) {
  var cont = document.getElementById('mat-grid');
  if (!cont || typeof MATERIAL === 'undefined') return;
  var en = lang === 'en';
  cont.innerHTML = MATERIAL.map(function (m) {
    var cuerpo = '<div class="mat-tipo">' + (en ? m.tipo_en : m.tipo_es) + '</div>' +
                 '<div class="mat-tit">' + (en ? m.titulo_en : m.titulo_es) + '</div>' +
                 '<div class="mat-desc">' + (en ? m.desc_en : m.desc_es) + '</div>' +
                 '<div class="mat-meta">' + (en ? m.meta_en : m.meta_es) + '</div>';
    if (m.activo && m.link) return '<a class="mat" href="' + m.link + '">' + cuerpo + '</a>';
    return '<div class="mat pendiente">' + cuerpo + '</div>';
  }).join('');
}

// ============================================================
// TESTIMONIOS
// ============================================================
var revsAbierto = false;

function toggleRevs() {
  revsAbierto = !revsAbierto;
  document.getElementById('revs').hidden = !revsAbierto;
  document.getElementById('revs-toggle').classList.toggle('open', revsAbierto);
  if (revsAbierto) renderReviews(currentLang);
}

function renderReviews(lang) {
  var cont = document.getElementById('revs');
  if (!cont || typeof REVIEWS === 'undefined') return;
  var en = lang === 'en';
  cont.innerHTML = REVIEWS.map(function (r) {
    return '<div class="rev"><p class="rev-t">&laquo;' + (en ? r.t_en : r.t) + '&raquo;</p>' +
           '<span class="rev-n">' + r.n + '</span> ' +
           '<span class="rev-r">&middot; ' + (en ? r.r_en : r.r) + '</span></div>';
  }).join('');
}

// ============================================================
// PLAN DE ESTUDIOS
// ============================================================
var materiaActual = 23; // Analisis IV
var planAbierto = false;

function togglePlan() {
  planAbierto = !planAbierto;
  document.getElementById('plan').hidden = !planAbierto;
  document.getElementById('plan-toggle').classList.toggle('open', planAbierto);
  if (planAbierto) renderPlan(currentLang);
}

function renderPlan(lang) {
  if (typeof MATERIAS === 'undefined') return;
  var en = lang === 'en';

  var stats = [
    [PLAN_HORAS, en ? 'contact hours' : 'horas presenciales'],
    [PLAN_ANIOS, en ? 'years' : 'años'],
    [24, en ? 'compulsory courses' : 'materias obligatorias'],
    [360, en ? 'hours of electives' : 'horas de optativas'],
    [300, en ? 'hours of final thesis' : 'horas de trabajo final']
  ];
  document.getElementById('plan-stats').innerHTML = stats.map(function (s) {
    return '<div><span class="n">' + s[0] + '</span><span class="l">' + s[1] + '</span></div>';
  }).join('');

  var nombresAnio = en
    ? ['Year 1', 'Year 2', 'Year 3', 'Year 4', 'Year 5']
    : ['Primer año', 'Segundo año', 'Tercer año', 'Cuarto año', 'Quinto año'];

  var html = '';
  for (var a = 1; a <= 5; a++) {
    html += '<div><p class="plan-yh">' + nombresAnio[a - 1] + '</p><div class="plan-subs">';
    for (var i = 0; i < MATERIAS.length; i++) {
      if (MATERIAS[i].a !== a) continue;
      var m = MATERIAS[i];
      html += '<button type="button" class="msub' +
        '" aria-pressed="' + (i === materiaActual) + '" onclick="verMateria(' + i + ')">' +
        (en ? m.n_en : m.n) + '</button>';
    }
    html += '</div></div>';
  }
  html += '<div><p class="plan-yh">' + (en ? 'Electives · 360 hours' : 'Optativas · 360 horas') + '</p><div class="plan-subs">';
  for (var j = 0; j < OPTATIVAS.length; j++) {
    html += '<button type="button" class="msub" aria-pressed="false" disabled style="cursor:default;opacity:.85">' +
      (en ? OPTATIVAS[j].n_en : OPTATIVAS[j].n) + '</button>';
  }
  html += '</div></div>';
  document.getElementById('plan-years').innerHTML = html;

  pintarMateria(lang);
}

function verMateria(i) {
  materiaActual = i;
  var botones = document.querySelectorAll('.msub');
  for (var k = 0; k < botones.length; k++) botones[k].setAttribute('aria-pressed', 'false');
  renderPlan(currentLang);
}

function pintarMateria(lang) {
  var m = MATERIAS[materiaActual];
  if (!m) return;
  var en = lang === 'en';
  var cuat = en
    ? (m.c === 1 ? '1st term' : '2nd term')
    : (m.c === 1 ? '1.er cuatrimestre' : '2.º cuatrimestre');
  var anio = en ? ('Year ' + m.a) : (m.a + '.º año');

  var h = '<p class="mp-year">' + anio + ' · ' + cuat + '</p>';
  h += '<p class="mp-name">' + (en ? m.n_en : m.n) + '</p>';
  h += '<p class="mp-h">' + m.h + (en ? ' hours · ' : ' horas · ') + m.s +
       (en ? ' weekly (theory + practice)' : ' semanales (teoría + práctica)') + '</p>';

  if (m.b) {
    h += '<div class="mp-row"><p class="mp-lab">' + (en ? 'Bibliography' : 'Bibliografía') + '</p><ul class="mp-bib">';
    for (var i = 0; i < m.b.length; i++) h += '<li>' + m.b[i] + '</li>';
    h += '</ul></div>';
  }
  h += '<div class="mp-row"><p class="mp-lab">' + (en ? 'Official syllabus' : 'Contenidos oficiales') +
       '</p><p class="mp-val">' + (en ? m.t_en : m.t) + '</p></div>';
  document.getElementById('plan-panel').innerHTML = h;
}

// ============================================================
// TEMA CLARO / OSCURO
// ============================================================
function setTheme(t) {
  document.documentElement.setAttribute('data-theme', t);
  try { localStorage.setItem('tema', t); } catch (e) {}
  marcarBotonDeTema(t);
}

function marcarBotonDeTema(t) {
  var claro = document.getElementById('btn-light');
  var oscuro = document.getElementById('btn-dark');
  if (claro) claro.classList.toggle('active', t === 'light');
  if (oscuro) oscuro.classList.toggle('active', t === 'dark');
}

// ============================================================
// INIT
// ============================================================
document.addEventListener('DOMContentLoaded', function() {
  marcarBotonDeTema(document.documentElement.getAttribute('data-theme') || 'light');
  renderMaterial('es');
  renderBlog('es', 'all');
  renderProyectos('es');
  checkUrlPost();
});
