const firebaseConfig = {
    databaseURL: "https://tcc-softmed-default-rtdb.asia-southeast1.firebasedatabase.app"
 }

 firebase.initializeApp (firebaseConfig)

 const database = firebase.database()

 const dataContainer = document.querySelector('tbody')

var fetchedData = database.ref('encaminhamento/')
fetchedData.on('value', (snapshot) => {
    var data = snapshot.val()
    var htmlData = ''
    for (var key in data){
        var value = data[key]
        htmlData += `
        <tr>
                <td>${value.data}</td>
                <td>${value.nome}</td>
                <td>${value.nomeempresa}</td>
                <td>${value.periodo}</td>

            </tr>

        `;
    }
    dataContainer.innerHTML = htmlData
})
