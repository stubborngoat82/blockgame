// Get the image and endpoint elements
var image = document.getElementById("image");
var endpoint = document.getElementById("endpoint");

// Set the initial position of the image
var imageLeft = Math.round(Math.random() * 450/10) * 10;
var imageTop = Math.round(Math.random() * 450 / 10)* 10;
image.style.left = imageLeft + "px";
image.style.top = imageTop + "px";

// Generate a random position for the endpoint rounded to the nearest 10 pixels
var endpointLeft = Math.round(Math.random() * 450 / 10) * 10; // between 0 and 450
var endpointTop = Math.round(Math.random() * 450 / 10) * 10; // between 0 and 450
endpoint.style.left = endpointLeft + "px";
endpoint.style.top = endpointTop + "px";


// Add event listener to the document to listen for key presses
document.addEventListener("keydown", function(event) {
	// Get the key code for the pressed key
	var keyCode = event.keyCode;
	
	// Move the image depending on which arrow key was pressed
	if (keyCode === 37) { // left arrow
		imageLeft -= 10;
	} else if (keyCode === 38) { // up arrow
		imageTop -= 10;
	} else if (keyCode === 39) { // right arrow
		imageLeft += 10;
	} else if (keyCode === 40) { // down arrow
		imageTop += 10;
	}

	// Check if the image has reached the endpoint
	if (imageLeft === endpointLeft && imageTop === endpointTop) {
		alert("You win!");
		imageTop = Math.round(Math.random() * 450 / 10) * 10;  
		imageLeft= Math.round(Math.random() * 450 / 10) * 10;  
		endpointLeft= Math.round(Math.random() * 450 / 10) * 10;  
		endpointTop= Math.round(Math.random() * 450 / 10) * 10;
	}

	// Update the position of the image
	image.style.left = imageLeft + "px";
	image.style.top = imageTop + "px";
	endpoint.style.left = endpointLeft + "px";
	endpoint.style.top = endpointTop + "px";
});
