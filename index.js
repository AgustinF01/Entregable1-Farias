// Variables y constantes
const opciones = ['piedra', 'papel', 'tijera'];
let jugador, computadora;
let puntajeJugador = 0;
let puntajeComputadora = 0;

// Función para obtener la elección del jugador
function obtenerEleccionJugador() {
    jugador = prompt("Elige: Piedra, Papel o Tijera").toLowerCase();
    if (!opciones.includes(jugador)) {
        alert("Opción inválida. Por favor elige piedra, papel o tijera.");
        return obtenerEleccionJugador(); // Volver a preguntar
    }
}

// Función para obtener la elección de la computadora
function obtenerEleccionComputadora() {
    const indice = Math.floor(Math.random() * opciones.length);
    computadora = opciones[indice];
}

// Función para determinar el ganador
function determinarGanador() {
    console.log(`Jugador: ${jugador}`);
    console.log(`Computadora: ${computadora}`);

    if (jugador === computadora) {
        alert("¡Empate!");
        puntajeJugador += 1;
        puntajeComputadora += 1;
    } else if (
        (jugador === 'piedra' && computadora === 'tijera') ||
        (jugador === 'papel' && computadora === 'piedra') ||
        (jugador === 'tijera' && computadora === 'papel')
    ) {
        alert("¡Ganaste!");
        puntajeJugador += 1;
        puntajeComputadora -= 1;
    } else {
        alert("¡Perdiste!");
        puntajeJugador -= 1;
        puntajeComputadora += 1;
    }

    // Actualizar los puntajes en la interfaz
    document.getElementById('puntajeJugador').textContent = puntajeJugador;
    document.getElementById('puntajeComputadora').textContent = puntajeComputadora;

    // Verificar si alguien ha llegado a 10 puntos
    if (puntajeJugador >= 10) {
        alert("¡Felicidades! Has salvado a la humanidad");
        resetearJuego();
    } else if (puntajeComputadora >= 10) {
        alert("¡Terminator gano!. Preparense para la extincion...");
        resetearJuego();
    }
}

// Función para reiniciar el juego
function resetearJuego() {
    puntajeJugador = 0;
    puntajeComputadora = 0;
    document.getElementById('puntajeJugador').textContent = puntajeJugador;
    document.getElementById('puntajeComputadora').textContent = puntajeComputadora;
}

// Función para preguntar si el jugador quiere jugar de nuevo
function jugarDeNuevo() {
    const respuesta = confirm("¿Quieres probar suerte de nuevo?");
    if (respuesta) {
        iniciarJuego(); // Reinicia el juego si el jugador quiere jugar de nuevo
    } else {
        alert("¡Hasta luego humano!");
    }
}

// Función principal para iniciar el juego
function iniciarJuego() {
    obtenerEleccionJugador();
    obtenerEleccionComputadora();
    determinarGanador();
    // jugarDeNuevo();
}

// Evento para iniciar el juego al hacer clic en el botón
document.getElementById('startGame').addEventListener('click', iniciarJuego);