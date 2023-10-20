/**Como criar e usar FUNCTION e ARROW FUNCTION
 * Nt: o nome da funcao nao pode ter caracteres especiais
 */

//Funcao sem parametro
function saudar() {
    alert("Ola, bem vindo ao Exercicio-003");
}

//Funcao com parametro
function soma(a, b) {
    var soma = a + b;
    alert("A soma de " + a + " + " + b + " = " + soma);
    //document.write("A soma de " + a + " + " + b + " = " + soma);
}

//Funcao que e chamada logo que a pagina web e carregada
function desconto(a, b) {
    var valorDesc = a - b;
    return valorDesc;
}
var totalDesc = desconto(100, 50);
document.write("Carro cliente o seu desconto e de: " + totalDesc + " %" + "<br><br>");

//Arrow Function
const somaA = (num1, num2) => num1 + num2;
document.write("A soma e " + somaA(500,500) + "<br><br>");

//Qaundo a funcao precisa de + de 1 linha implementamos da seguinte maneira
const somaArrow = (num3, num4) =>{
    var valorTotal = num3 + num4;
    return valorTotal;
}
document.write(somaArrow(8,9) + "<br><br>");