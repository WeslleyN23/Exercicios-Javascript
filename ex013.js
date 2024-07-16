
      let enviar = () => {
          const nome = document.getElementById('nome').value
          const idade = document.getElementById('idade').value
          const tela = document.querySelector('p#resultado')

          if(idade >= 18){
            document.getElementById('resultado').innerHTML = "Olá " + nome + "! você tem " + idade + " anos e já é maior de idade." 
          }else if(nome == '' || idade == ''){
             alert('Ops! você esqueceu de preencher algum campo.')
          }else{
            document.getElementById('resultado').innerHTML = "Olá " + nome + "! você tem " + idade + " anos e ainda é menor de idade."
          }       
      }