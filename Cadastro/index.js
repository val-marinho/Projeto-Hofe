// colocando js no modo mais rigoroso

'use strict';

// limpar dados do cep

const limparFormulario = (rua) => {
    document.getElementById('rua').value = '';
    document.getElementById('cidade').value = '';
    document.getElementById('bairro').value = '';
    document.getElementById('estado').value = '';
}

// preencher formulário recebe os dados do cep

const preencherFormulario = (rua) => {
    limparFormulario()
    document.getElementById('rua').value = rua.logradouro;
    document.getElementById('cidade').value = rua.localidade;
    document.getElementById('bairro').value = rua.bairro;
    document.getElementById('estado').value = rua.uf;
}

// verificando se o cep tem tamanho de 8 dígitos e se são números do início ao fim

const cepValido = (cep) => cep.length == 8 && /^[0-9]+$/.test(cep);

const pesquisarCep = async() => {
        limparFormulario()

// recebendo resultado do fetch, pegando
// os dados e aplicando a função json
// para retornar o json desejado

    const cep = document.getElementById('cep').value;
    const url = `http://viacep.com.br/ws/${cep}/json/`;
if (cepValido(cep)) {
    const dados = await fetch(url);
    const rua = await dados.json();

// se cep receber propriedade inválida, que apareça cep não encontrado
// se for válido, que preencha formulário
// e se incluir letras ou qualquer coisa sem ser número em cep
// que apareça cep incorreto

    if (rua.hasOwnProperty('erro')) {
        document.getElementById('cep').value = 'Cep não encontrado!';
    } else {  
    preencherFormulario(rua);
    }
} else {
    document.getElementById('cep').value = ('Cep incorreto!')
    }
}

// pegando o elemento cep e quando
// sair do foco aciona a função pesquisar cep

document.getElementById('cep')
        .addEventListener('focusout', pesquisarCep);

// pegando o elemento botão de cadastro
// e quando ele for clicado, apareça 
// cadastro feito com sucesso 

// validação senha e confirmação da senha

let senha = document.getElementById('senha')
let confirmarsenha = document.getElementById('confirmarsenha')

function validate(item) {
    item.setCustomValidity('');
    item.checkValidity();

    if (item == confirmarsenha) {
        if (item.value === senha.value) item.setCustomValidity('');
        else item.setCustomValidity('Senhas não coincidem!')
    }

// não incluir nada além de números 

    if (item ==cpf) {
        let numCPF = cpf.value.replace(/[^0-9]/g, "");

        if (validateCPF(numCPF) ) item.setCustomValidity('');
        else item.setCustomValidity('Cpf inválido!')
    }
}

function validateCPF(cpf) {
 // para validação via luhn: https://developers.ebanx.com/validation-rules-for-brazil/
    var number, digits, sum, i, result, equal_digits;
    equal_digits = 1;
    if (cpf.length < 11)
          return false;
    for (i = 0; i < cpf.length - 1; i++)
          if (cpf.charAt(i) != cpf.charAt(i + 1))
                {
                equal_digits = 0;
                break;
                }
    if (!equal_digits)
          {
          number = cpf.substring(0,9);
          digits = cpf.substring(9);
          sum = 0;
          for (i = 10; i > 1; i--)
                sum += number.charAt(10 - i) * i;
          result = sum % 11 < 2 ? 0 : 11 - sum % 11;
          if (result != digits.charAt(0))
                return false;
          number = cpf.substring(0,10);
          sum = 0;
          for (i = 11; i > 1; i--)
                sum += number.charAt(11 - i) * i;
          result = sum % 11 < 2 ? 0 : 11 - sum % 11;
          if (result != digits.charAt(1))
                return false;
          return true;
          }
    else
        return false;
}

// validação cpf

let cpf = document.getElementById('cpf');

function maskCPF () {
    let strCPF = cpf.value;
    if (strCPF.length == 3 || strCPF.length == 7) cpf.value += ".";
    if (strCPF.length ==11) cpf.value += "-";

    validate(cpf);
}


// solicita validação a cada alteração na entrada
senha.addEventListener('input', function () { validate(senha) });
confirmarsenha.addEventListener('input', function () { validate(confirmarsenha) });
cpf.addEventListener('input', function () { maskCPF() });

// Buscando valores de todos os campos de entrada e armazenando-os em variáveis.

function sucesso() {
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('e-mail').value;
    const senha = document.getElementById('senha').value;
    const confirmarsenha = document.getElementById('confirmarsenha').value;
    const cpf = document.getElementById('cpf').value;
    const cep = document.getElementById('cep').value;
    const número = document.getElementById('número').value;
    const complemento = document.getElementById('complemento').value;

 //Verificando que os campos de entrada não devem ficar em branco. Caso fique, um alerta!

    if (nome== '' || email == '' || senha == '' || confirmarsenha == '' || cpf == '' || cep == '' || número == '' || complemento == '') {
        alert('Por favor preencha todos os campos.');

//Alerta sucesso quando todos os valores forem válidos.

} else {
    window.location.href = "https://val-marinho.github.io/Projeto-Hofe/Login/index.html"
}
}
