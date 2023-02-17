// Get the image element
var image = document.getElementById("image");
var endpoint = document.getElementById("endpoint");

// Set the initial position of the image
var imageLeft = 0;
var imageTop = 0;
image.style.left = imageLeft + "px";
image.style.top = imageTop + "px";

// Set a random position for the endpoint
var endpointLeft = 360;
var endpointTop = 680;
endpoint.style.left = endpointLeft + "px";
endpoint.style.top = endpointTop + "px";

// Add event listener to the document to listen for key presses
document.addEventListener("keydown", function(event) {
	// Get the key code for the pressed key
	var keyCode = event.keyCode;
	
	// Move the image depending on which arrow key was pressed
	if (keyCode === 37) { // left arrow
		imageLeft -= 10;
		image.style.left = imageLeft + "px";
	} else if (keyCode === 38) { // up arrow
		imageTop -= 10;
		image.style.top = imageTop + "px";
	} else if (keyCode === 39) { // right arrow
		imageLeft += 10;
		image.style.left = imageLeft + "px";
	} else if (keyCode === 40) { // down arrow
		imageTop += 10;
		image.style.top = imageTop + "px";
	}
	// Check if the image has reached the endpoint
	if (imageLeft === endpointLeft && imageTop === endpointTop) {
		alert("You win!");
	}

	// Update the position of the image
	image.style.left = imageLeft + "px";
	image.style.top = imageTop + "px";
});