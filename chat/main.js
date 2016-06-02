var config = {
    apiKey: "AIzaSyCyCLHv4X9TnygLWKoBt52ml_A4TjjNVek",
    authDomain: "chat-test-bccdb.firebaseapp.com",
    databaseURL: "https://chat-test-bccdb.firebaseio.com",
    storageBucket: "",
  };
  firebase.initializeApp(config);
  
var myDataRef = firebase.database().ref();

function pushMessage(event) {
  if (event.keyCode == 13) {
    var name = $('#nameInput').val();
    var text = $('#messageInput').val();
    myDataRef.push({name: name, text: text});
    $('#messageInput').val('');
  }
}

$('#messageInput').keypress(pushMessage);

myDataRef.on("child_added", showMessage);

function showMessage(snapshot) {
  var message = snapshot.val();
  var messageSender = message.name;
  var messageContent = message.text;

  var messageDiv = $("<div/>");
  var senderDiv = $("<span/>").text(messageSender + ': ');
  var contentDiv = $("<span/>").text(messageContent);

  messageDiv.append(senderDiv);
  messageDiv.append(contentDiv);
  messageDiv.appendTo($('#messagesDiv'));
}