// ============================================================
// DATA.JS — editá este archivo para agregar posts y proyectos
// sin tocar index.html ni script.js
// ============================================================

// ——— POSTS DEL BLOG ———
// Cada entrada vive en escritos/posts/*.qmd y se publica con Quarto.
// Acá va solo lo que se ve en la portada.
//
//   activo: true   → se ve normal y lleva a su pagina
//   activo: false  → se ve como "proximamente" y no se puede abrir
//
// Los primeros 4 con activo: true aparecen en el inicio; el resto,
// solo en el listado del blog. El orden del array es el orden en
// que se ven. Ver GUIA.md, secciones 3 y 10.

var POSTS = [
  {
    fecha_es: 'Sep 2026',
    fecha_en: 'Sep 2026',
    categoria: 'stem',
    titulo_es: 'Navier-Stokes, OpenAI y el futuro de la Matemática',
    titulo_en: 'Navier-Stokes, OpenAI and the future of Mathematics',
    tag: 'STEM',
    destacado: true,
    activo: true,
    link: 'blog/posts/navier-stokes-openai.html'
  },
];


// ——— PROYECTOS ———
// Para agregar un proyecto: copiá un objeto y completá los campos.
// link: '#' si no tiene link todavía.

var PROYECTOS = [
  {
    num: '01',
    titulo_es: 'El problema inverso en tomografía óptica difusa',
    titulo_en: 'The inverse problem in diffuse optical tomography',
    desc_es: 'Tesis de licenciatura. Reconstruir el interior de un medio turbio a partir de la luz que sale de su superficie: dataset propio de 15.000 simulaciones por elementos finitos, normalización con criterio físico y aprendizaje profundo, todo corriendo en una máquina de escritorio.',
    desc_en: 'Undergraduate thesis. Reconstructing the interior of a turbid medium from the light leaving its surface: an original dataset of 15,000 finite element simulations, physically motivated normalisation and deep learning, all running on a desktop machine.',
    techs: 'Python · PyTorch · FEM · NumPy',
    activo: true,
    link: 'proyectos/p/01-dot.html'
  },
  {
    num: '02',
    titulo_es: 'Morfología coronaria y riesgo cardiovascular',
    titulo_en: 'Coronary morphology and cardiovascular risk',
    desc_es: 'Instituto PLADEMA, proyecto JOVIN. Si la geometría de una arteria condiciona el flujo, y el flujo condiciona la enfermedad, entonces la forma debería predecir el riesgo. Modelos matemáticos y aprendizaje automático para averiguarlo.',
    desc_en: 'PLADEMA Institute, JOVIN project. If the geometry of an artery shapes the flow, and the flow shapes the disease, then shape should predict risk. Mathematical models and machine learning to find out.',
    techs: 'Python · scikit-learn · SciPy',
    activo: true,
    link: 'proyectos/p/02-pladema.html'
  },
  {
    num: '03',
    titulo_es: 'Embeddings en espacios hiperbólicos',
    titulo_en: 'Embeddings in hyperbolic spaces',
    desc_es: 'VI Taller de Matemática Industrial, problema de Mercado Libre. Un árbol crece exponencialmente y el espacio euclídeo no: por eso una jerarquía no entra sin distorsión. El espacio hiperbólico sí crece exponencialmente, y ahí entra.',
    desc_en: 'VI Industrial Mathematics Workshop, problem posed by Mercado Libre. A tree grows exponentially and Euclidean space does not, so a hierarchy cannot be embedded without distortion. Hyperbolic space does grow exponentially — and there it fits.',
    techs: 'Python · PyTorch · Geometría de Riemann',
    techs_en: 'Python · PyTorch · Riemannian geometry',
    activo: true,
    link: 'proyectos/p/03-tami.html'
  },
  {
    num: '04',
    titulo_es: 'orbit-propagator',
    titulo_en: 'orbit-propagator',
    desc_es: 'Propagación de órbitas de satélites reales con datos en vivo de CelesTrak. SGP4 contra un integrador Runge–Kutta escrito desde las ecuaciones de movimiento, con J2 y arrastre atmosférico, y la cadena completa de cambio de sistema de referencia.',
    desc_en: 'Orbit propagation for real satellites using live CelesTrak data. SGP4 against a Runge–Kutta integrator written from the equations of motion, with J2 and atmospheric drag, and the full reference-frame transformation chain.',
    techs: 'Python · SGP4 · Skyfield · cartopy',
    activo: true,
    link: 'proyectos/p/04-orbit.html'
  },
  {
    num: '05',
    titulo_es: 'Una solución publicada en el Noticiero de la UMA',
    titulo_en: 'A solution published in the UMA newsletter',
    desc_es: 'El problema de la CIMA 2022: probar que los cuatro vectores normales exteriores de un tetraedro, pesados por el área de su cara, suman cero. El mismo hecho, generalizado, es lo que hace conservativos a los métodos de volúmenes finitos.',
    desc_en: 'The 2022 CIMA problem: proving that the four outward normal vectors of a tetrahedron, weighted by the area of their face, sum to zero. The same fact, generalised, is what makes finite volume methods conservative.',
    techs_es: 'Geometría · Álgebra lineal',
    techs_en: 'Geometry · Linear algebra',
    activo: true,
    link: 'proyectos/p/05-uma.html'
  },
  {
    num: '06',
    titulo_es: 'Women in STEM UNCPBA',
    titulo_en: 'Women in STEM UNCPBA',
    desc_es: 'Fundadora de una comunidad para promover la participación femenina en STEM dentro de la facultad. Ciclos de cine y discusión, encuentros abiertos con estudiantes y armado de grupos de trabajo.',
    desc_en: 'Founder of a community to promote female participation in STEM within the faculty. Film and discussion cycles, open gatherings with students and the setting up of working groups.',
    techs_es: 'Divulgación · Comunidad',
    techs_en: 'Outreach · Community',
    activo: true,
    link: 'proyectos/p/06-wis.html'
  },
];

// ——— PLAN DE ESTUDIOS ———
// Materias de la Licenciatura en Ciencias Matemáticas, Plan 2003 (UNCPBA).
// Nombres, códigos, horas y contenidos: resolución RCA 380/18 del Consejo Académico.
// La bibliografía no forma parte del plan: es la que efectivamente se usó en cada cátedra.
// grad: true marca las materias de los ultimos anios de la carrera (uso interno)


var PLAN_HORAS = 3045;
var PLAN_ANIOS = 5;

var MATERIAS = [
{a:1,c:1,n:"Álgebra I",n_en:"Algebra I",h:105,s:"3 + 4",
 t:"Números naturales. Inducción. Combinatoria. Polinomios. Números complejos. Vectores en el plano y el espacio. Ángulo entre vectores, distancia, norma, desigualdad de Cauchy–Schwarz. Producto escalar, vectorial y mixto. Ecuación de la recta y del plano. Cónicas y cuádricas. Sistemas de ecuaciones lineales. Matrices. Determinantes. Regla de Cramer. Métodos de escalonamiento: pivote, triangulación, Gauss, factorización LU.",
 t_en:"Natural numbers. Induction. Combinatorics. Polynomials. Complex numbers. Vectors in the plane and in space. Angle between vectors, distance, norm, Cauchy–Schwarz inequality. Scalar, vector and triple products. Equations of the line and the plane. Conics and quadrics. Systems of linear equations. Matrices. Determinants. Cramer's rule. Elimination methods: pivoting, triangulation, Gauss, LU factorisation."},

{a:1,c:1,n:"Análisis Matemático I",n_en:"Mathematical Analysis I",h:105,s:"3 + 4",
 t:"Funciones en R. Sucesiones. Límite, continuidad y derivada en R. Aproximaciones de números reales. Teoremas del valor medio. Desarrollo en serie de potencias (Taylor); convergencia. Máximos y mínimos. Integral definida e indefinida. Técnicas de integración. Aplicaciones geométricas y físicas.",
 t_en:"Functions on R. Sequences. Limits, continuity and derivatives on R. Approximation of real numbers. Mean value theorems. Power series expansion (Taylor); convergence. Maxima and minima. Definite and indefinite integrals. Integration techniques. Geometric and physical applications."},

{a:1,c:1,n:"Taller de Computación",n_en:"Computing Workshop",h:90,s:"2 + 4",
 t:"Sistema operativo. Procesador de texto y planilla de cálculo. Software matemático programable para la resolución algorítmica de problemas. Elementos de programación: estructuras de datos, variables locales y globales, parámetros, procedimientos y funciones, estructuras de control. Diseño y especificación de algoritmos.",
 t_en:"Operating systems. Word processing and spreadsheets. Programmable mathematical software for the algorithmic solution of problems. Programming fundamentals: data structures, local and global variables, parameters, procedures and functions, control structures. Algorithm design and specification."},

{a:1,c:2,n:"Matemática Discreta",n_en:"Discrete Mathematics",h:90,s:"3 + 3",
 t:"Lógica proposicional. Conjuntos. Relaciones. Números enteros. Funciones parte entera. Técnicas de suma. Congruencia. Introducción a las estructuras algebraicas: monoide, semigrupo, grupo, cuerpos finitos, álgebras. Álgebra libre. Morfismos. Álgebras de Boole. Estimación asintótica, complejidad. Sucesiones recurrentes. Funciones generadoras.",
 t_en:"Propositional logic. Sets. Relations. Integers. Floor functions. Summation techniques. Congruences. Introduction to algebraic structures: monoids, semigroups, groups, finite fields, algebras. Free algebra. Morphisms. Boolean algebras. Asymptotic estimation, complexity. Recurrence relations. Generating functions."},

{a:1,c:2,n:"Álgebra Lineal",n_en:"Linear Algebra",h:105,s:"3 + 4",
 t:"Espacios vectoriales: grupos y cuerpos. Independencia lineal. Transformaciones lineales. Autovalores y autovectores. Espacios propios y diagonalización. Espacios con producto interno. Bases ortogonales y ortonormales (Gram–Schmidt). Proyección ortogonal. Transformaciones ortogonales: rotaciones y reflexiones. Formas bilineales y cuadráticas; diagonalización. Ley de inercia. Clasificación afín y euclídea de funciones cuadráticas.",
 t_en:"Vector spaces: groups and fields. Linear independence. Linear transformations. Eigenvalues and eigenvectors. Eigenspaces and diagonalisation. Inner product spaces. Orthogonal and orthonormal bases (Gram–Schmidt). Orthogonal projection. Orthogonal transformations: rotations and reflections. Bilinear and quadratic forms; diagonalisation. Law of inertia. Affine and Euclidean classification of quadratic functions."},

{a:1,c:2,n:"Elementos de Física",n_en:"Elements of Physics",h:90,s:"3 + 3",
 t:"Sistemas de coordenadas. Movimiento, trayectoria, velocidad y aceleración. Movimiento bidimensional. Coordenadas cartesianas y polares. Movimiento curvilíneo y circular; aceleración tangencial y normal. Velocidad angular. Dinámica puntual. Leyes de Newton. Caída libre y movimiento oscilatorio. Fuerzas centrípeta, de rozamiento y de gravedad. Trabajo y energías cinética y potencial. Fuerzas conservativas. Momentos. Dinámica y cinemática del cuerpo rígido. Momento de inercia.",
 t_en:"Coordinate systems. Motion, trajectory, velocity and acceleration. Two-dimensional motion. Cartesian and polar coordinates. Curvilinear and circular motion; tangential and normal acceleration. Angular velocity. Particle dynamics. Newton's laws. Free fall and oscillatory motion. Centripetal, friction and gravitational forces. Work, kinetic and potential energy. Conservative forces. Moments. Rigid body dynamics and kinematics. Moment of inertia."},

{a:2,c:1,n:"Complementos de Análisis",n_en:"Topics in Analysis",h:90,s:"3 + 3",
 t:"Funciones trigonométricas: identidades, propiedades analíticas y geométricas. Teorema de Bolzano–Weierstrass. Teoremas de continuidad y derivada en R. Sucesiones de Cauchy. El número e; función exponencial y logaritmo. Criterios de convergencia de series numéricas. Sucesiones y series de funciones. Lema de Abel. Series de potencias. Teoremas de aproximación. Integrales impropias.",
 t_en:"Trigonometric functions: identities, analytic and geometric properties. Bolzano–Weierstrass theorem. Continuity and differentiability theorems on R. Cauchy sequences. The number e; exponential and logarithmic functions. Convergence tests for numerical series. Sequences and series of functions. Abel's lemma. Power series. Approximation theorems. Improper integrals."},

{a:2,c:1,n:"Análisis Matemático II",n_en:"Mathematical Analysis II",h:105,s:"3 + 4",
 t:"Funciones de varias variables reales; derivación y continuidad. Curvas y superficies de nivel. Derivada parcial y direccional. Fórmula de Taylor para campos escalares. Máximos y mínimos. Extremos condicionados. Integrales múltiples. Funciones vectoriales. Curvatura. Integrales de línea y de superficie. Gradiente, divergencia, rotor y flujo. Coordenadas esféricas y cilíndricas. Teoremas de Stokes y de Green. Introducción a las ecuaciones diferenciales ordinarias.",
 t_en:"Functions of several real variables; differentiation and continuity. Level curves and surfaces. Partial and directional derivatives. Taylor's formula for scalar fields. Maxima and minima. Constrained extrema. Multiple integrals. Vector-valued functions. Curvature. Line and surface integrals. Gradient, divergence, curl and flux. Spherical and cylindrical coordinates. Stokes' and Green's theorems. Introduction to ordinary differential equations."},

{a:2,c:1,n:"Elementos de Lógica y Teoría de Conjuntos",n_en:"Elements of Logic and Set Theory",h:90,s:"3 + 3",
 t:"Lenguajes proposicionales. Tablas de verdad. Valuaciones. Consecuencia semántica. Formas normales. Lógica de predicados. Estructuras de primer orden. Axiomas de la teoría de conjuntos. Álgebra de conjuntos. Álgebras de Boole. Relaciones y funciones. Conjuntos numéricos. Sistemas de Peano. Teorema de recursión. Cardinales. Conjuntos contables. Aritmética cardinal. Axioma de elección y equivalencias.",
 t_en:"Propositional languages. Truth tables. Valuations. Semantic consequence. Normal forms. Predicate logic. First-order structures. Axioms of set theory. Algebra of sets. Boolean algebras. Relations and functions. Number systems. Peano systems. Recursion theorem. Cardinals. Countable sets. Cardinal arithmetic. Axiom of choice and equivalent statements."},

{a:2,c:2,n:"Álgebra II",n_en:"Algebra II",h:90,s:"3 + 3",
 t:"Transformaciones afines, movimientos, semejanzas. Diagonalización de matrices. Polinomio minimal y característico. Triangulación de matrices y forma normal de Jordan. Endomorfismos; subespacios invariantes. Descomposición primaria. Formas canónicas. Espacios con producto interno. Formas hermitianas; operadores positivos, adjuntos, autoadjuntos y unitarios. Teorema espectral para operadores normales.",
 t_en:"Affine transformations, rigid motions, similarities. Matrix diagonalisation. Minimal and characteristic polynomials. Matrix triangulation and Jordan normal form. Endomorphisms; invariant subspaces. Primary decomposition. Canonical forms. Inner product spaces. Hermitian forms; positive, adjoint, self-adjoint and unitary operators. Spectral theorem for normal operators."},

{a:2,c:2,n:"Topología I",n_en:"Topology I",h:90,s:"3 + 3",
 t:"Espacios métricos. Sucesiones en espacios métricos. Espacios métricos completos y compactos. Homeomorfismos. Contracciones. Teorema del punto fijo. Completamiento de un espacio métrico. Sucesiones de funciones. Espacios de funciones. Teorema de Dini. Álgebra de funciones. Teorema de Ascoli. Diferenciación en Rⁿ. Jacobianos. Regla de la cadena. Teorema del valor medio. Teorema de Taylor. Teorema de la función implícita. Teorema de la función abierta.",
 t_en:"Metric spaces. Sequences in metric spaces. Complete and compact metric spaces. Homeomorphisms. Contractions. Fixed point theorem. Completion of a metric space. Sequences of functions. Function spaces. Dini's theorem. Algebras of functions. Ascoli's theorem. Differentiation in Rⁿ. Jacobians. Chain rule. Mean value theorem. Taylor's theorem. Implicit function theorem. Open mapping theorem.",
 b:["Rudin — Principles of Mathematical Analysis","Apostol — Mathematical Analysis"]},

{a:2,c:2,n:"Probabilidad y Estadística Matemática",n_en:"Probability and Mathematical Statistics",h:120,s:"4 + 4",
 t:"Teoría básica de probabilidad. Variables aleatorias uni y bidimensionales. Distribuciones condicionales y marginales, independencia. Funciones de variables aleatorias; densidades. Distribuciones discretas y continuas. Funciones generadoras. Ley de los grandes números y teorema del límite central. Desigualdades de Tchebychev y Markov. Muestreo y distribuciones muestrales. Estimación: propiedades y métodos. Pruebas de hipótesis. Regresión; cuadrados mínimos. ANOVA. Estadística no paramétrica.",
 t_en:"Basic probability theory. One- and two-dimensional random variables. Conditional and marginal distributions, independence. Functions of random variables; densities. Discrete and continuous distributions. Generating functions. Law of large numbers and central limit theorem. Chebyshev's and Markov's inequalities. Sampling and sampling distributions. Estimation: properties and methods. Hypothesis testing. Regression; least squares. ANOVA. Nonparametric statistics."},

{a:3,c:1,n:"Topología II",n_en:"Topology II",h:90,s:"3 + 3",grad:true,
 t:"Espacios topológicos. Bases y subbases. Funciones continuas. Topologías débiles. Álgebras de funciones reales y complejas. Espacios compactos. Espacios producto. Teorema de Tychonoff. Compactificación de Alexandroff. Espacios T₁ y de Hausdorff. Espacios completamente regulares y normales. Lema de Urysohn. Teorema de extensión de Tietze. Teorema de metrización de Urysohn. Espacios conexos. Teorema de aproximación de Weierstrass. Teoremas de Stone–Weierstrass, caso real y complejo.",
 t_en:"Topological spaces. Bases and subbases. Continuous maps. Weak topologies. Algebras of real and complex functions. Compact spaces. Product spaces. Tychonoff's theorem. Alexandroff compactification. T₁ and Hausdorff spaces. Completely regular and normal spaces. Urysohn's lemma. Tietze extension theorem. Urysohn metrisation theorem. Connected spaces. Weierstrass approximation theorem. Stone–Weierstrass theorems, real and complex cases.",
 b:["Munkres — Topology","Kelley — General Topology"]},

{a:3,c:1,n:"Análisis Matemático III",n_en:"Mathematical Analysis III",h:105,s:"3 + 4",
 t:"Números complejos. Funciones analíticas. Integrales de contorno. Teorema de Cauchy–Goursat. Fórmula integral de Cauchy. Series de potencias, de Laurent y de Taylor. Funciones holomorfas. Teorema de los residuos. Ceros y polos. Integrales impropias. Transformaciones conformes y de Laplace. Series de Fourier, transformada de Fourier, identidad de Parseval.",
 t_en:"Complex numbers. Analytic functions. Contour integrals. Cauchy–Goursat theorem. Cauchy integral formula. Power, Laurent and Taylor series. Holomorphic functions. Residue theorem. Zeros and poles. Improper integrals. Conformal and Laplace transformations. Fourier series, Fourier transform, Parseval's identity.",
 b:["Churchill — Complex Variables and Applications","Conway — Functions of One Complex Variable","Wunsch — Complex Variables with Applications","Derrick — Complex Analysis and Applications"]},

{a:3,c:1,n:"Ecuaciones Diferenciales I",n_en:"Differential Equations I",h:90,s:"3 + 3",
 t:"Ecuaciones de primer orden. Ecuaciones lineales de primer orden. Variables separables. Ecuaciones exactas. Ecuaciones homogéneas. Teoremas de existencia y unicidad. Ecuaciones lineales de segundo orden. Ecuación homogénea con coeficientes constantes. El problema de la inhomogeneidad. Soluciones con series de potencias.",
 t_en:"First order equations. First order linear equations. Separable variables. Exact equations. Homogeneous equations. Existence and uniqueness theorems. Second order linear equations. Homogeneous equation with constant coefficients. The inhomogeneous problem. Power series solutions.",
 b:["Boyce y DiPrima — Ecuaciones diferenciales y problemas con valores en la frontera"]},

{a:3,c:2,n:"Funciones Reales I",n_en:"Real Functions I",h:90,s:"3 + 3",grad:true,
 t:"Propiedades de la recta real. Conjuntos de medida cero. Medida de Lebesgue en R. Funciones y conjuntos medibles; propiedades. Funciones monótonas, de variación acotada y continuas. Teorema de Carathéodory. Medida de Lebesgue en Rⁿ. Teorema de Lusin. Medidas con signo.",
 t_en:"Properties of the real line. Sets of measure zero. Lebesgue measure on R. Measurable functions and sets; properties. Monotone functions, functions of bounded variation, continuous functions. Carathéodory's theorem. Lebesgue measure on Rⁿ. Lusin's theorem. Signed measures.",
 b:["Wheeden y Zygmund — Measure and Integral","Folland — Real Analysis","Royden — Real Analysis","Fava y Zó — Medida e integral de Lebesgue"]},

{a:3,c:2,n:"Cálculo Numérico",n_en:"Numerical Analysis",h:120,s:"4 + 4",
 t:"Errores. Propagación. Ceros de funciones no lineales: bisección, Newton–Raphson, secante. Sistemas de ecuaciones lineales. Método de Gauss. Pivoteo. Mejoramiento iterativo. Interpolación polinomial: Lagrange, Hermite. Diferencias divididas. Forma de Newton. Aproximación de funciones. Polinomios de Tchebycheff, de Legendre y de Gram. Transformada rápida de Fourier. Integración numérica: rectángulos, trapecios, Simpson. Ecuaciones diferenciales: Euler, Runge–Kutta de orden 2 y 4. Sistemas.",
 t_en:"Errors. Propagation. Roots of nonlinear functions: bisection, Newton–Raphson, secant. Systems of linear equations. Gaussian elimination. Pivoting. Iterative refinement. Polynomial interpolation: Lagrange, Hermite. Divided differences. Newton's form. Function approximation. Chebyshev, Legendre and Gram polynomials. Fast Fourier transform. Numerical integration: rectangles, trapezoids, Simpson. Differential equations: Euler, Runge–Kutta of orders 2 and 4. Systems.",
 b:["Burden y Faires — Análisis numérico"]},

{a:3,c:2,n:"Álgebra III",n_en:"Algebra III",h:90,s:"3 + 3",grad:true,
 t:"Operaciones binarias internas. Grupos: propiedades y ejemplos. Subgrupos. Grupos cíclicos. Teoremas de Lagrange, Euler y Fermat. Homomorfismos; núcleo e imagen. Subgrupos normales. Grupo cociente. Teoremas de isomorfismo. Grupo de permutaciones. Teorema de Cayley. Productos directos. Subgrupos de Sylow. Teorema de estructura para grupos abelianos finitamente generados. Anillos. Ideales. Anillos cocientes. Dominios euclídeos, de factorización única y principales. Cuerpos. Cuerpo de fracciones. Factorización de polinomios. Extensiones de cuerpos; algebraicas y trascendentes. Números algebraicos.",
 t_en:"Internal binary operations. Groups: properties and examples. Subgroups. Cyclic groups. Lagrange, Euler and Fermat theorems. Homomorphisms; kernel and image. Normal subgroups. Quotient groups. Isomorphism theorems. Permutation groups. Cayley's theorem. Direct products. Sylow subgroups. Structure theorem for finitely generated abelian groups. Rings. Ideals. Quotient rings. Euclidean, unique factorisation and principal ideal domains. Fields. Field of fractions. Polynomial factorisation. Field extensions; algebraic and transcendental. Algebraic numbers.",
 b:["Fraleigh — A First Course in Abstract Algebra","Armstrong — Groups and Symmetry","Atiyah y Macdonald — Introduction to Commutative Algebra"]},

{a:4,c:1,n:"Funciones Reales II",n_en:"Real Functions II",h:90,s:"3 + 3",grad:true,
 t:"Integral de Lebesgue: funciones simples, no negativas y medibles; propiedades. Teoremas de convergencia. Lema de Fatou. Espacios Lᵖ. Desigualdades de Schwarz, Hölder y Minkowski. Completitud y dualidad de los espacios Lᵖ. Teoremas de Fubini y Tonelli. Diferenciación e integración.",
 t_en:"Lebesgue integral: simple, non-negative and measurable functions; properties. Convergence theorems. Fatou's lemma. Lᵖ spaces. Schwarz, Hölder and Minkowski inequalities. Completeness and duality of Lᵖ spaces. Fubini and Tonelli theorems. Differentiation and integration.",
 b:["Wheeden y Zygmund — Measure and Integral","Folland — Real Analysis","Royden — Real Analysis","Fava y Zó — Medida e integral de Lebesgue"]},

{a:4,c:1,n:"Geometría Diferencial",n_en:"Differential Geometry",h:120,s:"4 + 4",
 t:"Curvas en el plano y el espacio. Curvas suaves y regulares. Longitud de arco. Curvatura y torsión. Superficies en el espacio. Superficies regulares y coordenadas. Valor regular. La diferencial. Geometría de la primera forma cuadrática. Isometrías. Planos tangentes. Campos vectoriales: normal y tangente. Superficies orientables. Aplicación normal de Gauss y segunda forma cuadrática. Curvatura normal, principal, gaussiana y media. Puntos elípticos, parabólicos, hiperbólicos y planares. Líneas de curvatura.",
 t_en:"Curves in the plane and in space. Smooth and regular curves. Arc length. Curvature and torsion. Surfaces in space. Regular surfaces and coordinates. Regular values. The differential. Geometry of the first fundamental form. Isometries. Tangent planes. Vector fields: normal and tangent. Orientable surfaces. Gauss map and second fundamental form. Normal, principal, Gaussian and mean curvature. Elliptic, parabolic, hyperbolic and planar points. Lines of curvature.",
 b:["do Carmo — Differential Geometry of Curves and Surfaces (el libro completo)"]},

{a:4,c:1,n:"Modelización Matemática",n_en:"Mathematical Modelling",h:90,s:"3 + 3",
 t:"Tópicos de optimización. Programación lineal. Introducción a la teoría de juegos. Elementos de series de tiempo. Procesos de Markov. Conjuntos difusos. Métodos de Montecarlo y aplicaciones. Argumentos de estabilidad discretos y continuos.",
 t_en:"Topics in optimisation. Linear programming. Introduction to game theory. Elements of time series. Markov processes. Fuzzy sets. Monte Carlo methods and applications. Discrete and continuous stability arguments."},

{a:4,c:2,n:"Ecuaciones Diferenciales II",n_en:"Differential Equations II",h:90,s:"3 + 3",
 t:"Ecuaciones diferenciales con puntos singulares (teorema de Fuchs). Sistemas de ecuaciones diferenciales lineales; ecuaciones inhomogéneas y variación de parámetros. Diagramas de fase. Método de Euler. Aproximación de Taylor. Ecuaciones diferenciales ordinarias de orden n. Ecuaciones en derivadas parciales. Ecuaciones parabólicas, hiperbólicas y elípticas. Ecuación del calor. Ecuación de ondas. Cuerda y barra vibrantes. Laplaciano. Problemas de Dirichlet. Métodos implícitos (Crank–Nicolson).",
 t_en:"Differential equations with singular points (Fuchs' theorem). Systems of linear differential equations; inhomogeneous equations and variation of parameters. Phase diagrams. Euler's method. Taylor approximation. n-th order ordinary differential equations. Partial differential equations. Parabolic, hyperbolic and elliptic equations. Heat equation. Wave equation. Vibrating string and bar. Laplacian. Dirichlet problems. Implicit methods (Crank–Nicolson).",
 b:["Zachmanoglou y Thoe — Introduction to Partial Differential Equations with Applications","Perko — Differential Equations and Dynamical Systems"]},

{a:4,c:2,n:"Álgebra IV",n_en:"Algebra IV",h:90,s:"3 + 3",grad:true,
 t:"Álgebras sobre un cuerpo. Morfismos. Ideales maximales y primos. Producto de anillos. Teorema chino del resto. Módulos. Morfismos. Módulos libres. Módulos simples. Suma, intersección, suma directa y producto directo de módulos. Cociente. Módulos artinianos, noetherianos y semisimples. Anillos semisimples. Torsión y divisibilidad. Teorema de estructura para módulos finitamente generados sobre dominios principales.",
 t_en:"Algebras over a field. Morphisms. Maximal and prime ideals. Product of rings. Chinese remainder theorem. Modules. Morphisms. Free modules. Simple modules. Sum, intersection, direct sum and direct product of modules. Quotients. Artinian, Noetherian and semisimple modules. Semisimple rings. Torsion and divisibility. Structure theorem for finitely generated modules over principal ideal domains.",
 b:["Fraleigh — A First Course in Abstract Algebra","Armstrong — Groups and Symmetry","Atiyah y Macdonald — Introduction to Commutative Algebra"]},

{a:5,c:1,n:"Análisis IV",n_en:"Analysis IV",h:90,s:"3 + 3",grad:true,
 t:"Espacios normados. Espacios de Banach, prehilbertianos y de Hilbert. Introducción a la teoría de operadores: operadores acotados. Teorema de Baire. Teorema de la función abierta. Teorema del gráfico cerrado. Teorema de la acotación uniforme. Teorema de Hahn–Banach.",
 t_en:"Normed spaces. Banach, pre-Hilbert and Hilbert spaces. Introduction to operator theory: bounded operators. Baire's theorem. Open mapping theorem. Closed graph theorem. Uniform boundedness principle. Hahn–Banach theorem.",
 b:["Brezis — Functional Analysis, Sobolev Spaces and PDE","Conway — A Course in Functional Analysis"]},

{a:5,c:2,n:"Trabajo Final",n_en:"Final Thesis",h:300,s:"20",
 t:"Tesis de licenciatura. La mía: el problema inverso en tomografía óptica difusa, con generación de un dataset propio de simulaciones por elementos finitos y modelos de aprendizaje profundo.",
 t_en:"Undergraduate thesis. Mine: the inverse problem in diffuse optical tomography, with an original dataset of finite element simulations and deep learning models."}
];

var OPTATIVAS = [
  {n:"Álgebra Lineal para Aprendizaje Automático", n_en:"Linear Algebra for Machine Learning"},
  {n:"Inteligencia Artificial", n_en:"Artificial Intelligence"},
  {n:"Taller de Matemática Aplicada", n_en:"Applied Mathematics Workshop"},
  {n:"Programación en Python", n_en:"Programming in Python"},
  {n:"Animación con GeoGebra", n_en:"Animation with GeoGebra"},
  {n:"Relatividad Especial", n_en:"Special Relativity"}
];

// ——— TESTIMONIOS ———
// Reseñas publicadas por alumnos y colegas en Superprof. Transcriptas textualmente,
// sin corregir la redacción original. La versión en inglés es traducción.

var REVIEWS = [
{n:"Camilo", r:"compañero de Física y de ayudantías", r_en:"fellow physics student and teaching assistant",
 t:"He tenido el agrado de compartir varios años de mi recorrido por la universidad acompañado por Julieta. Ella no solo es una excelente docente, sino también una genial persona; siempre se preocupa por el progreso, tanto educativo como personal, de quienes asisten a sus clases. Posee una gran capacidad de enseñanza, adaptándose a las necesidades de cada alumno y buscando innumerables herramientas para explicar los contenidos que se le presenten. En relación a esto último, cabe destacar que Julieta tiene mucha afinidad con la tecnología, lo cual amplía su caja de herramientas y supongo que es una gran ventaja para el dictado de clases online. Finalmente, durante todos estos años, Juli ha tenido la oportunidad de adentrarse en muchas áreas de estudio (lo cual atribuyo a su gran curiosidad), facilitándole relacionar temas «abstractos» (como puede suceder muchas veces en matemáticas) con aplicaciones directas y sumamente interesantes del mundo real. Una clase con ella se siente como una charla entre amigos, muy amena y divertida.",
 t_en:"I have had the pleasure of sharing several years of my time at university alongside Julieta. She is not only an excellent teacher but also a wonderful person; she always cares about the progress, both academic and personal, of those who attend her classes. She has a great capacity for teaching, adapting to each student's needs and finding countless tools to explain whatever content comes up. On that note, it is worth mentioning that Julieta has a real affinity with technology, which widens her toolbox and I imagine is a great advantage for teaching online. Finally, over all these years Juli has had the chance to go deep into many fields of study — which I put down to her great curiosity — and that makes it easy for her to connect “abstract” topics, as maths so often are, with direct and genuinely interesting real-world applications. A class with her feels like a conversation among friends: enjoyable and fun."},

{n:"Sofía", r:"alumna de Análisis Matemático I", r_en:"student, Mathematical Analysis I",
 t:"A Julieta la conocí en la Facultad de Ciencias Exactas, fue mi ayudante de Análisis Matemático I. Siempre predispuesta a ayudar, paciente y atenta. Me contestaba el foro de Moodle con millones de preguntas, y ella contestaba una por una, e incluso me preguntaba si quería hacer Meet para que comprendiera mejor yo. Además, busca herramienta, estrategias que se facilita al alumno a entender. La recomiendo con otros miembros de Superprof porque es una apasionada, dedicada y comprometida con su vocación. Julieta no es un 10, es un 100.",
 t_en:"I met Julieta at the Faculty of Exact Sciences; she was my teaching assistant in Mathematical Analysis I. Always willing to help, patient and attentive. I would fill the Moodle forum with a million questions and she answered them one by one, and would even ask whether I wanted to get on a call so I could understand better. She also looks for tools and strategies that make it easier for the student to understand. I recommend her to other Superprof members because she is passionate, dedicated and committed to her vocation. Julieta isn't a ten out of ten, she's a hundred."},

{n:"Valentín", r:"compañero de la carrera de Matemática", r_en:"fellow mathematics student",
 t:"Julieta es una profesora digna de confianza ya que es una docente con experiencia, además tiene un gran manejo en diferentes temas de matemática y ha adquirido la habilidad para desempeñarse como profesora en diferentes niveles de la materia. Como si fuera poco, es una persona sumamente agradable y dispuesta a brindar su ayuda, siempre con la mejor predisposición.",
 t_en:"Julieta is a teacher you can trust: she is experienced, has a strong command of many areas of mathematics and has developed the ability to teach the subject at very different levels. On top of that she is an extremely pleasant person, always willing to help and with the best attitude."},

{n:"Alejandro Ramón", r:"alumno", r_en:"student",
 t:"Juli es una gran profe, no solo te explica, también te hace entender lo que necesitas. En una clase me hizo entender lo que estuve meses sin poder yo solo, gracias al material, ejemplos y ejercicios que te da.",
 t_en:"Juli is a great teacher: she doesn't just explain, she makes you understand what you need. In one class she got me to understand what I had spent months failing to grasp on my own, thanks to the material, examples and exercises she gives you."},

{n:"Guadalupe", r:"compañera de la beca Fulbright", r_en:"Fulbright programme roommate",
 t:"Juli es la mejor profe de matemática. Super didáctica y respetuosa, siempre pone el conocimiento al alcance de sus alumnos de una manera muy práctica. Además es muy responsable e inteligente. La recomiendo muchísimo!",
 t_en:"Juli is the best maths teacher. Very good at explaining and always respectful, she puts knowledge within her students' reach in a very practical way. She is also highly responsible and intelligent. I recommend her wholeheartedly!"},

{n:"Pascual", r:"compañero de olimpíadas", r_en:"olympiad teammate",
 t:"Conocí a Julieta en las Olimpiadas Matemáticas, debe darse por hecho que sabe muchísimo. Hasta donde se estudia dos carreras a la vez (y le va muy bien) Super recomendada para aprender!",
 t_en:"I met Julieta at the Mathematics Olympiads, so it goes without saying that she knows a great deal. As far as I know she is studying two degrees at the same time — and doing very well at both. Highly recommended if you want to learn!"}
];

// ——— MATERIAL DE ESTUDIO ———
// Libros, apuntes y material para alumnos. Para agregar una pieza nueva:
// copiá un objeto, completá los campos y poné activo: true.
// Si activo es false, aparece como "en preparación" y no lleva a ningún lado.

var MATERIAL = [
  {
    tipo_es: 'Libro',
    tipo_en: 'Book',
    titulo_es: 'Métodos Matemáticos para la Física',
    titulo_en: 'Mathematical Methods for Physics',
    desc_es: 'Catorce capítulos, de la ecuación de transporte a las ecuaciones integrales.',
    desc_en: 'Fourteen chapters, from the transport equation to integral equations.',
    meta_es: '14 capítulos · web interactiva y PDF',
    meta_en: '14 chapters · interactive web and PDF',
    link: 'metodos/index.html',
    activo: true
  },
  {
    tipo_es: 'Guías resueltas',
    tipo_en: 'Worked guides',
    titulo_es: 'Guías resueltas de Análisis Matemático II',
    titulo_en: 'Worked guides for Calculus II',
    desc_es: 'Campos conservativos y función potencial; extremos de funciones de varias variables: criterio del Hessiano, extremos absolutos sobre compactos y multiplicadores de Lagrange.',
    desc_en: 'Conservative fields and potential functions; extrema of functions of several variables: the Hessian test, absolute extrema on compact sets and Lagrange multipliers.',
    meta_es: '2 guías · web interactiva y PDF',
    meta_en: '2 guides · interactive web and PDF',
    link: 'guias/index.html',
    activo: true
  }
];
