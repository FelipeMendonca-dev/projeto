// Função para verificar se um número é primo
function checkPrime() {
    const number = parseInt(document.getElementById('primeInput').value);
    let isPrime = true;

    if (number < 2) {
        isPrime = false;
    } else {
        for (let i = 2; i <= Math.sqrt(number); i++) {
            if (number % i === 0) {
                isPrime = false;
                break;
            }
        }
    }

    document.getElementById('primeResult').innerText = isPrime ? 
        `${number} é primo!` : `${number} não é primo.`;
}

// Função para o botão que foge
const fleeBtn = document.getElementById('fleeBtn');
fleeBtn.addEventListener('mouseover', function() {
    const x = Math.random() * (window.innerWidth - 120); // Ajustando para não sair da tela
    const y = Math.random() * (window.innerHeight - 120);
    fleeBtn.style.position = 'absolute';
    fleeBtn.style.left = `${x}px`;
    fleeBtn.style.top = `${y}px`;
});

// Função para dark mode
let isDarkMode = false;
document.getElementById('darkModeBtn').addEventListener('click', function() {
    const body = document.body;
    const mainContainer = document.querySelector('.main-container');
    if (isDarkMode) {
        body.style.backgroundColor = "#f0f8ff";
        mainContainer.style.backgroundColor = "white";
        mainContainer.style.color = "#333";
        this.innerText = "Ativar Dark Mode";
    } else {
        body.style.backgroundColor = "#333";
        mainContainer.style.backgroundColor = "#222";
        mainContainer.style.color = "#f0f0f0";
        this.innerText = "Desativar Dark Mode";
    }
    isDarkMode = !isDarkMode;
});

// Função para texto arco-íris
const rainbowText = document.getElementById('rainbowText');
rainbowText.addEventListener('mouseover', function() {
    const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    this.style.color = randomColor;
});
