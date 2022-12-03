const urlServicos = "http://localhost:8080/servicos";
function validarServicos(){
    const form = document.forms[0];
    const idTipo = form.querySelector('input[name="idTipo"]')
    const nome = form.querySelector('input[name="nome"]');
    if(nome.value != "" && idTipo.value != ""){
        addServicos();
    }
    else{
        alert("Preencha os campos obrigatórios")
    }
}

function getServicos(id){
    axios.get(urlServicos + "/" + id)
    .then(response => {
        response.data.forEach((item) => {
            const {Id_Tipo, Id_Servicos, Nome } = item;
            if(id == Id_Tipo){
                const elementoHTML = `
                    <div class="item">
                        <input type="button" id="${Id_Servicos}" value="${Nome}" name ="getInformacoes" onClick="click(this.id); window.location.href ='http://localhost:3000/get/Informacoes.html'">
                        <button type="button" onclick="delServicos(${Id_Servicos})">Excluir</button>
                    </div>
                `;
                document.getElementById("renderResults").innerHTML += elementoHTML;
            }
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