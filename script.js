let currentIndex = 0;

const exercicios = [
    {
        titulo: "Exercício 1",
        descricao: "Verifique se você está apto a votar com base na sua idade.",
        script: "exercicio1.js"
    },
    {
        titulo: "Exercício 2",
        descricao: "Calcula a média de 5 alunos e verifica a situação (Aprovado, Recuperação, Reprovado).",
        script: "exercicio2.js"
    },
    {
        titulo: "Exercício 3",
        descricao: "Calcula o desconto em um produto com base no seu valor.",
        script: "exercicio3.js"
    },
    {
        titulo: "Exercício 4",
        descricao: "Calcula o IMC (Índice de Massa Corporal) e classifica seu peso.",
        script: "exercicio4.js"
    },
    {
        titulo: "Exercício 5",
        descricao: "Operações com arrays",
        script: "exercicio5.js"
    },
    {
        titulo: "Exercício 6",
        descricao: "Cadastro de um usuário, solicitando informações como:\n" +
        "Nome, Idade, Email, Telefone e Cidade",
        script: "exercicio6.js"
    },
    {
        titulo: "Exercício 7",
        descricao: "Calculadora de IMC",
        script: "exercicio7.js"
    },
    {
        titulo: "Exercício 8",
        descricao: "Tela de uma agenda de contatos com:" +
        "Adicionar Contato, Exibir Contatos, Remover Contato",
        script: "exercicio8.js"
    },
    {
        titulo: "Exercício 9",
        descricao: "Carrinho de compras, com atualização em tempo real",
        script: "exercicio9.js"
    }
];

function updateExercicio() {
    const exercicio = exercicios[currentIndex];

    // Atualiza o título e descrição do exercício
    document.getElementById("exercicioTitulo").innerText = exercicio.titulo;
    document.getElementById("exercicioDescricao").innerText = exercicio.descricao;
    document.getElementById("btnExecutar").innerText = `Executar ${exercicio.titulo}`;

    // Atualiza o script do botão para chamar o exercício correto
    document.getElementById("btnExecutar").onclick = function() {
        carregarScript(exercicio.script);
    };

    // Habilitar/desabilitar botões de navegação
    document.getElementById("btnPrev").disabled = currentIndex === 0;
    document.getElementById("btnNext").disabled = currentIndex === exercicios.length - 1;
}

function carregarScript(script) {
    if (script === "exercicio6.js") {
        window.location.href = "exercicios/exercicio6.html";
        return;
    }
    if (script === "exercicio7.js") {
        window.location.href = "exercicios/exercicio7.html";
        return;
    }
    if (script === "exercicio8.js") {
        window.location.href = "exercicios/exercicio8.html";
        return;
    }
    if (script === "exercicio9.js") {
        window.location.href = "exercicios/exercicio9.html";
        return;
    }

    // Remove qualquer script anterior para evitar duplicação
    const previousScript = document.querySelector(`script[src="exercicios/${script}"]`);
    if (previousScript) {
        previousScript.remove();
    }

    // Adiciona o novo script
    let scriptElement = document.createElement("script");
    scriptElement.src = `exercicios/${script}`;
    scriptElement.onload = function() {
        console.log(`${script} carregado com sucesso!`);
    };
    document.body.appendChild(scriptElement);
}

document.getElementById("btnPrev").addEventListener("click", function() {
    if (currentIndex > 0) {
        currentIndex--;
        updateExercicio();
    }
});

document.getElementById("btnNext").addEventListener("click", function() {
    if (currentIndex < exercicios.length - 1) {
        currentIndex++;
        updateExercicio();
    }
});

// Inicializa com o primeiro exercício
updateExercicio();
