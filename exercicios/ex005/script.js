//Função validar
function validar(){   

    //Pegando o valor do nome pelos names
    var nome = document.getElementById("nome");

    //Verificar se o nome está vazio
    if(nome.value == "") {
        alert("Nome não informado");
   

    //Deixa o input com o focus
    nome.focus();
   }
}

