// Efekt Typewriter (pisanie na maszynie)
const textElement = document.getElementById("typewriter");
const text = textElement.innerText;
textElement.innerText = "";

let i = 0;
function typeWriter() {
    if (i < text.length) {
        textElement.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    }
}

// Uruchomienie efektu po załadowaniu strony
window.onload = typeWriter;

// Prosta walidacja konsoli (easter egg)
console.log("%c SECURITY WARNING: Nie wklejaj tu żadnych skryptów!", "color: red; font-size: 20px; font-weight: bold;");
console.log("Status systemu: Zabezpieczony.");
