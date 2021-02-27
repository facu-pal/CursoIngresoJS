/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	var sexoIngresado;
	sexoIngresado = prompt("ingrese f ó m ");

	while(!(sexoIngresado == "m" || sexoIngresado == "f"))
	{
		sexoIngresado = prompt("ingrese f ó m ");
	}
	document.getElementById("txtIdSexo").value = sexoIngresado;



	txtIdSexo.value=sexoIngresado;
}
/*while(!(sexoIngresado == "m" || sexoIngresado == "f"))
	{
		sexoIngresado = prompt("ingrese f ó m ");
		document.getElementById("txtIdSexo").value = sexoIngresado;
	}
	document.getElementById("txtIdSexo").value = sexoIngresado;*/