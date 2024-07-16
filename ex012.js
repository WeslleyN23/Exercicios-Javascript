      var valor = document.querySelector('input#produto')
      var condicao = document.getElementById('condicao')
      const resultado = document.getElementById('resultado')  
      const desconto = 0.15
      const juros = 0.10
      
      let confirmar = () => 
      {
        if(condicao.value == 1){
          opcao1()
        }else if(condicao.value == 2){
          opcao2()
        }else if(condicao.value == 3){
          opcao3()
        }else if(condicao.value == 4){
          opcao4()
        }
      }
      let opcao1 = () => {
        let op1 = (Number(valor.value) - ((Number(valor.value) * 0.15))).toFixed(2)
        console.log(op1)
        resultado.innerHTML = `O valor do produto será R$${op1}! &#x1F601`
      }
      let opcao2 = () => {
        let op2 = (Number(valor.value) - ((Number(valor.value) * 0.10))).toFixed(2)
        console.log(op2)
        resultado.innerHTML = `O valor do produto será R$${op2}! &#x1F601`
      }
      let opcao3 = () => {
        let op3 = (Number(valor.value)).toFixed(2)
        console.log(op3)
        resultado.innerHTML = `O valor do produto será R$${op3}! &#x1F601`
      }
      let opcao4 = () => {
        let op4 = (Number(valor.value) + ((Number(valor.value) * 0.10))).toFixed(2)
        console.log(op4)
        resultado.innerHTML = `O valor do produto será R$${op4}! &#x1F601`
      }