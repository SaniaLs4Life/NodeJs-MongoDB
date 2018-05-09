var express = require('express');
var router = express.Router();

var ctrlLogin = require('../controllers/loginController');

router.get('/', ctrlLogin.loginGet);
router.post('/', ctrlLogin.loginPost);


module.exports = router;
