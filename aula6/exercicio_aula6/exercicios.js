

function ex1(){

    let aleatorio = Math.floor(Math.random() * 51);
    document.getElementById('EX1').innerHTML = aleatorio;

}

function ex2(){

    let numero = parseInt((document.getElementById('ex2_text').value));

    if (numero >= 0 && numero < 10){
        
        document.getElementById('EX2').innerHTML = 'Insuficiente';
        
    }else if(numero >= 10 && numero <= 15){
        
        document.getElementById('EX2').innerHTML = 'Bom';
    }else if(numero > 16){
        
        document.getElementById('EX2').innerHTML = 'Muito bom';
     
    };  

}

