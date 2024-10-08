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
};
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
};
function arcos(altura, largura, raio, pi1, pi2, cor_linha, cor_preenchimento){
    ctx.beginPath();
    ctx.lineWidth = 10;
    ctx.strokeStyle = cor_linha;
    ctx.fillStyle = cor_preenchimento;
    ctx.arc(altura, largura, raio, pi1, pi2);
    ctx.stroke();
    ctx.fill();
    ctx.closePath();
};
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
};
chao = quadrado(0,250,400,200,'grey','grey');
casa = quadrado(150,150,110,100,'brown','brown');
janela1 = quadrado(165,170,30,30,'deepskyblue','deepskyblue');
janela2 = quadrado(215,170,30,30, 'deepskyeblue','deepskyeblue');
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







