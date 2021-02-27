/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	//declarar contadores y variables 
	let seguir;
	let numero;
	let negativo = 0;
	let positivo = 0;
	let cantNegativo = 0;
	let cantPositivo= 0;
	let cant0 = 0;
	let cantNumPares = 0;
	let promPositivo = 0;
	let promNegativo = 0;
	let diferencia = 0;

	do{
		numero = parseInt(prompt("Ingrese un numero"))

		if(numero > 0)
		{
			//numero positivo
			positivo += numero;
			cantPositivo++;
		
		}
		else if (numero < 0) 
		{
			//numero negativo
			negativo += numero;
			cantNegativo++;
		}
		else
		{
			cant0++;   //cuenta cuantos 0 ingresamos
		}
		
		//para saber si el numero ingresado es para o no es par
		if(numero % 2 == 0)
		{
			cantNumPares++;
		}
		seguir = prompt("¿Quiere ingresar otro numero? ").toLowerCase();

	}while( seguir == 's' || seguir == 'si' )


	//hace los calculos que necesita los datos conseguidos durante el buvle
	if( cantPositivo > 0 )
	{
		promPositivo = positivo / cantPositivo;
	}

	if (cantNegativo > 0)
	{	
		promNegativo = negativo / cantNegativo;
	}

	// para saber la diferencia de cantidad de positivos y negativos
	diferencia = cantPositivo - cantNegativo ;
	
	console.log("1-Suma de los negativos = " + negativo);
	console.log("2-Suma de los positivos = " + positivo);
	console.log("3-Cantidad de positivos = " +cantPositivo );
	console.log("4-Cantidad de negativos = " + cantNegativo);
	console.log("5-Cantidad de ceros = " + cant0);
	console.log("6-Cantidad de números pares = " + cantNumPares);
	console.log("7-Promedio de positivos = " + promPositivo);
	console.log("8-Promedios de negativos = " + promNegativo);
	console.log("9-Diferencia = " + diferencia);
}

/*	document.write(" Suma de los negativos = " + negativo + 
	" Suma de los positivos = " + positivo +
	" Cantidad de positivos= " +cantPositivo + 
	" Cantidad de negativos = " + cantNegativo +
	" Cantidad de ceros = " +cant0 + 
	" Cantidad de números pares = " + cantNumPares +
	" Promedio de positivos = " + promPositivo +
	" Promedios de negativos = " + promNegativo +
	" Diferencia = " + diferencia);*/