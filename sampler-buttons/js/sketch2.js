
let soundsNames = ["popcorn", "water"];
let buttons = [];
// let button1;
// let button2;


function setup() {
  createCanvas(400, 400);
  sounds.toDestination();
 
  soundsNames.forEach((word, index) =>{
    buttons [index] = createButton(word);
    buttons [index].position(index+150, index*50+100);
    buttons[index].mousePressed(() => buttonSound(word))
  })
}

  // button1 = createButton('Crazy Popcorn Maker');
  // button1.position((width / 2)-60, (height /2)-12);
  // button1.mousePressed(() =>playSound("popcorn"));
  
  // button2 = createButton('Water Trickle');
  // button2.position((width / 3)-60, (height /3)-12);
  // button2.mousePressed(() =>playSound("water"));
  //}



function draw() {
  background(240,150, 100);
  text("Press buttons for sound!", 100, 50);
}


function buttonSound(whichSound) {
  sounds.player (whichSound).start();
  
}
