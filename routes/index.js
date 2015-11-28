var express = require('express');
var router = express.Router();
// para elcontacto **************************
var contacto = require('../controllers/contacto');

//para elcontacto,el link conel que se llamara
router.get('/regcontacto',contacto.registrocontacto);
router.get('/rescontacto',contacto.respuestacontacto);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Avances en computacion' });
});

module.exports = router;