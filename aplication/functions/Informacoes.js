const url = "http://localhost:8080/informacoes";
function getInformacoes(){
    axios.get(url)
    .then(response => {
        const data = response.data
        renderResults.textContent = JSON.stringify(data)
    })
    .catch(error => console.error(error))
}
function addInformacoes(){
    const idTipo = document.querySelector("#idTipo").value;
    const idServico = document.querySelector("#idServico").value;
    const nome = document.querySelector("#nome").value;
    const horario = document.querySelector("#horario").value;
    const endereco = document.querySelector("#endereco").value;
    const telefone = document.querySelector("#telefone").value;
    const instagram = document.querySelector("#instagram").value;
    const whatsapp = document.querySelector("#whatsapp").value;
    axios.post(url, {
        idTipo: idTipo,
        idServico: idServico,
        nome: nome,
        horario: horario,
        endereco: endereco,
        telefone: telefone,
        instagram: instagram,
        whatsapp: whatsapp
    })
    .then(response => {
        console.log(response.data)
    })
    .catch(error => console.log(error))
}
function delInformacoes(){
    axios.delete(url + "")
    .then(response => {
        console.log(JSON.stringify(response.data))
    })
    .catch(error => console.alert(error))
}