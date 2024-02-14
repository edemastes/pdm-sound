
let sequence1, square;
let melody = ["C3", ["E3", "G3", "D3", "C3"], "A3", "B2", "C2", "E3", ["A2", "G2"], "C4"]; //each indexed element is one beat of musical time. Nested arrays are subdivisions of those beats


function setup() {
  createCanvas(400, 400);

  //make your synth here
    square = new Tone.Synth({
    oscillator: {
      type: "square" 
    }
  }).toDestination();

  //make your sequencer here
  sequence1 = new Tone.Sequence(function(time, note) {
    square.triggerAttackRelease(note, 0.5);
  }, melody, '4n'); //calls melody variable

  Tone.Transport.bpm.value = 100; // beats per minute
  Tone.Transport.start(); //starts clock for sequencer
}

function draw() {
  background(150, 100, 200);
  text ('Hold mouse for sound', width/3, height/2)
}

//start sequence on mouse click 
function mousePressed() {
  Tone.start();
  sequence1.start();
}

function mouseReleased(){
  sequence1.stop();
}