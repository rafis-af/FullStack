

//Faça uma página simplificada de cadastro. 
//A página deve ter três entradas: Nome, Login e Senha. 
//A página deve ter também 3 botões: Cadastrar, Limpar e Mostrar Dados. 
//Você só pode fazer o cadastro de uma pessoa de cada vez. 
//Assim, você não pode cadastrar uma pessoa se as variáveis já estiverem ocupadas. 
//Nesse caso, exiba um alerta. 
//Se você quiser cadastrar uma pessoa nova, utilize o botão limpar antes.
//Você só pode cadastrar uma pessoa se todos os campos estiverem preenchidos. 
//A entrada "Senha" precisa ser do tipo password.
//O botão Mostrar Dados exibe todos os dados da pessoa como conteúdo da página.


let usuario_cadastro = false;
let nome, login, senha

document.getElementById('cadastrar').onclick = function(){

    if (usuario_cadastro) {

        alert('Já existe um usuário cadastrado. Use o botão "limpar" para um novo.');
        return;

    }
    
    usuario = document.getElementById('usuario').value;
    login = document.getElementById('login').value;
    senha = document.getElementById('senha').value;

    if (nome == "" || login == "" || senha == "" ) {

        alert('Por favor, preencha todos os campos')
        return;

    }

    usuario_cadastro = true;
    alert('Usuário cadastrado com sucesso!');
};


document.getElementById('limpar').onclick = function() {
    
    document.getElementById('usuario').value = "";
    document.getElementById('login').value = "";
    document.getElementById('senha').value = "";
    usuario_cadastro = false;
    document.getElementById('dados').innerHTML = "";
};

document.getElementById('mostrarDados').onclick = function() {
    if (!usuario_cadastro) {
        alert("Nenhum usuário cadastrado.");
        return;
    }

    document.getElementById('dados').innerHTML = `
    <h3>Dados do Usuário:</h3>
    <p><strong>Nome:</strong> ${nome}</p>
    <p><strong>Login:</strong> ${login}</p>
    <p><strong>Senha:</strong> ${senha}</p>
`;
};