function mostrar()
{
	let numeros;
	let cantPares = 0;

	numeros = parseInt(prompt("ingrese un numero"))

	for(let i = 1 ; i < numeros ; i++ )
	{
		if(i %2 == 0)
		{
			console.log(i)
			cantPares++;
		}
	}

	console.log("numeros pares encontrados " + cantPares);



}//FIN DE LA FUNCIÓN