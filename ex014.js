        const resultado = document.querySelector('#resultado');
        const trocaDeValores = document.querySelector('#trocaDeValores');
        const btn2 = document.getElementById('btn2');
        var valorA = document.getElementById('valorA');
        var valorB = document.getElementById('valorB');

        //Função para exibir os valores originais na tela.
        const exibir = () => {
        
        resultado.innerHTML = `Os valores digitados foram: ${valorA.value} e ${valorB.value}`;
        }
        
        //Quando acontecer o evento de 'click', a função fará a troca de valores de A por B e B por A.
        btn2.addEventListener("click", function() {

          const temp = valorA.value;
          valorA.value = valorB.value;
          valorB.value = temp;

        trocaDeValores.innerHTML = `E agora passam a ser: ${valorA.value}` + ` e ` + `${valorB.value}`;
        });