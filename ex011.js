        let vetor = []
        let repeticao = 0
        let nota
        const resultado = window.document.getElementById('resultado')
        const nome = prompt('Por favor insira o seu nome: ')

        while(repeticao <= 3){
          nota = Number(prompt('Por favor insira uma nota: '))
          if(nota <= 10 && nota >= 0){
                vetor.push(nota)
                repeticao++
          }else{
            alert('Atenção! insira valores entre 1 e 10!')
          }
          console.log(vetor)
        }
        
        let media = ((Number(vetor[0]) + Number(vetor[1]) + Number(vetor[2]) + Number(vetor[3])) /4).toFixed(2)
        let aprovacao = (media >= 7) ? 'aprovado' : 'reprovado'

        if(aprovacao == 'aprovado'){
          resultado.innerHTML = `${nome}, sua média foi ${media}! Parabéns! você foi ${aprovacao}! ^^`
        }else{
          resultado.innerHTML = `${nome}, sua média foi ${media}! Infelizmente você foi ${aprovacao}! :(`
        }