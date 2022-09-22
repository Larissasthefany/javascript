var p = document.getElementById('p')
p.addEventListener('click', clicar)
function clicar() {
p.innerText = 'Hello World'   
}

function toggleDiv(){
    const div = document.getElementById('minha-div-1')
    div.classList.toggle('hide')
    div.style.background = 'blue'
    div.style.fontFamily = 'Arial'
    div.style.fontSize = '18px'
}