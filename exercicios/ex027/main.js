function search() {
    var p = document.getElementById('pais')
    var res = document.getElementById('res')
    var txtp = String(p.value)

    if(txtp == 'Brasil'){
        res.innerHTML = `<p>Você é <strong>Brasileiro</strong></p>`
    } else {
        res.innerHTML = `<p>Você é <strong>Estrangeiro</strong>, Seu país de origem é <strong>${p.value}</strong></p>`
    }
}