const firebaseConfig = {
  apiKey: "AIzaSyAKNn40LAfPZZlp2w_bam1aYpDfwANbJVg",
authDomain: "tcc-softmed.firebaseapp.com",
databaseURL: "https://tcc-softmed-default-rtdb.asia-southeast1.firebasedatabase.app",
projectId: "tcc-softmed",
storageBucket: "tcc-softmed.appspot.com",
messagingSenderId: "715516448986",
appId: "1:715516448986:web:cd3a5bdc99e2c05f46d5e3"
}

firebase.initializeApp (firebaseConfig)

var empresaFormDB = firebase.database().ref("empresaForm");

document.getElementById("empresaForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();
  
  window.location.reload();
  var razaoSocial = getElementVal("razaoSocial");
  var nomeFantasia = getElementVal("nomeFantasia");
  var cnpjEmpresa = getElementVal("cnpjEmpresa");
  var emailEmpresa = getElementVal("emailEmpresa");
  var contatoEmpresa = getElementVal("contatoEmpresa");

  saveMessages(razaoSocial,nomeFantasia,cnpjEmpresa,emailEmpresa,contatoEmpresa);

  alert("Empresa cadastrada!");
 document.getElementById("encaminhamentoForm").reset();
 window.location.reload();
}

const saveMessages = (razaoSocial,nomeFantasia,cnpjEmpresa,emailEmpresa,contatoEmpresa) => {
  firebase
    .database()
    .ref("clinicas/" + cnpjEmpresa)
    .set({
      razaoSocial:razaoSocial,
      nomeFantasia:nomeFantasia,
      cnpjEmpresa:cnpjEmpresa,
      emailEmpresa:emailEmpresa,
      contatoEmpresa:contatoEmpresa,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};









 const submit = document.querySelector('button')
  submit.onclick = () => sendData()

  geraID()
  async function geraID() {
    try {
      console.log("entrei")
      let result = await count();
      const newResult = await atualiza(++result);
      document.getElementById("Idempresa").value=result;
      console.log(result);
    } catch (error) {
    }
  }
  
  function count(){
   return  firebase
    .database()
    .ref("indiceEmpresa/empresa")
    .once("value").then((snapshot) => {
      return snapshot.val();
     });
  }
  
  function atualiza(valor){
    return firebase
    .database()
    .ref("indiceEmpresa")
    .set({empresa:valor});
  }
  
 function sendData(){

    var num = document.getElementById('Idempresa').value;
     var nome = document.getElementById('razaoSocial').value;
     console.log(nome);
     var nomesocial = document.getElementById('nomeFantasia');
     var cnpj = document.getElementById('cnpjEmpresa');
     var email = document.getElementById('emailEmpresa');
     var contato = document.getElementById('contatoEmpresa');

     
    
     return firebase
     .database()
     .ref("clinicas/"+num)
     .set({
        nome:nome,
        nomesocial:nomesocial.value,
        cnpj:cnpj.value, 
        email:email.value,
        contato:contato.value,
         
     })
};

function cadastrosclinicas(){
    window.location.href = "clinicascadastradas.html"
 }
