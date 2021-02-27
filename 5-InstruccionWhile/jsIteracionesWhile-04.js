/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	let numeroIngresado;
	numeroIngresado = prompt("ingrese un número entre 0 y 9.");

	while (numeroIngresado > 9)
	{
		numeroIngresado = prompt("ingrese un número entre 0 y 9.");
		
	}

	document.getElementById("txtIdNumero").value = numeroIngresado;
	
}

/*while (numeroIngresado > 9)
	{
		numeroIngresado = prompt("ingrese un número entre 0 y 9.");
		document.getElementById("txtIdNumero").value = numeroIngresado;
	}

	document.getElementById("txtIdNumero").value = numeroIngresado;*/
	