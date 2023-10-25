var cadeira = {
    cor: "Preta",
    altura: 118,
    largura: 89,
    profundidade: 64,
    peso: 17
}

document.write("Cor da cadeira: " + cadeira.cor + "<br><br>");
document.write("Altura da cadeira: " + cadeira.altura + "<br><br>");

//Alterar propriedade
cadeira.cor = "Branca";
document.write("Cor da cadeira: " + cadeira.cor + "<br><br>");
//Adicionar Propriedade
cadeira.cumprimento = 23;
document.write("Cumprimento da cadeira: " + cadeira.cumprimento + "<br><br>");
//Apagar uma propriedade
document.write("Profundidade da cadeira: " + cadeira.profundidade+"<br><br>");
delete cadeira.profundidade;
document.write("Profundidade da cadeira: " + cadeira.profundidade+"<br><hr>");

//Criando um objecto de uma outra maneira
var mesa=new Object;
mesa.cor="Maron";

document.write("Cor da Mesa: " + mesa.cor + "<br><br>");