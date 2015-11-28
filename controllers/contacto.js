exports.registrocontacto = function (req, res){
	res.render('registrocontacto',{titulo:'Registro de contacto'});
}

exports.respuestacontacto = function (req, res){
	res.render('respuestacontacto',{mensaje:'Se registro el contacto satisfactoriamente'});
}