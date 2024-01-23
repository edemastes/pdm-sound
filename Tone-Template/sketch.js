let soundFX;

function preload () {
  soundFX = new Tone.Players({
    popcorn: "Popcorn+Maker.mp3", 
    water: "Water+Trickle.mp3"
  }).toDestination();
}

function keyPressed() { 
  if (keyCode === 81) {
    //q
    soundFX.player("popcorn").start(); 
  } else if (keyCode === 87) {
    //w
    soundFX.player("water").start();
  }
}


function setup() {
  createCanvas(1800, 1600);
  
}

function draw() {
  background(220);
  console.log (keyCode);
}
  