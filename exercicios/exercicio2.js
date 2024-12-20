function exercicio2() {
    let alunos = [];
    let somaMediaTurma = 0;

    for (let i = 1; i <= 5; i++) {
        let nome = prompt(`Digite o nome do aluno ${i}:`);
        let notasInput = prompt(`Digite as 3 notas do aluno ${i}, separadas por espaço:`);
        let notas = notasInput.split(" ").map(Number);

        let soma = notas.reduce((acc, nota) => acc + nota, 0);
        let media = soma / notas.length;

        let situacao = media >= 7 ? "Aprovado" : (media >= 4 ? "Recuperação" : "Reprovado");

        alunos.push({ nome, notas, media, situacao });
        somaMediaTurma += media;

        alert(`Aluno: ${nome}\nMédia: ${media.toFixed(2)}\nSituação: ${situacao}`);
    }

    let mediaGeral = somaMediaTurma / alunos.length;
    alert(`Média geral da turma: ${mediaGeral.toFixed(2)}`);
}
exercicio2();
