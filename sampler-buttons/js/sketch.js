
//here we declare our sound source using the players tone object
let sounds = new Tone.Players({
 'popcorn': "assets/popcorn.mp3",
 'water': "assets/water.mp3"
});

let delay = new Tone.FeedbackDelay ("8n", 0.5); //adding delay object
let button1;
let button2;
let delaySlider;


//here is one way to trigger buttons with empty functions: 

function setup() {
  createCanvas(400, 400);
  sounds.connect (delay);
  delay.toDestination();
 //here we connect our sounds variable that we assigned the soundfiles to our delay
 //then we connect delay to our audio output or "destination"

  button1 = createButton('Popcorn Maker');
  button1.position(85, 150);
  button1.mousePressed(() =>sounds.player("popcorn").start()); 
  
  button2 = createButton('Water Trickle');
  button2.position(205, 150);
  button2.mousePressed(() =>sounds.player("water").start());

  delaySlider = createSlider (0., 1., 0.5, 0.05);
  delaySlider.position (120,250);
  delaySlider.mouseReleased(() => {
    delay.delayTime.value = delaySlider.value();
  })
}


//here is another way to trigger buttons with regular functions:

// function setup() {
//   createCanvas(400, 400);
//   sounds.connect (delay);
//   delay.toDestination(); 

//   button1 = createButton('Popcorn Maker');
//   button1.position(85, 150);
//   button1.mousePressed(play1);

//   button2 =createButton('Water Trickle');
//   button2.position(205, 150);
//   button2.mousePressed(play2);

//   delaySlider = createSlider (0., 1., 0.5, 0.05);
//   delaySlider.position (120,250);
//   delaySlider.mouseReleased(delayStart);

// }

// function play1(){
//   sounds.player("popcorn").start();
// }

// function play2(){
//   sounds.player("water").start();
//   //sounds is your sound file variable we declared at the top
// }

// function delayStart (){
//   delay.delayTime.value = delaySlider.value();

// }



function draw() {
  background(50, 200, 200);
  text ("Add delay with slider", 130, 300);
}

