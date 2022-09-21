var a = prompt('Digite um numero')
var b = prompt('Digite outro numero')
var c = prompt('Digite outro numero')

var coeficiente1;
var coeficiente2;

var delta = (b * b) -4 *a * c;

document.write("valor de Delta =>" +delta+ "<br/><br/>")

if(delta < 0) {
    document.write("Para Delta negativo, não existem raízes reais. <br/>") 
}else {
    document.write("Para Delta positivo, raízes diferentes: <br/>")

        coeficiente1 = (-b + Math.sqrt(delta)) / (2 * a);
		coeficiente2 = (-b - Math.sqrt(delta)) / (2 * a);
		  
		document.write("x' = " + coeficiente1 + "<br/>");
		document.write("x'' = " + coeficiente2 + "<br/>");
}
