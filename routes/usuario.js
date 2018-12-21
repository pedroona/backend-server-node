var express = require('express');
var app = express();
var Usuario = require('../models/Usuario');

// ============================================
//          Obtener todos los usuarios
// ============================================
app.get('/', (req, res, next) => {
    Usuario.find( {}, 'nombre email img role')
        .exec(
        ( err, usuarios ) => {
        if ( err ) {
            return res.status(500).json({
                ok: false,
                mensaje: 'Error cargando usuarios',
                errors: err
            });
        }
        res.status(200).json({
            ok: true,
            mensaje: usuarios
        });
    })
});

// ============================================
//          Crear un  nuevo usuario
// ============================================
app.post('/', ( req, res, next ) => {
    var body = req.body;
    res.status(200).json({
        ok: true,
        body: body
    })
});

module.exports = app;