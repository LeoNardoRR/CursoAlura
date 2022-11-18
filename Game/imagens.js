// imagens e sons do jogo

let imagemDaEstrada;
let imagemDoAtor;
let imagemCarro;
let imagemCarro2;
let imagemCarro3;

//sons do jogo

let somDaTrilha;
let somDaColisao;
let somDoPonto;

function preload(){
  imagemDaEstrada = loadImage("imagens/fundo.webp");
  imagemDoAtor = loadImage("imagens/foguete.png");
  imagemCarro = loadImage("imagens/meteoro.png");
  imagemCarro2 = loadImage("imagens/meteoro.png");
  imagemCarro3 = loadImage("imagens/meteoro.png");  
  imagemCarros = [imagemCarro, imagemCarro2, imagemCarro3, imagemCarro, imagemCarro2, ]
  
  somDaColisao = loadSound("sons/colidiu.mp3");
  somDoPonto = loadSound("sons/pontos.wav");
}