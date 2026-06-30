/* ============================================================
    songs.js — Base de datos de canciones
    ------------------------------------------------------------
    Para AGREGAR una canción nueva, copia un bloque { ... } y
    pega tu información. Cada canción necesita:

    id           -> identificador único, sin espacios (usado en la URL)
    titulo       -> nombre de la canción
    artista      -> nombre del artista o ministerio
    recomendada  -> true si quieres que aparezca en "Canciones recomendadas"
    imagenDark   -> imagen circular para modo oscuro
    imagenLight  -> imagen circular para modo claro
    video        -> ID de YouTube (ej: dQw4w9WgXcQ) o ruta local (ej: assets/videos/cancion.mp4)
    tipoVideo    -> "youtube" o "local"
    inicioSegundos -> (opcional) segundo donde empieza el video
    finSegundos    -> (opcional) segundo donde termina el video
    letra        -> arreglo de estrofas. Cada estrofa es un arreglo de líneas.
   ============================================================ */

const SONGS = [
  {
    id: "he-venido-a-dar-vida",
    titulo: "He Venido a Dar Vida",
    artista: "Centro Evangélico Vida Nueva",
    recomendada: true,
    imagenDark: "assets/logo-icon-dark.png",
    imagenLight: "assets/logo-icon-light.png",
    video: "399tF1XJQXQ",
    tipoVideo: "youtube",
    letra: [
      [
        "Yo he venido a dar vida",
        "Y vida en abundancia",
        "Yo vencí a la muerte y al diablo en la cruz",
        "Por eso le alabo",
        "Con todo el corazón",
        "Y declaro que eres mi Señor",
      ],
      [
        "// Resucitó a los muertos",
        "Le dio vista a los ciegos",
        "Limpió a los leprosos",
        "Y a los mudos puso a hablar //",
      ],
      [
        "Yo pronto volveré",
        "A buscar a mi amada",
        "Mi querida iglesia",
        "Sin mancha y sin arruga",
      ],
      [
        "Velad y orad porque en breve vendré",
        "Y estarán conmigo",
        "En la nueva Jerusalén",
      ],
      [
        "// Resucitó a los muertos",
        "Le dio vista a los ciegos",
        "Limpió a los leprosos",
        "Y a los mudos puso a hablar //",
      ],
    ],
  },
  {
    id: "como-arbol-plantado",
    titulo: "Como Árbol Plantado",
    artista: "Centro Evangélico Vida Nueva",
    recomendada: true,
    imagenDark: "assets/logo-icon-dark.png",
    imagenLight: "assets/logo-icon-light.png",
    poster: "assets/logo-banner.png",
    video: "assets/como-arbol-plantado.mpeg",
    tipoVideo: "local",
    letra: [
      [
        "Bienaventurado el varón",
        "que no anduvo en consejo de malo",
        "Sino que en la ley de Dios",
        "está su delicia",
        "Y en su ley medita de día y de noche",
      ],
      [
        "// Será como árbol plantado",
        "junto a corrientes de agua",
        "Que da su fruto en su tiempo",
        "y su hoja no cae",
        "Todo lo que hace prosperará. //",
      ],
      [
        "Bienaventurados todos",
        "los que en Él confían",
        "Los que sirven a Dios",
        "con temor y alegría",
        "Y en su ley medita de día y de noche",
      ],
      [
        "// Será como árbol plantado",
        "junto a corrientes de agua",
        "Que da su fruto en su tiempo",
        "y su hoja no cae",
        "Todo lo que hace prosperará. //",
      ],
      ["Prosperará..."],
    ],
  },
  {
    id: "santo-santo",
    titulo: "Santo Santo",
    artista: "Centro Evangélico Vida Nueva",
    imagenDark: "assets/logo-icon-dark.png",
    imagenLight: "assets/logo-icon-light.png",
    video: "fjAsHIkNQO4",
    tipoVideo: "youtube",
    letra: [
      [
        "Santo Santo eres tú Señor",
        "Gloria Gloria yo te doy a Ti",
        "Santo Santo eres tú Señor",
        "Gloria te doy.",
      ],
      [
        "// Hoy Señor yo te agradezco",
        "lo que has hecho por mi",
        "mi vida entera yo te rindo",
        "tu nombre quiero adorar. //",
      ],
      [
        "// Santo Santo eres tú Señor",
        "Gloria Gloria yo te doy a Ti",
        "Santo Santo eres tú Señor",
        "Gloria te doy. //",
      ],
      [
        "// Él perdona tus pecados",
        "sana todas tus dolencias",
        "te corona de favores",
        "levantará tu vida. //",
      ],
      [
        "// Santo Santo eres tú Señor",
        "Gloria Gloria yo te doy a Ti",
        "Santo Santo eres tú Señor",
        "Gloria te doy. //",
      ],
      [
        "// Hoy Señor yo te agradezco",
        "lo que has hecho por mi",
        "mi vida entera yo te rindo",
        "tu nombre quiero adorar. //",
      ],
      [
        "// Santo Santo eres tú Señor",
        "Gloria y honra yo te doy a Ti",
        "Santo Santo eres tú Señor",
        "Gloria te doy. //",
      ],
      ["Gloria te doy", "Gloria te doy..."],
    ],
  },
  {
    id: "nadie-te-puede-dar",
    titulo: "Nadie te puede dar",
    artista: "Centro Evangélico Vida Nueva",
    imagenDark: "assets/logo-icon-dark.png",
    imagenLight: "assets/logo-icon-light.png",
    video: "MBh2DhGVfSI",
    tipoVideo: "youtube",
    letra: [
      [
        "Nadie te puede dar",
        "Lo que no tiene,",
        "El vacío de tu corazón",
        "Nadie lo puede llenar.",
      ],
      [
        "Si quieres ser feliz",
        "Y tener paz en tu corazón,",
        "Guarda tu boca del mal",
        "Y tu mente de toda ansiedad.",
      ],
      [
        "No busques más,",
        "Él quiere sanar",
        "Las heridas de tu pobre corazón.",
        "Ven a Él,",
        "No llores más,",
        "Levántate y adora",
        "A tu Señor.",
      ],
      [
        "Echa de tu vida hoy",
        "Lo que no viene de Dios,",
        "Y aprende a vivir",
        "Confiando en el Señor.",
      ],
      [
        "Y olvídate de una vez",
        "De tu pasado sin el Señor,",
        "No te condenes más,",
        "Ya eres un hijo de Dios.",
      ],
      [
        "No busques más,",
        "Él quiere sanar",
        "Las heridas de tu pobre corazón.",
        "Ven a Él,",
        "No llores más,",
        "Levántate y adora",
        "A tu Señor.",
      ],
    ],
  },
  {
    id: "ya-lo-sabemos",
    titulo: "Ya lo sabemos",
    artista: "Centro Evangélico Vida Nueva",
    imagenDark: "assets/logo-icon-dark.png",
    imagenLight: "assets/logo-icon-light.png",
    video: "FIR-usmKFjQ",
    tipoVideo: "youtube",
    letra: [
      [
        "Todos los profetas",
        "Del antiguo testamento",
        "Hablaron de Él,",
        "Ya lo sabemos.",
      ],
      [
        "El cordero que ofreció",
        "Abraham sobre el altar",
        "Hablaba de Él,",
        "Ya lo sabemos.",
      ],
      [
        "Pero lo que no sabemos",
        "Es qué viste en nosotros",
        "Para morir en una cruz.",
      ],
      [
        "// Te amo, Señor. //",
        "Ocupaste mi lugar",
        "Muriendo en una cruz por mí.",
      ],
      [
        "El maná que en el desierto",
        "Alimentó a tu pueblo",
        "Hablaba de Él,",
        "Ya lo sabemos.",
      ],
      [
        "El agua de la roca",
        "Que sació a Israel",
        "Hablaba de Él,",
        "Ya lo sabemos.",
      ],
      [
        "Pero lo que no sabemos",
        "Es qué viste en nosotros",
        "Para morir en una cruz.",
      ],
      [
        "// Te amo, Señor. //",
        "Ocupaste mi lugar",
        "Muriendo en una cruz por mí.",
      ],
      ["[♪ ♪ ♪ ♪ ♪ ♪ ♪]"],
      [
        "// Te amo, Señor. //",
        "/// Ocupaste mi lugar",
        "Muriendo en una cruz por mí. ///",
      ],
    ],
  },
  {
    id: "vamos-por-el-mundo",
    titulo: "Vamos por el mundo",
    artista: "Centro Evangélico Vida Nueva",
    imagenDark: "assets/logo-icon-dark.png",
    imagenLight: "assets/logo-icon-light.png",
    video: "jWOihLPeH44",
    tipoVideo: "youtube",
    letra: [
      [
        "Vamos por el mundo",
        "Cantando alabanzas,",
        "Diciéndole a todos",
        "Que Jesús nos cambió",
        "Y un día nos iremos con Él",
        "A la gloria.",
      ],
      [
        "Se puede cambiar",
        "En el nombre de Cristo",
        "Y dejar todo aquello",
        "Que no sirve de nada",
        "Y empezar una vida",
        "Llena de Dios, llena de amor.",
      ],
      [
        "Y le damos gloria a Dios,",
        "Le damos gloria a Dios.",
        "Tu Espíritu me llena de Ti.",
      ],
      [
        "Quisiera decirte que mi vida cambió",
        "Cuando Él vino a mi corazón,",
        "Se llevó mis cargas,",
        "Borró mis pecados",
        "Y me liberó.",
      ],
      [
        "Y al poco tiempo",
        "Sentí que me llamaba",
        "Para dejarlo todo",
        "Y servirle a Él.",
      ],
      ["Yo quiero que tú sepas", "Que yo estoy aquí", "Para servirte a ti."],
      [
        "Le damos gloria a Dios,",
        "Le damos gloria a Dios.",
        "Tu Espíritu me llena de Ti.",
      ],
      [
        "Te damos gloria, Dios,",
        "Te damos gloria, Dios.",
        "Tu Espíritu me llena de Ti.",
      ],
    ],
  },
  {
    id: "no-hay-nadie-como-tu",
    titulo: "No hay nadie como tú",
    artista: "Centro Evangélico Vida Nueva",
    imagenDark: "assets/logo-icon-dark.png",
    imagenLight: "assets/logo-icon-light.png",
    video: "o5yWix2F1yg",
    tipoVideo: "youtube",
    letra: [
      [
        "/// No hay nadie como Tú",
        "No hay nadie como Tú",
        "Ni el cielo ni en la tierra",
        "No hay nadie como Tú. ///",
      ],
      [
        "// Te damos la gloria,",
        "La alabanza y el poder",
        "Porque no hay nadie en el cielo como Tú. //",
      ],
      [
        "// No hay nadie como Tú",
        "No hay nadie como Tú",
        "Ni el cielo ni en la tierra",
        "No hay nadie como Tú. //",
      ],
      [
        "//Dale a Jesucristo",
        "Tus temores y ansiedad",
        "En sus brazos Él tus cargas llevará. //",
      ],
      [
        "/// No hay nadie como Tú",
        "No hay nadie como Tú",
        "Ni el cielo ni en la tierra",
        "No hay nadie como Tú. ///",
      ],
      ["♪ ♪ ♪ ♪ ♪ ♪ ♪"],
      [
        "// No hay nadie como Tú",
        "No hay nadie como Tú",
        "Ni el cielo ni en la tierra",
        "No hay nadie como Tú. //",
      ],
      [
        "// Te damos la gloria,",
        "La alabanza y el poder",
        "Porque no hay nadie en el cielo como Tú. //",
      ],
      [
        "// No hay nadie como Tú",
        "No hay nadie como Tú",
        "Ni el cielo ni en la tierra",
        "No hay nadie como Tú. //",
      ],
      ["// Ni el cielo ni en la tierra", "No hay nadie como Tú. //"],
    ],
  },
  {
    id: "no-temere",
    titulo: "No temeré",
    artista: "Centro Evangélico Vida Nueva",
    imagenDark: "assets/logo-icon-dark.png",
    imagenLight: "assets/logo-icon-light.png",
    video: "UQP16utMtvM",
    tipoVideo: "youtube",
    letra: [
      [
        "¿Por qué te escondes",
        "De la presencia de Dios?",
        "Te pareces a Adán",
        "En el jardín del Edén.",
      ],
      ["No tengas miedo", "A los gigantes,", "Todos caerán", "Ante ti."],
      [
        "// Mayor es el que está en mí",
        "Que el que viene contra mí. //",
        "El Señor es mi luz y mi salvación,",
        "No temeré lo que me puedan hacer.",
        "Mayor es el que está en mí",
        "Que el que viene contra mí.",
      ],
      ["[♪ ♪ ♪ ♪ ♪ ♪ ♪]"],
      [
        "No dejes que los cuernos",
        "Te roben la semilla",
        "Que el Señor Jesús",
        "Plantó en tu corazón.",
      ],
      [
        "Sal de la cueva",
        "Y dale a Él tu ilusión,",
        "Hay dolores que son",
        "Toda una bendición.",
      ],
      [
        "Mayor es el que está en mí",
        "Que el que viene contra mí.",
        "El Señor es mi luz y mi salvación,",
        "No temeré lo que me puedan hacer.",
        "Mayor es el que está en mí",
        "Que el que viene contra mí.",
      ],
      ["[♪ ♪ ♪ ♪ ♪ ♪ ♪]"],
      [
        "Mayor es el que está en mí",
        "Que el que viene contra mí.",
        "El Señor es mi luz y mi salvación,",
        "No temeré lo que me puedan hacer.",
      ],
      [
        "Mayor es el que está en mí",
        "Que el que viene contra mí.",
        "El Señor es mi luz y mi salvación,",
        "No temeré lo que me puedan hacer.",
      ],
    ],
  },
  {
    id: "empecemos-a-alabar",
    titulo: "Empecemos a alabar",
    artista: "Centro Evangélico Vida Nueva",
    imagenDark: "assets/logo-icon-dark.png",
    imagenLight: "assets/logo-icon-light.png",
    video: "hHAkLfN5FSo",
    tipoVideo: "youtube",
    letra: [
      [
        "// Empecemos a alabar",
        "A Cristo el Señor,",
        "Y el Espíritu se moverá",
        "Con plena libertad. //",
      ],
      [
        "// Si todavía no le sientes,",
        "Empieza a alabar,",
        "Y el Espíritu se moverá",
        "Con plena libertad. //",
      ],
      [
        "// Batiendo nuestras manos",
        "Alabemos al Señor,",
        "Y el Espíritu se moverá",
        "Con plena libertad. //",
      ],
      [
        "// Si todavía no le sientes,",
        "Empieza a alabar,",
        "Y el Espíritu se moverá",
        "Con plena libertad. //",
      ],
      ["[♪ ♪ ♪ ♪ ♪ ♪ ♪]"],
      [
        "// Alzando nuestras manos",
        "Alabemos al Señor,",
        "Alabemos al Señor",
        "En espíritu y en verdad. //",
      ],
      [
        "// Si todavía no le sientes,",
        "Empieza a alabar,",
        "Y el Espíritu se moverá",
        "Con plena libertad. //",
      ],
      [
        "// Si todavía no le sientes,",
        "Empieza a alabar,",
        "Y el Espíritu se moverá",
        "Con plena libertad. //",
      ],
      ["[♪ ♪ ♪ ♪ ♪ ♪ ♪]"],
    ],
  },
  {
    id: "ha-nacido-en-belen",
    titulo: "Ha nacido en Belén",
    artista: "Centro Evangélico Vida Nueva",
    imagenDark: "assets/logo-icon-dark.png",
    imagenLight: "assets/logo-icon-light.png",
    video: "2EfLmik9Egw",
    tipoVideo: "youtube",
    letra: [
      [
        "// Ha nacido en Belén",
        "El Rey de Israel,",
        "Adorémosle,",
        "Adorémosle.",
      ],
      [
        "Cuando Jesús nació",
        "La noche iluminó,",
        "Adorémosle,",
        "Adorémosle. //",
      ],
      [
        "// Los ángeles cantaron",
        "Dando gloria a Dios,",
        "Pastores se acercaron",
        "A ver al Niño Dios.",
      ],
      [
        "En el mesón no había",
        "Lugar para nacer,",
        "Pero la luz del mundo",
        "Acababa de nacer.",
      ],
      ["Ha nacido en Belén", "El Rey de Israel,", "Adorémosle,", "Adorémosle."],
      [
        "Cuando Jesús nació",
        "La noche iluminó,",
        "Adorémosle,",
        "Adorémosle. //",
      ],
      [
        "Los ángeles cantaron",
        "Dando gloria a Dios,",
        "Pastores se acercaron",
        "A ver al Niño Dios.",
      ],
      [
        "En el mesón no había",
        "Lugar para nacer,",
        "Pero la luz del mundo",
        "Acababa de nacer.",
      ],
      ["[♪ ♪ ♪ ♪ ♪ ♪ ♪]"],
      [
        "// Ha nacido en Belén",
        "El Rey de Israel,",
        "Adorémosle,",
        "Adorémosle.",
      ],
      [
        "Cuando Jesús nació",
        "La noche iluminó,",
        "Adorémosle,",
        "Adorémosle. //",
      ],
      [
        "Los ángeles cantaron",
        "Dando gloria a Dios,",
        "Pastores se acercaron",
        "A ver al Niño Dios.",
      ],
      [
        "En el mesón no había",
        "Lugar para nacer,",
        "Pero la luz del mundo",
        "Acababa de nacer.",
      ],
      ["Ha nacido en Belén", "El Rey de Israel,", "Adorémosle,", "Adorémosle."],
      ["Cuando Jesús nació", "La noche iluminó,", "Adorémosle,", "Adorémosle."],
      ["Ha nacido en Belén."],
    ],
  },
  {
    id: "los-reyes-magos",
    titulo: "Los Reyes Magos",
    artista: "Centro Evangélico Vida Nueva",
    imagenDark: "assets/logo-icon-dark.png",
    imagenLight: "assets/logo-icon-light.png",
    video: "th3qR9FkrIU",
    tipoVideo: "youtube",
    letra: [
      [
        "Venimos de lejanas tierras",
        "A adorar al Rey,",
        "Oro, incienso y mirra",
        "Traemos para Él.",
      ],
      [
        "De oriente venimos",
        "Siguiendo su estrella,",
        "En Belén de Judea",
        "Te han visto nacer.",
      ],
      [
        "Envuelto en pañales",
        "Nació en un pesebre,",
        "Cristo el Rey",
        "Ha nacido en Belén.",
      ],
      [
        "El Señor le dará el trono",
        "De David su padre,",
        "Y reinará sobre Jacob",
        "Para siempre.",
      ],
      [
        "Así se cumplieron",
        "Las escrituras,",
        "Ha nacido en Belén",
        "El Rey de Israel.",
      ],
      [
        "El Alfa y la Omega,",
        "El principio y el fin,",
        "Paz en la tierra",
        "Y gloria al Señor.",
      ],
      ["// Cristo el Rey", "Ha nacido en Belén. //"],
      ["[♪ ♪ ♪ ♪ ♪ ♪ ♪]"],
      [
        "Venimos de lejanas tierras",
        "A adorar al Rey,",
        "Oro, incienso y mirra",
        "Traemos para Él.",
      ],
      [
        "De oriente venimos",
        "Siguiendo su estrella,",
        "En Belén de Judea",
        "Te han visto nacer.",
      ],
      [
        "Envuelto en pañales",
        "Nació en un pesebre,",
        "Cristo el Rey",
        "Ha nacido en Belén.",
      ],
      [
        "Así se cumplieron",
        "Las escrituras,",
        "Ha nacido en Belén",
        "El Rey de Israel.",
      ],
      [
        "El Alfa y la Omega,",
        "El principio y el fin,",
        "Paz en la tierra",
        "Y gloria al Señor.",
      ],
      ["// Cristo el Rey", "Ha nacido en Belén. //"],
      ["Cristo el Rey", "Ha nacido en Belén."],
    ],
  },
  {
    id: "tu-eres-mi-fuerza",
    titulo: "Tú eres mi fuerza",
    artista: "Centro Evangélico Vida Nueva",
    imagenDark: "assets/logo-icon-dark.png",
    imagenLight: "assets/logo-icon-light.png",
    video: "4Y9v_BTSzaM",
    tipoVideo: "youtube",
    letra: [
      [
        "Tú eres mi fuerza, mi fortaleza,",
        "No temeré lo que pueda hacerme el hombre.",
        "Tú eres mi escudo, mi alto refugio,",
        "Contigo siempre estaré seguro.",
      ],
      [
        "Él volverá, Él volverá, Él volverá, Él volverá,",
        "Viene en las nubes a buscarme a mí.",
      ],
      [
        "Toda mi vida le pertenece,",
        "Soy templo del Espíritu de Dios.",
        "Nada ni nadie podrá separarme",
        "De las manos de mi amado Salvador.",
      ],
      [
        "Él volverá, Él volverá, Él volverá, Él volverá,",
        "Viene en las nubes a buscarme a mí.",
      ],
      ["[♪ ♪ ♪ ♪ ♪ ♪ ♪]"],
      [
        "Tú eres mi fuerza, mi fortaleza,",
        "No temeré lo que pueda hacerme el hombre.",
        "Tú eres mi escudo, mi alto refugio,",
        "Contigo siempre estaré seguro.",
      ],
      [
        "Él volverá, Él volverá, Él volverá, Él volverá,",
        "Viene en las nubes a buscarme a mí.",
      ],
      [
        "Toda mi vida le pertenece,",
        "Soy templo del Espíritu de Dios.",
        "Nada ni nadie podrá separarme",
        "De las manos de mi amado Salvador.",
      ],
      [
        "Él volverá, Él volverá, Él volverá, Él volverá,",
        "// Viene en las nubes a buscarme a mí. //",
      ],
      ["Viene en las nubes a buscarme a mí."],
    ],
  },
  {
    id: "descansar-en-dios",
    titulo: "Descansar en Dios",
    artista: "Centro Evangélico Vida Nueva",
    imagenDark: "assets/logo-icon-dark.png",
    imagenLight: "assets/logo-icon-light.png",
    video: "4EViAmU-NzY",
    tipoVideo: "youtube",
    letra: [
      [
        "// Si tienes roto el corazón",
        "De tanto sufrir y llorar,",
        "Tienes que aprender",
        "A descansar en Dios.",
      ],
      [
        "No importa lo que te dijeron,",
        "No importa lo que te hicieron,",
        "Tienes que aprender",
        "A descansar en Dios. //",
      ],
      ["[♪ ♪ ♪ ♪ ♪ ♪ ♪]"],
      ["// Aprende a confiar", "En las promesas del Señor", "Para tu vida,"],
      [
        "Y no le des lugar",
        "A malos pensamientos",
        "Que te pueden hoy matar. //",
      ],
      ["[♪ ♪ ♪ ♪ ♪ ♪ ♪]"],
      [
        "// Si quieres superar",
        "Las heridas del pasado,",
        "Tienes que aprender",
        "A descansar en Dios.",
      ],
      [
        "Si no quieres perder la paz",
        "De tu corazón,",
        "Tienes que aprender",
        "A descansar en Dios. //",
      ],
      ["[♪ ♪ ♪ ♪ ♪ ♪ ♪]"],
      ["// Aprende a confiar", "En las promesas del Señor", "Para tu vida,"],
      [
        "Y no le des lugar",
        "A malos pensamientos",
        "Que te pueden hoy matar. //",
      ],
      ["[♪ ♪ ♪ ♪ ♪ ♪ ♪]"],
      ["// Aprende a confiar", "En las promesas del Señor", "Para tu vida,"],
      [
        "Y no le des lugar",
        "A malos pensamientos",
        "Que te pueden hoy matar. //",
      ],
      ["/// Tienes que aprender", "A descansar en Dios. ///"],
    ],
  },
  {
    id: "no-es-el-momento",
    titulo: "No es el momento",
    artista: "Centro Evangélico Vida Nueva",
    imagenDark: "assets/logo-icon-dark.png",
    imagenLight: "assets/logo-icon-light.png",
    video: "gQ_KXNNHXSw",
    tipoVideo: "youtube",
    letra: [
      [
        "No es el momento",
        "De volver atrás,",
        "No es el momento",
        "De abandonar."
      ],
      [
        "Sigue adelante",
        "Mirándolo a Él,",
        "Pronto llegaremos",
        "Al hogar."
      ],
      [
        "Olvidando",
        "Lo que queda atrás,",
        "Extendiéndome",
        "A lo que está adelante."
      ],
      [
        "Prosigo a la meta,",
        "Al llamado de mi Dios,",
        "Con paciencia",
        "Llegaremos al hogar."
      ],
      [
        "Diga el débil:",
        "Fuerte soy en Dios,",
        "En Cristo",
        "Yo soy más",
        "Que vencedor."
      ],
      [
        "Él renueva hoy mis fuerzas,",
        "Hay victoria en el nombre del Señor."
      ],
      [
        "[♪ ♪ ♪ ♪ ♪ ♪ ♪]"
      ],
      [
        "No es el momento",
        "De volver atrás,",
        "No es el momento",
        "De abandonar."
      ],
      [
        "Sigue adelante",
        "Mirándolo a Él,",
        "Pronto llegaremos",
        "Al hogar."
      ],
      [
        "Olvidando",
        "Lo que queda atrás,",
        "Extendiéndome",
        "A lo que está adelante."
      ],
      [
        "Prosigo a la meta,",
        "Al llamado de mi Dios,",
        "Con paciencia",
        "Llegaremos al hogar."
      ],
      [
        "[♪ ♪ ♪ ♪ ♪ ♪ ♪]"
      ],
      [
        "// Diga el débil:",
        "Fuerte soy en Dios,",
        "En Cristo",
        "Yo soy más",
        "Que vencedor."
      ],
      [
        "Él renueva hoy mis fuerzas,",
        "Hay victoria en el nombre del Señor. //"
      ],
      [
        "// Hay victoria en el nombre del Señor. //"
      ]
    ]
  },
  {
    id: "al-enemigo-yo-venci",
    titulo: "Al enemigo yo vencí",
    artista: "Centro Evangélico Vida Nueva",
    imagenDark: "assets/logo-icon-dark.png",
    imagenLight: "assets/logo-icon-light.png",
    recomendada: true,
    video: "yX8SWX1v7Ac",
    tipoVideo: "youtube",
    letra: [
      [
        "// Tú vienes contra mí",
        "Con espada y jabalina,",
        "Yo voy contra ti",
        "En el nombre de mi Dios."
      ],
      [
        "No te tengo miedo",
        "Por muy grande que tú seas,",
        "Hoy te venceré",
        "Y todos lo verán. //"
      ],
      [
        "[♪ ♪ ♪ ♪ ♪ ♪ ♪]"
      ],
      [
        "// Al enemigo yo vencí",
        "En el nombre de mi Dios,",
        "Mayor es el que está en mí",
        "Que el que viene contra mí."
      ],
      [
        "Por un camino vendrán",
        "Y por siete huirán. //"
      ],
      [
        "[♪ ♪ ♪ ♪ ♪ ♪ ♪]"
      ],
      [
        "Aunque nadie se atrevía",
        "A pelear contra el gigante,",
        "Era día de victoria",
        "Y de gloria para Dios."
      ],
      [
        "Con mi honda y una piedra",
        "Al gigante yo vencí,",
        "Porque había provocado",
        "Al Dios de Israel."
      ],
      [
        "// Al enemigo yo vencí",
        "En el nombre de mi Dios,",
        "Mayor es el que está en mí",
        "Que el que viene contra mí."
      ],
      [
        "Por un camino vendrán",
        "Y por siete huirán. //"
      ],
      [
        "[♪ ♪ ♪ ♪ ♪ ♪ ♪]"
      ],
      [
        "// Por más grande que parezca",
        "Tu problema y tu dolor,",
        "Yo he venido a darte vida,",
        "Paz, gozo y salvación."
      ],
      [
        "Yo tengo la victoria",
        "En el nombre de Jesús,",
        "El enemigo está vencido",
        "Por la sangre de Jesús. //"
      ],
      [
        "// Al enemigo yo vencí",
        "En el nombre de mi Dios,",
        "Mayor es el que está en mí",
        "Que el que viene contra mí."
      ],
      [
        "Por un camino vendrán",
        "Y por siete huirán. //"
      ],
      [
        "// Al enemigo yo vencí",
        "En el nombre de mi Dios,",
        "Mayor es el que está en mí",
        "Que el que viene contra mí."
      ],
      [
        "Por un camino vendrán",
        "Y por siete huirán. //"
      ],
      [
        "¡Huirán!"
      ]
    ]
  },
  {
    id: "yo-le-doy-gloria-a-el",
    titulo: "Yo le doy gloria a Él",
    artista: "Centro Evangélico Vida Nueva",
    imagenDark: "assets/logo-icon-dark.png",
    imagenLight: "assets/logo-icon-light.png",
    video: "qcFMnqT6KFs",
    tipoVideo: "youtube",
    letra: [
      [
        "// Mi corazón se regocija",
        "En mi Dios, mi Salvador,",
        "Mi refugio es",
        "El Dios de Israel."
      ],
      [
        "Él me dio lo que le pedí,",
        "Respondió a mi oración,",
        "Este pobre clamó",
        "Y Él me oyó. //"
      ],
      [
        "// Y todo el mundo podrá ver",
        "Que mi Dios tiene el poder,",
        "Yo le doy gloria a Él,",
        "Yo le doy gloria a Él. //"
      ],
      [
        "[♪ ♪ ♪ ♪ ♪ ♪ ♪]"
      ],
      [
        "// Cuán grandes son tus obras",
        "Y profundos tus pensamientos,",
        "No hay nadie como Tú."
      ],
      [
        "Caerán a tu lado mil",
        "Y diez mil a tu diestra,",
        "Mas Yo te libraré",
        "Y te guardaré. //"
      ],
      [
        "// Y todo el mundo podrá ver",
        "Que mi Dios tiene el poder,",
        "Yo le doy gloria a Él,",
        "Yo le doy gloria a Él. //"
      ],
      [
        "// Y todo el mundo podrá ver",
        "Que mi Dios tiene el poder,",
        "Yo le doy gloria a Él,",
        "Yo le doy gloria a Él. //"
      ],
      [
        "Le doy gloria a Él."
      ],
      [
        "[♪ ♪ ♪ ♪ ♪ ♪ ♪]"
      ]
    ]
  },
  {
    id: "mi-socorro-viene-de-dios",
    titulo: "Mi socorro viene de Dios",
    artista: "Centro Evangélico Vida Nueva",
    imagenDark: "assets/logo-icon-dark.png",
    imagenLight: "assets/logo-icon-light.png",
    video: "Tfx_pRO2KnQ",
    tipoVideo: "youtube",
    letra: [
      [
        "¿De dónde, de dónde vendrá mi socorro?",
        "Mi socorro viene de Dios,",
        "Él que hizo los cielos y la tierra,",
        "Él te guardará de todo mal."
      ],
      [
        "// No se dormirá",
        "Él que guarda a Israel,",
        "El sol no te fatigará de día",
        "Ni la luna de noche. //"
      ],
      [
        "[♪ ♪ ♪ ♪ ♪ ♪ ♪]"
      ],
      [
        "Él es tu guardador,",
        "Él es tu sombra a tu mano derecha,",
        "Él guarda tu salida y tu entrada",
        "Desde ahora y para siempre."
      ],
      [
        "// No se dormirá",
        "Él que guarda a Israel,",
        "El sol no te fatigará de día",
        "Ni la luna de noche. //"
      ],
      [
        "[♪ ♪ ♪ ♪ ♪ ♪ ♪]"
      ],
      [
        "No se dormirá",
        "Él que guarda a Israel,",
        "El sol no te fatigará de día",
        "Ni la luna de noche."
      ]
    ]
  },
  {
    id: "bienaventurado",
    titulo: "Bienaventurado",
    artista: "Centro Evangélico Vida Nueva",
    imagenDark: "assets/logo-icon-dark.png",
    imagenLight: "assets/logo-icon-light.png",
    video: "yyZf7urK8Ts",
    tipoVideo: "youtube",
    letra: [
      [
        "// Bienaventurado",
        "El que no anduvo en consejos de malo,",
        "Ni en silla de escarnecedores",
        "Se ha sentado. //"
      ],
      [
        "// Será como árbol plantado",
        "Junto a corrientes de agua,",
        "Que da su fruto en su tiempo",
        "Y su hoja no cae. //"
      ],
      [
        "[♪ ♪ ♪ ♪ ♪ ♪ ♪]"
      ],
      [
        "// Merece la pena seguir",
        "Por el camino angosto,",
        "Venciendo toda tentación",
        "Que el diablo te quiera poner. //"
      ],
      [
        "// Caminaremos por calles de oro",
        "En la Nueva Jerusalén,",
        "Y tu nombre será mencionado",
        "Por los labios de nuestro Rey. //"
      ],
      [
        "[♪ ♪ ♪ ♪ ♪ ♪ ♪]"
      ],
      [
        "Bienaventurado",
        "El que no anduvo en consejos de malo,",
        "Ni en silla de escarnecedores",
        "Se ha sentado."
      ],
      [
        "// Será como árbol plantado",
        "Junto a corrientes de agua,",
        "Que da su fruto en su tiempo",
        "Y su hoja no cae. //"
      ],
      [
        "Merece la pena seguir",
        "Por el camino angosto,",
        "Venciendo toda tentación",
        "Que el diablo te quiera poner."
      ],
      [
        "// Caminaremos por calles de oro",
        "En la Nueva Jerusalén,",
        "Y tu nombre será mencionado",
        "Por los labios de nuestro Rey. //"
      ],
      [
        "Por los labios de nuestro Rey,",
        "Por los labios de nuestro Rey."
      ]
    ]
  },
  {
    id: "lo-importante-es-no-temer",
    titulo: "Lo importante es no temer",
    artista: "Centro Evangélico Vida Nueva",
    imagenDark: "assets/logo-icon-dark.png",
    imagenLight: "assets/logo-icon-light.png",
    recomendada: true,
    video: "UWnY2FV9Els",
    tipoVideo: "youtube",
    letra: [
      [
        "// Lo importante es no temer",
        "Y mantener la fe. //"
      ],
      [
        "// El que cree en Él no tiene miedo,",
        "Miedo a perder nunca la fe;",
        "Al Rey del universo lo tenemos,",
        "De todo mal Él nos protegerá. //"
      ],
      [
        "// Lo importante es no temer",
        "Y mantener la fe. //"
      ],
      [
        "// Mi Shemaamin Lo Mefajed",
        "Eta Emuna Leabed",
        "Velanu Yesh et Melej HaOlam",
        "VeHu Shomer Otanu Mikulam. //"
      ],
      [
        "// Lo importante es no temer",
        "Y mantener la fe. //"
      ]
    ]
  },
  {
    id: "viento-en-contra",
    titulo: "Viento en contra",
    artista: "Centro Evangélico Vida Nueva",
    imagenDark: "assets/logo-icon-dark.png",
    imagenLight: "assets/logo-icon-light.png",
    video: "FHxM0Zz462c",
    tipoVideo: "youtube",
    letra: [
      [
        "Navegando por el mar de la vida",
        "Te puedes cansar, te puedes desanimar."
      ],
      [
        "Por eso es bueno sepas",
        "Que Él siempre a tu lado está."
      ],
      [
        "Hay que aprender a navegar",
        "Con el viento en contra,",
        "No siempre la vida",
        "Te dará lo que tú esperabas."
      ],
      [
        "// Pero el Señor",
        "Nunca te dejará. //"
      ],
      [
        "// Hay que confiar en Él,",
        "Abre la vela de tu corazón,",
        "Déjate llevar",
        "Por el viento del Espíritu de Dios. //"
      ],
      [
        "[♪ ♪ ♪ ♪ ♪ ♪ ♪]"
      ],
      [
        "Pongamos la mirada",
        "Solamente en el Señor,",
        "No mires a nadie,",
        "Todos tenemos defectos."
      ],
      [
        "Que tire la primera piedra",
        "Quien esté libre de pecado."
      ],
      [
        "Hay que aprender a navegar",
        "Con el viento en contra,",
        "No siempre la vida",
        "Te dará lo que tú esperabas."
      ],
      [
        "// Pero el Señor",
        "Nunca te dejará. //"
      ],
      [
        "Hay que confiar en Él,",
        "Abre la vela de tu corazón,",
        "Déjate llevar",
        "Por el viento del Espíritu de Dios."
      ],
      [
        "[♪ ♪ ♪ ♪ ♪ ♪ ♪]"
      ],
      [
        "Hay que confiar en Él,",
        "Abre la vela de tu corazón,",
        "Déjate llevar",
        "Por el viento del Espíritu de Dios."
      ],
      [
        "Hay que aprender a navegar",
        "Con el viento en contra."
      ]
    ]
  }
];
