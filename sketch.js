var canvas;
var music;
var surface1;
var surface2;
var surface3;
var surface4;
var box;
function preload(){
    music = loadSound("music.mp3");
}surface2.shapeColor=(255,0,0)
surface3=createSpr


function setup(){
    canvas = createCanvas(600,600);
surface1=createSprite(598,595,30,20)
surface1.shapeColor=(255,165,0)
surface2=createSprite(498,595,30,20)
surface2.shapeColor=(0,0,0)
surface3=createSprite(398,595,30,20)
surface3.shapeColor=(0,0,255)
surface4=createSprite(298,595,30,20)
surface4.shapeColor=(165,42,42)

box=createSprite(random(20,750))
box.shapeColor=(255,255,255)
}

function draw() {
    background(128,128,128);
    (createEdgeSprites)
box.x=world.mouseX
box.y=world.mouseY

if(box.x-surface1.x < surface1.width+box.y
  &&  surface1.x-box.x < surface1.width/2+box.width/2
  && box.y-surface1.y+surface1.height/2+box.height/2
  && surface1.y-box.y+surface1.height/2+box.height/2){
  surface1.shapeColor=(255,165,0)}

if(box.x-surface2.x < surface2.width+box.y
    && surface2.x-box.x < surface2.width/2+box.width/2
    && box.y-surface2.y+surface2.height/2+box.height/2
    && surface2.y-box.y+surface2.height/2+box.height/2){
    surface2.shapeColor=(0,0,0)}
    if(box.x-surface3.x < surface3.width+box.y
        && surface3.x-box.x < surface3.width/2+box.width/2
        && box.y-surface3.y+surface3.height/2+box.height/2
        && surface3.y-box.y+surface3.height/2+box.height/2){
            surface3.shapeColor=(0,0,255)}

      
  if(box.x-surface4.x < surface4.width+box.y
    && surface4.x-box.x < surface4.width/2+box.width/2
    && box.y-surface4.y+surface4.height/2+box.height/2
    && surface4.y-box.y+surface4.height/2+box.height/2){
    surface4.shapeColor=(165,42,42)}
    if(box.isTouching(edges)){
        box.bounceOff(edges)  
      }
      if(surface1.isTouching(box) && box.bounceOff(surface1)){
      box.shapeColor=(255,165,0)
      box.addSound(music)}
   if(surface2.isTouching && box.bounceOff(surface2)){
        box.shapeColor=(0,0,0)}
        if(surface3.isTouching(box) && box.bounceOff(surface3)) {
            surface3.shapeColor=(0,0,255)
            if(surface4.isTouching(box) && box.bounceOff(surface4)){
                surface4.shapeColor=(165,42,42)
                box.addSound(music)
                box.velocityX=0
                box.velocityY=0
            }
        }
drawSprites();
    //add condition to check if box touching surface and make it box
}
