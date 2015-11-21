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