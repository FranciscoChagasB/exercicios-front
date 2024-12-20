function exercicio3() {
    let valorProduto = parseFloat(prompt("Digite o valor inicial do produto:").replace(",", "."));

    if (isNaN(valorProduto)) {
        alert("Por favor, insira um valor válido.");
        return;
    }

    let desconto = 0;
    switch (true) {
        case (valorProduto <= 100):
            desconto = 10;
            break;
        case (valorProduto <= 500):
            desconto = 20;
            break;
        default:
            desconto = 30;
            break;
    }

    let valorComDesconto = valorProduto - (valorProduto * desconto / 100);
    alert(`Valor inicial: R$ ${valorProduto.toFixed(2)}\nDesconto aplicado: ${desconto}%\nValor final com desconto: R$ ${valorComDesconto.toFixed(2)}`);
}
exercicio3();
