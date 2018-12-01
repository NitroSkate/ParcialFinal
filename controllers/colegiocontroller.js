var mongoose = require('mongoose');
var colegio = require('../models/colegio');

exports.store = function(req,res){
    let data = {
        Nombre: req.body.nombre
    }
    let entra = new colegio(data);
    entra.save(function (err, guardado){
        if(err){
            console.log("Hubo un error");
            res.status=500;
        }
        else{
            console.log("Ingresado exitosamente");
            res.redirect("/");
        }
    })
}