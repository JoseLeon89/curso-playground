//Arrays
/*let nombre = ["jose", "vico", "leon"];
let edades = [34, 28, 20, 15];
let valoresDeVerdad = [true, false, false];
let varios = ["vico", 56, true, false, "jose", [34, 28, 20, 15]];

// dato concreto dentro del array
console.log(nombre);
console.log(nombre[1]);

//array dentro de un array
console.log(varios[5][2]);*/

/*let saludar = ["hola", "mundo!"]
let saludar1 = ["hola", "hola!"]

let seriesFavoritasDeAna = ["Game of Thrones", "Breaking Bad", "House of Cards",];
let seriesFavoritasDeHector = ["En Terapia", "Recordando el Show de Alejandro Molina"]

console.log(seriesFavoritasDeAna);
console.log(saludar);
console.log(seriesFavoritasDeHector);
console.log(saludar1);*/

//METODO PUSH()
/*let colores = ["Azul", "Verde", "Rojo"];
colores.push("violeta", "Amarillo");
console.log(colores);*/

//METODO POP()
/*let colores = ["Azul", "Verde", "Rojo"];
let elUltimo = colores.pop();
console.log(elUltimo);*/

//METODO SHIFT()
/*let colores = ["Azul", "Verde", "Rojo"];
let elUltimo = colores.shift();

console.log(colores);
console.log(elUltimo);*/

//METODO UNSHIFT()
/*let colores = ["Azul", "Verde", "Rojo"];
colores.unshift("celeste", "marron");
console.log(colores);*/

//METODO INDEXOF()
/*let colores =["verde", "azul", "rojo", "celeste"];
console.log(colores.indexOf("marron"));*/

//METODO JOIN()
/*let diasSemanas =["lunes", "martes", "miercoles", "jueves", "viernes"];
console.log(diasSemanas.join(" - "));*/

//EJERCICIOS
/*let notas = [3, 6, 9, 5, 8, 8, 7, 10, 8];

let posicion8 = notas.lastIndexOf(2) //tambien funciona con string si el array es string

if (posicion8 != -1){
    console.log("Lo encontre");
}else{
    console.log("No existe el numero buscado");
}*/

/*let notas = [3, 6, 9, 5, 8, 8, 7, 10, 8];

let resultados = notas.join("**")
console.log(resultados);*/


let estudiantes = [
    {
      nombre: 'Alvaro',
      promedio : 9,
      curso : 'Android',
    },
    {
      nombre: 'Daniel',
      promedio : 6,
      curso : 'Full Stack',
    },
    {
      nombre: 'Alexis',
      promedio : 3,
      curso : 'iOS',
    },
  ]
  
  estudiantes.push({
      nombre: 'Juan',
      promedio : 5,
      curso : 'iOS',
    },
    {
      nombre: 'Miguel',
      promedio : 2,
      curso : 'Android',
    });
  
  console.log(estudiantes.push());



