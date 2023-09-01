const firebaseConfig = {
    databaseURL: "https://tcc-softmed-default-rtdb.asia-southeast1.firebasedatabase.app"
 }

 firebase.initializeApp (firebaseConfig)
 const database = firebase.database()

 const submit = document.querySelector('button')
  submit.onclick = () => sendData()

  
 function sendData(){
     var nome = document.querySelectorAll('input')[0]
     var cpf = document.querySelectorAll('input')[1]
     var telefone = document.querySelectorAll ('input')[2]
     var email = document.querySelectorAll('input')[3]
     var senha = document.querySelectorAll('input')[4]
     

     var listRef = database.ref('funcionarios/')
     var newRef = listRef.push()
     newRef.set({
         'nome': nome.value,
         'cpf': cpf.value,
         'telefone':telefone.value, 
         'email': email.value,
         'senha': senha.value
         
     })
 };

 function cadastros(){
    window.location.href = "cadastros.html"
 }
