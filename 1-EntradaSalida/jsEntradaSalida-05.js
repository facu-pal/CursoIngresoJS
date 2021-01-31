/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	//reservo espacio en la memoria para guardar el nombre y edad de usuario
	let nombre; 
	let edad; 


	//Guardo en la variable nombre lo que ingreso el usuario en la caja de texto nombre
	nombre = document.getElementById("txtIdNombre").value;

	//Guardo en la variable nombre lo que ingreso el usuario en la caja de texto edad
	edad = document.getElementById("txtIdEdad").value;

	//muestro lo que el usuraio escribio en el las cajas de texto mostrandole su nombre y edad 
	alert("Usted se llama "+ nombre +" y tiene "+ edad +" años" );

	//para concatenar se usa el operador + (sirve para poder hacer una cadena de literarios y variables)


	//otra forma de hacer lo mismo es con el back tilt ``   \\  y para poner las variable pones ${nombre de la variable}
	//alert(`usted se llama ${nombre} y tiene ${edad} años`);

}


