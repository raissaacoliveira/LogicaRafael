// Preço de cada par de calçado
let preco = Number(prompt("Qual o valor de cada par de calçado?"))
let valeTrocas
// Quantidade de pares trocados
let quantidade = Number(prompt("Qual é a quantidade de pares trocados?"))
// Calcule quanto a loja vai receber em vale trocas
let total = quantidade * preco
// mostrar o resultado
alert("Valor total R$" + total)