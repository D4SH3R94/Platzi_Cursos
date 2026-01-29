/* for (variables, condicion, incremento) {
    // Bloque de código a ejecutar en cada iteración
} */

/* let games = ['Pacman', 'Mario Bros', 'Zelda', 'Sonic', 'Tetris'];

for (let i = 0; i < games.length; i++) {
    console.log('Juego: ' + games[i]);
}*/

// Loops For of case
/* 
for of arrays y strings
for (variable of iterable) {
    // Bloque de código a ejecutar en cada iteración
} */
/* let games = ['Pacman', 'Mario Bros', 'Zelda', 'Sonic', 'Tetris'];

for (let game of games) {
    console.log('Juego: ' + game);
} */

    // Loop For in case
/* 
for in objetos
for (variable in objeto) {
    // Bloque de código a ejecutar en cada iteración
} */    
let persona = {
    nombre: 'Juan',
    edad: 30,
    profesion: 'Desarrollador'
};
for (let key in persona) {
    console.log(key + ': ' + persona[key]);
}