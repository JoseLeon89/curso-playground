/**
 * //definicion
 function vaComoParametro(){
    return "Soy un callback";
 }

 //ejecucion
 function (vaComoParametro);
 //soy un callback
 */

 /*let sumar = (numero1, numero2) => numero1 + numero2;
 let restar = (numero1, numero2) => numero1 - numero2;
 let multiplicar = (numero1, numero2) => numero1 * numero2;
 let dividir = (numero1, numero2) => numero1 / numero2;

 let calculadora = (numero1, numero2, operacion) => operacion (numero1, numero2);
 console.log(calculadora(18, 3, restar));*/

 let doble = numero => numero*2;
 let triple = numero => numero*3;

 let aplicarCallback = (numero, operacion) => operacion (numero);
 console.log(aplicarCallback(4, doble));