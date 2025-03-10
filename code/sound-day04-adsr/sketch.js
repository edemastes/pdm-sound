//ADSR is an amplitude envelope, must be between 0 and 1
//four waveforms here: sine, square, triangle, and sawtooth
let sine = new Tone.Synth({
  oscillator: {
    type: "sine"
  },
    envelope : {
      attack: 0.01,
      decay: 0.1,
      sustain: 0.1,
      release: 0.01,
    }
  }).toDestination();
  
let square = new Tone.Synth({
  oscillator: {
    type: "square"
  },
  envelope : {
    attack: 0.01,
    decay: 0.1,
    sustain: 0.1,
    release: 0.01,
  }
}).toDestination(); 

let triangle = new Tone.Synth({
  oscillator: {
    type: "triangle"
  },
  envelope : {
    attack: 0.01,
    decay: 0.1,
    sustain: 0.1,
    release: 0.01,
  }
}).toDestination();

let saw = new Tone.Synth({
  oscillator: {
    type: "sawtooth"
  },
  envelope : {
    attack: 0.01,
    decay: 0.1,
    sustain: 0.1,
    release: 0.01,
  }
}).toDestination();


function keyPressed() { 
if (key === 'q'){sine.triggerAttackRelease("c4", 1);
  } else if (key === 'w'){square.triggerAttackRelease("c4", 1); 
  } else if (key === 'e'){triangle.triggerAttackRelease("c4", 1);
  } else if (key === 'r'){saw.triggerAttackRelease("c4", 1);
  }   
}

function setup() {
  createCanvas(400, 400); 
}

function draw() {
  background(220, 100, 200);

  text('Q = sine', 150, 150);
  text('W = square', 150, 175);
  text('E = triangle', 150, 200);
  text('R = sawtooth', 150, 225);
}
  
