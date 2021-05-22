var fixedRect, movingRect;

function setup() {
  createCanvas(3000,870);
player = createSprite(110,780,30,30);
 player.shapeColor = ('blue');

 bed = createSprite(140,825,100,60)
  bed.shapeColor = ('white')

  floor = createSprite(1500,855,3000,20)
  floor.shapeColor = ('green'); 

  themom = createSprite(500,805,40 ,80)
  themom.shapeColor = ('rgb(251, 203, 165)')
}

function draw() {
background('grey');  
 
  if(keyDown("W")){
    player.y = player.y -6
  }

  if(keyDown("S")){
    player.y = player.y +6
  }

  if(keyDown("A")){
    player.x = player.x -6
    bed.x = bed.x +6
    themom.x = themom.x +6
  }
  
  if(keyDown("D")){
    player.x = player.x +6
    bed.x = bed.x -6
    themom.x = themom.x -6
  }
  
  player.collide(themom);
  player.collide(floor);
  player.collide(bed);
  drawSprites();
}