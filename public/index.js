console.log("this is working");

//var addButton = document.getElementById("add-button");
//addButton.addEventListener("click", addToCart);

var addButtons = document.getElementsByClassName("add-button");


for(i = 0; i < addButtons.length; i++) {
	addButtons[i].addEventListener("click", addToCart);
}

function addToCart(event) {
	console.log(event.target.getAttribute("album-id"));
	console.log("add to cart");
}