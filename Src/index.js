let divTrocador = document.querySelector(".trocador"); // seleciona a classe da div que será trabalhada
let cores = ["#0000FF", "#FFFF00", "#008000"]; // váriável que contém as cores selecionadas para alteração
let corAtual = 0; // posição no index da div

function trocador() { 
    let alterar = cores[corAtual]; // nova variável chamando a cor da array que está no index "0"

    divTrocador.style.backgroundColor = alterar; // Div recebendo váriável de alteração anterior

    
    corAtual = (corAtual +1) % cores.length; // "corAtual" recebendo ela mesma + próxima cor da array. O operador "%" faz com que o resto da divisão retorne pra zero, quando chegar no limite da array. Sempre seguindo a sequencia da esquerda para a direita.
}

let divMostrador = document.querySelector(".identificador"); // seleciona a classe da div que será trabalhada
let input = document.querySelector(".input"); // recebe o valor informado no input

function encontrar() {
    let receber = input.value; // converte o input em valor legível para ser trabalhado
    divMostrador.style.backgroundColor = receber; // aplicação de método para o valor do input alterar o CSS
}