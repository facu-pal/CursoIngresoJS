/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{

	let sueldo = parseFloat(document.getElementById("txtIdSueldo").value);


	//para calcular un porcentaje  hay que hacer el valor *  el porcentaje / 100 y sumarle el valor inicial  
	//ej x*porcentaje / 100 + x
	let aumento = sueldo*10/100+sueldo;

	document.getElementById("txtIdResultado").value = ("El aumento es de "+ aumento);
	
}
