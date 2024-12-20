document.getElementById("formCadastro").addEventListener("submit", function (event) {
    event.preventDefault(); // Evita o comportamento padrão do formulário

    // Captura os valores dos campos
    let nome = document.getElementById("nome").value.trim();
    let idade = parseInt(document.getElementById("idade").value);
    let email = document.getElementById("email").value.trim();
    let telefone = document.getElementById("telefone").value.trim();
    let cidade = document.getElementById("cidade").value.trim();

    // Validação básica
    if (!nome || !idade || !email || !telefone || !cidade || idade <= 0) {
        alert("Por favor, preencha todos os campos corretamente.");
        return;
    }

    // Cria o objeto do usuário
    let usuario = {
        nome: nome,
        idade: idade,
        email: email,
        telefone: telefone,
        cidade: cidade
    };

    // Exibe mensagem de sucesso
    document.getElementById("mensagemSucesso").innerText =
        `Usuário ${usuario.nome}, ${usuario.idade} anos, email: ${usuario.email}, telefone: ${usuario.telefone}, cidade: ${usuario.cidade}, cadastrado com sucesso!`;

    // Opcional: Limpa o formulário
    document.getElementById("formCadastro").reset();
});
