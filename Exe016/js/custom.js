function carConteudo() {
    document.getElementById("conteudo").innerHTML = "dsbdkbeudcda dbcakdue adakjdaoidnddheqh ajdoiadandoadosdsdhaos";
}

function mouseOver() {
    document.getElementById("mouseAlt").innerHTML = "Retire o mouse";
}

function mouseOut() {
    document.getElementById("mouseAlt").innerHTML = "Passe o mouse";
}

function converTexto() {
    var nome = document.getElementById("nome");
    nome.value = nome.value.toUpperCase();
}

function validarSenha(){
    var senha= document.getElementById("senha").value;

    if((senha =="") || (senha.length <=5)){
        document.getElementById("erroSenha").innerHTML="<span style='color:#ff0000';>Preencha a senha com no minimo 6 caracteres";
    } else{
        document.getElementById("erroSenha").innerHTML="<span style='color:#00ff00';>Senha Valida";
    }
}