/*
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{

	//esto es otra forma de hacer que estaba cuando clonamos el archivo, funciona en los navegadores
	//var nombreIngresado;
	//nombreIngresado = txtIdNombre.value;
	//alert(nombreIngresado);

	//explicado en clase, es el estandar de JS

	//crea la variable para reservar espacio en la memoria para guardar el nombre de usuario
	let nombre;

	//En la variable que creamos guarda el valor del texto que pusimos en el imput
	nombre = document.getElementById("txtIdNombre").value;

	alert(nombre);


	//Esto sirve para vaciar el imput, no lo pide el ejercio pero lo explica en el video
	//document.getElementById("txtIdNombre").value = "";


}


