var nombreVisitante = "Carlitos"

var valorEnDolar = 155.5;

var cotizacionEnPesos = 16.893;

var cotizacionEnBitcoin = 34585.20;

var valorEnPesos = valorEnDolar * cotizacionEnPesos;
var valorEnCripto = valorEnDolar * cotizacionEnBitcoin; 

valorEnPesos = valorEnPesos.toFixed(2);
valorEnCripto = valorEnCripto.toFixed(2);

var valorCentigrados = 24;

var valorFarenheit = (valorCentigrados * 9/5) + 32;

var valorKelvin = valorCentigrados + 273.15;

var nombreUsuario = prompt(`¿Cuál es tu nombre?`);

alert ("Hola, "+nombreUsuario+"!"+"\n"+"Presiona el botón para ver las cotizaciones del Dólar Estadounidense a Pesos Mexicanos y en Bitcoin")
alert ("$Mex "+valorEnPesos+"\n"+"$BTC "+valorEnCripto);
alert ("Solo para que lo sepas, la temperatura actual es de:"+"\n"+"ºC "+valorCentigrados+"\n"+"ºF "+valorFarenheit+"\n"+"ºK "+valorKelvin)

var opcion = Number(
    prompt(
      `Elija que tipo de conversión quiere realizar (1 - 3):
    1. Moneda
    2. Temperatura
    3. Criptomoneda`
    )
  );
