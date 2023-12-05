let palabra = "puerta";

switch (palabra.toLowerCase()) {
    case "perro":
        console.log("Dog");
        break;
    case "gato":
        console.log("Cat");
        break;
    case "puerta":
        console.log("Door");
        break;
        case "ventana":
        console.log("Windows");
        break;
    default:
        console.log("La palabra ingresada es incorrecta");
        break;
}