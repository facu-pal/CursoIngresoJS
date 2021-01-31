/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	//reservo espacio en la memoria para guardar para guardar el primer y segundo numero ingresado y el resultado de la suma
	let num1;
	let num2;
	let resultado;

	//Guardo la variable num1 el primer numero que ingreso
	num1 = document.getElementById("txtIdNumeroUno").value;

	//Guardo la variable num1 el segundo numero que ingreso
	num2 = document.getElementById("txtIdNumeroDos").value;

	//convierto un dato string en un numero
	num1 = parseInt(num1);
	num2 = parseInt(num2);

	//realizo la suma de los 2 numeros ingresado
	resultado = num1 + num2;

	//muestro el resultado de la suma
	alert(`la suma es ${resultado}`);


	/*tambien se puede hacer asi
	num1 = parseInt(document.getElementById("txtIdNumeroUno").value)*/
}

