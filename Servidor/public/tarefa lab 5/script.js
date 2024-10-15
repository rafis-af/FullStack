

function desenho1() {
    let casinha = document.getElementById('casinha');
    let ctx = casinha.getContext('2d');

    function quadrado(x, y, largura, altura, cor_linha, cor_preenchimento){
        ctx.beginPath();
        ctx.lineWidth = 2;
        ctx.strokeStyle = cor_linha;
        ctx.fillStyle = cor_preenchimento;
        ctx.strokeRect(x, y, largura, altura);
        ctx.fillRect(x, y, largura, altura);
        ctx.closePath();
    }
    function linhas(x1, y1, x2, y2, x3, y3, cor_linha, cor_preenchimento){
        ctx.beginPath();
        ctx.lineWidth = 2;
        ctx.strokeStyle = cor_linha;
        ctx.fillStyle = cor_preenchimento;
        ctx.moveTo(x1,y1);
        ctx.lineTo(x2,y2);
        ctx.lineTo(x3,y3);
        ctx.lineTo(x1,y1);
        ctx.stroke();
        ctx.fill();
        ctx.closePath();
    }
    function arcos(altura, largura, raio, pi1, pi2, cor_linha, cor_preenchimento){
        ctx.beginPath();
        ctx.lineWidth = 10;
        ctx.strokeStyle = cor_linha;
        ctx.fillStyle = cor_preenchimento;
        ctx.arc(altura, largura, raio, pi1, pi2);
        ctx.stroke();
        ctx.fill();
        ctx.closePath();
    }
    function arco_linha(altura, largura, raio, pi1, pi2, altura_linha1, largura_linha1, altura_linha2, largura_linha2, cor_linha, cor_preenchimento){
        ctx.beginPath();
        ctx.lineWidth = 10;
        ctx.strokeStyle = cor_linha;
        ctx.fillStyle = cor_preenchimento;
        ctx.arc(altura, largura, raio, pi1, pi2);
        ctx.lineTo(altura_linha1, largura_linha1);
        ctx.lineTo(altura_linha2, largura_linha2);
        ctx.stroke();
        ctx.fill();
        ctx.closePath();
    }

    chao = quadrado(0,250,400,200,'grey','grey');
    casa = quadrado(150,150,110,100,'brown','brown');
    janela1 = quadrado(165,170,28,28,'deepskyblue','deepskyblue');
    janela2 = quadrado(215,170,28,28, 'deepskyeblue','deepskyeblue');
    porta = quadrado(195,200,20,50,'saddlebrown','saddlebrown');
    telhado = linhas(205,100,152,149,260,149,'coral','coral');
    sol = arcos(320,75,50,0*Math.PI,2*Math.PI, 'yellow','yellow');
    rio1 = arco_linha(0,250,45,1.5*Math.PI,2*Math.PI,45,400,0,400,'blue','blue');
    arvore1 = quadrado(50,200,25,50,'brown','brown');
    folha1 = arcos(62,170,30,0*Math.PI,2*Math.PI,'green','green');
    arvore2 = quadrado(340,270,25,50,'brown','brown');
    folha2 = arcos(352,240,30,0*Math.PI,2*Math.PI,'green','green');
    rio2 = quadrado(0,350,150,200,'blue','blue');
    rio3 = arcos(150,400,45,1.5*Math.PI,1*Math.PI,'blue','blue');
};

function desenho2() {

    let canvas = document.getElementById('canvas');
    let ctx = canvas.getContext('2d');


    function quadrado(x, y, largura, altura, cor_linha, cor_preenchimento){
        ctx.beginPath();
        ctx.lineWidth = 2;
        ctx.strokeStyle = cor_linha;
        ctx.fillStyle = cor_preenchimento;
        ctx.strokeRect(x, y, largura, altura);
        ctx.fillRect(x, y, largura, altura);
        ctx.closePath();
    }
    function linhas1(x1, y1, x2, y2, cor_linha, cor_preenchimento){
        ctx.beginPath();
        ctx.lineWidth = 1;
        ctx.strokeStyle = cor_linha;
        ctx.fillStyle = cor_preenchimento;
        ctx.moveTo(x1,y1);
        ctx.lineTo(x2,y2);
        ctx.lineTo(x1,y1);
        ctx.stroke();
        ctx.fill();
        ctx.closePath();
    }
    function arcos(altura, largura, raio, pi1, pi2, cor_linha, cor_preenchimento){
        ctx.beginPath();
        ctx.lineWidth = 2;
        ctx.strokeStyle = cor_linha;
        ctx.fillStyle = cor_preenchimento;
        ctx.arc(altura, largura, raio, pi1, pi2);
        ctx.stroke();
        ctx.fill();
        ctx.closePath();
    }
    function arcos2(altura, largura, raio, pi1, pi2, cor_linha){
        ctx.beginPath();
        ctx.lineWidth = 2;
        ctx.strokeStyle = cor_linha;
        ctx.arc(altura, largura, raio, pi1, pi2);
        ctx.stroke();
        ctx.closePath();
    }
    
    function texto(cor_preenchimento,cor_linha,fonte,alinhamento,texto1,x1,y1){

        ctx.beginPath();
        ctx.lineWidth = 2;
        ctx.fillStyle = cor_preenchimento;
        ctx.strokeStyle = cor_linha;
        ctx.font = fonte;
        ctx.textAlign = alinhamento;
        ctx.fillText(texto1,x1,y1);
        ctx.closePath();
    }

    quadrado_azul = quadrado(0, 0, 60, 60, 'blue', 'blue');
    quadrado_vermelho = quadrado(340, 0, 60, 60, 'red', 'red');
    quadrado_aqua = quadrado(0, 165, 40, 70, 'aqua', 'aqua');
    quadrado_aqua2 = quadrado(360, 182, 45, 35, 'aqua', 'aqua');
    linha_azul = linhas1(0,0,200,200,'blue','blue');
    linha_vermelha = linhas1(400,0,200,200,'red','red');
    quadrado_vermelho2 = quadrado(150, 200, 50, 50, 'red', 'red');
    linha_verde = linhas1(0,200,400,200,'green','green');
    linha_cinza = linhas1(200,200,200,400,'grey','grey');
    quadrado_amarelo = quadrado(0, 330, 40, 70, 'yellow', 'yellow');
    quadrado_amarelo2 = quadrado(35, 365, 40, 35, 'yellow', 'yellow');
    quadrado_preto = quadrado(360, 330, 40, 70, 'black', 'black');
    quadrado_preto2 = quadrado(320, 365, 40, 35, 'black', 'black');
    arco_aqua = arcos(200,150,20,0*Math.PI,2*Math.PI,'blue','aqua');
    canvas = texto('black','black','25px Arial','center','Canvas',200,60);
    metade_arco_verde = arcos2(200,200,85,1*Math.PI,2*Math.PI,'green');
    arco_verde = arcos2(200,200,120,1*Math.PI,1.25*Math.PI,'green');
    arco_verde2 = arcos2(200,200,120,1.75*Math.PI,0*Math.PI,'green');
    arco_verde3 = arcos2(200,400,75,1.5*Math.PI,0*Math.PI,'green');
    arco_verde4 = arcos2(200,400,100,1*Math.PI,1.5*Math.PI,'green');
    arco_verde_aqua = arcos(200,400,50,1*Math.PI,0*Math.PI,'green','aqua');
    arco_verde_amarelo = arcos(100,300,20,0*Math.PI,2*Math.PI,'green','yellow');
    arco_verde_amarelo2 = arcos(300,300,20,0*Math.PI,2*Math.PI,'green','yellow');
    borda1 = linhas1(0,0,400,0,'black','black')
    borda2 = linhas1(400,0,400,400,'black','black')
    borda3 = linhas1(0,0,0,400,'black','black')
    borda4 = linhas1(0,400,400,400,'black','black')

};

window.onload = function(){

    desenho1();
    desenho2();
}








