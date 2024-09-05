//variaveisdabola
let xBola =300;
let yBola =200;
let diametro =30;
let raio = diametro / 2;

//velocidadedabola
let velocidadeXBola=6;
let velocidadeyBola=6;
function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  mostraBola();
  movimentaBola();
 colisão();
  rect();
  

    function mostraBola(){  circle(xBola, yBola, diametro);
}

function movimentaBola(){
   xBola += velocidadeXBola;
  yBola += velocidadeyBola;
}

function colisão(){
  if (xBola + raio  >  width || xBola - raio < 0){
    velocidadeXBola *= -1;
  }
  
   if (yBola + raio >  height || yBola - raio < 0){
    velocidadeyBola *= -1;}
}
}