/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	let numero;
	let positivo = 0;
	let negativo = 1;
	let seguir;

	do {
		numero = parseInt(prompt("ingrese un numero numero"));

		if (numero >= 0)
		{
			positivo += numero;

		}
		else
		{
			negativo *= numero;
		
		}
		seguir = prompt("¿Quiere ingresar otro numero? ").toLowerCase();

	}while( seguir == 's' || seguir == 'si')

	document.getElementById("txtIdSuma").value = positivo;
	document.getElementById("txtIdProducto").value = negativo;
	
}