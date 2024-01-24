let sounds = new Tone.Players({
 'popcorn': "sounds/popcornMaker.mp3",
 'water': "sounds/waterTrickle.mp3"
});

let delay = new Tone.FeedbackDelay ("8n", 0.5);

let button1;
let button2;
let delaySlider;
let fdbkSlider;

function setup() {
  createCanvas(400, 400);
  sounds.connect (delay);
  delay.toDestination();
 

  button1 = createButton('Crazy Popcorn Maker');
  button1.position((width / 2)-60, (height /2)-12);
  button1.mousePressed(() =>playSound("popcorn"));
  
  button2 = createButton('Water Trickle');
  button2.position((width / 3)-60, (height /3)-12);
  button2.mousePressed(() =>playSound("water"));

  delaySlider = createSlider (0., 1., 0.5, 0.05);
  delaySlider.position (100,300);
  delaySlider.mouseReleased(() => {
    delay.delayTime.value = delaySlider.value();
  })
}

function draw() {
  background(50, 200, 200);
}


function playSound(whichSound) {
  if (whichSound === "popcorn") {
    sounds.player('popcorn').start();
  } else if (whichSound === "water") {
    sounds.player('water').start();}
  
}