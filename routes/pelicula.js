var express = require('express');
var router = express.Router();

var pelicula={
	genero:"drama",
	nombre:"hachiko",
	precio:"30",
	tiempo:"60"
};

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('pelicula', { objeto: pelicula });
});

module.exports = router;