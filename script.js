document.addEventListener('DOMContentLoaded', () => {
    // Funkcja zegara w stopce
    function updateClock() {
        const now = new Date();
        const timeString = now.toLocaleTimeString('pl-PL', { hour12: false });
        const dateString = now.toLocaleDateString('pl-PL');
        document.getElementById('clock').textContent = `${dateString} | ${timeString} UTC`;
    }

    setInterval(updateClock, 1000);
    updateClock();

    // Efekt konsoli w logach (opcjonalny efekt wizualny w konsoli przeglądarki)
    console.log("%c [!] System gotowy. Portfolio załadowane.", "color: #00ff41; font-weight: bold;");
    console.log("%c [?] Szukasz luk? Sprawdź moje laby!", "color: #00ccff;");
});
