
 firebase.initializeApp (firebaseConfig)

 const database = firebase.database()

 const dataContainer = document.querySelector('tbody')

var fetchedData = database.ref('pacientes/')
fetchedData.on('value', (snapshot) => {
    var data = snapshot.val()
    var htmlData = ''
    for (var key in data){
        var value = data[key]
        htmlData += `
        <tr>
                <td>${value.nome}</td>
                <td>${value.cpf}</td>
                <td>${value.nascimento}</td>
                <td>${value.telefone}</td>
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
    database.ref('pacientes/' + uniqueId).remove()
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
        'cpf': contentId[1].textContent,
        'nascimento': contentId[2].textContent,
        'telefone': contentId[3].textContent
        
    }

    var listRef = database.ref ('pacientes/' + uniqueId)
    listRef.update(obj)
}