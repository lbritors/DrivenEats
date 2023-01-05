function selecionarPedido(pedidoSelecionado) {
    const botaoSelecionadoAnteriormente = document.querySelector('.selecionado');
    if (botaoSelecionadoAnteriormente !== null) {
        
        botaoSelecionadoAnteriormente.classList.remove('selecionado');
    }


    const selecionou = document.querySelector(pedidoSelecionado);
    selecionou.classList.add('selecionado');
       
}
