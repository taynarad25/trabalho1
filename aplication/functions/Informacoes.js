const urlInformacoes = "http://localhost:8080/informacoes";
function getInformacoes(){
    axios.get(urlInformacoes)
    .then(response => {
        const data = JSON.stringify(response.data)
        const node = document.createElement("p")
        const text = document.createTextNode(JSON.stringify(JSON.parse(data)))
        node.appendChild(text)
        document.getElementById("renderResults").appendChild(node)
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
    axios.post(urlInformacoes, {
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
        alert("Informações do serviço cadastradas com sucesso!")
    })
    .catch(error => console.log(error))
}
function delInformacoes(){
    id = document.querySelector("#id").value
    axios.delete(urlInformacoes + "/" + id)
    .then(response => {
        console.log(response.data)
        alert("Informações excluída com sucesso!")
        document.location.reload(true)
    })
    .catch(error => console.alert(error))
}