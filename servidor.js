//dependencias nodejs
const express = require("express");
const session = require("express-session");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

//configuración de la aplicación
const puerto = 3000;
const aplicacion = express();

/* const usuario = "al2213033920";
const password = "1234";
const nombreBD = "PoyectoFinal";
const uri = `mongodb+srv://${usuario}:${password}@tallerweb.bsxsztj.mongodb.net/${nombreBD}?retryWrites=true&w=majority`;
 */
//conexion 2
/*
const usuario = "jluzl";
const password = "jnrYSXspQkC320yE";
const nombreBD = "Prueba";
const uri = `mongodb+srv://${usuario}:${password}@tallerweb.khxnk0f.mongodb.net/${nombreBD}?retryWrites=true&w=majority&appName=TallerWeb`;
*/
//conexion3
const usuario = "al2212000776";
const password = "jaQQ1dB9vXXrlt3Y";
const nombreBD = "Cluster0";
const uri = `mongodb+srv://${usuario}:${password}@cluster0.tyeztfm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

//conexión a BD
mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Bien...estas conectado a la Base de Datos :D"))
  .catch((e) => console.log("error de conexion", e));

//middleware globales
//Obtener de un formulario
aplicacion.use(bodyParser.urlencoded({ extended: false }));
//Enviar en formato json
aplicacion.use(bodyParser.json());
//Middleware para indicar las rutas estaticas
aplicacion.use(express.static(__dirname + "/public"));

//configuracion de inicio de sesion
aplicacion.use(
  session({
    secret: "mi_clave_secreta_segura", // Puedes poner otra clave
    resave: false,
    saveUninitialized: false,
  })
);
//middleware para vistas: variables globales desde sesión
aplicacion.use((req, res, next) => {
  res.locals.deportista = req.session.deportista || null;
  res.locals.patrocinador = req.session.patrocinador || null;
  next();
});

//Utilizar EJS
aplicacion.set("view engine", "ejs");
//Indicamos la ruta de las plantillas EJS
aplicacion.set("views", __dirname + "/views");

// Rutas específicas primero
aplicacion.use("/deportistas", require("./router/deportistas"));
aplicacion.use("/patrocinadores", require("./router/patrocinadores"));
aplicacion.use("/", require("./router/inicio"));

//error 404
aplicacion.use((rep, res, next) => {
  res.status(404).render("404");
});
//inicio del servidor
aplicacion.listen(puerto, () => {
  console.log("Escuachando las peticiones :D. Desde el puerto", puerto);
});

/**********************************************************************************************/
/**********************************************************************************************/
/**********************************************************************************************/

/*
const mongoose=require('mongoose');
const usuario='al2213033920';
const password='1234';
const nombreBD='Test1';
const uri=`mongodb+srv://${usuario}:${password}@tallerweb.bsxsztj.mongodb.net/${nombreBD}?retryWrites=true&w=majority`;

mongoose.connect(uri,{ useNewUrlParser: true, useUnifiedTopology:true})
  .then(()=> console.log('Bien...estas conectado a la Base de Datos :D'))
  .catch(e => console.log('error de conexion', e))

//Utilizar EJS
aplicacion.set('view engine','ejs');

//Indicamos la ruta de las plantillas EJS
aplicacion.set('views',__dirname+'/views');

//Middleware para indicar las rutas estaticas
//funcion que queremos que se inicie
aplicacion.use(express.static(__dirname+'/public'));

aplicacion.use('/',require('./router/rutasPagina'));

aplicacion.use('/', require('./router/usuarios'));



*/

/**********************************************************************************************/
/**********************************************************************************************/
/**********************************************************************************************/
/*
//Peticion
aplicacion.get('/',(req,resp)=>{
    resp.send('Página de inicio')
});

aplicacion.get('/contacto',(req,resp)=>{
    /*resp.sendFile(__dirname+'/public/contacto.html')
    resp.render('contacto',{
        usuario: "Fer",
        apellido: "España",
    })
});

//Servicio 404
aplicacion.use((req,resp,next)=>{
    /*resp.status(404).sendFile(__dirname+'/public/404.html')
    resp.status(404).render('404',{
        usuario:"Fernando",
        apellido:"España"
    })
});*/

/*
const servidor = http.createServer((req,resp)=>{
    resp.end('Esto es una respuesta a tu solicitud')
});
servidor.listen(puerto,()=>{
    console.log("Servidor escuchando solicitudes")
})*/
