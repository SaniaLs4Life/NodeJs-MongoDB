var express = require('express');
var router = express.Router();

var ctrlRegister = require('../controllers/registerController');

router.get('/', ctrlRegister.registerGet);
router.post('/', ctrlRegister.registerPost)


module.exports = router;
