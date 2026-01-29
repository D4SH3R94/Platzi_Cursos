//Operadores condicionales Switch

let Juego1 = "Call of Duty";
let Juego2 = "FIFA";
switch (Juego1, Juego2) {
    case "FIFA":
        console.log("Has seleccionado el juego FIFA."); 
        break;
    case "Call of Duty":
        console.log("Has seleccionado el juego Call of Duty.");
        break;
    case "Minecraft":
        console.log("Has seleccionado el juego Minecraft.");
        break;
    default:
        console.log("Juego no reconocido.");
        break;
}