
const firebaseConfig = {
    databaseURL: "https://tcc-softmed-default-rtdb.asia-southeast1.firebasedatabase.app",
    apiKey: "AIzaSyAKNn40LAfPZZlp2w_bam1aYpDfwANbJVg",
    authDomain: "tcc-softmed.firebaseapp.com",
    projectId: "tcc-softmed",
    storageBucket: "tcc-softmed.appspot.com",
    messagingSenderId: "715516448986",
    appId: "1:715516448986:web:cd3a5bdc99e2c05f46d5e3"
 }

 firebase.initializeApp (firebaseConfig)

 const database = firebase.database()

 const dataContainer = document.querySelector('tbody')

var fetchedData = database.ref('clinicas/')
fetchedData.on('value', (snapshot) => {
    var data = snapshot.val()
    var htmlData = ''
    for (var key in data){
        var value = data[key]
        htmlData += `
        <tr>
                <td>${value.nome}</td>
                <td>${value.nomesocial}</td>
                <td>${value.cnpj}</td>
                <td>${value.email}</td>
                <td>${value.contato}</td>
                <td>
                    <button onclick="readyForUpdate('${key}', this)">Atualizar</button>
                    <button onclick="removeMess('${key}', this)">Deletar</button>
                </td>
            </tr>

        `;
    }
    dataContainer.innerHTML = htmlData
})

function removeMess(uniqueId){
    database.ref('clinicas/' + uniqueId).remove()
}

function readyForUpdate(uniqueId, elem){

    var siblingTd = elem.parentElement.parentElement.getElementsByTagName('td')

    for( var i=0; i < siblingTd.length-1; i++){
        siblingTd[i].contentEditable = true
        siblingTd[i].classList.add('temp-update-class')
    }

    elem.setAttribute('onclick', `updateNow('${uniqueId}')`)
    elem.innerHTML = 'Enviar'
}


function updateNow(uniqueId){
    var contentId = document.querySelectorAll('.temp-update-class')
    var obj = {
        'nome': contentId[0].textContent,
        'nomesocial': contentId[1].textContent,
        'cnpj': contentId[2].textContent,
        'email': contentId[3].textContent,
        'contato':contentId[4].textContent
    }

    var listRef = database.ref ('clinicas/' + uniqueId)
    listRef.update(obj)
}