const firebaseConfig = {
    databaseURL: "https://tcc-softmed-default-rtdb.asia-southeast1.firebasedatabase.app"
 }

 firebase.initializeApp (firebaseConfig)

 const database = firebase.database()

 const submit = document.querySelector('button')
  submit.onclick = () => sendData()

  
 function sendData(){
     var data = document.querySelectorAll('input')[0]
     var nome = document.querySelectorAll('input')[1]
     var nomeempresa = document.querySelectorAll ('input')[2]
     var periodo = document.querySelectorAll('input')[3]
    
     

     var listRef = database.ref('encaminhamento/')
     var newRef = listRef.push()
     newRef.set({
         'data': data.value,
         'nome': nome.value,
         'nomeempresa': nomeempresa.value,
         'periodo':periodo.value, 
         
     })
 };
