/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	{

		let importe = parseFloat(document.getElementById("txtIdImporte").value);
	
	
		//para calcular un importe  hay que hacer el valor *  el porcentaje / 100 y sumarle el valor inicial  
		//ej x - x * porcentaje / 100 

		let Descuento = importe - importe * 25 / 100 ;
	
		document.getElementById("txtIdResultado").value = ( Descuento);
		
	
	}
}
