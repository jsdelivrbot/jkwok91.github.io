var myFirebaseRef = new Firebase("https://kwok-quizzes.firebaseio.com/");

myFirebaseRef.child("quiz1").orderByValue().on("value", function(snapshot) {
  snapshot.forEach(function(data) {
    if (data.key() == "title") {
        title = data.val();
    } else {
        // questions
        var questions = data.val();
        // about to do some horrifying jquery shit r u ready
        console.log(questions);
        for (var q in questions) {
            var question = q;
            var multChoice = questions[q]["answers"];
            var correctChoice = questions[q]["correct"];
            console.log(correctChoice); // should i be requerying
            // should i restructure my obj
            // i need a question id
            // yes unless i wanna hash all of my questions or whatever
            var $item = $("<div>").addClass("item");
            var $question = $("<p>").text(question).addClass("question");
            $item.append($question);
            var $multChoice = $("<div>").addClass("choices");
            for (var a in multChoice) {
                var $a = $("<input>").attr("type","radio");
                var $aLabel = $("<label>").text(a+": "+multChoice[a]).addClass("choice");
                $multChoice.append($a);
            }
            $item.append($multChoice);
            $("body").append($item);
        }
        
    }
  });
});

$(".item").on("click", function() {
    // check if it's the right answer??
})