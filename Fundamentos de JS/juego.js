const numeroSecretto = Math.floor(Math.random() * 10) + 1;
const numeroJugador = parseInt(prompt("Adivina el número secreto entre 1 y 10:"));
let intentos = 2;

if (numeroJugador === numeroSecretto) {
    alert("¡Felicidades! Has adivinado el número secreto.");
} else if (numeroJugador < numeroSecretto) {
    alert("El número secreto es mayor. ¡Tienes " + intentos + " intentos!");
    intentos = intentos - 1;
} else if (numeroJugador > numeroSecretto) {
    alert("El número secreto es menor. ¡Tienes " + intentos + " intentos!");
    intentos = intentos - 1;
}else if (intentos === 0) {
    alert("Lo siento, has agotado tus intentos. El número secreto era " + numeroSecretto + ".");
}