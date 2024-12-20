// Selecionar elementos
const imcForm = document.getElementById('imcForm');
const listaImcs = document.getElementById('listaImcs');

// Array para armazenar os registros de IMC
let imcs = [];

// Adicionar evento ao formulário
imcForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value.trim();
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);

    if (!nome || isNaN(peso) || isNaN(altura)) {
        alert('Por favor, preencha todos os campos corretamente!');
        return;
    }

    // Calcular IMC
    const imc = (peso / (altura * altura)).toFixed(2);
    let classificacao;

    if (imc < 18.5) {
        classificacao = "Abaixo do peso.";
    } else if (imc >= 18.5 && imc <= 24.9) {
        classificacao = "Peso normal.";
    } else if (imc >= 25 && imc <= 29.9) {
        classificacao = "Sobrepeso.";
    } else {
        classificacao = "Obesidade.";
    }

    // Adicionar o registro de IMC ao array
    imcs.push({ nome, imc, classificacao });

    // Atualizar a lista de IMCs
    atualizarLista();

    // Limpar os campos do formulário
    imcForm.reset();
});

// Função para atualizar a lista de IMCs
function atualizarLista() {
    // Limpar lista
    listaImcs.innerHTML = '';

    // Renderizar cada registro de IMC
    imcs.forEach((registro, index) => {
        const li = document.createElement('li');
        li.textContent = `${registro.nome}, IMC: ${registro.imc} - Classificação: ${registro.classificacao}`;

        // Botão para remover o registro de IMC
        const btnRemover = document.createElement('button');
        btnRemover.textContent = 'Remover';
        btnRemover.style.marginLeft = '10px';
        btnRemover.style.backgroundColor = '#f13939';
        btnRemover.style.color = 'white';
        btnRemover.style.border = 'none';
        btnRemover.style.borderRadius = '5px';
        btnRemover.style.cursor = 'pointer';

        // Evento para remover o registro
        btnRemover.addEventListener('click', () => {
            imcs.splice(index, 1);
            atualizarLista();
        });

        li.appendChild(btnRemover);
        listaImcs.appendChild(li);
    });
}
