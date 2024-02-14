const player = new Tone.Player("assets/popcorn.mp3").toDestination();
player.loop = true;
// player.autostart = true;


function mousePressed(){
  player.start();
}

function keyPressed(){
  player.stop();
}

function setup() {
  createCanvas(400, 400); 
  
}

function draw() {
  background(250, 200, 100);
  text ('press mouse to start loop', width/4, height/4)
  text ('press any key to stop loop', width/4, height/3)

  console.log (keyCode); 
  //on your browser, check "inspect" and then "console"
}
  