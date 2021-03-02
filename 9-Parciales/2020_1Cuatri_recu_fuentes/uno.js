
function mostrar()
{
	//declaracion de variables
	let Producto;
	let Precio;
	let Unidades;
	let Marca;
	let Fabricante;
	let FabriJabonCaron;
	let JabonCaro;
	let ProductoMaxUnidades;
	let PromedioMaxunidades;

	let CantAlcohol = 0;
	let CantBarbijo = 0;
	let CantJabon= 0;
	let CantJabonCaro = 0;

	let ContAlcohol =0;
	let ContBarbijo = 0;
	let ContJabon= 0;

	let flagJabonCaro = 0;

	for(let i = 1; i < 6; i++){
		//realizamo la carga de datos
		Producto = prompt("Ingrese un producto(barbijo, jabon o alcohol)");
		while(Producto != 'barbijo' && Producto != 'jabon' && Producto != 'alcohol'){
			pPoducto = prompt("Error. Ingrese un producto(barbijo, jabon o alcohol)");
		}
		Precio = parseInt(prompt("ingrese el precio del producto (entre 100 y 300)"));
		while(isNaN(Precio) || Precio < 100 || Precio > 300){
			Precio = parseInt(prompt("Error. ingrese el precio del producto (entre 100 y 300)"));
		}
		Unidades =parseInt(prompt("ingrese la cantidad de unidades (entre 0 y 1000)"));
		while(isNaN(Unidades) || Unidades < 0 || Unidades > 1000){
			Unidades =parseInt(prompt("Error. ingrese la cantidad de unidades (entre 0 y 1000)"));
		}
		Marca= prompt("Ingrese la marca del producto");
		Fabricante= prompt("Ingrese el fabricante del producto");


		
		switch(Producto){
			case ('alcohol'):
				//Ejercio b
				CantAlcohol += Cantidad;
				ContAlcohol++;

			break

			case ('barbijo'):
				//Ejercio b
				CantBarbijo += Cantidad;
				ContBarbijo++;

			break

			case ('jabon'):
				// este if es para el ejercio a
				if(flagJabonCaro == 0 || JabonCaro > Precio){
					flagJabonCaro = 1;
					JabonCaro = Precio;
					CantJabonCaro = Unidades;
					FabriJabonCaron = Fabricante;
				}
				//Ejercio b
				CantJabon+= Cantidad;
				ContJabon++;
			break
		}//cierre del switch
	
	}//cierre del for

	if (CantAlcohol > CantBarbijo && CantAlcohol > CantJabon){
		ProductoMaxUnidades = "alcohol" ;
		PromedioMaxunidades = CantAlcohol /ContAlcohol;

	}else if (CantBarbijo >= CantAlcohol && CantBarbijo > CantJabon){
		ProductoMaxUnidades = "barbijo" ;
		PromedioMaxunidades = CantBarbijo / ContBarbijo;
	}else{
		ProductoMaxUnidades = "jabón" ;
		PromedioMaxunidades = CantJabon /ContJabon;
	}





	//informes que se le tiene que mostrar al usuario
	if (flagJabonCaro == 1){
		console.log("A_ el jabon caro cuesta $" +JabonCaro+ ", la cantidad de unidades son " + CantJabonCaro+" y su fabricante es " + FabriJabonCaron);
	}
	console.log("B_ El producto con mas unidades es " + ProductoMaxUnidades + " y su promedio de compra es " + PromedioMaxunidades);
	console.log("C_ La cantidad de barbijos en total son " + CantBarbijo);
}
