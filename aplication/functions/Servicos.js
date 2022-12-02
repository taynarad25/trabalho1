const urlServicos = "http://localhost:8080/servicos";
function getServicos(){
    axios.get(urlServicos)
    .then(response => {
        response.data.forEach((item) => {
            const {Id_Servicos, Id_Tipo, Nome } = item;
            const elementoHTML = `
                <div class="item">
                    <a href="../get/Informacoes.html">${Nome}</a>
                    <button type="button" onclick="delServicos(${Id_Servicos})">Excluir</button>
                </div>
            `;
            document.getElementById("renderResults").innerHTML += elementoHTML;
        });
    })
    .catch(error => console.error(error))
}
function addServicos(){
    const idTipo = document.querySelector("#idTipo").value;
    const nome = document.querySelector("#nome").value;
    axios.post(urlServicos, {
        idTipo: idTipo,
        nome: nome

    })
    .then(response => {
        console.log(response.data)
        alert("Serviço cadastrado com sucesso!")
    })
    .catch(error => console.log(error))
}
function delServicos(id){
    axios.delete(urlServicos + "/" + id)
    .then(response => {
        console.log(response.data)
        alert("Serviço excluído com sucesso!")
        document.location.reload(true)
    })
    .catch(error => console.alert(error))
}