$(seletor) .keypress (validar)
function validar(){
    login = document.getElementById("email");
    senha = document.getElementById("senha");
    if(validarEmail(login)==1){
    if(login.value ==="admin@hofe.com" && senha.value =="admin"){
        window.location.href="../Curso/index.html";
    }
    }else{
        alert ("E-mail inválido")
    }
    
}
function validarEmail(login){
    let usuario = login.value.substring(0, login.value.indexOf("@"));
dominio = login.value.substring(login.value.indexOf("@")+ 1, login.value.length);

if ((usuario.length >=1) &&
    (dominio.length >=3) &&
    (usuario.search("@")==-1) &&
    (dominio.search("@")==-1) &&
    (usuario.search(" ")==-1) &&
    (dominio.search(" ")==-1) &&
    (dominio.search(".")!=-1) &&
    (dominio.indexOf(".") >=1)){    return 1}
    else{
        return 2
    }

}
