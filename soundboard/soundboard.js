function playSound(event) {
    var id = $(event.target).attr("id");
    var sound = new Audio(id+".mp3");
    sound.play();
}

$("button").on("click", playSound);

/*
$(document).keypress(function(e) {
  if(e.which == 13) {
    // enter pressed
    playSound("cat");
  }
});

function playSound(name) {
    var sound = new Audio(name+".mp3");
    sound.play();
}
*/

$(document).keypress(function(e) {
    console.log(e.keyCode);
    if (e.keyCode == 115) {
        $("#chop3").trigger("click");
    } else if (e.keyCode == 100) {
        $("#kick4").trigger("click");
    } else if (e.keyCode == 102) {
        $("#perc1").trigger("click");
    } else if (e.keyCode == 106) {
        $("#snare3").trigger("click");
    } else if (e.keyCode == 107) {
        $("#snare4").trigger("click");
    } else if (e.keyCode == 108) {
        $("#vox9").trigger("click");
    }
})