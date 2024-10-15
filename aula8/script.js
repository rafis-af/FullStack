

let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');


let ball = {

    x: 10,
    y:10,
    raio: 50,
    img: new Image(),
    desenhe: function(){
        this.img.src = 'footbal_PNG28463.png';
        ctx.beginPath();
        ctx.drawImage(this.img, this.x, this.y);
        ctx.closePath();
    }


}

ball.desenhe();

let retangulo = {
    x: 10,
    y: 10,
    largura: 50,
    altura: 50,
    cor: 'red',
    desenhe: function(){

        ctx.beginPath();
        ctx.fillStyle = this.cor;
        ctx.fillRect(this.x, this.y, this.largura, this.altura);
        ctx.closePath();
    
    }
}
let retangulo2 = {
    x: 340,
    y: 340,
    largura: 50,
    altura: 50,
    cor: 'red',
    desenhe: function(){

        ctx.beginPath();
        ctx.fillStyle = this.cor;
        ctx.fillRect(this.x, this.y, this.largura, this.altura);
        ctx.closePath();
    
    }
}

function animacao(){
    
    ctx.clearRect(0,0,400,400);

    //if(retangulo.x < 350 ){
    //retangulo.x = retangulo.x + 1 
    //}
    
    //if (retangulo2.x > 0){
    //retangulo2.x = retangulo2.x - 1
    //}

    retangulo.desenhe();
    retangulo2.desenhe();
    requestAnimationFrame(animacao);

}

animacao()

document.addEventListener('keydown', function(evento){

    vel = 3;

    let tecla = evento.key;
    console.log(tecla);

    if (tecla == 'ArrowUp'){

        retangulo.y = retangulo.y - vel;
    }
    if (tecla == 'ArrowDown'){

        retangulo.y = retangulo.y + vel;
    }
    if (tecla == 'ArrowLeft'){

        retangulo.x = retangulo.x - vel;
    }
    if (tecla == 'ArrowRight'){

        retangulo.x = retangulo.x + vel;
    }
})

document.addEventListener('mousemove', function(evento){

    let rect = canvas.getBoundingClientRect();
    let x = evento.clientX - rect.left;
    let y = evento.clientY - rect.top;
    console.log(x,y);

    retangulo2.x = x;
    retangulo2.y = y;

})

