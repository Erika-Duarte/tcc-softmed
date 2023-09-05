const firebaseConfig = {
    databaseURL: "https://tcc-softmed-default-rtdb.asia-southeast1.firebasedatabase.app"
 }

 firebase.initializeApp (firebaseConfig)
 const database = firebase.database()

 const submit = document.querySelector('button')
  submit.onclick = () => sendData()

  
 function sendData(){
     var nome = document.querySelectorAll('input')[0]
     var nomesocial = document.querySelectorAll('input')[1]
     var cnpj = document.querySelectorAll('input')[2]
     var email = document.querySelectorAll ('input')[3]
     var contato = document.querySelectorAll('input')[4]

     

     var listRef = database.ref('clinicas/')
     var newRef = listRef.push()
     newRef.set({
         'nome': nome.value,
         'nomesocial': nomesocial.value,
         'cnpj': cnpj.value,
         'email':email.value, 
         'contato': contato.value,

         
     })
 };

 function cadastrosclinicas(){
    window.location.href = "cadastrosclinicas.html"
 }
