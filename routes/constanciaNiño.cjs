// controllers/constanciaNiño.js

const express = require('express');
const router = express.Router();


const pacientes = require('../models/paciente.cjs'); // Cambia a require

router.get('/verNino', function(req, res, next) {
  pacientes
    .obtener()
    .then(pacientes => {
      res.render("./nino/verNino", {
        pacientes: pacientes
      });
    })
    .catch(err => {
      return res.status(500).send("Error obtenidos")
    })
});

router.get('/constancia_niño_sano', function (req, res, next) {
    res.render("./nino/constancia_niño_sano");
});

router.post('/verNino', function (req, res, next) {
    // Obtener el nombre Es lo mismo que
    // const nombre = req.body.nombre;
    const {nombres, apellidos, edad, sexo, fecha_nac, lugar_nac, direccion,  evaluacion, piel, peso, talla, temperatura, cardio, abdomen, laboratorio, snc, inmunizaciones, idx} = req.body;
    if (!nombres, !apellidos, !edad, !sexo, !fecha_nac, !lugar_nac, !direccion,  !evaluacion, !piel, !peso, !talla, !temperatura, !cardio, !abdomen, !laboratorio, !snc, !inmunizaciones, !idx) {
        return res.status(500).send("error en registro");
    }
    // Si todo va bien, seguimos
   pacientes
        .insertar(nombres, apellidos, edad, sexo, fecha_nac, lugar_nac, direccion,  evaluacion, piel, peso, talla, temperatura, cardio, abdomen, laboratorio, snc, inmunizaciones, idx)
        .then(idEstadoInsertado => {
            res.redirect("/paciente");
        })
        .catch(err => {
            return res.status(500).send("Error insertando Estado");
        });
});
module.exports = router;
// Ruta para insertar un nuevo paciente

