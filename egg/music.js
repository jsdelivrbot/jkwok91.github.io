var index = 0;
//thank you bach
var song = [ 
  { note: 64, duration: 200 },  
  { note: 66, duration: 200 },  
  { note: 67, duration: 400 },  
  { note: 66, duration: 200 }, 
  { note: 64, duration: 200 },  
  { note: 63, duration: 400 },  
  { note: 64, duration: 200 },  
  { note: 66, duration: 200 },
  { note: 59, duration: 400 },
  { note: 61, duration: 200 },
  { note: 63, duration: 200 },
  { note: 64, duration: 400 },
  { note: 62, duration: 200 },
  { note: 60, duration: 200 },
  { note: 59, duration: 400 },
  { note: 57, duration: 200 },
  { note: 55, duration: 200 },
  { note: 54, duration: 400 },
  { note: 55, duration: 200 },
  { note: 57, duration: 200 },
  { note: 59, duration: 200 },
  { note: 57, duration: 200 },
  { note: 55, duration: 200 },
  { note: 54, duration: 200 },
  { note: 52, duration: 800 }
];

var trigger = 0;
var autoplay = true;
var osc;

//thank you p5

function setup() {
  createCanvas(720, 400);
  setupOscillator();
}

function draw() {
  playMusic();
}

function setupOscillator() {
  // A triangle oscillator
  osc = new p5.TriOsc();
  // Start silent
  osc.start();
  osc.amp(0);
}

function playMusic() {
  if (autoplay && millis() > trigger){
    playNote(song[index].note, song[index].duration);
    trigger = millis() + song[index].duration;
    // Move to the next note
    index = (index+1)%song.length;
  }
}

function mouseClicked() {
  autoplay = !autoplay;
}

function playNote(note, duration) {
  osc.freq(midiToFreq(note));
  // Fade it in
  osc.fade(0.5,0.2);
  
  // If we sest a duration, fade it out
  if (duration) {
    setTimeout(function() {
      osc.fade(0,0.2);
    }, duration-50);
  }
}