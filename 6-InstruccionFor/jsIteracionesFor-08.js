function mostrar()
{
	let numeros;
	let cantDivisores = 0;

	numeros = parseInt(prompt("ingrese un numero"))

	for(let i = 1 ; i <= numeros ; i++ )
	{
		if(numeros % i == 0)
		{
			cantDivisores++;
		}
	}
	
	if(cantDivisores == 2)
	{
		alert(numeros + " es primo")
	}
	else
	{
		alert(numeros + " No es primo")
	}
}