//Juego de adivinanza simple usando un bucle de juego en JavaScript y operadores condicionales metodos y demas
let numeroSecretto = Math.floor(Math.random() * 10) + 1;
let intentos = 3;
let numeroJugador;
while (intentos > 0) {
    numeroJugador = parseInt(prompt("Adivina el número secreto entre 1 y 10. Te quedan " + intentos + " intentos:")); //parseInt convierte el string a numero entero
    if (numeroJugador === numeroSecretto) {
        alert("¡Felicidades! Has adivinado el número secreto.");
        break; // Sale del bucle si el jugador adivina correctamente
    } else if (numeroJugador < numeroSecretto) {
        intentos--;
        alert("El número secreto es mayor. ¡Inténtalo de nuevo!");
    } else if (numeroJugador > numeroSecretto) {
        intentos--;
        alert("El número secreto es menor. ¡Inténtalo de nuevo!");
    }
    if (intentos === 0) {
        alert("Lo siento, has agotado tus intentos. El número secreto era " + numeroSecretto + ".");
    }
}