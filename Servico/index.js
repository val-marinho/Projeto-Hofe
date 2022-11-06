let btn1 = document.getElementById('btn1f'); // Ligação com botão MENSAL no HTML
let btn2 = document.getElementById('btn2f'); // Ligação com botão ANUAL no HTML
let btn3 = document.getElementById('btn3f'); // Ligação com botão SEMESTRAL no HTML

// FUNÇÃO DO BOTÃO *ASSINAR* NOS CARDS DE ASSINATURA //

btn1.addEventListener('click', function(){                  // Evento de clicar no botão ASSINAR
    var b = confirm('Deseja assinar este plano?');          // Botão OK ou cancelar 
  if (b){
    alert('Cadastre para assinar o plano Mensal');          // Alert com OK para confirmar
    window.location = "file:///C:/Users/FcFel/HOFE/Cadastro/index.html"; // Link direcionando para a pagina cadastro
  }
});

// FUNÇÃO DO BOTÃO *ASSINAR* NOS CARDS DE ASSINATURA //

btn2.addEventListener('click', function(){    // Evento de clicar no botão ASSINAR
    var b = confirm('Deseja assinar este plano?'); // Botão OK ou cancelar 
  if (b){
    alert('Cadastre para assinar o plano Anual');  // Alert com OK para confirmar
    window.location = "file:///C:/Users/FcFel/HOFE/Cadastro/index.html"; // Link direcionando para a pagina cadastro
  }
});

// FUNÇÃO DO BOTÃO *ASSINAR* NOS CARDS DE ASSINATURA //

btn3.addEventListener('click', function(){   // Evento de clicar no botão ASSINAR
    var b = confirm('Deseja assinar este plano?'); // Botão OK ou cancelar 
  if (b){
    alert('Cadastre para assinar o plano Semestral'); // Alert com OK para confirmar
    window.location = "file:///C:/Users/FcFel/HOFE/Cadastro/index.html"; // Link direcionando para a pagina cadastro
  }
});

// *FIM*  FUNÇÃO DO BOTÃO *ASSINAR* NOS CARDS DE ASSINATURA //





// INICIO Animação DUVIDAS FREQUENTES //

const pergunta = document.querySelectorAll('.pergunta') // Ligação com parte pergunta no HTML
const resposta = document.querySelectorAll('.resposta') // Ligação com parte resposta no HTML

for(let i = 0; i < pergunta.length; i++){
    pergunta[i].addEventListener('click', () => { // Evento clicar ocultar ou mostrar resposta 
        if(pergunta[i].classList.toggle('fechar')){ 
            pergunta[i].classList.toggle('fechar')
            resposta[i].classList.toggle('ativar') 
        }else{
            pergunta[i].classList.add('fechar')
            resposta[i].classList.add('ativar')
        }
    })
}