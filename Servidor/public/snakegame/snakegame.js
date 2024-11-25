const canvas = document.getElementById('snakegame');
const start = document.getElementById('start');
const ctx = canvas.getContext('2d');

let cobrinha;
let pontos;
let comida;
let controle;
let barreira = [];
let barreira_ativada = 0;
let tempo_final = 0;
let movimento = 140;
let barreira_movel = [];




const celulas_x = 50;
const celulas_y = 25;
const tamanho_celulas = 20;

const maca = new Image();
maca.src = 'maca.png';

const bomba = new Image();
bomba.src = 'bomba.png';

const cerca = new Image();
cerca.src = 'hunter.png'



function fundo() {
    ctx.fillStyle = 'rgb(66, 92, 15)';
    ctx.fillRect(0,0,canvas.width,canvas.height);
    ctx.strokeStyle = 'darkgreen';
    
    for(let x = 0; x <= canvas.width; x += tamanho_celulas) {
        ctx.beginPath();
        ctx.moveTo(x,0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
    }
    
    for(let y = 0; y <= canvas.height; y += tamanho_celulas) {
        ctx.beginPath();
        ctx.moveTo(0,y);
        ctx.lineTo(canvas.width,y);
        ctx.stroke();
        
    }   
}

function iniciar() {
    cobrinha = [{x:10,y:10}];
    pontos = 0;
    comida = {
        x:Math.floor(Math.random()*celulas_x),
        y:Math.floor(Math.random()*celulas_y)
    };
    controle = {x:1,y:0};
    tempo_final = 0;
    barreira = [];
    barreira_ativada = 0;
    barreira_movel = []
    start.style.display = 'none';
    requestAnimationFrame(looping)
};

function looping(tempo_atual) {
    if (tempo_atual - tempo_final >= movimento) {
        tempo_final = tempo_atual;
    

        if (game_over()) {
            mensagem_morte();
            return;
        }
        fundo();
        mover_cobrinha();
        desenhar_comida();
        desenhar_cobrinha();
        velocidade();
        pontuacao();
        add_barreira();
        add_barreira_movel();
        desenhar_barreira();
        desenhar_barreira_movel();
        
    }
    requestAnimationFrame(looping);
}


function mover_cobrinha() {
    const corpo = {x:cobrinha[0].x+controle.x,y:cobrinha[0].y+controle.y};
    cobrinha.unshift(corpo);
    if (corpo.x === comida.x && corpo.y === comida.y) {
        pontos++;
        comida = {
            x:Math.floor(Math.random()*celulas_x),
            y:Math.floor(Math.random()*celulas_y)
        };
    } else {
        cobrinha.pop();
    }
}



function game_over() {
    const corpo = cobrinha[0];
    return (
        corpo.x < 0 || corpo.y < 0 || corpo.x >= celulas_x || corpo.y >= celulas_y || 
        cobrinha.slice(1).some(parte => parte.x === corpo.x && parte.y === corpo.y) ||
        colisao()
    );
}

function mensagem_morte(){
    ctx.fillStyle = 'red';
    ctx.font = '20px pixel';
    const frase = ('Você morreu :(   |   Sua pontuação foi de: ' + pontos);
    const frase_x = canvas.width / 2 - ctx.measureText(frase).width / 2;
    const frase_y = canvas.height / 2;
    ctx.fillText(frase,frase_x,frase_y);
    start.style.display = 'block';
}

function velocidade() {
    const vel_nova = 140 - Math.floor(pontos / 5) * 10;
    movimento = Math.max(80,vel_nova);
}


function pontuacao() {
    ctx.fillStyle = 'black';
    ctx.font = '20px pixel';
    ctx.fillText('Sua pontuação atual: ' + pontos,10,30 );
}

function add_barreira() {
    if (pontos % 5 === 0 && pontos !== 0 && barreira_ativada < Math.floor(pontos / 5)) {
        for (let i = 0; i < 5; i ++) {
            let barreira_nova; 
            do {
                barreira_nova = {
                    x: Math.floor(Math.random()*celulas_x),
                    y: Math.floor(Math.random()*celulas_y)
                };
            } while (
                (barreira_nova.x === comida.x && barreira_nova.y === comida.y) || 
                cobrinha.some(parte => parte.x === barreira_nova.x && parte.y === barreira_nova.y) ||
                barreira.some(b => b.x === barreira_nova.x && b.y === barreira_nova.y)
                
            );
            
            barreira.push(barreira_nova);
        }
        
        barreira_ativada += 1;
    }
}


function add_barreira_movel () {
    if (pontos % 10 === 0 && pontos !== 0 && barreira_movel.length < Math.floor(pontos / 10)) {
        let barreira_nova;
        do {
            barreira_nova = {
                x: Math.floor(Math.random() * celulas_x),
                y: Math.floor(Math.random() * celulas_y),
                mov_x: Math.random() > 0.5 ? 1 : -1, 
                mov_y: Math.random() > 0.5 ? 1 : -1  
            };
        } while (
            (barreira_nova.x === comida.x && barreira_nova.y === comida.y) ||
            cobrinha.some(parte => parte.x === barreira_nova.x && parte.y === barreira_nova.y) ||
            barreira.some(b => b.x === barreira_nova.x && b.y === barreira_nova.y) ||
            barreira_movel.some(b => b.x === barreira_nova.x && b.y === barreira_nova.y)
        );

        barreira_movel.push(barreira_nova);
    }
}
    



function desenhar_barreira() {
    ctx.fillStyle = 'black';
    barreira.forEach(obstaculo => ctx.drawImage(bomba,obstaculo.x*20,obstaculo.y*20,20,20));
    
}

function desenhar_Canvas() {
    ctx.fillStyle = 'rgb(66, 92, 15)';
    ctx.fillRect(0,0,canvas.width,canvas.height);
}

function desenhar_comida() {
    ctx.drawImage(maca,comida.x*tamanho_celulas,comida.y*tamanho_celulas,tamanho_celulas,tamanho_celulas);
}

function desenhar_cobrinha() {
    ctx.fillStyle = 'green';
    cobrinha.forEach(parte => {
        
        ctx.fillRect(parte.x * tamanho_celulas, parte.y * tamanho_celulas,tamanho_celulas,tamanho_celulas);
    })
}

function desenhar_barreira_movel() {

    barreira_movel.forEach(barreira => {
        barreira.x += barreira.mov_x;
        barreira.y += barreira.mov_y;

        if (barreira.x < 0 || barreira.x >= celulas_x) barreira.mov_x *= -1;
        if (barreira.y < 0 || barreira.y >= celulas_y) barreira.mov_y *= -1;


        ctx.drawImage(cerca, barreira.x * tamanho_celulas, barreira.y * tamanho_celulas, tamanho_celulas, tamanho_celulas);
    });
}

function colisao() {
    const corpo = cobrinha[0];
    if (barreira.some(barreira => barreira.x  === corpo.x && barreira.y === corpo.y)) {
        console.log('Colisão com barreira fixa funcionando')
        return true;
    }
    if (barreira_movel.some(barreira => barreira.x  === corpo.x && barreira.y === corpo.y)) {
        console.log('Colisão com barreira móvel funcionando!')
        return true;    
    }
    return false;
}



document.addEventListener('keydown', evento => {
    switch (evento.key) {
        case 'ArrowUp': if (controle.y === 0) controle = {x:0,y:-1}; break;
        case 'ArrowRight': if (controle.x === 0) controle = {x:1,y:0}; break;
        case 'ArrowLeft': if (controle.x === 0) controle = {x:-1,y:0}; break;
        case 'ArrowDown': if (controle.y === 0) controle = {x:0,y:1}; break;
    }
    
});

start.addEventListener('click', iniciar)
