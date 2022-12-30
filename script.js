var array = [];

function adicionarProduto(){
    var produto = document.getElementById("produto").value;
    var preco = document.getElementById("preco").value;
    var quantidade = document.getElementById("quantidade").value;
    var produto = 
    {
        produto: produto,
        preco: preco,
        quantidade: quantidade
    }

    array.push(produto);
    this.atualizarLista();
}

function removerProduto(index){
    const element = event.target.parentNode;
    element.remove();
}

function atualizarLista(){
    document.getElementById('gridProduto').innerHTML = '<tr><thead><th>Produto</th><th>Preço</th><th>Quantidade</th><th>Ação</th></thead></tr>';
    var total = 0
    
    for (let index = 0; index < array.length; index++){
        document.getElementById('gridProduto').innerHTML += `<tr id='linha_`+index+`'>
            <tbody>
                <div></div>
                <td>`+ array[index].produto+`</td>
                <td>`+ array[index].preco+`</td>
                <td>`+ array[index].quantidade+`</td>
                <td><button index='`+index+`' id="button_`+index+`" class="btn btn-danger"> X </button></td>
            </tbody>        
        </tr>`
        total +=( parseFloat(array[index].preco)* parseFloat(array[index].quantidade));
    var button = document.getElementById("button_"+ index);
        button.addEventListener("click", (event) => {
            const element = event.target; 
            var index = element.getAttribute("index");
            array.remove(index);
            atualizarLista();
            console.log(array);
        });    
    }
    document.getElementById("total").innerHTML="R$ " + total;
}

