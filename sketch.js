const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;
var stones = [];


function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  base = new Base(100,680,200,200);
  base2 = new Base(1250,680,200,200);
  bridge = new Bridge(24,{x:120, y:550});
  joinPoint = new Base(1300,550,50,50);
  Matter.Composite.add(bridge.body, joinPoint);
  jointLink = new Link(bridge, joinPoint);
  frameRate(80);
  for (var i = 0; i <= 8; i++){
    var x = random(width/2 - 200, width/2 + 300);
    var y = random(-10,140);
  var stone = new Stone(x,y,80,80);
    stones.push(stone);
  }
}

function draw() {
 console.log(stones);
  background(51);
  base.show();
  base2.show();
  bridge.show();
  for (var stone in stones){
   stones[stone].show();
  }
  Engine.update(engine);

}
