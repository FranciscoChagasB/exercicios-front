// Selecionar elementos
const formAgenda = document.getElementById('formAgenda');
const listaContatos = document.getElementById('contatos');

// Array para armazenar os contatos
let contatos = [];

// Adicionar evento ao formulário
formAgenda.addEventListener('submit', (event) => {
    event.preventDefault();

    // Obter valores do formulário
    const nome = document.getElementById('nome').value.trim();
    const telefone = document.getElementById('telefone').value.trim();

    // Validar os campos
    if (!nome || !telefone) {
        alert('Por favor, preencha todos os campos!');
        return;
    }

    // Adicionar o contato ao array
    contatos.push({ nome, telefone });

    // Atualizar a lista de contatos
    atualizarLista();

    // Limpar os campos do formulário
    formAgenda.reset();
});

// Função para atualizar a lista de contatos
function atualizarLista() {
    // Limpar lista
    listaContatos.innerHTML = '';

    // Renderizar cada contato
    contatos.forEach((contato, index) => {
        const li = document.createElement('li');
        li.textContent = `${contato.nome} - ${contato.telefone}`;

        // Botão para remover o contato
        const btnRemover = document.createElement('button');
        btnRemover.textContent = 'Remover';
        btnRemover.style.marginLeft = '10px';
        btnRemover.style.backgroundColor = '#f13939';
        btnRemover.style.color = 'white';
        btnRemover.style.border = 'none';
        btnRemover.style.borderRadius = '5px';
        btnRemover.style.cursor = 'pointer';

        // Evento para remover o contato
        btnRemover.addEventListener('click', () => {
            contatos.splice(index, 1);
            atualizarLista();
        });

        li.appendChild(btnRemover);
        listaContatos.appendChild(li);
    });
}
