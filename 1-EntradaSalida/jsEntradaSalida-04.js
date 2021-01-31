/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	//reservo espacio en la memoria para guardar el nombre de usuario
let nombre;

//Guardo en la variable nombre lo que ingreso el usuario en el prompt
nombre = prompt("ingrese su usuario")

//Copio el nombre que guarde en la variable nombre dentro de la caja de texto embebida en la pagina html
document.getElementById("txtIdNombre").value = nombre



}

