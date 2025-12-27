const express = require('express');
const router = express.Router();
const Patrocinador = require('../models/patrocinador');
const patrocinador = require('../models/patrocinador');

// Mostrar formulario de registro
router.get('/registro_patrocinadores', (req, res) => {
  res.render('registro_patrocinadores');
});

// Guardar patrocinador nuevo
router.post('/', async (req, res) => {
  try {
    const datos = req.body;
    datos.consentimiento = datos.consentimiento === 'on';
    const nuevo = new Patrocinador(datos);
    await nuevo.save();
    res.redirect('/patrocinadores/registro_patrocinadores');
  } catch (error) {
    console.log('Error al registrar patrocinador:', error);
    res.status(500).send('Error al guardar en la base de datos');
  }
});

// Mostrar formulario de login
router.get('/login', (req, res) => {
  res.render('login_patrocinadores'); // Asegúrate de que este archivo exista
});

// Procesar login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const patrocinador = await Patrocinador.findOne({ email });

    if (!patrocinador) {
      return res.status(401).render('login_patrocinadores',{error:'Correo no registrado'});
    }

    if (patrocinador.password !== password) {
      return res.status(401).render('login_patrocinadores',{error:'Contraseña incorrecta'});
    }

    // Guardar al patrocinador en la sesión
    req.session.patrocinador = {
      id: patrocinador._id,
      nombre: patrocinador.nombre,  // Aquí se asume que el modelo de patrocinador tiene el campo "nombre"
      email: patrocinador.email,
    };

    console.log('Sesión patrocinador:', req.session.patrocinador);

    res.redirect('../');
  } catch (error) {
    console.error('Error al iniciar sesión:', error);
    res.status(500).send('Error al procesar el inicio de sesión');
  }
});


// Ver perfil del patrocinador por ID (opcional si lo necesitas)
router.get('/perfil/:id', async (req, res) => {
  try {
    const patrocinador = await Patrocinador.findById(req.params.id);
    if (!patrocinador) {
      return res.status(404).send('Patrocinador no encontrado');
    }
    res.render('perfil_patrocinador', { patrocinador });
  } catch (error) {
    console.log('Error al cargar perfil:', error);
    res.status(500).send('Error al cargar el perfil');
  }
});

// Cerrar sesión
router.post('/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error('Error al cerrar sesión:', err);
    }
    res.redirect('/inicio');
  });
});

// Eliminar cuenta de patrocinador
router.post('/eliminar/:id', async (req, res) => {
  try {
    await Patrocinador.findByIdAndDelete(req.params.id);
    req.session.destroy(() => {
      res.redirect('/inicio');
    });
  } catch (error) {
    console.error('Error al eliminar la cuenta del patrocinador:', error);
    res.status(500).send('No se pudo eliminar la cuenta');
  }
});

router.get('/editar/:id', async (req, res) => {
  try {
    const patrocinador = await Patrocinador.findById(req.params.id);
    res.render('editar_patrocinador', { patrocinador });
  } catch (error) {
    console.error('Error al cargar el patrocinador:', error);
    res.status(500).send('Error al cargar los datos');
  }
});

router.post('/actualizar/:id', async (req, res) => {
  try {
    const datos = req.body;
    datos.consentimiento = datos.consentimiento === 'on';

    // Opcional: si se deja la contraseña vacía, no se actualiza
    if (!datos.password) {
      delete datos.password;
    }

    await Patrocinador.findByIdAndUpdate(req.params.id, datos);
    res.redirect(`/patrocinadores/perfil/${req.params.id}`);
  } catch (error) {
    console.error('Error al actualizar:', error);
    res.status(500).send('Error al actualizar el perfil');
  }
});


module.exports = router;
