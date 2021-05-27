let p1
let enemies = []
let shoots = []
let attacks = []
let points = 0
let lifes = 2
let gameover = false

function preload(){
  enemy1 = loadImage('assets/enemy1.png')
  enemy2 = loadImage('assets/enemy2.png')
  enemy3 = loadImage('assets/enemy3.png')
  enemy4 = loadImage('assets/enemy1.png')
  enemy5 = loadImage('assets/enemy2.png')
  enemy6 = loadImage('assets/enemy3.png')
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  frameRate(8)
  imageMode(CENTER)
  p1 = new Player()

  let x = 80
  let y = 80

  for(var i = 0; i<8; i++){
    enemies[i] = new Enemy(i * x + 80, y + 100, enemy1, enemy2,5)
  }

  y=40
  offset = 0
  for(var j = 8; j<16; j++){
    enemies[j] = new Enemy(offset * x + 80, y + 70, enemy3, enemy4,10)
    offset++
  }

  y=0
  offset2 = 0
  for(var e = 16; e<24; e++){
    enemies[e] = new Enemy(offset2 * x + 80, y + 50, enemy5, enemy6,15)
    offset2++
  }
}

function draw() {
  background("black");


  p1.display()
  p1.move()


  let b = false
  for (var i=0; i<enemies.length; i++){
    enemies[i].display()
    enemies[i].move()

    if(enemies[i].x + enemies[i].w/2 > width || enemies[i].x - enemies[i].w / 2 < 0){
      b = true
    }

    if(enemies[i].reachedBottom()) {
      gameover = true
    }


  }

  if(gameover) {
    gameOver()
  }

  if(b === true){
    for(var j=0; j<enemies.length; j++){
      enemies[j].down()
    }
  }

  for(var e=0; e<shoots.length; e++){
    shoots[e].display()
    shoots[e].move()

    for(var j = 0; j<enemies.length; j++){
      if(shoots[e].collitionHits(enemies[j])){
        shoots[e].remove();
        points = points + enemies[j].points
        enemies.splice(j,1)
      }
    }
  }

  for(var k=shoots.length-1; k>=0; k--){
    if(shoots[k].removeE){
      shoots.splice(k, 1)
    }
  }

  updPts()

  //console.log(attacks.length)
  for(var e=0; e<attacks.length; e++){
    attacks[e].display()
    attacks[e].move()

    if(attacks[e].collitionHits(p1)){
      attacks[e].remove();
      points = points - 10
      if(lifes <= 0) {
        gameOver()
      }
      lifes --
    }
  }

  for(var k=attacks.length-1; k>=0; k--){
    if(attacks[k].removeE){
      attacks.splice(k, 1)
    }
  }

  if(enemies.length<=0){
    youWin()
  }
}



function keyReleased() {
  p1.setDir(0)
}

function keyPressed() {

  if (keyCode === 32){
    let shoot = new Shoot(p1.x + (p1.width/2), p1.y)
    shoots.push(shoot)
  }
  if (keyCode === 37) {
    p1.setDir(-5)
  } else if (keyCode === 39) {
    p1.setDir(5)
  }

}

function updPts(){
  fill("white")
  textSize(20)
  text("Puntos: " + points, 10, 20)
  text("Vidas: " + lifes, 250, 20)
}

function youWin(){
  background("black");
  textSize(80)
  textAlign(CENTER)
  text("YOU WIN", width/2, height/2)
  textSize(40)
  text("POINTS: "+ points, width/2, height/2+100)
  noLoop()
}

function gameOver(){
  background("black");
  textSize(80)
  textAlign(CENTER)
  text("GAME OVER", width/2, height/2)
  noLoop()
}
