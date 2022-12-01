const url = "http://localhost:8080/tipo";
function getTipo(){
    axios.get(url)
    .then(response => {
        const data = response.data
        renderResults.textContent = JSON.stringify(data)
    })
    .catch(error => console.error(error))
}
function addTipo(){
    const nome = document.querySelector("#nome").value;
    axios.post(url, {
        nome: nome
    })
    .then(response => {
        alert(response.data)
    })
    .catch(error => console.log(error))
}
function delTipo(){
    axios.delete(url + "")
    .then(response => {
        console.log(JSON.stringify(response.data))
    })
    .catch(error => console.alert(error))
}