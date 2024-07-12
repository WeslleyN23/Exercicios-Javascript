var resultado = document.getElementById('resultado')
let vetor = []

//Função que adiciona as 3 notas do aluno no vetor.
function adicionar(){

    //A nota deve ser inseririda apenas 3 vezes!
    var nota = document.getElementById('nota').value

    //Adiciona 3 notas ao vetor e faz o tratamento se caso o valor estiver fora da contagem de 1 à 10.
    nota > 0 && nota <= 10 ? vetor.push(nota) : alert ('Valor inválido! insira apenas valores entre 1 e 10!');

    //Função específica para limpar o texto, pois dentro da função adicionar não estava funcionando.
    limparTexto()

    //Se o comprimento do vetor for 3 vai executar a chamada da função calcular.
    if(vetor.length == 3){
            calcular()
        }
    }

//Função responsável pelo cáculo da média e a exibição do resultado.    
function calcular(){

    //Calcular a média do aluno e mostrar o resultado!
    var media = ((Number(vetor[0]) + Number(vetor[1]) + Number(vetor[2])) / 3).toFixed(2)
    resultado.innerHTML = `A média do aluno foi de <strong>${media}!!</strong>`
    console.log(vetor)
} 
//Função que executa a limpeza da caixa de texto da nota.
function limparTexto(){
    nota.value = '';
    document.getElementById('nota').focus()
}