//funcion expresada
let sumar = function (numeroA, numeroB){
    return numeroA + numeroB;
}
//console.log(sumar(10, 45));

//funcion declarada
function restar(numeroC, numeroD){
    return numeroC - numeroD;
}
//console.log(restar(10, 4));

//Ejemplo Scope
 /*let mensaje = "Hola";

 function saludar(){
    let mensaje = "Chau";
    return mensaje;
 }*/

 //console.log(mensaje);
 //console.log(saludar());

 //suma y multiplica
 function triple(numero1, numero2) {
    return numero1 + numero2;
}

function tripleDeLaSuma(numero3, numero4) {
    let resultadoDeSuma = triple(numero3, numero4);
    return resultadoDeSuma * 3;
}

//console.log(tripleDeLaSuma(4, 6));

function perimetro(pi, radio, numero){
    let perimetro = 3.14*5*4;
    return perimetro;
}
//console.log(perimetro());


/*function longitudNombreCompleto(nombre, apellido) {

    const longitudTotal = nombre.length + apellido.length + 1;
    return longitudTotal;
  }
  
  const nombre = "Juan";
  const apellido = "Pérez";
  const longitud = longitudNombreCompleto(nombre, apellido);
  console.log(longitud);*/
  

  /*function escribirCartelito (titulo, nombre, apellido) {
    const cartelito = (`'${titulo} ${nombre} ${apellido}'`);
    return cartelito;
  }
  
  const titulo = "Sr.";
  const nombre = "Juan";
  const apellido = "Pérez";
  const mensaje = escribirCartelito(titulo, nombre, apellido);
  console.log(mensaje);*/
  
   /*function escribirCartelito(titulo, nombre, apellido) {
    const cartelito = `${titulo} ${nombre} ${apellido}`;
    return cartelito;
  }
  
  const resultado = escribirCartelito("Dra.", "Ana", "Pérez");
  console.log(resultado);*/

  /*function sePoneLaOlla(diaDeLaSemana) {
    if (diaDeLaSemana === "Domingo") {
      return "¡Pongamos la olla, hoy se comen pastas!";
    } else {
      return "Mejor lo dejamos para el domingo";
    }
  }
  
  // Ejemplo de uso:
  const resultado = sePoneLaOlla("Lunes");
  console.log(resultado);*/

  function tengoClases(dia) {
    switch (dia) {
      case 'lunes':
      case 'miércoles':
      case 'viernes':
        console.log('tenés clases');
        break;
      default:
        console.log('no tenés clases');
    }
  }
  
  let dia = 'lunes';
  tengoClases(dia);
  


  