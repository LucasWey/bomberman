var canvas = document.getElementById('quadro');
var ctx = canvas.getContext('2d');
var img = new Image();
var img2 = new Image();
var img3 = new Image();
var gradient = ctx.createRadialGradient(10,50,50,90,0,650);

ctx.shadowColor = "#353836";
ctx.shadowBlur = 11;
ctx.shadowOffsetX = 5;
ctx.shadowOffsetY = 2;

// Fileira vertical/esquerda
ctx.beginPath();
for(var y = 0; y <= 800; y=y+73){
    ctx.rect(0,y,80,800);
}
ctx.strokeStyle = 'black';
ctx.lineWidth = 2;
ctx.fillStyle = 'grey';
ctx.fill();
ctx.stroke();
ctx.closePath();

// Fileira vertical/direita
ctx.beginPath();
for(var y = 0; y <= 800; y=y+73){
    ctx.rect(920,y,80,800);
}
ctx.strokeStyle = 'black';
ctx.fill();
ctx.stroke();

// Fileira horizontal/cima
ctx.beginPath();
for(var x = 80; x <= 900; x=x+84){
ctx.rect(x,0,84,73);
}
ctx.fill();
ctx.stroke();

// Fileira horizontal/baixo
ctx.beginPath();
for(var x = 80; x <= 900; x=x+84){
ctx.rect(x,729.5,84,73);
}
ctx.fill();
ctx.stroke();

//Mapa
ctx.beginPath();
for(var x = 146; x <= 850; x=x+130){
    for(var y = 100; y <= 700; y=y+110){
        ctx.rect(x, y, 60, 50);
    }
}
ctx.fill();
ctx.stroke();

// Parede 1
ctx.beginPath();
ctx.rect(725,150,70,60);
ctx.moveTo(725,170);
ctx.lineTo(795,170);

ctx.moveTo(725,190);
ctx.lineTo(795,190);

ctx.moveTo(745,190);
ctx.lineTo(745,170);

ctx.moveTo(770,190);
ctx.lineTo(770,210);
ctx.lineWidth = "3";
ctx.fillStyle = "#cf7617";
ctx.fill();
ctx.stroke();

// Parede 2
ctx.beginPath();
ctx.moveTo(225,170);
ctx.lineTo(225,190);

ctx.moveTo(275,170);
ctx.lineTo(205,170);

ctx.moveTo(205,190);
ctx.lineTo(275,190);

ctx.moveTo(250,190);
ctx.lineTo(250,210);

ctx.rect(205,150,70,60);
ctx.fillStyle = "#cf7617";
ctx.fill();
ctx.stroke();

// Bomba
ctx.beginPath();
gradient.addColorStop(1, "grey");
gradient.addColorStop(0.5, "black");
ctx.arc(372,290,30,0,2*Math.PI);
ctx.fillStyle = "black";
ctx.fillStyle = gradient;
ctx.fillRect(200,100,10,0,2*Math.PI);
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.fillStyle="grey";
ctx.arc(380,280,10,0,2*Math.PI);
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.moveTo(385,280);
ctx.bezierCurveTo(420, 250, 410, 300, 410, 270);
ctx.fillStyle= "brown";
ctx.fill();
ctx.stroke();

// Imagem bomberman
img.onload=function(){
    ctx.drawImage(img, 90, 50, 45, 65);
};
img.src= 'img/bomberman.png';

// Imagem explosão
img2.onload=function(){
    ctx.drawImage(img2, 130, 410, 220, 210);
};
img2.src= 'img/explosion.png';

ctx.imageSmoothingEnabled = true;
