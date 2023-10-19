//NT: nunca use o document.write em uma aplicacao em producao, sempre use na fase de teste da tua aplicacao web
document.write("<h2>Variaveis em JavaScript (VAR)</h2>");

//Declaracao de Variaveis usando o VAR. Usando este tipo de de declaracao e possivel alterar o valor das variaveis sem nenhum problema
var nomeAluno = "Cripton";
var idadeAluno = 22;
var cursoAluno = "Curso de JavaScript";

document.write("Aluno(a)" + nomeAluno + ", tem a idade de " + idadeAluno + " anos. Esta inscrito(a) no curso " + cursoAluno + "<br>");

nomeAluno = "Armando";
idadeAluno = 25;
cursoAluno = "Curso de HTML";

document.write("Aluno(a)" + nomeAluno + ", tem a idade de " + idadeAluno + " anos. Esta inscrito(a) no curso " + cursoAluno + "<br>");

document.write("<hr>");

//Declaracao de variaveis usando o CONST. Usando este tipo de declaracao nao e possivel alterar valor das variaveis. NT: As variaveis e as constantes nao podem ter o mesmo nome.
document.write("<h2>Variaveis em JavaScript (CONST)</h2>");

const nomeAlunoConst = "Amilcar";
const idadeAlunoConst = 56;
const cursoAlunoConst = "BOOTSTRAP";

document.write("Aluno(a)" + nomeAlunoConst + ", tem a idade de " + idadeAlunoConst + " anos. Esta inscrito(a) no curso " + cursoAlunoConst + "<br>");

document.write("<hr>");

//Declaracao de variaveis usando o (LET).Usando o let e possivel fazer a alteracao do conteudo das variaveis.NT: As variaveis, constantes nao podem ter o mesmo nome que o let.

document.write("<h2>Variaveis em JavaScript (LET)</h2>");

let nomeAlunoLet = "Celeste";
let idadeAlunoLet = 67;
let cursoAlunoLet = "CSS";

document.write("Aluno(a)" + nomeAlunoLet + ", tem a idade de " + idadeAlunoLet + " anos. Esta inscrito(a) no curso " + cursoAlunoLet + "<br>");

nomeAlunoLet = "Brown";
idadeAlunoLet = 23;
cursoAlunoLet = "CSS";

document.write("Aluno(a)" + nomeAlunoLet + ", tem a idade de " + idadeAlunoLet + " anos. Esta inscrito(a) no curso " + cursoAlunoLet + "<br><br>");

//Imprimindo as variaveis dentro de um IF
if (true) {
    var situacao = "Ativo";
    const situacaoConst = "Inativo";
    let situacaoLet = "Cancelado";
    document.write("Situacao do Aluno: " + situacao + "<br>");
    document.write("Situacao do Aluno: " + situacaoConst + "<br>");
    document.write("Situacao do Aluno: " + situacaoLet + "<br>");

}

document.write("Situacao do Aluno: " + situacao + "<br>");
/**Uma vez que o const e o let nao foram declarados globalmente eles nao irao imprimir a situacao fora do escopo, ou melhor fora do IF */
//document.write("Situacao do Aluno: " + situacaoConst + "<br>"); 
//document.write("Situacao do Aluno: " + situacaoLet + "<br>");
