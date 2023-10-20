//função principal
function validateFields(){
    botoesDesabilitados();

    }

//valida o email
function isEmailValid(){
        const email = form.email().value;
        if (!email){
            return false;
        }
        return validateEmail(email);
    }

//valida a senha
function isPasswordValid(){
        const password = form.password().value;
        if (!password){
            return false;
        }
        return true;
    }
//redireciona quando logado
function logado(){ 
  firebase.auth().signInWithEmailAndPassword(form.email().value, form.password().value).then(response => {
    window.location.href = "usuariologado.html";
    }).catch(error => {
        alert(getErrorMessage(error));
  });
}

//mascarando a mensagem de erro do auth
function getErrorMessage(error){
    if (error.code == "auth/user-not-found"){
        return "Usuário não encontrado";
    } else if(error.code == "auth/wrong-password"){
        return "Senha Incorreta"
    }
    return error.message;
}
//habilita ou desabilita o botão de login caso o email e senha sejam validos
function botoesDesabilitados(){
    const emailValid = isEmailValid();
    const passwordValid = isPasswordValid();

    document.getElementById('entrar').disabled = !emailValid || !passwordValid;
}

const form ={
    email: () => document.getElementById('email'),
    password: () => document.getElementById('password')

}