var fixedRect, movingRect;

function setup() {
  createCanvas(1200,870);
player = createSprite(110,780,30,30);
 player.shapeColor = ('blue');

 bed = createSprite(140,825,100,60)
  bed.shapeColor = ('white')

  floor = createSprite(600,855,1200,20)
  floor.shapeColor = ('green')
  isStatic = "true";
  
}

function draw() {
background('grey');  
 
  drawSprites();
}