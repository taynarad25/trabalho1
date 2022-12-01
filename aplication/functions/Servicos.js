const urlServicos = "http://localhost:8080/servicos";
function getServicos(){
    axios.get(urlServicos)
    .then(response => {
        const data = response.data
        renderResults.textContent = JSON.stringify(data)
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
        alert(response.data)
    })
    .catch(error => console.log(error))
}
function delServicos(){
    axios.delete(urlServicos + "")
    .then(response => {
        console.log(JSON.stringify(response.data))
    })
    .catch(error => console.alert(error))
}