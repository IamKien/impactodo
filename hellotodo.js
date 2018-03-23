var myInput = document.querySelector("#myInput");
var myUL = document.querySelector("#myUL");


function newElement() {
  var app = document.createElement("li");// create the li
  var inputValue = document.getElementById("myInput").value; //get the inputValue
  var text = document.createTextNode(inputValue); // create the text
  app.appendChild(text); // append the text to li element
  if(inputValue === ''){ // if it's blank alert
    alert("You must write something")
  } else{
    document.getElementById("myUL").appendChild(app); // get the list(myUL) and append app(list)
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("span"); //create a span element
  var x = document.createTextNode("X"); // create a X symbol
  span.className = "close"; // add the class close to span
  span.appendChild(x); // append X to span element
  app.appendChild(span); // append X to the app(li) class

  for (var i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }

}

// Create a "close" button and append it to each list item
var closeButton = document.getElementsByTagName("li"); // get all the li element
var i;
for (var i = 0; i < closeButton.length; i++) { // loop through li
  var span = document.createElement("span"); // create a span element
  var x = document.createTextNode("X"); // append X to each of them
  span.className = "close"; // append close class to all of the li
  span.appendChild(x); // append X as a span to each of the LI
  closeButton[i].appendChild(span); // create an individual X on each the li
}

// Hide the element when click on closeButton
var close = document.getElementsByClassName("close"); // get any list with close class
var i;
for (i = 0; i < close.length; i++) { // loop through everything with the close class
  close[i].onclick = function() { // when clicked on
    var div = this.parentElement; // the parent element
    div.style.display = "none"; // will become none
  }
}

// Create a strikeout when clicking on the List
var strike = document.querySelector('ul'); // get the UL element
strike.addEventListener("click", function(ev){ // when clicked on
  if (ev.target.tagName === 'LI') { // check to see if tagName and target is an LI, LI has to be capitalize because of tagName will return capitalize only
    ev.target.classList.toggle('checked'); // apply class checked from css file
  }
}, false);
