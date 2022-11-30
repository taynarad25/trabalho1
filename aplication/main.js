const url = "http://localhost:8080/";
function getTipo(){
    axios.get(url+"tipo")
    .then(response => {
        const data = response.data
        renderResults.textContent = JSON.stringify(data)
    })
    .catch(error => console.log(error))
}
getTipo()

function addTipo(){
    axios.post(url + "tipo", {
        nome: "teste"
    })
    .then(response => {
        console.log(response.data)
    })
    .catch(error => console.log(error))
}
// addTipo()