//Paso 1: Carga de nombre
var nombreUsuario = prompt(`¿Cuál es tu nombre?`);

//Paso 2:Saludo de bienvenida con elección de conversor
var eligeConversor = Number(
    prompt(`¡Hola, ${nombreUsuario}!
    ¿Qué tipo de conversor deseas utilizar? (1 - 2):
    1. Moneda
    2. Temperatura
    `
    )
);

// Opción Moneda:
  if (eligeConversor === 1) {
    var montoDolares = Number(prompt(`Ingrese la cantidad de US$ a convertir`));
    var eligeMoneda = Number(prompt
        (`¿A qué moneda deseas convertirlo? (1 - 2):
        1. Pesos
        2. Bitcoins
        `)) 
        if (eligeMoneda === 1) {
            montoPesos= montoDolares * 1001;
            alert(`Con US$ ${montoDolares} te comprás $ARG ${montoPesos}.`+"\n"+`Valor actualizado al 30/10/23.`); 
        } else if (eligeMoneda === 2) {
            montoCripto= montoDolares * 0.0029;
            alert(`Con US$ ${montoDolares} te comprás $BTC ${montoCripto}.`+"\n"+`Valor actualizado al 30/10/23.`);
        } else {
            alert(`ERROR: La opción que ingresaste NO se encuentra registrada. Intentalo nuevamente.`);
          }
             
// Opción Temperatura:
} else if (eligeConversor === 2) {
    var tempActual = Number(prompt(`Ingresá la temperatura actual en ºC`))
    var kelvin = tempActual + 273.15
    var farenheit = (tempActual*1.8)+32
    alert(`La temperatura actual es de ${kelvin}ºK y ${farenheit}ºF`)
} 

// Opción Error:

else {
    alert(`ERROR: La opción que ingresaste NO se encuentra registrada. Intentalo nuevamente.`);
}
