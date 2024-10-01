

//let nome = prompt('Insira seu nome: ');
//let idade = parseInt(prompt('Insira sua idade: '));
//let ano_atual = 2024;

//let ano_nascimento = ano_atual - idade

//let resposta = 'Olá, ' + nome + '!' + ' O seu ano de nascimento é: ' + ano_nascimento;

//document.getElementById('R1').innerHTML = resposta;

//function exibeMensagem(texto){

//    alert(texto)

//}

//exibeMensagem('oi')


//let c = soma(4, 5);
//console.log(c);
//console.log(soma(6, 2))


//function ex2(){
    
    //    let numero = parseInt(document.getElementById('ex2_n1').value);
    //    let resposta = multi(numero, 3);
    //    document.getElementById('R2').innerHTML = resposta;
    //}
    
function multi(a, b){
        
    return a * b;
}
        
function soma(a, b){
        
    return a + b;
}
        
function ex3(){

    let numero1 = parseInt(document.getElementById('ex3_n1').value);
    let numero2 = parseInt(document.getElementById('ex3_n2').value);
    let resposta = soma(numero1, numero2);
    document.getElementById('R3').innerHTML = resposta;

}

function ex4(){

    let numero1 = parseInt(document.getElementById('ex4_n1').value)
    let numero2 = parseInt(document.getElementById('ex4_n2').value)

    if (numero1 < 0 || numero2 < 0){

        document.getElementById('R4').innerHTML = soma(numero1, numero2);

    }else{

        document.getElementById('R4').innerHTML = multi(numero1, numero2);

    }
}