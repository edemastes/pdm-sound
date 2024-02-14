
const noise = new Tone.Noise("white"); //pink, brown, and white
const filter = new Tone.Filter(100, "notch"); //highpass, lowpass, bandpass, lowshelf, highshelf, notch, allpass, or peaking

// filter.frequency.rampTo(20000, 10);
filter.frequency = 200;
noise.connect(filter);
filter.toDestination();



function keyPressed() { 
if (keyCode === 81){noise.start();
  } else if (keyCode === 87){noise.stop(); 
  } 
}


function setup() {
  createCanvas(400, 400); 
 
  filterSlider = createSlider(100, 20000, 100, 0.1);
  filterSlider.position(100, 200);
  filterSlider.mouseMoved (()=>{
    filter.frequency.value = filterSlider.value();
  })

}

function draw() {
  background(150, 220, 210);
  text('Press Q to start and W to stop', 100, 100);

  text('Use slider for filter', 100, 175);
}
  