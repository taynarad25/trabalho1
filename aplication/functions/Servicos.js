const urlServicos = "http://localhost:8080/servicos";
function getServicos(){
    axios.get(urlServicos)
    .then(response => {
        const data = JSON.stringify(response.data)
        const node = document.createElement("p")
        const text = document.createTextNode(JSON.stringify(JSON.parse(data)))
        node.appendChild(text)
        document.getElementById("renderResults").appendChild(node)
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
function delServicos(){
    id = document.querySelector("#id").value
    axios.delete(urlServicos + "/" + id)
    .then(response => {
        console.log(response.data)
        alert("Serviço excluído com sucesso!")
        document.location.reload(true)
    })
    .catch(error => console.alert(error))
}