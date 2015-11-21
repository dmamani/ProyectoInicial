/*function Contador (cadena,letra){
	for(var i=0,cont=0;i<cadena.length;i++){
		if (cadena[i]==letra)
			cont++;
	}
	return cont;
}


var x = "a";
var y = "frase con letras";
console.log("frase: "+y);
console.log("Cantidad de letras "+x+": "+Contador(y,x));
*/

function Tabla (numero){
	
	for (var i=1;i<=10;i++)	{
		console.log(numero +" X "+i+" = "+numero*i+" \t "+(numero+1) +" X "+i+" = "+(numero+1)*i+" \t "+(numero+2) +" X "+i+" = "+(numero+2)*i+" \t "+(numero+3) +" X "+i+" = "+(numero+3)*i);
	}
}

var x=4;
console.log("La tabla de "+x+" es:");
console.log(Tabla(x));