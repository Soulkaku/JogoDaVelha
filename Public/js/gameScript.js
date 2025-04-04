const socket = io();

const boxes = document.getElementsByClassName("box");
const firstUser = document.getElementById("user1");
const username = sessionStorage.getItem("username");

firstUser.textContent = `X-player: ${username}`;

const board = ["", "", "", "", "", "", "", "", ""]; // Representação do tabuleiro
let currentPlayer = "X"; // Começa com "X"

const winPatterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Linhas
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Colunas
    [0, 4, 8], [2, 4, 6] // Diagonais
];

function checkWin() {
    for (let pattern of winPatterns) {
        const [a, b, c] = pattern;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            alert(`${board[a]} venceu!`);
            return true;
        }
    }
    return false;
}

function markBox() {
    const position = this.getAttribute("data-id");
    
    if (board[position] !== "") return; // Se já tiver um valor, não faz nada

    board[position] = currentPlayer;
    this.innerHTML = currentPlayer;

    if (checkWin()) {
        setTimeout(() => location.reload(), 2000); // Reinicia o jogo após 2s
        return;
    }

    currentPlayer = currentPlayer === "X" ? "O" : "X"; // Alterna jogador
}

for (let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener("click", markBox);
}
