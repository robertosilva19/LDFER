alert('Boas-vindas ao jogo do número secreto')
let chute = prompt('Escolha um número de 1 e 10')

let numeroSecreto = 4

if (chute == numeroSecreto) {
   alert('Acertou')
}else if (chute > numeroSecreto) 
   alert('Errou! O número secreto é menor')