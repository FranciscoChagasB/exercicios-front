function exercicio5() {
    // Criação do array com 5 números
    let numeros = [];
    for (let i = 0; i < 5; i++) {
        let numero = parseFloat(prompt(`Digite o número ${i + 1}:`).replace(",", "."));
        if (isNaN(numero)) {
            alert("Por favor, insira um número válido.");
            return;
        }
        numeros.push(numero);
    }

    // Mostrar o array preenchido
    alert(`Array preenchido: ${numeros.join(", ")}`);

    // Mostrar o maior valor do array
    let maior = Math.max(...numeros);
    alert(`Maior valor do array: ${maior}`);

    // Mostrar o menor valor do array
    let menor = Math.min(...numeros);
    alert(`Menor valor do array: ${menor}`);

    // Adicionar um sexto valor
    let sextoValor = parseFloat(prompt("Digite o sexto número para adicionar ao array:").replace(",", "."));
    if (isNaN(sextoValor)) {
        alert("Por favor, insira um número válido.");
        return;
    }
    numeros.push(sextoValor);

    // Mostrar a média dos valores do array
    let soma = numeros.reduce((acc, val) => acc + val, 0);
    let media = soma / numeros.length;
    alert(`Média dos valores do array: ${media.toFixed(2)}`);
}

exercicio5();