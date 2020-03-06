var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
	return input.value.length;
}

function createListElement () {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	//eventlistener for the li lines
	li.addEventListener("click", function() {
		// create a boolean that is true when listened to li is stiked through
		var isStrikedThrough = this.classList.toggle("done");
		// create a remove button for toggling behind the li line
		var xButton = document.createElement("button");
		xButton.classList.add("deleteButton");

		// Li line is striked through: add the deletebutton behind this li
		if (isStrikedThrough) {
			xButton.appendChild(document.createTextNode("X"));
			xButton.classList = "deleteButton";
			li.appendChild(xButton);
			//when the xButton is clicked, remove the parent of the button (which is the li line)
			xButton.addEventListener("click", function() {
				this.parentElement.remove();
			});
		// Li line is not striked through: remove the deletebutton behind this li
		} else {
			this.getElementsByClassName("deleteButton")[0].remove();
		}
	})
	// clean the input value back to blank
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0 ) {
		createListElement();
		}
}

function addListAfterPress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}


button.addEventListener("click", addListAfterClick )

input.addEventListener("keypress", addListAfterPress)