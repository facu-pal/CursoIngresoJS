/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    let largo;
    let ancho;
    let perimetro;
    let alambre; 

    largo = parseInt(document.getElementById("txtIdLargo").value);
    ancho = parseInt(document.getElementById("txtIdAncho").value);
    perimetro = (ancho + largo ) * 2 ;

    alambre = perimetro * 3;

    alert("se necesita comprar " + alambre + " metros");
}
function Circulo () 
{
    let radio;
    let perimetro;
    let alambre; 
    const PI = 3.14;//es una variable que no cambia el valor 

    radio = parseInt(document.getElementById("txtIdRadio").value);

    perimetro = 2 * PI * radio;

    alambre = perimetro * 3;

    alert("se necesita comprar " + alambre + " metros");

}
function Materiales () 
{
	let largo;
    let ancho;
    let area;
    let cemento;
    let cal;

    largo = parseInt(document.getElementById("txtIdLargo").value);
    ancho = parseInt(document.getElementById("txtIdAncho").value);

    area = largo * ancho;

    cemento = area * 2;

    cal = area * 3;

    alert("para un contrapiso de " + area + " m2 necesito comprar " + cemento + " bolsa de cementos y " + cal + " bolsas de cal")

}