//create a synth and connect it to the main output (your speakers)

const synth = new Tone.PolySynth(Tone.Synth);
const bend = new Tone.PitchShift();
const delay = new Tone.PingPongDelay(0);
synth.connect(bend);
bend.connect (delay);
delay.toDestination();
//connecting synth to pitch shift to ping pong delay to destination

let notes = {
  'a': 'C4',
  's': 'D4',
  'd': 'E4',
  'f': 'f4',
  'g': 'g4',
  'h': 'A4',
  'j': 'B4',
  'k': 'C5'
}

function setup() {
  createCanvas(400, 400);
  
  pitchSlider = createSlider (0., 12., 0.01, 1);
  pitchSlider.position (125,150);
  pitchSlider.mouseMoved(() => {
    bend.pitch = pitchSlider.value();
    //variable.attribute = slider variable value
  })

  delaySlider = createSlider ( 0, "16n", 0, 0.1);
  delaySlider.position (125,200);
  delaySlider.mouseMoved(() => {
    delay.delayTime.value = delaySlider.value();
    //.value is for "signals" check the documentation
 })

fdbkSlider = createSlider (0, 1, 0, 0.001);
fdbkSlider.position (125,250);
fdbkSlider.mouseMoved(() => {
  delay.feedback.value = fdbkSlider.value();
 })
}

//these functions are for the A-K notes
function keyPressed() {
  let playNotes = notes[key];
  synth.triggerAttack(playNotes);
}

function keyReleased() {
  let playNotes = notes[key];
  synth.triggerRelease(playNotes, '+0.03');
}

function draw() {
  background(200, 120, 200);
  text("Play A through K", 125, 100)
  text ('Pitchbend', 50, 155)
  text("Ping pong", 50, 205)
  text("Feedback", 50, 255)
}