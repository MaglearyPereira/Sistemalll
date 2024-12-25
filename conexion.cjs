// conexion.js

const mysql = require('mysql');

const pool = mysql.createPool({
    connectionLimit: 10, // Número máximo de conexiones en el pool
    host: "localhost",    // Dirección del servidor MySQL
    user: "root",         // Usuario de la base de datos
    password: "",         // Contraseña del usuario
    database: "pediatria" // Nombre de la base de datos
});

// Exportar el pool para usarlo en otras partes de la aplicación
module.exports = pool;
