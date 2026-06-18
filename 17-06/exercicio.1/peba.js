// ler o numero de vitorias
let vitorias = Number(prompt("Quantas vitórias?"))
// ler o numero de empates
let empates = Number(prompt("Quantos empates?"))
// calcular pontos 
let pontos = vitorias*3 + empates
// mostrar o resultado
alert("O time tem " + pontos)