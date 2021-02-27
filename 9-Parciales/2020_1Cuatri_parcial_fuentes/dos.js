function mostrar()
{

  let tipo;
  let cantidad;
  let precio;
  let importe;
  let seguir;
  let subtotoal = 0;
  let acumC = 0;
  let acumCal = 0;
  let acumA = 0;
  let acumBolsas = 0;
  let descuento;
  let neto;
  let maxPrecio;
  let maxtipo;
  let flag = 1;
  let tipomaxbolsa;



  do{
    tipo = prompt("ingrese tipo (cal/cemento/arena)");

    while(tipo != "cal" && tipo != "cemento" && tipo != "arena" )
    {
      tipo = prompt("Error. ingrese tipo (cal/cemento/arena)");
    }

    cantidad = parseInt(prompt("ingrese cantidad"));
    while(isNaN(cantidad) || cantidad <= 0)
    {
      cantidad = parseInt(prompt("Error. ingrese cantidad"));
    }

    precio = parseInt(prompt("ingrese el precio"));
    while(isNaN(cantidad) || precio <= 0)
    {
      precio = parseInt(prompt("Error. ingrese el precio"));
    }

    importe = precio * cantidad;
    subtotoal+= importe;
    acumBolsas += cantidad; 

    switch(tipo)
    {
      case "arena":
        acumA += cantidad;
        break

      case "cal":
         acumCal += cantidad;
         break
          
      case "cemento":
        acumC += cantidad;
        break
    }

    if (flag || precio > maxPrecio)
    {
      maxPrecio = precio;
      maxtipo = tipo;
      flag = 0 ;
    }

    seguir = prompt("¿quiere comprar algo mas?")
  }while(seguir  == 's')

  //calculo el descuento
  if (acumBolsas < 10){
    descuento =0;
  }
  else if (acumBolsas < 30)
    {
      descuento = 0.15;
    }
    else
    {
      descuento = 0.25;
    }

    if(acumA > acumC || acumA > acumCal)
    {
      tipomaxbolsa = "arena";
    }
    else if (acumC >= acumA || acumC > acumCal)
    {
      tipomaxbolsa = "cemento";
    }
    else
    {
      tipomaxbolsa = "cal";
    }

    //doy los informes
    console.log("a- importe bruto a pagar $ " + subtotoal);
    if(descuento != 0)
    {
      neto = subtotoal - subtotoal * descuento;
      console.log("b- importe neto $ " + neto);
    }

    console.log("d_ el tipo con mas bolsa es " + tipomaxbolsa);

    console.log("f_ el tipo mas caro es " + maxtipo + ", y el precio es $ " + maxPrecio);

}