// var icecream = ["chocolate", "vanilla", "cookies n cream"]
// icecream.forEach(function(fav) {
//   alert("i love " + fav)
// });

// Groceries
// Create a form that allows a user to input items they need at the store.
// When the user submits the form, hide the form and display the list of items in alphabetical order, all uppercased.
// Hint: To do this, build an array of the inputted items. (Make sure you don't include any blank fields.) Sort the array in alphabetical order. Make a new array with each entry uppercased (don't just uppercase them when you display them). Then, display the sorted list of things as list items inside a <ul>.
//
// Explore the arrays entry of the Mozilla Developer Network JavaScript documentation to research what method might be used to sort arrays.
//
// $(document).ready(function() {
//   $("#blanks form").submit(function(event) {
//     event.preventDefault();
//     var blanks = ["item-one", "item-two", "item-three"];
//     var formInput = [];
//     blanks.forEach(function(blank) {
//       var userInput = $("input#" + blank).val();
//       formInput.push(userInput)
//       console.log(formInput)
//     });
//
//     var upperCase = formInput.map(function(input) {
//       return input.toUpperCase()
//     });
//     console.log(upperCase)
//
//     var sortedUpperCase = upperCase.sort()
//     console.log(sortedUpperCase)
//     sortedUpperCase.forEach(function(index) {
//       console.log(index)
//       $("#story ul").css("background-color", "green")
//       $("#story ul").append("<li>"+index+"</li>")
//     });
//
//     $("#blanks").hide();
//     $("#story").show();
//
//
//   });
// });

// Word Play
// Create a form where users may enter a sentence.
// Turn that sentence into an array using the split method.
// Then, loop through this array to build a new array out of every word in the sentence that is 3 or more characters in length.
// Finally, reverse the order of the new array, join it back together into a string, and display it to the user.



// " of "+suitIndex+


  // var card = ["ace", "2", "3", "4", "5"]
  // var suit = ["clubs", "diamonds", "spades", "hearts"]
  //
  // card.forEach(function(cardIndex) {
  //   suit.forEach(function(suitIndex) {
  //     $("#story ul").append("<li>" + cardIndex + " of " + suitIndex + "</li>")
  //     console.log(cardIndex + suitIndex)
  //   });
  // });



    // var splitInput = $("#item-one").val().split(" ")
    // console.log(splitInput)
    //
    // var threeOrMore = [];
    // splitInput.forEach(function(index) {
    //   if (index.length >= 3) {
    //     threeOrMore.push(index);
    //     console.log(threeOrMore)
    //   }
    // });
    //
    // var reverseAndJoin = threeOrMore.reverse().join("&")
    // $("#story p").text(reverseAndJoin);
$(document).ready(function() {
  $("#form form").submit(function(event) {
    event.preventDefault();
    var removed = []
    var vowels = ["a", "e", "u", "i", "o"]
    var itemTwo = $("#item-two").val().split("")
    itemTwo.forEach(function(letter) {
      vowels.forEach(function(vowel) {
        if (vowel === letter) {
          removed.push("-")
        } else {
          removed.push(letter)
        }
      });
    });
    alert(removed)
  });
});
