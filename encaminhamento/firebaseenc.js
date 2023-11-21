const firebaseConfig = {
    databaseURL: "https://tcc-softmed-default-rtdb.asia-southeast1.firebasedatabase.app"
 }

 firebase.initializeApp (firebaseConfig)

 const database = firebase.database()

 const dataContainer = document.querySelector('tbody')
 var data ;
 
var fetchedData = database.ref('encaminhamento/')
fetchedData.on('value', (snapshot) => {
    var data = snapshot.val()
    var htmlData = ''
    for (var key in data){
        var value = data[key]
        htmlData += `
        <tr>
                <td>${value.data}</td>
                <td>${value.nomeC}</td>
                <td>${value.NomeF}</td>
                <td>${value.per}</td>

            </tr>

        `;
    }
    dataContainer.innerHTML = htmlData
})

const INPUT_BUSCA = document.getElementById('input-busca');
const TABELA_BEBIDAS = document.getElementById('tabela-agenda');

INPUT_BUSCA.addEventListener('keyup', () => {
    let expressao = INPUT_BUSCA.value.toLowerCase();

    if (expressao.length === 1) {
        return;
    }

    let linhas = TABELA_BEBIDAS.getElementsByTagName('tr');

    for (let posicao in linhas) {
        if (true === isNaN(posicao)) {
            continue;
        }

        let conteudoDaLinha = linhas[posicao].innerHTML.toLowerCase();

        if (true === conteudoDaLinha.includes(expressao)) {
            linhas[posicao].style.display = '';
        } else {
            linhas[posicao].style.display = 'none';
        }
    }
});
