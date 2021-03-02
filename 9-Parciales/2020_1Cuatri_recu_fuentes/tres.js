function mostrar() {

	//declaramos las variables
	let Nombre;
	let Nacionalidad;
	let Edad;
	let Sexo;
	let EstadoCivil;
	let TempCorporal;
	let Seguir;
	let tempMax;
	let tempMaxNacionalidad;
	let PromMujeresCasadaEdad;

	let CantMujeresCasadaEdad=0;

	let ContMujeresSolterasViudas = 0;
	let contMayoresSolteros=0;
	let ContTerceraEdadTemp=0;
	let ContMujeresCasadaEdad=0

	let flagTempMax = 0;

	do {
		Nombre = prompt("Ingrese el nombre del pasajero");
		Nacionalidad = prompt("ingrese la nacionalidad del pasajero")
		Edad = parseInt(prompt("ingrese la edad del pasajero"));
		while (isNaN(Edad)) {
			Edad = parseInt(prompt("Error. Ingrese la edad del pasajero(La edad tiene que ser un numero)"));
		}
		Sexo = prompt("Ingrese el sexo del pasajero (f o m)").toLocaleLowerCase();
		while (Sexo != 'f' && Sexo != 'm') {
			Sexo = prompt("Error. Ingrese el sexo del pasajero (f o m)").toLocaleLowerCase();
		}

		EstadoCivil = prompt("Ingrese el estado civil del pasajero (soltero, casado o viudo)").toLocaleLowerCase();
		while (EstadoCivil != 'soltero' && EstadoCivil != 'casado' && EstadoCivil != 'viudo') {
			EstadoCivil = prompt("Error.Ingrese el estado civil del pasajero (soltero, casado o viudo)").toLocaleLowerCase();
		}

		TempCorporal = parseFloat(prompt("ingrese la temperatura del pasajero"));
		while (isNaN(TempCorporal)) {
			TempCorporal = parseFloat(prompt("ingrese la temperatura del pasajero (la temperatura en numero)"));
		}

		//punto a
		if (flagTempMax == 0 || tempMax < TempCorporal) {
			flagTempMax = 1;
			tempMax = TempCorporal;
			tempMaxNacionalidad = Nacionalidad;
		}
		//punto b
		if(Edad > 17 && EstadoCivil== 'soltero'){
			contMayoresSolteros++;
		}
		//punto c
		if (Sexo == 'f' && (EstadoCivil != 'casado')) {
			ContMujeresSolterasViudas++;
		}
		//punto d
		if (Edad >= 60 && TempCorporal >= 38){
			ContTerceraEdadTemp++;
		}
		//punto e
		if (Sexo=='f' && EstadoCivil == 'casado'){
			CantMujeresCasadaEdad += Edad;
			ContMujeresCasadaEdad ++;
		}




		Seguir = prompt("¿desea ingresar una nueva persona?").toLowerCase();
	} while (Seguir == 's' || Seguir == 'si')

	//punto e
	PromMujeresCasadaEdad =  CantMujeresCasadaEdad / ContMujeresCasadaEdad;


	//mostramos al usuario todos los datos
	console.log("A_ la nacionalida de la persona con mas temperatura  es " + tempMaxNacionalidad + " con una temperatura de " + tempMax);
	console.log("B_ la cantidad de mayores soltero es de " + contMayoresSolteros);
	console.log("C_ la cantidad de mujeres soltera y viuda es de " + ContMujeresSolterasViudas);
	console.log("D_ la cantidad de personas de la tercera edad con mas de 38 de temperatura son " + ContTerceraEdadTemp);
	console.log("E_ el promedio de edad de mujeres casada es de " + PromMujeresCasadaEdad);

}
