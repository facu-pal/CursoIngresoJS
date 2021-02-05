function mostrar()
{
	let edad;

	edad = parseInt(document.getElementById("txtIdEdad").value);

	if(edad >= 18)
	{
		alert("Es mayor de edad");
	}
	else if(edad <= 12)
	{
		alert("es menor de edad");
	}
	else
	{
		alert("Es adolecente")
	}


}