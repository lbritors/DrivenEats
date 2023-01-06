function mostrarCheck() {
    const mostrar = document.querySelector('.checkicon .escondido');
    mostrar.classList.remove('escondido');
    console.log(mostrar);
}
function esconderCheck() {
    const esconder = document.querySelector('.checkicon .escondido');
    esconder.classList.add('escondido');
    console.log(esconder);
}

function selecionarPedido(pedidoSelecionado) {
    const botaoSelecionadoAnteriormentePrato = document.querySelector('.prato .selecionado');
   
    if (botaoSelecionadoAnteriormentePrato !== null) {
        esconderCheck();
        botaoSelecionadoAnteriormentePrato.classList.remove('selecionado');

    } else {
        mostrarCheck();
        pedidoSelecionado.classList.add('selecionado');
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