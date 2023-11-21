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

 var encaminhamentoFormDB = firebase.database().ref("encaminhamentoForm");

 document.getElementById("encaminhamentoForm").addEventListener("submit", submitForm);

 geraID()
async function geraID() {
  try {
    console.log("entrei")
    let result = await count();
    const newResult = await atualiza(++result);
    document.getElementById("numEncaminhamento").value=result;
    console.log(result);
  } catch (error) {
  }
}

function count(){
 return  firebase
  .database()
  .ref("indices/encaminhamento")
  .once("value").then((snapshot) => {
    return snapshot.val();
   });
}

function atualiza(valor){
  return firebase
  .database()
  .ref("indices")
  .set({encaminhamento:valor});
  
}

window.onload = periodo()
function periodo()
  {
      console.log(document.getElementById("input-periodo").value);

  }

window.onload = sexo()
function sexo()
  {
      console.log(document.getElementById("input-sexo").value);

  }
  window.onload = tipo()
  function tipo()
    {
        console.log(document.getElementById("input-tipo").value);
  
    }  
    window.onload = pagamento()
    function pagamento()
      {
          console.log(document.getElementById("input-pagamento").value);
    
      } 
      window.onload = check()
      function check()
        {
            console.log(document.getElementById("clinico").value);
      
        }   



 function submitForm(e) {
  e.preventDefault();
  
  window.location.reload();
  var numEncaminhamento = getElementVal("numEncaminhamento");
  var data = getElementVal("dataAgendamento");
  var per = document.getElementById('input-periodo').value;
  var cpfC = getElementVal("cpfColaborador");
  var cnpjE = getElementVal("cnpjEmpresa");
  var NomeF = getElementVal("inputNomeF");
  var razaosocial = getElementVal("inputrazaosocial");
  var Email4 = getElementVal("inputEmail4");
  var TelR = getElementVal("inputTelR");
  var NomeR = getElementVal("inputNomeR");

  var nomeC = getElementVal("inputNomeC");
  var dataC = getElementVal("inputnascimento");
  var telC = getElementVal("inputTelC");
  var sexoC = document.getElementById('input-sexo').value;
  var funC = getElementVal("inputfuncao");
  var setorC = getElementVal("inputSetor");
  var tipoEx = document.getElementById('input-tipo').value;

  var clinic = getElementVal("clinico"); 
  var visu = getElementVal("visual");
  var psci = getElementVal("psicossocial");
  var audi = getElementVal("audiometria");
  var espir = getElementVal("epirometria");
  var card = getElementVal("cardiograma");
  var encef = getElementVal("encefalograma");
  var hemo = getElementVal("hemorgrama");
  var glic = getElementVal("clicemia");
  var hipu = getElementVal("hipurico");
  var mende = getElementVal("mandelico"); 
  var meti = getElementVal("metil");

  var pagamento = document.getElementById('input-pagamento').value;

  var tAltura = getElementVal("altura");
  var tConfinado = getElementVal("confinado");
  var tEletricidade = getElementVal("eletricidade");
  var tAlimentos = getElementVal("alimentos");
  var tMaquinas = getElementVal("maquinas");



  saveMessages(numEncaminhamento,data,per,cpfC,cnpjE,NomeF,razaosocial,Email4,TelR,NomeR,nomeC,dataC,telC,sexoC,funC,setorC,tipoEx,
    clinic,visu,psci,audi,espir,card,encef,hemo,glic,hipu,mende,meti,pagamento,tAltura,tConfinado,tEletricidade,tAlimentos,tMaquinas
    
    );
  // saveMessages(nomeC,dataC,telC,sexoC,funC,setorC,tipoEx);
  // saveMessages(clinic,visu,psci,audi,espir,card,encef,hemo,glic,hipu,mende,meti);
  // saveMessages(pagamento);
  // saveMessages(tAltura,tConfinado,tEletricidade,tAlimentos,tMaquinas)
  //   enable alert
  

  //   reset the form
  alert("Encaminhamento cadastrado!");
 //document.getElementById("encaminhamentoForm").reset();
 
}


const saveMessages = (numEncaminhamento,data,per,cpfC,cnpjE,NomeF,razaosocial,Email4,TelR,NomeR,
  nomeC,dataC,telC,sexoC,funC,setorC,tipoEx,clinic,visu,psci,audi,espir,card,encef,hemo,glic,hipu,mende,meti,pagamento,
  tAltura,tConfinado,tEletricidade,tAlimentos,tMaquinas
  ) => {
  firebase
    .database()
    .ref("encaminhamento/" + numEncaminhamento)
    .set({
      data:data,
      per:per,
      cpfC:cpfC,
      cnpjE:cnpjE,
      NomeF:NomeF,
      razaosocial:razaosocial,
      Email4:Email4,
      TelR:TelR,
      NomeR:NomeR,

      nomeC:nomeC,
      dataC:dataC,
      telC:telC,
      sexoC:sexoC,
      funC:funC,
      setorC:setorC,
      tipoEx:tipoEx,
      clinic:clinic,
      visu:visu,
      psci:psci,
      audi:audi,
      espir:espir,
      card:card,
      encef:encef,
      hemo:hemo,
      glic:glic,
      hipu:hipu,
      mende:mende,
      meti:meti,
      
      pagamento:pagamento,

      tAltura:tAltura,
      tConfinado:tConfinado,
      tEletricidade:tEletricidade,
      tAlimentos:tAlimentos,
      tMaquinas:tMaquinas,


  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};



var razaoSocialV,nomeFantasiaV,cnpjEmpresaV,emailEmpresaV,contatoEmpresaV;



function readFom() {

  cnpjEmpresaV = document.getElementById("cnpjEmpresa").value;
  razaoSocialV = document.getElementById("inputrazaosocial").value;
  nomeFantasiaV = document.getElementById("inputNomeF").value;
  emailEmpresaV = document.getElementById("inputEmail4").value;
  contatoEmpresaV = document.getElementById("inputTelR").value;

  console.log(cnpjEmpresaV);
}



document.getElementById("teste").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("clinicas/" + cnpjEmpresaV)
    .on("value", function (snap) {

  document.getElementById("cnpjEmpresa").value = snap.val().cnpjEmpresa;
  document.getElementById("inputrazaosocial").value = snap.val().razaoSocial;
  document.getElementById("inputNomeF").value = snap.val().nomeFantasia;
  document.getElementById("inputEmail4").value = snap.val().emailEmpresa;
  document.getElementById("inputTelR").value = snap.val().contatoEmpresa;




    });
};

 
