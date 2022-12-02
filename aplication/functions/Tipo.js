const urlTipo = "http://localhost:8080/tipo";
function deletar(id) {
    alert(id)
}

function getTipo(){
    axios.get(urlTipo)
    .then(response => {
        response.data.forEach((item) => {
            const { Id_Tipo, Nome } = item;

            const elementoHTML = `
                <div class="item">
                    <a href="../get/Servicos.html">${Nome}</a>
                    <button type="button" onclick="delTipo(${Id_Tipo})">Excluir</button>
                </div>
            `;
            document.getElementById("renderResults").innerHTML += elementoHTML;
        });
    })
    .catch(error => console.error(error))
}
function addTipo(){
    const nome = document.querySelector("#nome").value;
    axios.post(urlTipo, {
        nome: nome
    })
    .then(response => {
        console.log(response.data)
        alert("Tipo cadastrado com sucesso!")
    })
    .catch(error => console.log(error))
}
function delTipo(id){
    axios.delete(urlTipo + "/" + id)
    .then(response => {
        console.log(response.data)
        alert("Tipo excluído com sucesso!")
        document.location.reload(true)
    })
    .catch(error => console.alert(error))
}