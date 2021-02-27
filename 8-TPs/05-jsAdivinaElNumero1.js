/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
var numeroSecreto; 
var contadorIntentos;

function comenzar()
{
	//Genero el número RANDOM entre 1 y 100
  let numero_random ;
  const MAXIMO = 100;
  const MINIMO = 10;

  numero_random = Math.round(Math.random() * (MAXIMO - MINIMO) + MINIMO );

  alert(numero_random);



	 
		//alert(numeroSecreto );
	

}

function verificar()
{
	let num_ingresado ;
  let intentos;

  num_ingresado = parseInt(document.getElementById("txtIdNumero").value);

  if (num_ingresado == numero_random)
  {
    alert("Usted es un ganador");
    document.getElementById("txtIdNumero").value = "";
  }
  else 
  {
    intentos = intentos + 1 ;
    document.getElementById("txtIdIntentos").value = "";


  }
	
}