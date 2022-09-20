var nome = prompt("Nome do funcionario?")
var atual = Number(prompt("Valor do Salário"))

//com R$
var f = atual.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});

alert(`O funcionario ${nome} recebe um salário de ${f}  ao mês`)