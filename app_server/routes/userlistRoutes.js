var express = require('express');
var router = express.Router();

var ctrlUserList = require('../controllers/userlistController');

router.get('/', ctrlUserList.userList);


module.exports = router;
