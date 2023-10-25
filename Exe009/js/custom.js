var nota = 8;

if (nota > 7) {
    document.write("Aluno Aprovado: " + nota);
} else if ((nota < 7) && (nota >= 4)) {
    document.write("Aluno em Recuperacao: " + nota);
} else {
    document.write("Aluno Reprovado: " + nota);
}