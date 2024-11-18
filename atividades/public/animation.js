let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

let fei = {
    x: 110,
    y: 100,
    raio: 40,
    img: new Image(),
    largura: 100,
    altura: 100,
    desenhe: function(){
        this.img.src = 'Logo_FEI_Branco.png';
        ctx.beginPath();
        ctx.drawImage(this.img, this.x, this.y, 2*this.raio, 2*this.raio);
        ctx.closePath();
    }
}


function animacao(){
    
    ctx.clearRect(0,0,300,300);
    fei.desenhe();
    requestAnimationFrame(animacao);
    
}

animacao()

document.addEventListener('mousemove', function(evento){
    
    let rect = canvas.getBoundingClientRect();
    let x = evento.clientX - rect.left;
    let y = evento.clientY - rect.top;
    console.log(x,y);
    
    
    if (x < fei.largura / 2) {
        
        x = fei.largura / 2;

    } 
    else if (x > canvas.width - fei.largura / 2) {

        x = canvas.width - fei.largura / 2;

    }
    
    if (y < fei.altura / 2) {

        y = fei.altura / 2;

    } 
    else if (y > canvas.height - fei.altura / 2) {

        y = canvas.height - fei.altura / 2;

    }
    
    fei.x = x - (fei.largura / 2);
    fei.y = y - (fei.altura / 2);
})


