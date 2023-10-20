//valida o formato do email
function validateEmail (email){
    return /\S+@\S+\.\S+/.test(email);
}
