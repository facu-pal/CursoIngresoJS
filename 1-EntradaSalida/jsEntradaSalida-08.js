/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
		//creo las variables para que el usuario pueda guardar sus numero
		let dividendo =  parseInt(document.getElementById("txtIdNumeroDividendo").value);
		let divisor = parseInt(document.getElementById("txtIdNumeroDivisor").value);
	
		//creo las variable donde se va a realizar la resto  de los 2 numeros y se realiza dicha resto 
		let result = dividendo % divisor
	
		//Muestro el resultad de la resto 
		alert(`El resto es ${result}`)
}
