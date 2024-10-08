
let canvas = document.getElementById('canvas_ex1');

let ctx = canvas.getContext('2d');

//retângulos
//ctx.beginPath();
//ctx.lineWidth = 2;
//ctx.strokeStyle = 'red';
//ctx.fillStyle = 'blue';
//ctx.strokeRect(10,10,50,50);
//ctx.fillRect(10,10,50,50);
//ctx.closePath();

// linhas
//ctx.beginPath();
//ctx.lineWidth = 2;
//ctx.strokeStyle = 'red';
//ctx.fillStyle = 'yellow';
//ctx.moveTo(100,0);
//ctx.lineTo(200,100);
//ctx.lineTo(200,200);
//ctx.lineTo(100,200);
//ctx.lineTo(100,0);
//ctx.stroke();
//ctx.fill();
//ctx.closePath();

// arcos
//ctx.beginPath();
//ctx.lineWidth = 10;
//ctx.strokeStyle = 'black';
//ctx.fillStyle = 'white';
//ctx.arc(200,200,50,1.5*Math.PI,2.5*Math.PI);
//ctx.stroke();
//ctx.fill();
//ctx.closePath();

// texto
//ctx.beginPath();
//ctx.lineWidth = 10;
//ctx.strokeStyle = 'black';
//ctx.fillStyle = 'aqua';
//ctx.font = "90px Arial"
//ctx.strokeText("Olá",200,200)
//ctx.fillText("Olá",200,200);
//ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.strokeStyle = 'red';
ctx.fillStyle = 'red';
ctx.strokeRect(0,0,50,50);
ctx.fillRect(0,0,50,50);
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.strokeStyle = 'blue';
ctx.fillStyle = 'blue';
ctx.strokeRect(350,0,50,50);
ctx.fillRect(350,0,50,50);
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.strokeStyle = 'yellow';
ctx.fillStyle = 'yellow';
ctx.strokeRect(0,350,50,50);
ctx.fillRect(0,350,50,50);
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.strokeStyle = 'green';
ctx.fillStyle = 'green';
ctx.strokeRect(350,350,50,50);
ctx.fillRect(350,350,50,50);
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.strokeStyle = 'green';
ctx.moveTo(0,200);
ctx.lineTo(400,200);
ctx.stroke();
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.strokeStyle = 'red';
ctx.moveTo(0,0);
ctx.lineTo(400,400);
ctx.stroke();
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.strokeStyle = 'blue';
ctx.moveTo(400,0);
ctx.lineTo(0,400);
ctx.stroke();
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.strokeStyle = 'green';
ctx.arc(200,200,60,0*Math.PI,1*Math.PI);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.strokeStyle = 'green';
ctx.fillStyle = 'yellow'
ctx.arc(70,140,20,0*Math.PI,2*Math.PI);
ctx.stroke();
ctx.fill()
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.strokeStyle = 'green';
ctx.fillStyle = 'yellow'
ctx.arc(330,140,20,0*Math.PI,2*Math.PI);
ctx.stroke();
ctx.fill()
ctx.closePath();


ctx.beginPath();
ctx.lineWidth = 1;
ctx.strokeStyle = 'black';
ctx.fillStyle = 'black';
ctx.font = "26px Arial"
ctx.fillText("Desenvolvimento Web",70,70);
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.strokeStyle = 'green';
ctx.moveTo(0,0);
ctx.lineTo(0,400);
ctx.stroke();
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.strokeStyle = 'green';
ctx.moveTo(0,0);
ctx.lineTo(400,0);
ctx.stroke();
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.strokeStyle = 'green';
ctx.moveTo(400,400);
ctx.lineTo(0,400);
ctx.stroke();
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.strokeStyle = 'green';
ctx.moveTo(400,0);
ctx.lineTo(400,400);
ctx.stroke();
ctx.fill();
ctx.closePath();

