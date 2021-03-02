function mostrar()
{
  //declaramos las variables
  let Tipo;
  let Bolsas;
  let Precio;
  let Descuento = 0;
  let Seguir;
  let importe;
  let subtotal = 0;
  let ProductoMaxBolsas;
  let TipoPrecioCaro;
  let TipoProductoCaro;
  let Neto;
  
  let CantArena = 0;
  let CantCal = 0;
  let CantCemento = 0 ;
  
  let acumBolsas = 0;

  let FlagTipoCaro = 0;

  do{
    //realizamo la carga de datos
    Tipo = prompt("Ingrese el tipo de producto(arena, cal, cemento)");
    while(Tipo != 'arena' && Tipo != 'cal' && Tipo != 'cemento'){
      Tipo = prompt("Error. Ingrese el tipo de producto(arena, cal, cemento)");
    }
    Bolsas = parseInt(prompt("Ingrese la cantidad de bolsas"));
    while(isNaN(Bolsas) || Bolsas < 0){
      Bolsas = prompt("Error. Ingrese la cantidad de bolsas (no se puede ingresar 0 bolsas)");
    }
    Precio = parseInt(prompt("Ingrese el precio por bolsa"));
    while(isNaN(Precio) || Precio < 0){
      Precio = prompt("Error. Ingrese el precio por bolsa (el precio tiene que ser mayor que 0)");
    }
    //para saber cuantas bolsas compro y asi saber cuanto es el decuento
    acumBolsas += Bolsas;
    importe = Precio * Bolsas;
    subtotal += importe;
    
    switch(Tipo){
      case ('arena'):
        CantArena+= Bolsas;
        break
      
      case('cal'):
       CantCal+= Bolsas;
      break

      case('cemento'):
      CantCemento+= Bolsas;
      break
    }
    if (FlagTipoCaro == 0 ||TipoPrecioCaro > Precio){
      FlagTipoCaro == 1;
      TipoPrecioCaro = Precio;
      TipoProductoCaro = Tipo;

    }

    Seguir = prompt("¿desea ingresar otro producto?").toLowerCase();
  } while (Seguir == 's' || Seguir == 'si')

//para saber el producto con mas cantidad
	if (CantArena > CantCal && CantArena > CantCemento){
		ProductoMaxBolsas = "arena";
	}else if (CantCal >= CantArena && CantCal > CantCemento){
    ProductoMaxBolsas = "cal";
	}else{
    ProductoMaxBolsas = "cemento";
	}

  //para saber el descuento  que se le aplica
  if (acumBolsas < 10){
    Descuento =0;
  }
  else if (acumBolsas < 30)
    {
      Descuento = 0.15;
    }
    else
    {
      Descuento = 0.25;
    }

// mostramos al usuario todos los datos
  console.log("A_ el importe total a pagar sin descuento es " + subtotal);
  
  //aplicamos el descuento
  if (Descuento != 0){
    Neto = subtotal - subtotal * Descuento;
    console.log("b- importe a pagar con descuento es $ " + Neto);
  }
  else{
    console.log("b- No tiene ningun descuento por que compro menos de 10 bolsas");
  }
  console.log("D_ el tipo con mas bolsas es " + ProductoMaxBolsas);
  console.log("F_ El tipo mas caro es " + TipoProductoCaro + " y su precio es $" + TipoPrecioCaro)


}
