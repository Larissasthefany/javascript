var nome = prompt("Qual é o seu nome?")
document.write(`Olá, ${nome}.  Seu nome tem ${nome.length}  letras. </br>`)
document.write(` Seu nome em maiúsculo é  ${nome.toUpperCase()}`)
document.write(`Seu nome em minúsculo é  ${nome.toLocaleLowerCase()}`)
