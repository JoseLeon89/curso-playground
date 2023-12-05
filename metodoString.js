//ejemplo de length
/*let mensaje = "Gran dia para practica"
console.log(mensaje.length);

//ejemplo de indexOf
console.log(mensaje.indexOf("dia"));

//ejemplo de slice
console.log(mensaje.slice(5, 17));

//ejemplo de trim
console.log(mensaje.trim());

//ejemplo de split
console.log(mensaje.split(' '));

//ejemplo de replace
console.log(mensaje.replace("Gran", "Espetacular"));*/

//PRACTICA
/*function dominio(sitio){
    return "http://www." + sitio;
}

let resultado = dominio ("digitalhouse.com.ar")
console.log(resultado);*/

/*function reemplazoFastFast(texto, palabraBuscar, palabraReemplazar) {
    const expresionRegular = new RegExp(palabraBuscar, 'gi');
    const textoReemplazado = texto.replace(expresionRegular, palabraReemplazar);
    return textoReemplazado;
  }
  
  // Ejemplos de uso:
  const resultado1 = reemplazoFastFast("Hola ¿cómo estás?", "estás", "están");
  console.log(resultado1);  // Debería imprimir: "Hola ¿cómo están?"
  
  const resultado2 = reemplazoFastFast("Todo lo que pasa tiene que bajar", "pasa", "sube");
  console.log(resultado2);  // Debería imprimir: "Todo lo que sube tiene que bajar"*/
  
  
  function menciona(texto, palabra) {
    // Convertimos ambos a minúsculas para hacer la búsqueda sin distinguir mayúsculas/minúsculas
    const textoMinusculas = texto.toLowerCase();
    const palabraMinusculas = palabra.toLowerCase();
  
    // Utilizamos el método includes para verificar si el texto menciona la palabra
    return textoMinusculas.includes(palabraMinusculas);
  }
  
  // Ejemplo de uso:
  const textoEjemplo = "Este es un ejemplo de texto.";
  const palabraBuscar = "ejemplo";
  
  const resultado = menciona(textoEjemplo, palabraBuscar);
  console.log(resultado);  // Debería imprimir: true

  const texto = '¡Hola!, soy Carli';

// Encontrar la posición del nombre "Carli"
const posicionInicio = texto.indexOf('Carli');

// Utilizar slice() para obtener el nombre
const licenciada = texto.slice(posicionInicio, posicionInicio + 5);

// Imprimir el resultado
console.log(licenciada);

  
