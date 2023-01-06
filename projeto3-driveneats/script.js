function mostrarCheck() {
    const mostrar = document.querySelector('.categoria .escondido');
    mostrar.classList.remove('escondido');
}
function esconderCheck() {
    const esconder = document.querySelector('.categoria .escondido');
    esconder.classList.add('escondido');
}

function selecionarPedido(pedidoSelecionado) {
    const botaoSelecionadoAnteriormentePrato = document.querySelector('.prato .selecionado');
   
    if (botaoSelecionadoAnteriormentePrato !== null) {
        botaoSelecionadoAnteriormentePrato.classList.remove('selecionado');
        esconderCheck();

    } else {
        pedidoSelecionado.classList.add('selecionado');
        mostrarCheck();
    }
}


function selecionarPedido2(pedidoSelecionado2) {
    const botaoSelecionadoAnteriormenteBebida = document.querySelector('.bebida .selecionado');

    if (botaoSelecionadoAnteriormenteBebida !== null) {
        botaoSelecionadoAnteriormenteBebida.classList.remove('selecionado');
    } else {
        pedidoSelecionado2.classList.add('selecionado');
    }
    
}

function selecionarPedido3(pedidoSelecionado3) {
    const botaoSelecionadoAnteriormenteDoce = document.querySelector('.doce .selecionado');

    if (botaoSelecionadoAnteriormenteDoce!== null) {
        botaoSelecionadoAnteriormenteDoce.classList.remove('selecionado');
    } else {
        pedidoSelecionado3.classList.add('selecionado');
    }
    
}