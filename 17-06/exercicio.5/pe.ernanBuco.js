// Custos mensais da igreja
const custoMensal = Number(prompt("Custos mensais da igreja: "))
// Quanto foi recebido de doações e dizimos no dia
const valorRecebido = Number(prompt("Quanto foi recebido?"))
// Quanto falta para pagar
let valorFaltante = custoMensal - valorRecebido
alert("Valor faltante para pagar os custos mensais: " + valorFaltante)