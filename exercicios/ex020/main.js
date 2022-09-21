var area = document.getElementById('area')
area.addEventListener('click', clicar)
area.addEventListener('mouseenter', entrar)
area.addEventListener('mouseout', saiu)

function clicar() {
    area.innerText = 'Clicou'
    area.style.background = 'red'
}

function entrar(){
    area.innerText = 'Entrou!'
    area.style.background = 'green'
}

function saiu(){
    area.innerText = 'Saiu!'
    area.style.background = 'blue'
}