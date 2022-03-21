var canvas = document.getElementById('quadro');
var ctx = canvas.getContext('2d');
var img = new Image();

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

// Parede 1
ctx.beginPath();
ctx.rect(190,47.5,25,15);

ctx.moveTo(215,53);
ctx.lineTo(190,53);

ctx.moveTo(215,58);
ctx.lineTo(190,58);

ctx.moveTo(205,58);
ctx.lineTo(205,63);

ctx.moveTo(198,53);
ctx.lineTo(198,58);

ctx.fill();
ctx.stroke();

// Parede 2
ctx.beginPath();
ctx.rect(90,82,25,16);

ctx.moveTo(91,88);
ctx.lineTo(115,88);

ctx.moveTo(91,93);
ctx.lineTo(115,93);

ctx.moveTo(99,88);
ctx.lineTo(99,94);

ctx.moveTo(106,93);
ctx.lineTo(106,97);

ctx.fill();
ctx.stroke();


// Bomba
ctx.beginPath();
ctx.arc(50, 50, 50, 0, 2 * Math.PI);
ctx.fillStyle = "black";
ctx.fill();
ctx.stroke();

// Imagem 
img.onload=function(){
    ctx.drawImage(img, 33, 8, 25, 20);
};
img.src= 'img/bomberman.png';