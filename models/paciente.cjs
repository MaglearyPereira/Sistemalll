// models/paciente.js

const conexion = require("../conexion.cjs"); // Ensure your connection is configured

module.exports = {
    // Método para insertar un nuevo paciente
    insertar(nombres, apellidos, edad, sexo, fecha_nac, lugar_nac, direccion, evaluacion, piel, peso, talla, temperatura, cardio, abdomen, laboratorio, snc, inmunizaciones, idx) {
        return new Promise((resolve, reject) => {
            conexion.query(
                `INSERT INTO pacientes (
                    nombres,
                    apellidos,
                    edad,
                    sexo,
                    fecha_nac,
                    lugar_nac,
                    direccion,
                    evaluacion,
                    piel,
                    peso,
                    talla,
                    temperatura,
                    cardio,
                    abdomen,
                    laboratorio,
                    snc,
                    inmunizaciones,
                    idx
                ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
                [nombres, apellidos, edad, sexo, fecha_nac, lugar_nac, direccion, evaluacion, piel, peso, talla, temperatura, cardio, abdomen, laboratorio, snc, inmunizaciones, idx],
                (err, resultados) => {
                    if (err) {
                        console.error("Error inserting patient:", err); // Log the error
                        reject(err);
                    } else {
                        resolve(resultados.insertId); // Return the ID of the inserted record
                    }
                }
            );
        });
    },

    // Método para obtener todos los pacientes
    obtener() {
        return new Promise((resolve, reject) => {
            conexion.query(`SELECT * FROM pacientes`, (err, resultados) => {
                if (err) {
                    console.error("Error fetching patients:", err); // Log the error
                    reject(err);
                } else {
                    resolve(resultados); // Return the results
                }
            });
        });
    },
};
