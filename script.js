document.addEventListener('DOMContentLoaded', () => {
    // Funkcja aktualizująca czas w stopce
    function updateClock() {
        const now = new Date();
        const timeStr = now.toLocaleTimeString('pl-PL', { hour12: false });
        const dateStr = now.toLocaleDateString('pl-PL');
        const clockElement = document.getElementById('clock');
        if(clockElement) {
            clockElement.textContent = `${dateStr} | ${timeStr} UTC`;
        }
    }

    setInterval(updateClock, 1000);
    updateClock();

    // Logowanie do konsoli dla rekruterów
    console.log("%c[SYSTEM] Portfolio Security Loaded.", "color: #00ff41; font-weight: bold; font-size: 16px;");
    console.log("%c[INFO] Skille załadowane pomyślnie...", "color: #00ccff;");
});