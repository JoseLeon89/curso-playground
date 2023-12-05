/*let laMitad = numero => numero/2;
console.log(laMitad(6));

let dividir = (numeroA, numeroB) => numeroA / numeroB;
console.log(dividir(20, 4));

let Trabajar = dia =>{
    if(dia == "Sabado" || dia == "Domingo"){
        return "Hoy no trabajo, descanso";
    }else{
        return "Hoy tengo que trabajar";
    }
}
console.log(Trabajar("lunes"));*/

/*function dameCinco() {
    return [1,2,3,4,5];
}

function multiplicarPorDos() {
  return 123 * 2 ;
}

function mostrarNombre() {
  return "Mi nombre es Hernán";
}*/


/*let dameCinco = () => [1,2,3,4,5];
    console.log(dameCinco());


let multiplicarPorDos = numero1 => numero1*2
  console.log(multiplicarPorDos(123));

let mostrarNombre = nombre => nombre;
  console.log(mostrarNombre("Mi nombre es Jose"));*/

let dameCinco = () => [1,2,3,4,5];
console.log(dameCinco());

let multiplicarPorDos = numero1 => 123*2
console.log(multiplicarPorDos());

let mostrarNombre = nombre => ("Mi nombre es Hernán");
console.log(mostrarNombre());

/**function saludar(nombre) {
    return 'Hola, ' + nombre + '!';
} */

let saludar = nombre => 'Hola'+"Ezequiel"+'!';
console.log(saludar());

let saludar2 = (nombre, apellido) => 'Hola, ' + nombre + '' +  apellido + '';
console.log(saludar2('jose', 'leon'));