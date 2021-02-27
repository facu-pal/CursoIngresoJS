function mostrar()
{
	let contador;
	let acumalador;
	let promedio;

	contador = 0 ;
	acumalador = 0 ; 	


	//En este while hace la suma de los 5 numeros que va ingresando
	while(contador <5)
	{
		acumalador += acumalador = parseInt(prompt("ingrese un numero"));
		contador++;
	}
	promedio = acumalador / 5;

	document.getElementById("txtIdSuma").value = acumalador;
	document.getElementById("txtIdPromedio").value = promedio;
	
}