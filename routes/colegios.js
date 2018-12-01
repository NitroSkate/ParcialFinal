var express = require('express'),
    router = express.Router(),
    alteracion = require('../controllers/colegiocontroller')
    colegio = require('../models/colegio');


//router.get()


router.post('/', alteracion.store);

router.get('/', alteracion.show);

router.get('/:id', alteracion.one);

router.delete('/:id',alteracion.delete);

router.put('/:id', alteracion.update);

module.exports = router;