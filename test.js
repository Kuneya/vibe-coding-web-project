// test-connection.js
const mongoose = require('mongoose');

const usuario = "al2212000776";
const password = "jaQQ1dB9vXXrlt3Y";
const nombreBD = "Cluster0";
const uri = `mongodb+srv://${usuario}:${password}@cluster0.tyeztfm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

/*const deportistaSchema = new mongoose.Schema({
  nombres: String,
  apellidos: String,
  fecha_nacimiento: Date,
  pais: String,
  disciplina: String,
  email: String,
  password: String,
  logros: String,
  portafolio: String,
  objetivos: String,
  preferencias: String,
  referencias: String,
  consentimiento: Boolean
});

const Deportista = mongoose.model('Deportista', deportistaSchema);

const deportistas = [
  {
    nombres: "Carlos Andrés",
    apellidos: "Ramírez Soto",
    fecha_nacimiento: new Date("1995-04-12"),
    pais: "Colombia",
    disciplina: "Atletismo",
    email: "carlos.ramirez@correo.com",
    password: "Atlet1$mo2024",
    logros: "Medalla de oro en Juegos Nacionales, Top 5 en Sudamericano Sub-23",
    portafolio: "https://portafolio.com/carlosramirez",
    objetivos: "Clasificar al Mundial de Atletismo; representar a Colombia en Juegos Olímpicos",
    preferencias: "Apoyo en indumentaria, viajes y nutrición deportiva",
    referencias: "Juan Pérez (compañero), Luis Martínez (entrenador)",
    consentimiento: true
  },
  {
    nombres: "Lucía Fernanda",
    apellidos: "Gómez Rivas",
    fecha_nacimiento: new Date("1998-10-03"),
    pais: "México",
    disciplina: "Natación",
    email: "lucia.gomez@correo.com",
    password: "N4taC!on2024",
    logros: "Campeona nacional juvenil, Finalista Panamericano",
    portafolio: "https://portafolio.com/luciagomez",
    objetivos: "Reducir tiempos en 100m mariposa; clasificar a Juegos Centroamericanos",
    preferencias: "Marcas de ropa deportiva, patrocinio en giras",
    referencias: "Ana Morales (compañera), Pedro Delgado (entrenador)",
    consentimiento: true
  },
  {
    nombres: "Martín Alejandro",
    apellidos: "Vega Torres",
    fecha_nacimiento: new Date("2000-01-20"),
    pais: "Argentina",
    disciplina: "Ciclismo de montaña",
    email: "martin.vega@correo.com",
    password: "C1cli$moMTB2025",
    logros: "1er lugar Copa Cordobesa, Top 10 Campeonato Argentino",
    portafolio: "https://portafolio.com/martinvega",
    objetivos: "Competir en circuito UCI; establecer escuela de ciclismo local",
    preferencias: "Bicicletas profesionales, suplementos y viajes",
    referencias: "Lucas Torres (compañero), Diego Suárez (entrenador)",
    consentimiento: true
  },
  {
    nombres: "Camila Soledad",
    apellidos: "López Díaz",
    fecha_nacimiento: new Date("1997-06-15"),
    pais: "Chile",
    disciplina: "Gimnasia artística",
    email: "camila.lopez@correo.com",
    password: "G1mnaS@rt2025",
    logros: "Plata en Juegos Sudamericanos, Mundial Juvenil",
    portafolio: "https://portafolio.com/camilalopez",
    objetivos: "Perfeccionar rutinas para Mundial; abrir academia de gimnasia",
    preferencias: "Ropa técnica, becas de entrenamiento",
    referencias: "Valentina Castro (compañera), Andrea Muñoz (entrenadora)",
    consentimiento: true
  },
  {
    nombres: "Daniel Enrique",
    apellidos: "Suárez Morales",
    fecha_nacimiento: new Date("2002-11-08"),
    pais: "Perú",
    disciplina: "Fútbol",
    email: "daniel.suarez@correo.com",
    password: "Futb0L#Pro2025",
    logros: "Goleador liga universitaria, Convocado Sub-20",
    portafolio: "https://portafolio.com/danielsuarez",
    objetivos: "Firmar con club internacional; ser entrenador juvenil",
    preferencias: "Botines, contrato con marca deportiva",
    referencias: "Carlos Ureta (compañero), Miguel Rojas (entrenador)",
    consentimiento: true
  },
  {
    nombres: "Paola Andrea",
    apellidos: "Martínez Herrera",
    fecha_nacimiento: new Date("1996-03-27"),
    pais: "Ecuador",
    disciplina: "Levantamiento de pesas",
    email: "paola.martinez@correo.com",
    password: "Pesas!2025Up",
    logros: "Campeona nacional, Finalista Panamericanos",
    portafolio: "https://portafolio.com/paolamartinez",
    objetivos: "Clasificar a París 2028; entrenar a nuevas atletas",
    preferencias: "Suplementación, entrenadores especializados",
    referencias: "Andrea López (compañera), Roberto Santamaría (entrenador)",
    consentimiento: true
  },
  {
    nombres: "Juan Pablo",
    apellidos: "Cruz Méndez",
    fecha_nacimiento: new Date("2001-07-10"),
    pais: "Guatemala",
    disciplina: "Taekwondo",
    email: "juanp.cruz@correo.com",
    password: "Tkdn4$$ion2025",
    logros: "Oro en Centroamericanos, Semifinalista Panamericano",
    portafolio: "https://portafolio.com/juanpcruz",
    objetivos: "Ganar medalla en Juegos Panamericanos; crear dojo propio",
    preferencias: "Viajes, equipo y uniformes",
    referencias: "Marcos Aguilar (compañero), Fernando López (entrenador)",
    consentimiento: true
  },
  {
    nombres: "Valeria Beatriz",
    apellidos: "Navarro Pineda",
    fecha_nacimiento: new Date("1999-05-05"),
    pais: "España",
    disciplina: "Tenis",
    email: "valeria.navarro@correo.com",
    password: "Ten1s*2025#",
    logros: "Campeona circuito regional, ITF Women’s Circuit",
    portafolio: "https://portafolio.com/valerianavarro",
    objetivos: "Entrar en el top 200 WTA; representar a España en JJOO",
    preferencias: "Raquetas, indumentaria profesional",
    referencias: "Laura Gómez (compañera), Óscar Rodríguez (entrenador)",
    consentimiento: true
  },
  {
    nombres: "Sebastián Diego",
    apellidos: "Morales Cárdenas",
    fecha_nacimiento: new Date("1994-09-19"),
    pais: "Uruguay",
    disciplina: "Remo",
    email: "sebastian.morales@correo.com",
    password: "Rem@2025Pro!",
    logros: "Bronce en Sudamericanos, Participación mundial universitario",
    portafolio: "https://portafolio.com/sebastianmorales",
    objetivos: "Clasificar a Juegos Olímpicos; enseñar remo a jóvenes",
    preferencias: "Barcos, remos y acceso a lagos",
    referencias: "Jorge Pino (compañero), Ernesto Silva (entrenador)",
    consentimiento: true
  },
  {
    nombres: "María del Carmen",
    apellidos: "Ruiz Sánchez",
    fecha_nacimiento: new Date("1993-02-22"),
    pais: "Paraguay",
    disciplina: "Voleibol",
    email: "maria.ruiz@correo.com",
    password: "V0lei@Plus2025",
    logros: "MVP liga nacional, Subcampeona sudamericana",
    portafolio: "https://portafolio.com/mariaruiz",
    objetivos: "Jugar en liga europea; impulsar voleibol femenino en su país",
    preferencias: "Apoyo en giras, visibilidad mediática",
    referencias: "Natalia Franco (compañera), Silvia Gómez (entrenadora)",
    consentimiento: true
  }
];



mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('✅ Conexión exitosa a MongoDB');
    return Deportista.insertMany(deportistas);
  })
  .then(() => {
    console.log('✅ Datos insertados correctamente');
    mongoose.connection.close();
  })
  .catch(err => {
    console.error('❌ Error:', err.message);
  });*/
  // ingreso de deportistas

  //ingreso de patrocinadores

  // Esquema (si ya lo tienes definido en otro archivo, importa en su lugar)
const patrocinadorSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true, // asegura que no se repitan correos
    match: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  },
  password: {
    type: String,
    required: true,
    minlength: 8 // adicional a la validación del lado del cliente
  },
  consentimiento: {
    type: Boolean,
    required: true
  },
  fechaRegistro: {
    type: Date,
    default: Date.now
  }
});

const Patrocinador = mongoose.model('Patrocinador', patrocinadorSchema);

// Datos a insertar
const patrocinadores = [
  {
    nombre: "Ana Torres - Fundación Impulso Deportivo",
    email: "ana.torres@impulsodeportivo.org",
    password: "Impul$2024!",
    consentimiento: true
  },
  {
    nombre: "Carlos Méndez - NutriSport MX",
    email: "carlos.mendez@nutrisport.mx",
    password: "NutriS#1234",
    consentimiento: true
  },
  {
    nombre: "María Ruiz - Patrocina Talento",
    email: "maria.ruiz@patrocina-talento.com",
    password: "Talent@2024!",
    consentimiento: true
  },
  {
    nombre: "Javier Salas - Deportes Elite Chile",
    email: "javier.salas@elitechile.cl",
    password: "Deport#Elite1",
    consentimiento: true
  },
  {
    nombre: "Laura Gómez - Visión Olímpica",
    email: "laura.gomez@visionolimpica.org",
    password: "V0l1mp!ca2025",
    consentimiento: true
  },
  {
    nombre: "Sergio Herrera - RunPower",
    email: "sergio.herrera@runpower.co",
    password: "RunP0w@2025",
    consentimiento: true
  },
  {
    nombre: "Natalia Vélez - Apoyo Deporte Femenino",
    email: "natalia.velez@adf.org",
    password: "ADF!2025#",
    consentimiento: true
  },
  {
    nombre: "Fernando Díaz - Energía Joven",
    email: "fernando.diaz@energiajoven.net",
    password: "EnergJ0v3n@",
    consentimiento: true
  },
  {
    nombre: "Gloria Peña - Alto Rendimiento",
    email: "gloria.pena@altorendimiento.pe",
    password: "Alt0Rend#24",
    consentimiento: true
  },
  {
    nombre: "Luis Cabrera - SponsorLatam",
    email: "luis.cabrera@sponsorlatam.com",
    password: "SpLat@m2024!",
    consentimiento: true
  }
];

// Conexión y carga
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(async () => {
  console.log('✅ Conectado a MongoDB');
  await Patrocinador.insertMany(patrocinadores);
  console.log('🎉 Patrocinadores insertados correctamente');
  mongoose.connection.close();
})
.catch(err => {
  console.error('❌ Error al insertar:', err.message);
});