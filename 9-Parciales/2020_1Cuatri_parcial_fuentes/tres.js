function mostrar() {
    //Variables
    let nombre;
    let edad;
    let sexo;
    let estadocivil;
    let temperaturacorporal;

    let temperaturaMax = 0;
    let tempMaxNombre;
    let promedioedadHsoltero = parseInt(0) ;
    
    let flagMaxTemp = 0;
    
    let cantMayoresEdadViudos = 0;
    let cantHombresSoV = 0;
    let canthombresolteros = 0;
    let masde38grados = 0;

    let acumhombresolterosedad = 0;
    let seguir;

    //Acumuladores, contadores Cont acum flag
    
    do {
        nombre = prompt("Ingrese su nombre");
        edad = parseInt(prompt("ingrese su edad"));
        sexo = prompt("ingrese su sexo (f o m)");
        while (!(sexo == 'f' || sexo == 'm')) {
            sexo = prompt("Error. ingrese su sexo (f o m)");
        }
        estadocivil = prompt("ingrese su estado civil (soltero, casado o viudo)");
        while (estadocivil != 'soltero' && estadocivil != 'casado' && estadocivil != 'viudo') {
            estadocivil = prompt("Error. ingrese su estado civil (soltero, casado o viudo)");
        }
        temperaturacorporal = parseInt(prompt("ingrese su temperatura"));

        //
        if (flagMaxTemp == 0 || temperaturacorporal > temperaturaMax) {
            flagMaxTemp = 1;
            temperaturaMax = temperaturacorporal;
            tempMaxNombre = nombre;
        }
        
        if (edad >= 18 && estadocivil == 'viudo') {
            cantMayoresEdadViudos++;
        }

        if (sexo == 'm' && (estadocivil == 'soltero' || estadocivil == 'viudo')) {
            cantHombresSoV++;
        }

        if (edad >= 60 && temperaturacorporal >= 38) {
            masde38grados++;
        }

        if (sexo == 'm' && estadocivil == 'soltero') {
            canthombresolteros++;
            acumhombresolterosedad += edad;
        }

        seguir = prompt("¿desea ingresar una nueva persona?").toLowerCase();
    } while (seguir == 's' || seguir == 'si')

    if(acumhombresolterosedad != 0 && cantHombresSoV !=  0){
        promedioedadHsoltero = acumhombresolterosedad / canthombresolteros;
    }
    
    console.log("A_ La persona con mas temperatura es " + tempMaxNombre + ", y su temperatura es " + temperaturaMax);
    console.log("B_ La cantidad de mayores edad de viudos es " + cantMayoresEdadViudos);
    console.log("C_ La cantidad de hombres viudos y soltero es " + cantHombresSoV);
    console.log("D_ La cantiadad de persona de tercera edad con mas de 38 de temperatura es " + masde38grados);
    console.log("E_ El promedio de edad de hombres soltero es de " + promedioedadHsoltero);


}
