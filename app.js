// Importar las dependencias necesarias de Express
const express = require('express');
const app = express();
const port = 3005; // Puerto donde se ejecutará el servidor
const connectDB = require('./Config'); // Importar la conexión a la base de datos
const Usuario = require('./Model'); // Importar el modelo
// Importar el middleware para manejar las solicitudes JSON

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
  }); // Configurar el middleware para analizar el cuerpo de las solicitudes

// Conectar a la base de datos
connectDB();

Usuario.create({ nombre: 'sergio', clave: '1234' })
  .then(() => console.log('Usuario creado'))
  .catch(err => console.error('Error al crear el usuario:', err)); // Manejar errores al crear el usuario

// Middleware para manejar las solicitudes JSON
// Middleware para leer datos de formularios
app.use(express.urlencoded({ extended: true }));

// Ruta principal con el formulario de login
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');  // Formulario HTML
});

// Ruta para manejar el login
app.post('/login', async (req, res) => {
  const { nombre, clave } = req.body;

  try {
    const usuario = await Usuario.findOne({ nombre, clave });

    if (usuario) {
      res.send('Inicio de sesión exitoso!');
    } else {
      res.send('Credenciales incorrectas.');
    }
  } catch (err) {
    console.log(err);
    res.status(500).send('Error en la base de datos');
  }
});

