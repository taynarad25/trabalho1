const urlInformacoes = "http://localhost:8080/informacoes";
function getInformacoes(){
    axios.get(urlInformacoes)
    .then(response => {
        response.data.forEach((item) => {
            const {Id_Informacoes, Nome } = item;

            const elementoHTML = `
                <div class="item">
                    <a href="#/${Id_Informacoes}">${Nome}</a>
                    <button type="button" onclick="delInformacoes(${Id_Informacoes})">Excluir</button>
                </div>
            `;
            document.getElementById("renderResults").innerHTML += elementoHTML;
        });
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
function delInformacoes(id){
    axios.delete(urlInformacoes + "/" + id)
    .then(response => {
        console.log(response.data)
        alert("Informações excluída com sucesso!")
        document.location.reload(true)
    })
    .catch(error => console.alert(error))
}