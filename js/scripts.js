// function pingPong(number) {
//   var answer = [];
//   for (var i = 1; i <= number; i++) {
//     if ((i % 3 === 0) && (i % 5 === 0)) {
//       answer.push("Ping Pong");
//     } else if (i % 3 === 0) {
//       answer.push("Ping")
//     } else if (i % 5 === 0) {
//       answer.push("Pong")
//     } else
//       answer.push(i)
//   }
//   return answer
// }

function pingPong(number) {
  var answers = [];
  debugger;
  if (isNaN(number)) {
    return;
  }
  for (var i = 1; i <= number; i++) {
    var string = "";
    if (i % 3 === 0) {
      string += "Ping";
    }
    if (i % 5 === 0) {
      string += "Pong"
    }
    if (!string) {
      string = i.toString();
    }
    answers.push(string);
  }
  return answers
}

$(document).ready(function() {
  $("#form form").submit(function(event) {
    event.preventDefault();
    var number = $("#numInput").val();
    var result = pingPong(number);
    if (!result) {
      alert("Not a number");
    } else {
      for (var i = 0; i < result.length; i++) {
        $("#output ul").append("<li>" + result[i] + "</li>")
      }
    }
  });
});
