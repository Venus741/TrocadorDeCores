let div = document.querySelector(".trocador"); // seleciona a classe da div que será trabalhada
let cores = ["#0000FF", "#FFFF00", "#008000"]; // váriável que contém as cores selecionadas para alteração
let corAtual = 0; // posição no index da div

function trocador() { 
    let alterar = cores[corAtual]; // nova variável chamando a cor da array que está no index "0"

    div.style.backgroundColor = alterar; // Div recebendo váriável de alteração anterior

    
    corAtual = (corAtual +1) % cores.length; // "corAtual" recebendo ela mesma + próxima cor da array. O operador "%" faz com que o resto da divisão retorne pra zero, quando chegar no limite da array. Sempre seguindo a sequencia da esquerda para a direita.
}
