//create a synth and connect it to the main output (your speakers)
// const synth = new Tone.Synth().toDestination();
// const synth = new Tone.PolySynth(Tone.Synth).toDestination();

const synth = new Tone.PolySynth(Tone.Synth);
const bend = new Tone.PitchShift();
bend.pitch = 8;
synth.connect(bend);
bend.toDestination();
//connecting synth to effect to destination

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
  background(100, 220, 150);

  text("Play A through K and bend pitch with slider.", 75, 150)
  pitchSlider = createSlider (0., 12., 0.01, 1);
  pitchSlider.position (100,300);
  pitchSlider.mouseMoved(() => {
    bend.pitch = pitchSlider.value();
  })
 //mouseMoved is so the bend works while mouse is moving
}

function draw() {
 
}

function keyPressed() {
  let toPlay = notes[key];
  synth.triggerAttack(toPlay);
//separated attack and release so keyboard press controls this
}

function keyReleased() {
  let toPlay = notes[key];
  synth.triggerRelease(toPlay, '+0.03');
  //added time to release to reduce popping sound

}