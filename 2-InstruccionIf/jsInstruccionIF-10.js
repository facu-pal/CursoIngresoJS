function mostrar()
{
	let nota;
	const MAXIMO = 10;
	const MINIMO = 1;

	nota = Math.round(Math.random() * (MAXIMO - MINIMO) + MINIMO );

	if(nota >= 9)
	{ 
		alert("EXCELENTE");
	}
	else if(nota >=4)
	{
		alert("APROBO");
	}
	else
	{
		alert("Vamos, la proxima se puede");
	}


}