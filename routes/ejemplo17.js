function Tabla (num, ope, can){
	if(ope=="+"){
		for (var i=1;i<=can;i++)	{
		console.log(num +" + "+i+" = "+(num+i));
		}
	}		
	if(ope=="-"){
		for (var i=1;i<=can;i++)	{
		console.log(num +" - "+i+" = "+(num-i));
		}
	}
	if(ope=="x"){
		for (var i=1;i<=can;i++)	{
		console.log(num +" x "+i+" = "+(num*i));
		}
	}
	if(ope=="/"){
		for (var i=1;i<=can;i++)	{
		console.log(num +" / "+i+" = "+(num/i));
		}
	}
}
	

var n=4;
var o="/";
var c=5;
console.log("La tabla de "+n+" es:");
console.log(Tabla(n,o,c));