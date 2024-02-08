let soundFX;

//sometimes smaller files don't need the preload
function preload () {
  soundFX = new Tone.Players({
    popcorn: "assets/popcorn.mp3", 
    water: "assets/water.mp3"
  }).toDestination(); //sending sounds to audio output
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
  createCanvas(400, 400); 
  
}

function draw() {
  background(220, 100, 200);
  text('Press Q or W for sound!', 120, 150);

  console.log (keyCode); 
  //on your browser, check "inspect" and then "console"
}
  