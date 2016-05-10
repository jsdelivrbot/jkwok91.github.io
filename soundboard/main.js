function playSound(event) {
    var id = $(event.target).attr("id");
    var sound = new Audio("sounds/"+id+".mp3");
    sound.play();
}
 
$("button").on("click",playSound);
 
var kc = {
     101: "perc1"
    ,114: "snare3"
    ,100: "kick4"
    ,102: "snare4"
    ,117: "b4"
    ,105: "g4"
    ,106: "f3"
    ,107: "d4"
    ,99: "power41"
    ,118: "power46"
}
 
$(document).keypress(function(event) {
    console.log(event.keyCode);
    var id = kc[event.keyCode];
    $("#"+id).trigger("click");
})