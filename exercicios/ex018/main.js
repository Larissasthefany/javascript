function calcValor(){
    document.getElementById("total").value = '0'

    var valorTotal = parseFloat(document.getElementById("valor1").value);

    var desconto1 = parseFloat(document.getElementById("desconto1").value)

    if(isNaN (desconto1)) {
        desconto1 = 0;
    }

    var pdesconto = parseFloat((vtotalliquido * desconto1) /100)

    var vdesconto = parseFloat(document.getElementById("desconto2").value)

    if(isNaN (vdesconto)) {
        vdesconto = 0;
    }

    var total = parseFloat(vtotalliquido) - parseFloat(pdesconto) - parseFloat(vdesconto);

    document.getElementById("total").value = 'R$ ' + total.toFixed(2);

}