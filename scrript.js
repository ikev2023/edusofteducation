function updateCountdown() {
    const now = new Date().getTime();
    const targetDate = new Date('2024-06-06T00:00:00').getTime(); // 6 de junio de 2024

    const distance = targetDate - now;

    // Cálculo de días, horas, minutos y segundos
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Mostrar el resultado en el elemento con id "countdown"
    document.getElementById('countdown').innerHTML = `
        ${days}d ${hours}h ${minutes}m ${seconds}s
    `;

    // Si la cuenta regresiva ha terminado
    if (distance < 0) {
        clearInterval(interval);
        document.getElementById('countdown').innerHTML = "¡El evento ha comenzado!";
    }
}

// Actualizar el contador cada 1 segundo
const interval = setInterval(updateCountdown, 1000);

// Inicializar el contador al cargar la página
updateCountdown();