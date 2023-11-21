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

  var pacienteFormDB = firebase.database().ref("pacienteForm");
  
  document.getElementById("pacienteForm").addEventListener("submit", submitForm);


  function submitForm(e) {
    e.preventDefault();
    
    window.location.reload();
    var nomePac = getElementVal("nomeID");
    var CPF = getElementVal("CPFID");
    var dataNasc = getElementVal("datanascID");
    var contato = getElementVal("contatoID");
  
    saveMessages(nomePac,CPF,dataNasc,contato);
  
    alert("Paciente cadastrado(a)!");
   document.getElementById("pacienteForm").reset();
   window.location.reload();
  }


  const saveMessages = (nomePac,CPF,dataNasc,contato) => {
    firebase
      .database()
      .ref("pacientes/" + CPF)
      .set({
        nomePac:nomePac,
        CPF:CPF,
        dataNasc:dataNasc,
        contato:contato,
    });
  };

  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };



 function cadastros(){
    window.location.href = "cadastros.html"
 }
 function logininterno(){
    window.location.href = "logininterno.html"
 } 