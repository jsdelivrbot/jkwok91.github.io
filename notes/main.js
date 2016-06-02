localStorage.setItem("notes2",JSON.stringify([])); //FINISH THIS TODO



// gonna assume that no one's using stupid af browsers
/*
if (!localStorage.getItem("notes")) {
    // wow i am so tired/braindead. what am i trying to do again?
    localStorage.setItem("notes", JSON.stringify({})); // NOTE: localStorage stores everything as strings
}

var storedNotes = JSON.parse(localStorage.getItem("notes"));
displayNotes();

// display old notes on page
function displayNotes() {
    var allNotes = $(".old-notes");
    allNotes.html("");
    
    var sortedKeys = sortObj(storedNotes);
    for (var index in sortedKeys) {
        var key = sortedKeys[index];
        var thisNote = $("<div>").addClass("note");
        var noteDate = new Date(key);
        var note = storedNotes[key];
        var noteTitle = note.title;
        var noteContent = recognizeLineBreaks(note.content);
        
        // jQ time
        var noteHead = $("<div>").addClass("note-head");
        var noteTitleDisplay = $("<p>").text(noteTitle).addClass("note-title");
        var noteDateDisplay = $("<p>").text(noteDate).addClass("note-date");
        noteHead.append(noteTitleDisplay).append(noteDateDisplay);
        var noteBody = $("<p>").html(noteContent).addClass("note-content");
        
        thisNote.append(noteHead);
        thisNote.append(noteBody);
        allNotes.append(thisNote);
    }
}

// post new note

function postNewNote() {
    // create new note object
    var note = {};
    // get title
    var titleInput = $(".new-note-title");
    // get note body
    var contentInput = $(".new-note-content");
    note.title = titleInput.val();
    note.content = contentInput.val();
    
    var date = new Date();
    
    storedNotes[date] = note;
    localStorage.setItem("notes",JSON.stringify(storedNotes));
    
    titleInput.val(""); // clear input
    contentInput.val(""); // clear input
    displayNotes();
}

$(".post-new-note").on("click", postNewNote);

// line breaks

function recognizeLineBreaks(textWithNL) {
    var textArr = textWithNL.split("\n");
    var lineBrokenText = textArr.join("<br>");
    return lineBrokenText;
}

// sort the notes by newest to oldest

// first create an array from the object's keys
// sort that array
// then cycle thru that array instead of thru the object itself

function sortObj(obj) {
    var keys = Object.keys(obj);
    var sortedKeys = keys.sort(compare)
    return sortedKeys;
}

function compare(a,b) {
  if (a == b) {
    return 0;
  } else if (a < b) {
    return 1;
  } else {
    return -1;
  }
}
*/