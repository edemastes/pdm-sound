
let sounds = new Tone.Players({
  'popcorn': "sounds/popcornMaker.mp3",
 'water': "sounds/waterTrickle.mp3"
});

let button1;
let button2;

function setup() {
  createCanvas(400, 400);
  sounds.toDestination();
 
  button1 = createButton('Weird Popcorn Maker');
  button1.position((width / 2)-60, (height /2)-12);
  button1.mousePressed(() =>playSound("popcorn"));
  
  button2 = createButton('Water Trickle');
  button2.position((width / 3)-60, (height /3)-12);
  button2.mousePressed(() =>playSound("water"));

}

function draw() {
  background(239, 169, 218);
  text("Press buttons for sound!", 150, 300);
}


function playSound(whichSound) {
  if (whichSound === "popcorn") {
    sounds.player('popcorn').start();
  } else if (whichSound === "water") {
    sounds.player('water').start();}
  
}
