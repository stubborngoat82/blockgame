// Get a reference to the image element
var image = document.getElementById("image");

// Set up an event listener for the arrow keys
document.addEventListener("keydown", moveImage);

function moveImage(event) {
  // Get the current position of the image
  var left = parseInt(image.style.left) || 130;
  var top = parseInt(image.style.top) || 290;

  // Update the position of the image based on the arrow key pressed
  switch (event.key) {
    case "ArrowLeft":
      left -= 10;
      break;
    case "ArrowUp":
      top -= 10;
      break;
    case "ArrowRight":
      left += 10;
      break;
    case "ArrowDown":
      top += 10;
      break;
  }

  // Set the new position of the image
  image.style.left = left + "px";
  image.style.top = top + "px";
}
