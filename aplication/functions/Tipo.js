const urlTipo = "http://localhost:8080/tipo";
function validarTipo(){
    const form = document.forms[0];
    const nome = form.querySelector('input[name="nome"]');
    if(nome.value != ""){
        addTipo();
    }
    else{
        alert("Preencha os campos obrigatórios")
    }
}

function getTipo(){
    axios.get(urlTipo)
    .then(response => {
        response.data.forEach((item) => {
            const { Id_Tipo, Nome } = item;
            const elementoHTML = `
                <div class="item">
                    <input type="button" id="${Id_Tipo}" value="${Nome}" name ="getServicos" onClick="window.location.href ='http://localhost:3000/get/Servicos.html;">
                    <button type="button" onclick="delTipo(${Id_Tipo})">Excluir</button>
                </div>
            `;
            document.getElementById("renderResults").innerHTML += elementoHTML;
            return Id_Tipo;
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