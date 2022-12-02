const urlTipo = "http://localhost:8080/tipo";
function getTipo(){
    axios.get(urlTipo)
    .then(response => {
        const data = JSON.stringify(response.data)
        const node = document.createElement("p")
        const text = document.createTextNode(JSON.stringify(JSON.parse(data)))
        node.appendChild(text)
        document.getElementById("renderResults").appendChild(node)
        // const data = JSON.stringify(response.data)
        // tipo = JSON.stringify(
        //     JSON.parse(data, (key, value, teste) => {
        //         // console.log(key); // mostra o nome da propriedade atual, o último é "".
        //         var resp = []
        //         var i = 0
        //         while(value[i] != null)
        //         {
        //             if(value[i] != "," && value[i] != null)
        //             {
        //                 resp = value
        //                 console.log(resp);
        //             }
        //             i++
        //         }
        //         // console.log(resp)
        //         renderResults.textContent =  JSON.stringify(resp);
        //     })
        // )
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
function delTipo(){
    id = document.querySelector("#id").value
    axios.delete(urlTipo + "/" + id)
    .then(response => {
        console.log(response.data)
        alert("Tipo excluído com sucesso!")
        document.location.reload(true)
    })
    .catch(error => console.alert(error))
}