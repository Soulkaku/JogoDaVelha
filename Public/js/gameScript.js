const socket = io();

const boxes = document.getElementsByClassName("box");

const yourName = document.getElementById("user1");
const enemyName = document.getElementById("user2");

const params = new URLSearchParams(window.location.search);

const room = params.get("room");
const username = params.get("username");
const userId = sessionStorage.getItem("identification");

console.log(`Entrando na sala: ${room}, Usuário: ${username}`);



yourName.textContent = `X-player: ${username}`;
// enemyName.textContent = `O-player: ${enemyName}`;

for (let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener("click", function() {
        const position = this.getAttribute("data-id");
        
        let board = [   "1", "2", "3", 
                        "4", "5", "6",
                        "7", "8", "9",
                    ]
        console.log(board[i]);
        if (board [1] == board [2] == board [3]) {
            console.log("winner");
        }
    });
}

// function markBox() {
//     const position = this.getAttribute("data-id");
    
//     if (board[position] !== "") return; // Se já tiver um valor, não faz nada

//     board[position] = currentPlayer;
//     this.innerHTML = currentPlayer;

//     if (checkWin()) {
//         setTimeout(() => location.reload(), 2000); // Reinicia o jogo após 2s
//         return;
//     }

//     currentPlayer = currentPlayer === "X" ? "O" : "X"; // Alterna jogador
// }

// for (let i = 0; i < boxes.length; i++) {
//     boxes[i].addEventListener("click", markBox);
// }
