"use strict";
// Variables para almacenar el tiempo
let horas = 0;
let minutos = 0;
let segundos = 0;
let centesimas = 0;
let intervalo;
// Función para iniciar el cronómetro
function startClock() {
    if (intervalo !== undefined) {
        clearInterval(intervalo);
    }
    intervalo = setInterval(updateClock, 10);
}
// Función para detener el cronómetro
function stopClock() {
    if (intervalo !== undefined) {
        clearInterval(intervalo);
    }
}
// Función para reiniciar el cronómetro
function resetClock() {
    if (intervalo !== undefined) {
        clearInterval(intervalo);
    }
    // Reinicia las variables
    horas = 0;
    minutos = 0;
    segundos = 0;
    centesimas = 0;
    // Actualiza el reloj a 00:00:00:00
    updateClock();
}
// Función para actualizar el tiempo en pantalla
function updateClock() {
    centesimas++;
    if (centesimas === 100) {
        centesimas = 0;
        segundos++;
    }
    if (segundos === 60) {
        segundos = 0;
        minutos++;
    }
    if (minutos === 60) {
        minutos = 0;
        horas++;
    }
    // Formateo del tiempo para mostrar siempre dos dígitos
    const horasElement = document.getElementById('Horas');
    const minutosElement = document.getElementById('Minutos');
    const segundosElement = document.getElementById('Segundos');
    const centesimasElement = document.getElementById('Centesimas');
    if (horasElement && minutosElement && segundosElement && centesimasElement) {
        horasElement.textContent = padStart(horas, 2);
        minutosElement.textContent = ':' + padStart(minutos, 2);
        segundosElement.textContent = ':' + padStart(segundos, 2);
        centesimasElement.textContent = ':' + padStart(centesimas, 2);
    }
}
// Función para rellenar con ceros a la izquierda
function padStart(value, length, padChar = '0') {
    let str = value.toString();
    while (str.length < length) {
        str = padChar + str;
    }
    return str;
}
