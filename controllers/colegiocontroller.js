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
                res.status(500);
                res.json({status: 500, message: 'No se han podido cargar los items'})
            }
            else{
                console.log("Ingresado exitosamente");
                res.redirect("/");
            }
        })
    };
}

exports.one = function(req,res){
    colegio.findById(req.params.id, function(err, item){
        if(err){
            console.log("Error interno");
            res.status(500);
            res.json({status: 500, message: 'Fallo la busqueda'});
        }
        else{
            console.log('MOstrando colegio');
            res.json({ok: true, status: 200, message: 'Cargado con exito', item});
        }
    })
}

exports.show = function(req,res){
    colegio.find({}, function(err, items){
        if(err){
            console.log("ocurrio un error :c");
            res.status(500);
            res.json({status: 500, message: 'Ocurrio un error'});
        }
        else{
            console.log("Mostrando todo");
            res.json({ok:true, status: 200, message: "cargado con exito", items});
        }
    })
};

exports.delete =function(req,res){
    colegio.findByIdAndRemove(req.params.id, function(err, old){
        if(err){
            console.log('Error nuevamente');
            res.status(500);
            res.json({status:500, message: 'Ocurrio un error'});
        }
        else{
            console.log('Se borro el colegio seleccionado');
            res.json({ok: true, status:200, message: 'borrado con exito', old});
        }
    })
} 

exports.update = function(req,res){
    let update = {
        Nombre: req.body.nombre,
        Linea: req.body.linea,
        Mensualidad: req.body.mensua
    }
    colegio.findByIdAndUpdate(req.params.id, update, function(err,old){
        if(err){
            console.log('No se ha actualizado el colegio');
            res.status(500);
            res.json({status: 500, message: 'Hay un error interno'});
        }
        else{
            console.log('Colegio actualizado');
            res.json({ok: true, status:200, message: 'Actualizado con exito', old});
        }
    })
}