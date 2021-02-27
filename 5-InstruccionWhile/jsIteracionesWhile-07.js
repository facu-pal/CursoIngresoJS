/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	let contador;
	let promedio;
	let respuesta;
	let numeroingresado;

	contador = 0 ;
	numeroingresado = 0;
	respuesta = "si";

	while(respuesta == "si" || respuesta == "SI" )
	{
		contador++;
		numeroingresado += parseInt(prompt("ingrese un numero"));
		respuesta = prompt("¿Desea ingresar otro numero mas?")

	}

	promedio = numeroingresado / contador ;

	document.getElementById("txtIdSuma").value = numeroingresado;
	document.getElementById("txtIdPromedio").value = promedio;


}