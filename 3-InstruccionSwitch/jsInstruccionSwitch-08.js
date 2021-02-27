function mostrar()
{
	let destinoIngresado ;
	destinoIngresado = document.getElementById("txtIdDestino").value;

	switch(destinoIngresado)
	{
		case "Bariloche" :
		case "Cataratas" :
		alert("En ese destino hace frio");
		break;


		case "Mar del plata" :
		case "Ushuaia" :
		alert("En ese destino hace calor");
		break; 
	}

}