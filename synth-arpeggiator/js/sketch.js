//create a synth and connect it to the main output (your speakers)

const synth = new Tone.PolySynth(Tone.Synth);
const bend = new Tone.PitchShift();
let pattern1, pattern2, pattern3, pattern4;
bend.pitch = 8;
synth.connect(bend);
bend.toDestination();
//connecting synth to effect to destination

//declare patterns
pattern1 = new Tone.Pattern(function(time, note){
  synth.triggerAttackRelease(note, 0.5);
  },['C3', 'E3', 'G3', 'C4'], 'upDown' ); 

pattern2 = new Tone.Pattern(function(time, note){
  synth.triggerAttackRelease(note, 0.5);
  },['D3', 'F3', 'A3', 'D4'], 'upDown' ); 

pattern3 = new Tone.Pattern(function(time, note){
  synth.triggerAttackRelease(note, 0.5);
  },['E3', 'G3', 'B3', 'E4'], 'upDown' ); 

pattern4 = new Tone.Pattern(function(time, note){
  synth.triggerAttackRelease(note, 0.5);
  },['F3', 'A3', 'C4', 'F4'], 'upDown' ); 
  
pattern5 = new Tone.Pattern(function(time, note){
    synth.triggerAttackRelease(note, 0.5);
    },['G3', 'B3', 'D4', 'G4'], 'upDown' ); 

  Tone.Transport.start();

function setup() {
  createCanvas(400, 400);
  
  pitchSlider = createSlider (0., 12., 0.01, 1);
  pitchSlider.position (100,200);
  pitchSlider.mouseMoved (() => {
    bend.pitch = pitchSlider.value ();
  })
}

function draw() {
  background(255, 200, 150);

  text("Play A through G", 100, 100);
  text("Pitchbend", 100, 185);
  text("Playback Speed", 100, 285);
}

//here is where are arpeggiator function is
function keyPressed() {
 if (key === 'a' ){
  pattern1.start(); 
  } else if (key === 's' ){
    pattern2.start(); 
  } else if (key === 'd' ){
  pattern3.start(); 
  } else if (key === 'f' ){
  pattern4.start(); 
  } else if (key === 'g' ){
    pattern5.start(); 
  }
}

function keyReleased (){
  if (key === 'a' ){
    pattern1.stop(); 
    } else if (key === 's' ){
      pattern2.stop(); 
    } else if (key === 'd' ){
    pattern3.stop(); 
    } else if (key === 'f' ){
    pattern4.stop(); 
    } else if (key === 'g' ){
      pattern5.stop(); 
    }
  }
