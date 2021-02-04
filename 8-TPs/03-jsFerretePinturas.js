/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    let Fahrenheit;
    let Centigrados;

    Fahrenheit = parseFloat(document.getElementById("txtIdTemperatura").value);

    Centigrados = (Fahrenheit - 32 )/ 1.8;

    alert(`${Fahrenheit} Fahrenheit  son ${Centigrados.toFixed(4)} centígrados`);

}

function CentigradosFahrenheit () 
{
    let Fahrenheit;
    let Centigrados;
    
    Centigrados = parseFloat(document.getElementById("txtIdTemperatura").value);

    Fahrenheit = Centigrados * 1.8 + 32;

    alert(`${Centigrados} grados centígrados son ${Fahrenheit} grados fahrenheit`);
}
