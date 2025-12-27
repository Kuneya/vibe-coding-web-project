const express = require('express');
const router = express.Router();

// Importa los modelos
const Patrocinador = require('../models/patrocinador');
const Deportista = require('../models/deportista');
/*//Para las historias de exito
const app = express();
const inicioRouter = require('./router/inicio');
app.use('/',inicioRouter);*/

// Página principal
/*router.get('/', (req, res) => {
  res.render('inicio');
});*/

router.get('/inicio', (req, res) => {
  const historias = [
    {
      deportista: 'Sofía Hernández',
      patrocinador: 'EnergyPro',
      relato: 'Gracias al patrocinio de EnergyPro, Sofía pudo asistir a un centro de alto rendimiento en España, lo que le permitió mejorar su técnica y obtener medalla en el campeonato mundial juvenil.'
    },
    {
      deportista: 'Carlos Méndez',
      patrocinador: 'Agua Vital',
      relato: 'Carlos recibió el apoyo de Agua Vital en sus entrenamientos de montaña, quienes le proporcionaron equipo especializado y cubrieron sus gastos para competencias internacionales.'
    },
    {
      deportista: 'Valeria Ruiz',
      patrocinador: 'FastWear',
      relato: 'Valeria fue descubierta en un torneo local, y gracias al respaldo de FastWear, participó en su primer torneo internacional en Italia, donde fue reconocida como revelación del evento.'
    }
  ];
  res.render('inicio', { historias });
});

router.get('/eventos', (req, res) => {
  res.render('eventos');
});
router.get('/politica_de_privacidad', (req, res) => {
  res.render('politica_de_privacidad');
});
router.get('/contacto',(req,res)=>{
  res.render('contacto');
});
// Ruta para mostrar las historias de éxito
router.get('/', (req, res) => {
  const historias = [
    {
      deportista: 'Sofía Hernández',
      patrocinador: 'EnergyPro',
      relato: 'Gracias al patrocinio de EnergyPro, Sofía pudo asistir a un centro de alto rendimiento en España, lo que le permitió mejorar su técnica y obtener medalla en el campeonato mundial juvenil.'
    },
    {
      deportista: 'Carlos Méndez',
      patrocinador: 'Agua Vital',
      relato: 'Carlos recibió el apoyo de Agua Vital en sus entrenamientos de montaña, quienes le proporcionaron equipo especializado y cubrieron sus gastos para competencias internacionales.'
    },
    {
      deportista: 'Valeria Ruiz',
      patrocinador: 'FastWear',
      relato: 'Valeria fue descubierta en un torneo local, y gracias al respaldo de FastWear, participó en su primer torneo internacional en Italia, donde fue reconocida como revelación del evento.'
    }
  ];
  res.render('inicio', { historias });
});

router.get('/mostrar_deportistas',async (req,res)=>{
  try{
    const deportistas = await Deportista.find();
    res.render('mostrar_deportistas',{
      deportistas: deportistas
    });
  }catch(error){
    console.log(error);
  }
});
router.get('/mostrar_patrocinadores',async (req,res)=>{
  try{
    const patrocinadores = await Patrocinador.find();
    res.render('mostrar_patrocinadores',{
      patrocinadores: patrocinadores
    });
  }catch(error){
    console.log(error);
  }
});

// Página de login (formulario único para ambos roles)
/* router.get('/login', (req, res) => {
  res.render('login');
});

// POST de login compartido para patrocinadores y deportistas
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Intenta encontrar primero al patrocinador
    let usuario = await Patrocinador.findOne({ email });

    // Si no es patrocinador, intenta encontrar un deportista
    if (!usuario) {
      usuario = await Deportista.findOne({ email });
    }

    if (!usuario) {
      return res.status(401).send('Correo no registrado');
    }

    if (usuario.password !== password) {
      return res.status(401).send('Contraseña incorrecta');
    }

    // Según el tipo de usuario, guarda en sesión
    if (usuario.constructor.modelName === 'Patrocinador') {
      req.session.patrocinador = {
        id: usuario._id,
        nombre: usuario.nombre, // nombre simple
        email: usuario.email,
      };
    } else if (usuario.constructor.modelName === 'Deportista') {
      req.session.deportista = {
        id: usuario._id,
        nombre: `${usuario.nombres} ${usuario.apellidos}`, // nombre + apellido
        email: usuario.email,
      };
    }

    res.redirect('/');
  } catch (error) {
    console.error('Error al iniciar sesión:', error);
    res.status(500).send('Error al procesar el inicio de sesión');
  }
}); */

// Registro de deportistas
/* router.get('/registro_deportistas', (req, res) => {
  res.render('registro_deportistas');
});

// Registro de patrocinadores
router.get('/registro_patrocinadores', (req, res) => {
  res.render('registro_patrocinadores');
}); */


module.exports = router;

