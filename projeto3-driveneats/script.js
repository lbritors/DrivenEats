let check;
let pratoSelecionado="", bebidaSelecionada="", doceSelecionado = "", qtdselecionados = 0, precoTotal = 0,
    precoPrato, precoBebida, precoDoce;
function mostrarCheck() {
    check = document.querySelector('.checkicon .escondido');
    if (check !== null) {
        check.classList.remove('escondido');
        console.log(check);
    }
}
function esconderCheck() {
    check = document.querySelector('.checkicon .escondido');
        check.classList.add('escondido');
        console.log(check);
}

function selecionarPedido(pedidoSelecionado) {
    const botaoSelecionadoAnteriormentePrato = document.querySelector('.prato .selecionado');
    
    if (botaoSelecionadoAnteriormentePrato !== null) {
        botaoSelecionadoAnteriormentePrato.classList.remove('selecionado');
        qtdselecionados--;
    }
    pedidoSelecionado.classList.add('selecionado');
    pratoSelecionado = pedidoSelecionado.querySelector('figcaption').innerHTML;
    precoPrato = pedidoSelecionado.querySelector('.descricao .preco').innerHTML;
    precoPrato = precoPrato.replace('R$', ('')).replace(',', '.');
    console.log(pratoSelecionado);
    console.log(precoPrato);
    qtdselecionados++;
    verificarPedidoFechado();
}


function selecionarPedido2(pedidoSelecionado2) {
    const botaoSelecionadoAnteriormenteBebida = document.querySelector('.bebida .selecionado');

    if (botaoSelecionadoAnteriormenteBebida !== null) {
        botaoSelecionadoAnteriormenteBebida.classList.remove('selecionado');
        qtdselecionados--;
    } 
    pedidoSelecionado2.classList.add('selecionado'); 
    bebidaSelecionada = pedidoSelecionado2.querySelector('figcaption').innerHTML;
    precoBebida = pedidoSelecionado2.querySelector('.descricao .preco').innerHTML;
    precoBebida = precoBebida.replace('R$', ('')).replace(',', '.');
    console.log(bebidaSelecionada);
    console.log(precoBebida);
    qtdselecionados++;
    verificarPedidoFechado();
    
}

function selecionarPedido3(pedidoSelecionado3) {
    const botaoSelecionadoAnteriormenteDoce = document.querySelector('.doce .selecionado');

    if (botaoSelecionadoAnteriormenteDoce!== null) {
        botaoSelecionadoAnteriormenteDoce.classList.remove('selecionado');
        qtdselecionados--;
    } 
    pedidoSelecionado3.classList.add('selecionado');
    doceSelecionado = pedidoSelecionado3.querySelector('figcaption').innerHTML;
    precoDoce = pedidoSelecionado3.querySelector('.descricao .preco').innerHTML;
    precoDoce = precoDoce.replace('R$', ('')).replace(',', '.');
    console.log(doceSelecionado);
    console.log(precoDoce);
    qtdselecionados++;
    verificarPedidoFechado();
    
}

function verificarPedidoFechado() {
    const habilitar = document.querySelector('.selecionar-pedidos');
    if (qtdselecionados === 3) {
        habilitar.removeAttribute('disabled');
    }
}

function fecharPedido(fechado) {
    const texto = document.querySelector('.selecionar-pedidos h3');
    console.log(fechado);
    fechado.classList.add('pronto');
    texto.innerHTML = "Fechar pedido";
    precoTotal = parseFloat(precoBebida) + parseFloat(precoDoce) + parseFloat(precoPrato);
    precoTotal = precoTotal.toFixed(2);
    console.log(precoTotal);
}

function enviarPedido() {
    
    
}
