function exercicio1() {
    let nome = prompt("Digite o seu nome:");
    let idade = parseInt(prompt("Digite a sua idade:"));

    if(idade >= 16){
        if(idade <= 70){
            alert(`${nome}, você está apto a votar e seu voto é obrigatório`);
        } else {
            alert(`${nome}, você está apto a votar, porém seu voto é opcional`);
        }
    } else {
        alert(`${nome}, você não está apto a votar.`);
    }
}
exercicio1();
