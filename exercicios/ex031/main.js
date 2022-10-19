function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')

    var data = new Date()
    var hora = data.getHours()
    // var hora = 7

    msg.innerHTML = `Agora são ${hora} horas`

    if(hora >= 0 && hora < 12) {
        // BOM DIA
        img.src = 'modelo/img/manha.png'
        document.body.style.background = '#fec87e'

    } else if(hora >= 12 &&  hora < 18) {
        //BOA TARDE
        img.src = 'modelo/img/tardee.png'
        document.body.style.background = '#efa82a'

    } else {
        //BOA NOITE
        img.src = 'modelo/img/noite.png'
        document.body.style.background = '#071c1f'
    }
}
