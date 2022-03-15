var canvas = document.getElementById('quadro');
var ctx = canvas.getContext('2d');

// Fileira vertical/esquerda
ctx.beginPath();
for(var y = 0; y <= 135; y=y+15){
    ctx.rect(0,y,25,15);
}
ctx.strokeStyle = 'black';
ctx.lineWidth = 2;
ctx.fillStyle = 'grey';
ctx.fill();
ctx.stroke();

// Fileira vertical/direita
ctx.beginPath();
for(var y = 0; y <= 135; y=y+15){
    ctx.rect(275,y,25,15);
}
ctx.strokeStyle = 'black';
ctx.fill();
ctx.stroke();

// Fileira horizontal/cima
ctx.beginPath();
for(var x = 0; x <= 250; x=x+25){
ctx.rect(x,0,25,15);
}
ctx.fill();
ctx.stroke();

// Fileira horizontal/baixo
ctx.beginPath();
for(var x = 0; x <= 250; x=x+25){
ctx.rect(x,135,25,15);
}
ctx.fill();
ctx.stroke();

//Mapa
ctx.beginPath();
for(var x = 65; x <= 250; x=x+50){
ctx.rect(x,30,25,15);
    for(var y = 65; y <= 100; y=y+35){
        ctx.rect(x, y, 25, 15);
    }
} 
ctx.fill();
ctx.stroke();

// Paredes
ctx.beginPath();
ctx.rect(190,47.5,25,15);
ctx.fill();
ctx.stroke();
