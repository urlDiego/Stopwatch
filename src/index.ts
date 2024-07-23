// Variables para almacenar el tiempo
let horas: number = 0;
let minutos: number = 0;
let segundos: number = 0;
let centesimas: number = 0;
let intervalo: number;

// Función para iniciar el cronómetro
function startClock(): void {
    if (intervalo !== undefined) {
        clearInterval(intervalo);
    }
    intervalo = setInterval(updateClock, 10);
}

// Función para detener el cronómetro
function stopClock(): void {
    if (intervalo !== undefined) {
        clearInterval(intervalo);
    }
}

// Función para reiniciar el cronómetro
function resetClock(): void {
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
function updateClock(): void {
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
function padStart(value: number, length: number, padChar: string = '0'): string {
    let str = value.toString();
    while (str.length < length) {
        str = padChar + str;
    }
    return str;
}
