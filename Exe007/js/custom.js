document.write("<h1>Operadores Logicos</h1>");
var nota = 8;
var falta = 27;

if ((nota < 4) || (falta > 25)) {
    document.write("Reprovado: " + nota + " Faltas: " + falta + "<br>");
}

nota = 2;
falta = 27;

if ((nota < 4) || (falta > 25)) {
    document.write("Reprovado: " + nota + " Faltas: " + falta + "<br>");
}

var situacao = !false;
document.write("Situacao: " + situacao + "<br>");