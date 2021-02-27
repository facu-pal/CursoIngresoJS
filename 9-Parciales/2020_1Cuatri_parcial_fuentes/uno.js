function mostrar()
{
	let tipo;
	let precio;
	let cantidad;
	let marca;
	let fabricante;
	let alcoholBarato;
	let cantBaratoAlcohol;
	let fabricanteBaratoAlcohol;
	let maxUnidad;
	let promCompra;
	let mensajeA = "No se compro alcoholes";
	let mensajeB;
	let mensajeC;
	let flagAlcohol = 0;
	let acumAlcohol = 0;
	let acumBarbijo = 0;
	let acumJabon = 0;
	let contAlcohol = 0;
	let contBarbijo = 0;
	let contJabon = 0;


	for(let i = 0 ; i < 5 ; i++)
	{
		tipo = prompt("Ingrese tipo (barbijo, jabon o alcohol)");
		while(tipo != "barbijo" && tipo != "jabon" && tipo != "alcohol" )
   	 	{
      		tipo = prompt("Error. Ingrese tipo (barbijo, jabon o alcohol)");
		}
		precio = parseInt(prompt("Ingrese el precio(debe ser entre 100 y 300)"));
		while(isNaN(precio) || precio < 100 || precio > 300)
		{
			precio = parseInt(prompt("Error. Ingrese el precio (debe ser entre 100 y 300)"));
		} 
		cantidad= parseInt(prompt("Ingrese la cantidad de unidades (max. 1000)"));
		while( (cantidad < 1  || cantidad > 1000) || isNaN(cantidad))
		{
			cantidad= prompt("Error. Ingrese la cantidad de unidades (max. 1000)");
		} 
		marca= prompt("ingrese la marca");
		fabricante=prompt("ingrese el fabricante");

		switch(tipo)
		{
			case "alcohol":
				acumAlcohol += cantidad;
				contAlcohol++;
				if(flagAlcohol ==0 || alcoholBarato > precio)
				{
					flagAlcohol= 1;
					alcoholBarato=precio;
					cantBaratoAlcohol = cantidad;
					fabricanteBaratoAlcohol = fabricante;
				}
			break

			case "barbijo":
				acumBarbijo += cantidad;
				contBarbijo++;
			break

			case "jabon":
				acumJabon += cantidad;
				contJabon++;				
			break
		}
	}

	if(acumAlcohol > acumBarbijo && acumAlcohol > acumJabon)
	{
		maxUnidad = "alcohol";
		promCompra = acumAlcohol / contAlcohol;
	}
	else if(acumBarbijo >= acumAlcohol && acumBarbijo > acumJabon)
	{
		maxUnidad = "barbijo";
		promCompra = acumBarbijo / contBarbijo;
	}
	else
	{
		maxUnidad = "jabon";
		promCompra = acumJabon / contJabon;
	}

	if (flagAlcohol == 1)
	{
		mensajeA = "A_ Fabricante alcohol barato: " + fabricanteBaratoAlcohol + "\n cantidad " + cantBaratoAlcohol + "\n precio: " + alcoholBarato;
	}
	mensajeB = "B_ tipo con mas unidades " + maxUnidad + " y el promedio de compra es " + promCompra;
	mensajeC = "c_ unidades de jabon "+ acumJabon;

	alert(mensajeA + "\n" + mensajeB + "\n" + mensajeC );



}
