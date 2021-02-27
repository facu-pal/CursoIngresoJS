function mostrar()
{
	let estacion ;
	let destino ;
	let preciototal ;
	const PRECIO = 15000;

	estacion = document.getElementById("txtIdEstacion").value;
	destino = document.getElementById("txtIdDestino").value;

	switch (estacion)
	{
		case "Invierno" : 
		switch(destino)
		{
			case "Bariloche" :
				preciototal = PRECIO * 20 / 100 + PRECIO ;
				alert("El precio de " + destino + " en el la estacion " + estacion + " su precio es $" + preciototal);
				break;

			case "Cataratas" :
			case "Cordoba" :
				preciototal = PRECIO - PRECIO * 10 / 100  ;
				alert("El precio de " + destino + " en el la estacion " + estacion + " su precio es $" + preciototal);
				break;

			case "Mar del plata" :
				preciototal = PRECIO - PRECIO * 20 / 100  ;
				alert("El precio de " + destino + " en el la estacion " + estacion + " su precio es $" + preciototal);
				break;
		}
		break;

		case "Verano" :
			switch(destino)
		{
			case "Bariloche" :
				preciototal = PRECIO - PRECIO * 20 / 100  ;
				alert("El precio de " + destino + " en el la estacion " + estacion + " su precio es $" + preciototal);
				break;

			case "Cataratas" :
			case "Cordoba" :
				preciototal = PRECIO + PRECIO * 10 / 100  ;
				alert("El precio de " + destino + " en el la estacion " + estacion + " su precio es $" + preciototal);
				break;


			case "Mar del plata" :
				preciototal = PRECIO + PRECIO * 20 / 100  ;
				alert("El precio de " + destino + " en el la estacion " + estacion + " su precio es $" + preciototal);
				break;
		}
		break;

		case "Otoño" :
		case"Primavera" :
			switch(destino)
			{
				case "Bariloche" :
					preciototal = PRECIO + PRECIO * 10 / 100  ;
					alert("El precio de " + destino + " en el la estacion " + estacion + " su precio es $" + preciototal);
					break;

				case "Cataratas" :
					preciototal = PRECIO + PRECIO * 10 / 100  ;
					alert("El precio de " + destino + " en el la estacion " + estacion + " su precio es $" + preciototal);
					break;

				case "Mar del plata" :
					preciototal = PRECIO + PRECIO * 10 / 100  ;
					alert("El precio de " + destino + " en el la estacion " + estacion + " su precio es $" + preciototal);
					break;

				case "Cordoba" :
					preciototal = PRECIO;
					alert("El precio de " + destino + " en el la estacion " + estacion + " su precio es $" + preciototal);
					break;
			}
		break;

	}

}