var valorEnDolar = 155.5;

var cotizacionEnPesos = 16.893;

var cotizacionEnBitcoin = 34585.20;

var valorEnPesos = valorEnDolar * cotizacionEnPesos;
var valorEnCripto = valorEnDolar * cotizacionEnBitcoin; 

valorEnPesos = valorEnPesos.toFixed(2);
valorEnCripto = valorEnCripto.toFixed(2);

alert ("$"+valorEnPesos+"\n"+"$BTC"+valorEnCripto);
