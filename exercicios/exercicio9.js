// Selecionar elementos
const formCarrinho = document.getElementById('formCarrinho');
const listaCarrinho = document.getElementById('produtos');
const totalCarrinho = document.getElementById('totalCarrinho');

// Array para armazenar os produtos do carrinho
let carrinho = [];

// Função para atualizar o total do carrinho
function atualizarTotal() {
    let total = 0;
    carrinho.forEach(item => {
        total += item.preco * item.quantidade;
    });
    totalCarrinho.textContent = total.toFixed(2);
}

// Adicionar evento ao formulário
formCarrinho.addEventListener('submit', (event) => {
    event.preventDefault();

    // Obter valores do formulário
    const produto = document.getElementById('produto').value.trim();

    // Substituir vírgula por ponto e garantir que o valor seja um número válido
    let preco = document.getElementById('preco').value.trim().replace(',', '.');

    // Converter para número
    preco = parseFloat(preco);

    // Validar se o preço é um número válido
    if (isNaN(preco) || preco <= 0) {
        alert('Por favor, insira um valor válido para o preço!');
        return;
    }

    const quantidade = parseInt(document.getElementById('quantidade').value.trim());

    // Validar os campos
    if (!produto || isNaN(quantidade) || quantidade <= 0) {
        alert('Por favor, preencha todos os campos corretamente!');
        return;
    }

    // Adicionar o produto ao carrinho
    carrinho.push({ produto, preco, quantidade });

    // Atualizar a lista de produtos
    atualizarLista();

    // Atualizar o total
    atualizarTotal();

    // Limpar os campos do formulário
    formCarrinho.reset();
});

// Função para atualizar a lista de produtos no carrinho
function atualizarLista() {
    // Limpar lista
    listaCarrinho.innerHTML = '';

    // Renderizar cada produto
    carrinho.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = `${item.produto} - R$ ${item.preco.toFixed(2)} x ${item.quantidade}`;

        // Input para alterar a quantidade
        const inputQuantidade = document.createElement('input');
        inputQuantidade.type = 'number';
        inputQuantidade.value = item.quantidade;
        inputQuantidade.style.width = '50px';
        inputQuantidade.style.marginLeft = '10px';

        // Evento para atualizar a quantidade
        inputQuantidade.addEventListener('input', (e) => {
            const novaQuantidade = parseInt(e.target.value);
            if (novaQuantidade > 0) {
                item.quantidade = novaQuantidade;
                atualizarLista();
                atualizarTotal();
            }
        });

        // Botão para remover o produto
        const btnRemover = document.createElement('button');
        btnRemover.textContent = 'Remover';
        btnRemover.style.marginLeft = '10px';
        btnRemover.style.backgroundColor = '#f13939';
        btnRemover.style.color = 'white';
        btnRemover.style.border = 'none';
        btnRemover.style.borderRadius = '5px';
        btnRemover.style.cursor = 'pointer';

        // Evento para remover o produto
        btnRemover.addEventListener('click', () => {
            carrinho.splice(index, 1);
            atualizarLista();
            atualizarTotal();
        });

        li.appendChild(inputQuantidade);
        li.appendChild(btnRemover);
        listaCarrinho.appendChild(li);
    });
}
