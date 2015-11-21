function Contador (cadena, letra){
	var cont = 0;
	var i = 0;	
	while (i < cadena.length){
		if(cadena[i]==letra)
			cont++;
		i++;
	}
	return cont;	
}



var x="Hula Mundo";
var y='u';
console.log("La cantidad de letras "+y+" es:");
console.log(Contador(x,y));