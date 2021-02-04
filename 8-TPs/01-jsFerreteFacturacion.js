/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    //creo las variables para guardar los precios de los usuarios
    let precio1 = parseInt(document.getElementById("txtIdPrecioUno").value); 
    let precio2 = parseInt(document.getElementById("txtIdPrecioDos").value); 
    let precio3 = parseInt(document.getElementById("txtIdPrecioTres").value);
    
    //creo la variable donde se va a guarda el presio final
    let Preciototal;

    //hago la suma de todos los precios
    Preciototal = precio1 + precio2 + precio3;

    //muestro el precio final en un alert
    alert("El precio total es " + Preciototal);
    
}
function Promedio () 
{
    let precio1 = parseInt(document.getElementById("txtIdPrecioUno").value); 
    let precio2 = parseInt(document.getElementById("txtIdPrecioDos").value); 
    let precio3 = parseInt(document.getElementById("txtIdPrecioTres").value);
    
    //creo la variable donde se va a guarda el presio final
    let promedio;

    //hago la suma de todos los precios y saco el promedio
    promedio = ( precio1 + precio2 + precio3) / 3;

    //muestro el promedio de precio en un alert
    alert("el promedio de los 3 precio es " + promedio);
	
}
function PrecioFinal () 
{
    //creo las variables para guardar los precios de los usuarios
    let precio1 = parseInt(document.getElementById("txtIdPrecioUno").value); 
    let precio2 = parseInt(document.getElementById("txtIdPrecioDos").value); 
    let precio3 = parseInt(document.getElementById("txtIdPrecioTres").value);
    
    //creo la variable donde se va a guarda el presio final
    let Preciototal;
    let precioConIva;
    
    //hago la suma de todos los precios
    Preciototal = precio1 + precio2 + precio3;
    
    
    //hago la suma del iva
    precioConIva = Preciototal + ( Preciototal * 21 / 100 );
    
    //muestro el precio final con iva en un alert
    alert("El importe con iva incluido es $ "+ precioConIva);
    
	
}