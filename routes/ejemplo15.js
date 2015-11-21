var i = 0;
while (i<5){
	console.log("i="+i);
	i++;
}

// otra forma


/*
function Contador (cadena){
	var cont = 0;
	var i = 0;	
	while (i < cadena.length){
		if(cadena[i]=='a')
			cont++;
		i++;
	}
	return cont;	
}



var x="Hola Mundo";
console.log("La cantidad de letras A es:");
console.log(Contador(x))

*/


/*

function Contador (cadena, letra){
	var cont = 0;
	var i = 0;	
	while (i < cadena.length){
		if(cadena[i]===letra)
			cont++;
		i++;
	}
	return cont;	
}

var x="Hola Mundo";
var y='o';
console.log("La cantidad de letras "+y+" es:");
console.log(Contador(x,y));

*/