    window.document.write("Olá, mundo")
    
    //Selecionar paragrafo
    var p1 = document.getElementsByTagName('p')[0]

    //Ele mostra oque esta escrito no paragrafo
    window.document.write('Esta escrito assim:  ' +  p1.innerText)

    //Mudar a cor da letra
    p1.style.color = 'blue'
        
    //Muda a cor do fundo
    var corpo = window.document.body;
    corpo.style.background = 'black'

    //chamando a div pelo ID
    var d = window.document.getElementById('msg')
    d.style.background = 'green'
    d.innerText = 'Estou aguardando...'

    //Chamando a div pelo Queryselector
    var d = document.querySelector('div#msg')
    d.style.background= 'orange'

    alert(p1.innerHTML)
