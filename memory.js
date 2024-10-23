// Lógica do jogo da memória
const memoryButtons = document.querySelectorAll('.memoryBtn');
let firstGuess = null;
let secondGuess = null;
let lockBoard = false;
let pairsFound = 0;
const totalPairs = memoryButtons.length / 2; // Total de pares no jogo

// Embaralha as cartas
function shuffle() {
    memoryButtons.forEach(button => {
        const randomPos = Math.floor(Math.random() * memoryButtons.length);
        button.style.order = randomPos;
    });
}

shuffle(); // Chama a função de embaralhamento

memoryButtons.forEach(button => {
    button.addEventListener('click', handleGuess);
});

function handleGuess(event) {
    if (lockBoard) return; // Previne mais de duas escolhas
    const clickedButton = event.target;

    if (clickedButton === firstGuess) return; // Previne a seleção do mesmo botão

    clickedButton.textContent = clickedButton.dataset.value; // Mostra o valor do botão
    clickedButton.classList.add('flipped'); // Adiciona uma classe para estilização

    if (!firstGuess) {
        firstGuess = clickedButton;
        return;
    }

    secondGuess = clickedButton;
    lockBoard = true; // Bloqueia a seleção

    checkForMatch();
}

function checkForMatch() {
    const isMatch = firstGuess.dataset.value === secondGuess.dataset.value;

    isMatch ? disableButtons() : unflipButtons();
}

function disableButtons() {
    firstGuess.removeEventListener('click', handleGuess);
    secondGuess.removeEventListener('click', handleGuess);
    resetBoard();
    pairsFound++;

    if (pairsFound === totalPairs) {
        setTimeout(() => alert("Você encontrou todos os pares!"), 500);
    }
}

function unflipButtons() {
    setTimeout(() => {
        firstGuess.textContent = '?';
        secondGuess.textContent = '?';
        resetBoard();
    }, 1000);
}

function resetBoard() {
    [firstGuess, secondGuess, lockBoard] = [null, null, false];
}

// Reiniciar o jogo
document.getElementById('resetGameBtn').addEventListener('click', () => {
    memoryButtons.forEach(button => {
        button.textContent = '?'; // Reseta o texto
        button.classList.remove('flipped'); // Remove a classe de virado
    });
    pairsFound = 0; // Reseta os pares encontrados
    shuffle(); // Embaralha novamente
});