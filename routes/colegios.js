var express = require('express'),
    router = express.Router(),
    alteracion = require('../controllers/colegiocontroller')
    colegio = require('../models/colegio');


//router.get()


router.post('/', alteracion.store);

router.get('/', alteracion.show);

module.exports = router;