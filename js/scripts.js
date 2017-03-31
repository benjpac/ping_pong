// function pingPong(number) {
//   var answer = [];
//   for (var i = 1; i <= number; i++) {
//     if ((i % 3 === 0) && (i % 5 === 0)) {
//       answer.push("Ping Pong");
//     } else if (i % 3 === 0) {
//       answer.push("Ping");
//     } else if (i % 5 === 0) {
//       answer.push("Pong");
//     } else
//       answer.push(i);
//   }
//   return answer;
// }

function pingPong(number) {
  var answers = [];
  // check if NaN, negative, and float
  if (isNaN(number) || number < 0 || (number % 1 !== 0)) {
    return;
  }
  for (var i = 1; i <= number; i++) {
    var result = "";
    if (i % 3 === 0) {
      result += "Ping";
    }
    if (i % 5 === 0) {
      result += "Pong";
    }
    if (!result) {
      result = i.toString();
    }
    answers.push(result);
  }
  return answers;
}

$(document).ready(function() {
  $("#form form").submit(function(event) {
    event.preventDefault();
    var number = $("#numInput").val();
    var result = pingPong(number);
    if (!result) {
      alert("Must be a positive whole number");
    } else {
      for (var i = 0; i < result.length; i++) {
        $("#output ul").append("<li>" + result[i] + "</li>");
      }
    }
  })
})
