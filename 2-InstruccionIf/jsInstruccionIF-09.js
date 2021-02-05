function mostrar()
{
		let numero;
		const MAXIMO = 10;
		const MINIMO = 1;

		numero = Math.round(Math.random() * (MAXIMO - MINIMO) + MINIMO );

		alert(numero);

}