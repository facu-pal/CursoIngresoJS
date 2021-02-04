/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	//creo las variables para que el usuario pueda guardar sus numero
	let num1 = parseInt(document.getElementById("txtIdNumeroUno").value);
	let num2 = parseInt(document.getElementById("txtIdNumeroDos").value);

	//creo las variable donde se va a realizar la sumas de ls 2 numeros y se realiza dicha suma
	let resul  = num1 + num2

	//Muestro el resultad de la suma
	alert(`La suma es ${resul}`);
}

function restar()
{

	//creo las variables para que el usuario pueda guardar sus numero
	let num1 =  parseInt(document.getElementById("txtIdNumeroUno").value);
	let num2 = parseInt(document.getElementById("txtIdNumeroDos").value);

	//creo las variable donde se va a realizar la resta de los 2 numeros y se realiza dicha resta
	let result = num1 - num2

	//Muestro el resultad de la resta
	alert(`la resta es ${result}`)
}

function multiplicar()
{ 
	//creo las variables para que el usuario pueda guardar sus numero
	let num1 =  parseInt(document.getElementById("txtIdNumeroUno").value);
	let num2 = parseInt(document.getElementById("txtIdNumeroDos").value);

	//creo las variable donde se va a realizar la multiplicacion de los 2 numeros y se realiza dicha multiplicacion
	let result = num1 * num2

	//Muestro el resultad de la multiplicacion
	alert(`El producto es ${result}`)
	
}

function dividir()
{
	//creo las variables para que el usuario pueda guardar sus numero
	let num1 =  parseFloat(document.getElementById("txtIdNumeroUno").value);
	let num2 = parseFloat(document.getElementById("txtIdNumeroDos").value);

	//creo las variable donde se va a realizar la division  de los 2 numeros y se realiza dicha division 
	let result = num1 / num2

	//Muestro el resultad de la division 
	alert(`El cociente es ${result}`)
}

