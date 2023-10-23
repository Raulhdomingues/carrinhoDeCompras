let valorTotal = document.querySelector('#valor-total');
let carrinho = document.querySelector('.carrinho__produtos__produto');

carrinho.textContent= '';
valorTotal.textContent= 'R$ 0';

document.querySelector('.quantidade-input').value='1';

function adicionar () {
    let quantidade = document.querySelector('#quantidade').value;
    let produtoSelecionado = document.querySelector('#produto').value;
    let produto = produtoSelecionado.split('-')[0];
    let valorProduto = produtoSelecionado.split('$')[1];
    let valorItem = parseInt(valorTotal.textContent.split('$')[1]);
        console.log(quantidade);
        if(quantidade == '' || quantidade == 0){
            alert('Porfavor digite a quantidade desejada.')
         } else {

            valorItem += quantidade * valorProduto;
            valorTotal.textContent = `R$${valorItem}`;
            
            carrinho.innerHTML += `<br><span class="texto-azul">${quantidade}x</span> ${produto} <span class="texto-azul">R$${valorProduto}</span>`;
        }
        
    document.querySelector('.quantidade-input').focus();

}

function limpar() {

    //zerar o total
    valorTotal.textContent = 'R$ 0';
    //limpar o carrinho
    carrinho.textContent = '';

}