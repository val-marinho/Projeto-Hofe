//validação do formulario de contato
function enviar() {
    const username = document.getElementById('username').value
    const email = document.getElementById('email').value
    const textarea = document.getElementById('textarea').value;

    if (username == '' || email == '' || textarea == '') {
        alert('Por favor, preencha todos os campos');
    } else {
        alert('Sua mensagem foi enviada com sucesso!')
    }
}