function makeCNote() {
  var cNote = new Audio("c1.mp3");
  cNote.play();
}

function makeDNote() {
  var dNote = new Audio("d1.mp3");
  dNote.play();
}

function makeENote() {
  var eNote = new Audio("e1.mp3");
  eNote.play();
}

function makeFNote() {
  var fNote = new Audio("f1.mp3");
  fNote.play();
}

function makeGNote() {
  var gNote = new Audio("g1.mp3");
  gNote.play();
}

function makeANote() {
  var aNote = new Audio("a1.mp3");
  aNote.play();
}

function makeBNote() {
  var bNote = new Audio("b1.mp3");
  bNote.play();
}

function makeCSharpNote() {
  var cSharpNote = new Audio("c1s.mp3");
  cSharpNote.play();
}

function makeDSharpNote() {
  var dSharpNote = new Audio("d1s.mp3");
  dSharpNote.play();
}

function makeFSharpNote() {
  var fSharpNote = new Audio("f1s.mp3");
  fSharpNote.play();
}

function makeGSharpNote() {
  var gSharpNote = new Audio("g1s.mp3");
  gSharpNote.play();
}

function makeASharpNote() {
  var aSharpNote = new Audio("a1s.mp3");
  aSharpNote.play();
}

function makeKick4Sound() {
  var kick4Sound = new Audio("kick4.mp3");
  kick4Sound.play();
}

function makeFill1Sound() {
  var fill1Sound = new Audio("fill1.mp3");
  fill1Sound.play();
}

function makeSnare3Sound() {
  var snare3Sound = new Audio("snare3.mp3");
  snare3Sound.play();
}

function makeSnare4Sound() {
  var snare4Sound = new Audio("snare4.mp3");
  snare4Sound.play();
}

$("#cNote").on("click", makeCNote);
$("#dNote").on("click", makeDNote);
$("#eNote").on("click", makeENote);
$("#fNote").on("click", makeFNote);
$("#gNote").on("click", makeGNote);
$("#aNote").on("click", makeANote);
$("#bNote").on("click", makeBNote);
$("#csNote").on("click", makeCSharpNote);
$("#dsNote").on("click", makeDSharpNote);
$("#fsNote").on("click", makeFSharpNote);
$("#gsNote").on("click", makeGSharpNote);
$("#asNote").on("click", makeASharpNote);
$("#kick4").on("click", makeKick4Sound);
$("#fill1").on("click", makeFill1Sound);
$("#snare3").on("click", makeSnare3Sound);
$("#snare4").on("click", makeSnare4Sound);

$(document).keypress(delegateKeypress);

function delegateKeypress(event) {
    console.log(event.keyCode);
    if (event.keyCode == 113) {
        $("#snare3").trigger("click");
    }
    
    if (event.keyCode == 119) {
        $("#csNote").trigger("click");
    }
    
    if (event.keyCode == 101) {
        $("#dsNote").trigger("click");
    }
    
    if (event.keyCode == 114) {
        $("#fill1").trigger("click");
    }
    
    if (event.keyCode == 117) {
        $("#fsNote").trigger("click");
    }
    
    if (event.keyCode == 105) {
        $("#gsNote").trigger("click");
    }
    
    if (event.keyCode == 111) {
        $("#asNote").trigger("click");
    }
    
    if (event.keyCode == 112) {
        $("#kick4").trigger("click");
    }
    
    if (event.keyCode == 97) {
        $("#cNote").trigger("click");
    }
    
    if (event.keyCode == 115) {
        $("#dNote").trigger("click");
    }
    
    if (event.keyCode == 100) {
        $("#eNote").trigger("click");
    }

    if (event.keyCode == 102) {
        $("#fNote").trigger("click");
    }
    
    if (event.keyCode == 106) {
        $("#gNote").trigger("click");
    }
    
    if (event.keyCode == 107) {
        $("#aNote").trigger("click");
    }
    
    if (event.keyCode == 108) {
        $("#bNote").trigger("click");
    }
        
    if (event.keyCode == 59) {
        $("#snare4").trigger("click");
    }
}