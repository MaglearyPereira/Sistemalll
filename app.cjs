require('dotenv').config(); // Cargar variables de entorno
const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser'); // Para manejar datos del formulario

const app = express();
const port = 3000;


app.set('view engine', 'ejs');

// Middleware para manejar datos del formulario
app.use(bodyParser.urlencoded({ extended: true }));

// Servir archivos estáticos
app.use(express.static(__dirname + '/views'));

app.use(express.static(__dirname + '/styles'));
app.use(express.static(__dirname + '/img'));

// Ruta para la página de inicio de sesión
app.get('/login', (req, res) => res.render('login'));


// Ruta para manejar el inicio de sesión
app.post('/login', (req, res) => {
    const { usuario, password } = req.body;
const USUARIO= 'admin'
const PASSWORD="admin"
    // Validar credenciales
    if (usuario === USUARIO && password === PASSWORD) {
        res.redirect('/Inicio'); // Redirigir a la página deseada si las credenciales son correctas
    } else {
        res.send('Credenciales incorrectas. <a href="/">Intenta de nuevo</a>'); // Mensaje de error
    }
});

// Ruta para la página de registro
app.get('/Registro', (req, res) => res.render('./nino/constancia_nino_sano'));
app.get('/verNino', (req, res) => res.render('./nino/verNino'))
app.get('/Inicio', (req, res) => res.render('index'));
app.get('/Representante', (req, res) => res.render('./representante/registroRepre'))
app.get('/editarNino', (req, res) => res.render('./nino/editarPaciente'))
app.get('/verPerfil', (req, res) => res.render('./nino/verNino'))





// Iniciar el servidor
app.listen(port, () => console.log(`Server running on port ${port}`));