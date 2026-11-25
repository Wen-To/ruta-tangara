/* =========================================================
   Ruta Tángara · Datos de las salidas
   Este archivo es la única fuente de información de las salidas:
   las tarjetas, el calendario, la ficha de detalle y el formulario
   de inscripción se generan a partir de este arreglo.
   Las fechas, precios y cupos son ilustrativos (negocio ficticio);
   los lugares, las especies y las grabaciones son reales.
   ========================================================= */

const SALIDAS = [
  {
    id: "humedal-al-amanecer",
    nombre: "Humedal al amanecer",
    lugar: "Humedal La Conejera, Suba (Bogotá)",
    nivel: "Principiante",
    fecha: "2026-12-12",
    horario: "5:45 a. m. a 8:45 a. m.",
    duracion: "3 horas",
    cupos: 12,
    disponibles: 7,
    valor: 85000,
    encuentro: "Entrada principal del Humedal La Conejera (Suba)",
    transporte: "Llegada por cuenta propia",
    imagen: "img/escenas/humedal.svg",
    imagenAlt: "Ilustración de un humedal al amanecer con juncos y aves en vuelo",
    resumen: "Recorrido corto y plano por el sendero del humedal, a la hora en que más aves cantan.",
    descripcion: [
      "El <a class=\"termino\" href=\"glosario.html#humedal\">humedal</a> La Conejera está en la localidad de Suba, en el norte de Bogotá, y hace parte de la Reserva Forestal Thomas van der Hammen. Es un espacio ideal para una primera salida: el sendero es plano, la distancia es corta y las aves están cerca.",
      "Llegamos con la primera luz del día, cuando la actividad de las aves es mayor. Durante el recorrido aprenderás a enfocar los binoculares, a reconocer las aves por su silueta y a distinguir un <a class=\"termino\" href=\"glosario.html#canto\">canto</a> de un <a class=\"termino\" href=\"glosario.html#llamado\">llamado</a>."
    ],
    destacado: "La especie más buscada es la tingua bogotana (<i class=\"cientifico\">Rallus semiplumbeus</i>), un ave tímida de los juncales que BirdLife International clasifica como <a class=\"termino\" href=\"glosario.html#amenazada\">Vulnerable</a>. Verla exige silencio y paciencia.",
    itinerario: [
      ["5:45 a. m.", "Encuentro en la entrada del humedal y entrega de binoculares."],
      ["6:00 a. m.", "Charla corta: cómo usar los binoculares y normas del sendero."],
      ["6:10 a. m.", "Recorrido con paradas de observación en los juncales."],
      ["7:45 a. m.", "Pausa con bebida caliente y repaso de las especies vistas."],
      ["8:30 a. m.", "Registro de la <a class=\"termino\" href=\"glosario.html#lista\">lista de especies</a> del día."],
      ["8:45 a. m.", "Cierre de la salida."]
    ],
    llevar: ["Chaqueta impermeable y ropa abrigada en capas: la madrugada es fría.", "Zapatos cerrados que se puedan embarrar.", "Agua y un refrigerio pequeño.", "Documento de identidad."],
    incluye: ["Guía durante todo el recorrido.", "Préstamo de binoculares (si lo solicitas en la inscripción).", "Bebida caliente.", "Lista de especies del día enviada por correo."],
    aves: [
      { nombre: "Tingua bogotana", cientifico: "Rallus semiplumbeus", imagen: "img/aves/tingua.svg", nota: "Vulnerable; vive en los juncales." },
      { nombre: "Monjita", cientifico: "Chrysomus icterocephalus", imagen: "img/aves/monjita.svg", nota: "El macho es negro con capucha amarilla." },
      { nombre: "Copetón", cientifico: "Zonotrichia capensis", imagen: "img/aves/copeton.svg", nota: "Muy común en la Sabana." }
    ],
    audio: { xc: "783188", especie: "Tingua bogotana", cientifico: "Rallus semiplumbeus", tipo: "llamado", autor: "Pedro Arturo Camargo Martínez", licencia: "Creative Commons (ver condiciones en la ficha de xeno-canto)" },
    masInfo: { texto: "Ficha de la tingua bogotana en BirdLife International", url: "https://datazone.birdlife.org/species/factsheet/bogota-rail-rallus-semiplumbeus" }
  },
  {
    id: "bosque-de-niebla",
    nombre: "Bosque de niebla",
    lugar: "Parque Natural Chicaque, San Antonio del Tequendama (Cundinamarca)",
    nivel: "Principiante",
    fecha: "2026-12-13",
    horario: "6:00 a. m. a 1:00 p. m.",
    duracion: "Medio día",
    cupos: 12,
    disponibles: 3,
    valor: 160000,
    encuentro: "Parque de la 93 (Bogotá), costado norte",
    transporte: "Incluido desde Bogotá",
    imagen: "img/escenas/bosque.svg",
    imagenAlt: "Ilustración de un bosque de niebla con capas de árboles, niebla y helechos",
    resumen: "Caminata suave por los senderos altos de una reserva privada cubierta de niebla.",
    descripcion: [
      "Chicaque es una reserva natural privada que protege un <a class=\"termino\" href=\"glosario.html#bosque-de-niebla\">bosque de niebla</a> al suroccidente de la Sabana de Bogotá, cerca de San Antonio del Tequendama. En este tipo de bosque la niebla es frecuente y los árboles están cubiertos de musgos, helechos y otras plantas.",
      "La salida recorre los senderos de la parte alta del parque, sin los descensos fuertes que tienen otras rutas. Por eso es apta para principiantes con una condición física básica."
    ],
    destacado: "En el bosque de niebla las aves suelen moverse en grupos mixtos: varias especies avanzan juntas buscando alimento. Cuando aparece una bandada, conviene quedarse quieto y dejar que pase frente al grupo.",
    itinerario: [
      ["6:00 a. m.", "Salida en transporte desde el Parque de la 93."],
      ["7:15 a. m.", "Llegada al parque, desayuno ligero y entrega de binoculares."],
      ["7:45 a. m.", "Recorrido por los senderos altos con paradas de observación."],
      ["10:30 a. m.", "Descanso en un mirador y repaso de las especies vistas."],
      ["11:30 a. m.", "Regreso a Bogotá."],
      ["1:00 p. m.", "Llegada al punto de encuentro."]
    ],
    llevar: ["Chaqueta impermeable: la niebla moja.", "Zapatos de caminata con buen agarre.", "Ropa en capas y gorra.", "Agua (al menos 1 litro)."],
    incluye: ["Transporte ida y regreso desde Bogotá.", "Entrada al parque.", "Desayuno ligero.", "Guía y préstamo de binoculares.", "Lista de especies del día."],
    aves: [
      { nombre: "Mirla patinaranja", cientifico: "Turdus fuscater", imagen: "img/aves/mirla.svg", nota: "Grande y oscura, con pico y patas anaranjados." },
      { nombre: "Colibrí chillón", cientifico: "Colibri coruscans", imagen: "img/aves/colibri.svg", nota: "Su canto metálico se oye de lejos." },
      { nombre: "Copetón", cientifico: "Zonotrichia capensis", imagen: "img/aves/copeton.svg", nota: "Frecuente en los bordes del bosque." }
    ],
    audio: { xc: "410080", especie: "Mirla patinaranja", cientifico: "Turdus fuscater", tipo: "canto", autor: "Diego Gaona", licencia: "CC BY-NC-SA 4.0" },
    masInfo: { texto: "Qué es un bosque nuboso (Wikipedia)", url: "https://es.wikipedia.org/wiki/Bosque_nuboso" }
  },
  {
    id: "jardin-de-colibries",
    nombre: "Jardín de colibríes",
    lugar: "Jardín Botánico de Bogotá José Celestino Mutis",
    nivel: "Principiante",
    fecha: "2027-01-09",
    horario: "7:30 a. m. a 10:30 a. m.",
    duracion: "3 horas",
    cupos: 12,
    disponibles: 9,
    valor: 70000,
    encuentro: "Entrada principal del Jardín Botánico de Bogotá",
    transporte: "Llegada por cuenta propia",
    imagen: "img/escenas/jardin.svg",
    imagenAlt: "Ilustración de un jardín con flores tubulares y un colibrí en vuelo",
    resumen: "Salida tranquila entre jardines de flores para aprender a reconocer colibríes.",
    descripcion: [
      "El Jardín Botánico de Bogotá reúne colecciones de plantas de los ecosistemas andinos en plena ciudad. Sus flores atraen colibríes durante todo el año, por lo que es un buen lugar para observarlos de cerca y sin caminar mucho.",
      "Es la salida recomendada para familias: el recorrido es plano y corto, y los niños desde los 8 años pueden participar acompañados por un adulto. También dedicamos un momento a dar consejos básicos para fotografiar aves con el celular."
    ],
    destacado: "Los colibríes se reconocen mejor por su comportamiento que por su color: el brillo de sus plumas cambia con la luz. Fíjate en el tamaño, la forma del pico y la flor que visitan.",
    itinerario: [
      ["7:30 a. m.", "Encuentro en la entrada principal y entrega de binoculares."],
      ["7:45 a. m.", "Recorrido por los jardines de plantas nativas."],
      ["9:00 a. m.", "Ejercicio de fotografía de aves con el celular."],
      ["9:45 a. m.", "Repaso de las especies vistas."],
      ["10:30 a. m.", "Cierre de la salida."]
    ],
    llevar: ["Celular con batería cargada.", "Gorra y protector solar.", "Agua.", "Ropa cómoda."],
    incluye: ["Entrada al Jardín Botánico.", "Guía y préstamo de binoculares.", "Guía corta de colibríes en formato digital.", "Lista de especies del día."],
    aves: [
      { nombre: "Colibrí chillón", cientifico: "Colibri coruscans", imagen: "img/aves/colibri.svg", nota: "Verde, con una mancha violeta en la mejilla." },
      { nombre: "Mirla patinaranja", cientifico: "Turdus fuscater", imagen: "img/aves/mirla.svg", nota: "Busca alimento en el pasto." },
      { nombre: "Copetón", cientifico: "Zonotrichia capensis", imagen: "img/aves/copeton.svg", nota: "Lleva un collar rojizo en la nuca." }
    ],
    audio: { xc: "338150", especie: "Colibrí chillón", cientifico: "Colibri coruscans", tipo: "canto y llamado en vuelo", autor: "David Ricardo Rodríguez Villamil", licencia: "CC BY-NC-SA 4.0" },
    masInfo: { texto: "Grabaciones del colibrí chillón en xeno-canto", url: "https://www.xeno-canto.org/338150" }
  },
  {
    id: "paramo-y-frailejones",
    nombre: "Páramo y frailejones",
    lugar: "Parque Nacional Natural Chingaza (Cundinamarca)",
    nivel: "Intermedio",
    fecha: "2027-01-17",
    horario: "5:00 a. m. a 5:00 p. m.",
    duracion: "Día completo",
    cupos: 12,
    disponibles: 4,
    valor: 290000,
    encuentro: "Parque de la 93 (Bogotá), costado norte",
    transporte: "Incluido desde Bogotá",
    imagen: "img/escenas/paramo.svg",
    imagenAlt: "Ilustración de un páramo con frailejones, pajonal y una laguna entre montañas",
    resumen: "Jornada en el páramo, entre frailejones y lagunas, a más de 3.000 metros de altitud.",
    descripcion: [
      "El Parque Nacional Natural Chingaza está al oriente de Bogotá, en municipios de Cundinamarca y del Meta. Protege <a class=\"termino\" href=\"glosario.html#paramo\">páramos</a> y bosques altoandinos de los que depende buena parte del agua que consume la ciudad. En el páramo predominan los <a class=\"termino\" href=\"glosario.html#frailejon\">frailejones</a>, plantas del género <i class=\"cientifico\">Espeletia</i>.",
      "Es una salida de nivel intermedio: caminamos entre 5 y 6 kilómetros, con subidas moderadas, a una altitud donde el frío y el cansancio se sienten más. Nosotros gestionamos el ingreso al parque."
    ],
    destacado: "Un estudio publicado en la revista <em>Biota Colombiana</em> reportó 531 especies de aves para el parque y su zona de amortiguación (Linares-Romero et al., 2020). Entre ellas está el barbudito paramuno (<i class=\"cientifico\">Oxypogon guerinii</i>), un colibrí <a class=\"termino\" href=\"glosario.html#endemica\">endémico</a> de los páramos de Colombia.",
    itinerario: [
      ["5:00 a. m.", "Salida en transporte desde el Parque de la 93."],
      ["7:00 a. m.", "Llegada, registro de ingreso y desayuno."],
      ["7:45 a. m.", "Caminata por el páramo con paradas en lagunas y frailejonales."],
      ["12:30 p. m.", "Almuerzo y descanso."],
      ["1:30 p. m.", "Observación en el borde del bosque altoandino."],
      ["3:00 p. m.", "Regreso a Bogotá."],
      ["5:00 p. m.", "Llegada al punto de encuentro."]
    ],
    llevar: ["Ropa térmica, guantes y gorro: la temperatura puede bajar de 5 °C.", "Chaqueta impermeable y pantalón que seque rápido.", "Botas de caminata impermeables.", "Agua, protector solar y gafas de sol.", "Medicamentos personales."],
    incluye: ["Transporte ida y regreso desde Bogotá.", "Ingreso al parque nacional.", "Desayuno y almuerzo.", "Guía, préstamo de binoculares y telescopio.", "Lista de especies del día."],
    aves: [
      { nombre: "Barbudito paramuno", cientifico: "Oxypogon guerinii", imagen: "img/aves/barbudito.svg", nota: "Colibrí endémico del páramo." },
      { nombre: "Chamicero cundiboyacense", cientifico: "Synallaxis subpudica", imagen: "img/aves/chamicero.svg", nota: "Endémico; vive en matorrales." },
      { nombre: "Mirla patinaranja", cientifico: "Turdus fuscater", imagen: "img/aves/mirla.svg", nota: "Frecuente en el bosque altoandino." }
    ],
    audio: { xc: "577119", especie: "Chamicero cundiboyacense", cientifico: "Synallaxis subpudica", tipo: "canto", autor: "ClaraMarcela Rubiano Velasco", licencia: "CC BY-NC-SA 4.0" },
    masInfo: { texto: "Artículo «Aves del Parque Nacional Natural Chingaza y zona de amortiguación» (Biota Colombiana, 2020)", url: "https://doi.org/10.21068/c2020.v21n01a09" }
  },
  {
    id: "aves-acuaticas-la-florida",
    nombre: "Aves acuáticas de La Florida",
    lugar: "Parque La Florida, occidente de Bogotá",
    nivel: "Intermedio",
    fecha: "2027-01-23",
    horario: "6:00 a. m. a 11:30 a. m.",
    duracion: "Medio día",
    cupos: 12,
    disponibles: 8,
    valor: 120000,
    encuentro: "Parque de la 93 (Bogotá), costado norte",
    transporte: "Incluido desde Bogotá",
    imagen: "img/escenas/lago.svg",
    imagenAlt: "Ilustración de un lago de la Sabana con patos, juncos y árboles al fondo",
    resumen: "Mañana junto al lago y el humedal para observar aves acuáticas con telescopio.",
    descripcion: [
      "El Parque La Florida, en el borde occidental de Bogotá, combina un lago con zonas de humedal y juncal. Allí se han hecho estudios sobre la ecología de la tingua bogotana, lo que muestra la importancia del lugar para las aves de la Sabana.",
      "La salida es de nivel intermedio porque exige más paciencia: pasamos largos ratos observando desde la orilla y aprendemos a usar el <a class=\"termino\" href=\"glosario.html#telescopio\">telescopio terrestre</a> para ver aves que están lejos."
    ],
    destacado: "Bogotá perdió la mayor parte de sus humedales: cubrían casi 50.000 hectáreas en la década de 1960 y solo 727 en 2019 (<a class=\"ext\" href=\"https://es.wikipedia.org/wiki/Geograf%C3%ADa_de_Bogot%C3%A1\" target=\"_blank\" rel=\"noopener\">Geografía de Bogotá, Wikipedia</a>). Los que quedan, como los de La Florida, son refugios clave para las aves acuáticas.",
    itinerario: [
      ["6:00 a. m.", "Salida en transporte desde el Parque de la 93."],
      ["6:45 a. m.", "Llegada y entrega de binoculares."],
      ["7:00 a. m.", "Observación desde la orilla del lago con telescopio."],
      ["9:00 a. m.", "Recorrido por el borde del humedal."],
      ["10:30 a. m.", "Repaso de especies y regreso."],
      ["11:30 a. m.", "Llegada al punto de encuentro."]
    ],
    llevar: ["Chaqueta abrigada e impermeable.", "Zapatos cerrados.", "Gorra y protector solar.", "Agua y un refrigerio."],
    incluye: ["Transporte ida y regreso desde Bogotá.", "Guía, préstamo de binoculares y telescopio.", "Refrigerio.", "Lista de especies del día."],
    aves: [
      { nombre: "Monjita", cientifico: "Chrysomus icterocephalus", imagen: "img/aves/monjita.svg", nota: "Canta posada en los juncos." },
      { nombre: "Tingua bogotana", cientifico: "Rallus semiplumbeus", imagen: "img/aves/tingua.svg", nota: "Vulnerable; difícil de ver." },
      { nombre: "Copetón", cientifico: "Zonotrichia capensis", imagen: "img/aves/copeton.svg", nota: "En los bordes con pasto." }
    ],
    audio: { xc: "303472", especie: "Monjita", cientifico: "Chrysomus icterocephalus bogotensis", tipo: "canto", autor: "David Ricardo Rodríguez Villamil", licencia: "CC BY-NC-SA 4.0" },
    masInfo: { texto: "Humedales de Bogotá (Wikipedia)", url: "https://es.wikipedia.org/wiki/Humedales_de_Bogot%C3%A1" }
  },
  {
    id: "ruta-de-aves-endemicas",
    nombre: "Ruta de aves endémicas",
    lugar: "Humedal Juan Amarillo y cerros orientales (Bogotá)",
    nivel: "Avanzado",
    fecha: "2027-02-06",
    horario: "4:45 a. m. a 4:00 p. m.",
    duracion: "Día completo",
    cupos: 8,
    disponibles: 6,
    valor: 250000,
    encuentro: "Parque de la 93 (Bogotá), costado norte",
    transporte: "Incluido entre los dos sitios",
    imagen: "img/escenas/endemicas.svg",
    imagenAlt: "Ilustración de un juncal con un cucarachero posado y los cerros al fondo",
    resumen: "Jornada larga para buscar especies que solo existen en Colombia o en la Sabana.",
    descripcion: [
      "Esta ruta busca aves <a class=\"termino\" href=\"glosario.html#endemica\">endémicas</a> o muy restringidas. En la mañana visitamos el Humedal Juan Amarillo (Tibabuyes), el más extenso de la Sabana de Bogotá, donde se ha hecho seguimiento a la tingua bogotana y al cucarachero de pantano. En la tarde subimos a los bordes de bosque de los cerros orientales, hábitat del chamicero cundiboyacense.",
      "Es de nivel avanzado: empieza antes del amanecer, incluye esperas largas en silencio y una caminata de hasta 8 kilómetros con pendientes. El grupo es de máximo 8 personas."
    ],
    destacado: "El cucarachero de pantano (<i class=\"cientifico\">Cistothorus apolinari</i>) solo vive en Colombia y está clasificado como En peligro: BirdLife International estima su población entre 1.000 y 2.499 individuos maduros.",
    itinerario: [
      ["4:45 a. m.", "Encuentro en el Parque de la 93 y traslado."],
      ["5:30 a. m.", "Observación en el Humedal Juan Amarillo."],
      ["9:30 a. m.", "Desayuno y traslado a los cerros orientales."],
      ["10:30 a. m.", "Caminata por bordes de bosque y matorrales."],
      ["1:30 p. m.", "Almuerzo campestre."],
      ["2:30 p. m.", "Última búsqueda y registro de la lista del día."],
      ["4:00 p. m.", "Regreso al punto de encuentro."]
    ],
    llevar: ["Binoculares propios (recomendados para este nivel).", "Botas de caminata y bastón, si lo usas.", "Ropa en capas, chaqueta impermeable y gorra.", "Agua (al menos 1,5 litros) y refrigerios."],
    incluye: ["Transporte entre los dos sitios.", "Desayuno y almuerzo.", "Guía especializado y telescopio.", "Lista de especies con registro en eBird."],
    aves: [
      { nombre: "Cucarachero de pantano", cientifico: "Cistothorus apolinari", imagen: "img/aves/cucarachero.svg", nota: "Endémico de Colombia; categoría En peligro." },
      { nombre: "Chamicero cundiboyacense", cientifico: "Synallaxis subpudica", imagen: "img/aves/chamicero.svg", nota: "Endémico de Colombia." },
      { nombre: "Tingua bogotana", cientifico: "Rallus semiplumbeus", imagen: "img/aves/tingua.svg", nota: "Vulnerable." }
    ],
    audio: { xc: "20399", especie: "Cucarachero de pantano", cientifico: "Cistothorus apolinari", tipo: "canto", autor: "Oswaldo Cortes", licencia: "CC BY-NC-ND 2.5" },
    masInfo: { texto: "Ficha del cucarachero de pantano en BirdLife International", url: "https://datazone.birdlife.org/species/factsheet/apolinars-wren-cistothorus-apolinari" }
  }
];
