const express = require('express');
const router = express.Router();
const Deportista = require('../models/deportista');
const deportista = require('../models/deportista');

// Mostrar formulario de registro
router.get('/registro_deportistas', (req, res) => {
  res.render('registro_deportistas');
});

// Guardar deportista nuevo
router.post('/registro_deportistas', async (req, res) => {
  try {
    const datos = req.body;
    datos.consentimiento = datos.consentimiento === 'on';
    const nuevo = new Deportista(datos);
    await nuevo.save();
    res.redirect('/deportistas/registro_deportistas');
  } catch (error) {
    console.log('Error al registrar deportista:', error);
    res.status(500).send('Error al guardar en la base de datos');
  }
});

// Mostrar formulario de login (vista específica para deportistas)
router.get('/login', (req, res) => {
  res.render('login_deportistas'); 
});

// Procesar login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const deportista = await Deportista.findOne({ email });

    if (!deportista) {
      return res.status(401).render('login_deportistas',{error:'Correo no registrado'});
    }

    if (deportista.password !== password) {
      return res.status(401).render('login_deportistas',{error:'Contraseña incorrecta'});
    }

    // Guardar al deportista en la sesión (nombre completo)
    req.session.deportista = {
      id: deportista._id,
      nombre: `${deportista.nombres} ${deportista.apellidos}`, // ✅ CORREGIDO
      email: deportista.email,
    };

    res.redirect('../');
  } catch (error) {
    console.error('Error al iniciar sesión:', error);
    res.status(500).send('Error al procesar el inicio de sesión');
  }
});


// Ver perfil del deportista por ID
router.get('/perfil/:id', async (req, res) => {
  try {
    const deportista = await Deportista.findById(req.params.id);
    if (!deportista) {
      return res.status(404).send('Deportista no encontrado');
    }
    res.render('perfil_deportista', { deportista });
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

// Eliminar cuenta de deportista
router.post('/eliminar/:id', async (req, res) => {
  try {
    await Deportista.findByIdAndDelete(req.params.id);
    req.session.destroy(() => {
      res.redirect('/inicio');
    });
  } catch (error) {
    console.error('Error al eliminar la cuenta del deportista:', error);
    res.status(500).send('No se pudo eliminar la cuenta');
  }
});

// Mostrar formulario para editar un deportista
router.get('/editar/:id', async (req, res) => {
  try {
    const deportista = await Deportista.findById(req.params.id);
    if (!deportista) {
      return res.status(404).send('Deportista no encontrado');
    }
    res.render('editar_deportista', { deportista });
  } catch (error) {
    console.error('Error al cargar formulario de edición:', error);
    res.status(500).send('Error al cargar el formulario');
  }
});


// Procesar la actualización del deportista
router.post('/actualizar/:id', async (req, res) => {
  try {
    const datos = req.body;
    datos.consentimiento = datos.consentimiento === 'on';
    await Deportista.findByIdAndUpdate(req.params.id, datos);
    res.redirect(`/deportistas/perfil/${req.params.id}`);
  } catch (error) {
    console.error('Error al actualizar deportista:', error);
    res.status(500).send('Error al actualizar los datos');
  }
});


module.exports = router;



