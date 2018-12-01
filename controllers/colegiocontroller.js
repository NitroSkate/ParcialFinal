var mongoose = require('mongoose');
var colegio = require('../models/colegio');

exports.store = function(req,res){
    let data = {
        Nombre: req.body.nombre,
        Linea: req.body.linea,
        Mensualidad: req.body.mensua
    }
    if(data.Nombre == "" && data.Linea == "" && data.Mensualidad <=0){
        res.send("Datos incorrectos, recarga la pagina");
    }
    else{
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
    };
}