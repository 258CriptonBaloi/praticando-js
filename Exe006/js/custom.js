document.write("<h1>Operadores de comparacao</h1>");
var num1 = 8;
var num2 = 4;

document.write("<h2>Operadores de comparacao: igual a </h2>");
if (num1 == num2) {
    document.write(num1 + "e == " + num2);
} else {
    document.write(num1 + " e diferente de " + num2);
}
document.write("<h2>Operadores de comparacao: diferente de </h2>");
if (num1 != num2) {
    document.write(num1 + " e diferente de " + num2);
}else {
    document.write(num1 + "e == " + num2);
}
document.write("<h2>Operadores de comparacao: menor que </h2>");
if (num1 < num2) {
    document.write(num1 + " e menor que " + num2);
}else {
    document.write(num1 + " nao e menor " + num2);
}
document.write("<h2>Operadores de comparacao: maior que </h2>");
if (num1 > num2) {
    document.write(num1 + " e maior que " + num2);
}else {
    document.write(num1 + " nao e maior " + num2);
}
document.write("<h2>Operadores de comparacao: menor ou igual a </h2>");
if (num1 <= num2) {
    document.write(num1 + " e menor ou igual a " + num2);
}else {
    document.write(num1 + " nao e menor ou igual a " + num2);
}
document.write("<h2>Operadores de comparacao: maior ou igual a </h2>");
if (num1 >= num2) {
    document.write(num1 + " e maior ou igual a " + num2);
}else {
    document.write(num1 + " nao e maior ou igual a " + num2);
}