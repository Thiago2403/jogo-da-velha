// Define variables for the current player and the winner
var jogador, vencedor = null;

// Get the elements for displaying the current player and the winner
var jogadorSelecionado = document.getElementById('jogador-selecionado');
var vencedorSelecionado = document.getElementById('vencedor-selecionado');

// Set the initial player to 'X'
mudarJogador('X');

// Function to handle when a square is chosen
function escolherQuadrado(id) {
    // If there is already a winner, return
    if (vencedor !== null) {
        return;
    }

    // Get the selected square element
    var quadrado = document.getElementById(id);

    // If the square is already filled, return
    if (quadrado.innerHTML !== '-') {
        return;
    }

    // Fill the square with the current player's symbol and change the color
    quadrado.innerHTML = jogador;
    quadrado.style.color = 'rgba(176, 52, 117)';

    // Switch the player
    if (jogador === 'X') {
        jogador = 'O';
    } else {
        jogador = 'X';
    }

    // Update the displayed current player
    mudarJogador(jogador);

    // Check if there is a winner
    checaVencedor();
}

// Function to update the current player
function mudarJogador(valor) {
    jogador = valor;
    jogadorSelecionado.innerHTML = jogador;
}

// Function to check if there is a winner
function checaVencedor() {
    // Get all the square elements
    var quadrado1 = document.getElementById(1);
    var quadrado2 = document.getElementById(2);
    var quadrado3 = document.getElementById(3);
    var quadrado4 = document.getElementById(4);
    var quadrado5 = document.getElementById(5);
    var quadrado6 = document.getElementById(6);
    var quadrado7 = document.getElementById(7);
    var quadrado8 = document.getElementById(8);
    var quadrado9 = document.getElementById(9);

    // Check all possible winning sequences
    if (checaSequencia(quadrado1, quadrado2, quadrado3)) {
        mudaCorQuadrado(quadrado1, quadrado2, quadrado3);
        mudarVencedor(quadrado1);
        return;
    }

    if (checaSequencia(quadrado4, quadrado5, quadrado6)) {
        mudaCorQuadrado(quadrado4, quadrado5, quadrado6);
        mudarVencedor(quadrado4);
        return;
    }

    if (checaSequencia(quadrado7, quadrado8, quadrado9)) {
        mudaCorQuadrado(quadrado7, quadrado8, quadrado9);
        mudarVencedor(quadrado7);
        return;
    }

    if (checaSequencia(quadrado1, quadrado4, quadrado7)) {
        mudaCorQuadrado(quadrado1, quadrado4, quadrado7);
        mudarVencedor(quadrado1);
        return;
    }

    if (checaSequencia(quadrado2, quadrado5, quadrado8)) {
        mudaCorQuadrado(quadrado2, quadrado5, quadrado8);
        mudarVencedor(quadrado2);
        return;
    }

    if (checaSequencia(quadrado3, quadrado6, quadrado9)) {
        mudaCorQuadrado(quadrado3, quadrado6, quadrado9);
        mudarVencedor(quadrado3);
        return;
    }

    if (checaSequencia(quadrado1, quadrado5, quadrado9)) {
        mudaCorQuadrado(quadrado1, quadrado5, quadrado9);
        mudarVencedor(quadrado1);
        return;
    }

    if (checaSequencia(quadrado3, quadrado5, quadrado7)) {
        mudaCorQuadrado(quadrado3, quadrado5, quadrado7);
        mudarVencedor(quadrado3);
    }

     
    if (checaSequencia(quadrado1, quadrado2, quadrado3)) {
        mudaCorQuadrado(quadrado1, quadrado2, quadrado3);
        mudarVencedor(quadrado1);
        exibirAlertaVencedor(quadrado1.innerHTML); // Chamada corrigida
        return;
    }
} 


function mudarVencedor(quadrado) {
    vencedor = quadrado.innerHTML;
    vencedorSelecionado.innerHTML = vencedor;
}

function mudaCorQuadrado(quadrado1, quadrado2, quadrado3) {
    quadrado1.style.background = 'rgba(52, 176, 117, 0.7)'; // cor de destaque para o fundo
    quadrado1.style.color = 'rgba(9, 53, 115, 0.5)'; // cor de destaque para o texto
    quadrado2.style.background = 'rgba(52, 176, 117, 0.7)';
    quadrado2.style.color = 'rgba(9, 53, 115, 0.5)';
    quadrado3.style.background = 'rgba(52, 176, 117, 0.7)';
    quadrado3.style.color = 'rgba(9, 53, 115, 0.5)';
}

function checaSequencia(quadrado1, quadrado2, quadrado3) {
    var eigual = false;

    if (quadrado1.innerHTML !== '-' && quadrado1.innerHTML === quadrado2.innerHTML && quadrado2.innerHTML === quadrado3.innerHTML) {
        eigual = true;
    }

    return eigual;
}

// Function to restart the game
function reiniciar() {
    // Reset the winner and the displayed winner
    vencedor = null;
    vencedorSelecionado.innerHTML = '';

    // Reset all the squares
    for (var i = 1; i <= 9; i++) {
        var quadrado = document.getElementById(i);
        quadrado.style.background = 'rgba(9, 53, 115, 0.5)';
        quadrado.style.color = 'rgba(9, 53, 115, 0.0)';
        quadrado.innerHTML = '-';
    }

    // Set the initial player to 'X'
    mudarJogador('X');
}

// Object to store player information
var jogador1 = {
    nome: '',
    peca: ''
};

var jogador2 = {
    nome: '',
    peca: ''
};

// Function to prompt the player for their name
function solicitarNomeJogador(numeroJogador) {
    var nome = prompt("Por favor, insira o nome do Jogador " + numeroJogador);
    if (nome != null) {
        document.querySelector(".jogador" + numeroJogador + " p").textContent = nome;
    }
}

// Function to prompt the player for their chosen symbol
function solicitarPecaJogador(numeroJogador) {
    var peca = '';
    while (peca.toUpperCase() !== 'X' && peca.toUpperCase() !== 'O') {
        peca = prompt("Jogador " + numeroJogador + ", por favor escolha X ou O:");
    }
    document.querySelector(".jogador" + numeroJogador + " .peca-jogador").textContent = "Peça: " + peca.toUpperCase();
    return peca.toUpperCase();
}

// Function to display the winner in an alert
function exibirAlertaVencedor(nome) {
    alert("O vencedor é: " + nome);
}

// Function to check if there is a draw
function checaEmpate() {
    // Check if all squares are filled
    for (var i = 1; i <= 9; i++) {
        var quadrado = document.getElementById(i);
        if (quadrado.innerHTML === '-') {
            return false;
        }
    }
    return true;
}

// Function to display a draw alert
function exibirAlertaEmpate() {
    alert("Empate! O jogo terminou sem vencedor.");
}

// Function to set up the game when the window loads
window.onload = function() {
    // Prompt the players for their names
    solicitarNomeJogador(1);
    solicitarNomeJogador(2);

    // Prompt the first player for their chosen symbol
    var pecaJogador1 = solicitarPecaJogador(1);

    // Determine the symbol for the second player
    var pecaJogador2 = pecaJogador1 === 'X' ? 'O' : 'X';

    // Set the symbol for the second player
    document.querySelector(".jogador2 .peca-jogador").textContent = "Peça: " + pecaJogador2;

    console.log("Jogador 1 escolheu " + pecaJogador1);
    console.log("Jogador 2 é " + pecaJogador2);
}