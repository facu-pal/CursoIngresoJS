/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{
	let numero;
	let maximo;
	let minimo;
	let seguir;
	let flag = 1;

	do {
		numero = parseInt(prompt("ingrese un numero numero"));

			if (flag == 1)
			{
				maximo = numero;
				minimo = numero;
				flag = 0;
			}
				 
			if (maximo < numero)
			{
				maximo = numero;
			}
			else if(minimo > numero)
			{
				minimo = numero;
			}

		seguir = prompt("¿Quiere ingresar otro numero? ").toLowerCase();

	}while( seguir == 's' || seguir == 'si')

	document.getElementById("txtIdMaximo").value = maximo;
	document.getElementById("txtIdMinimo").value = minimo;	
}