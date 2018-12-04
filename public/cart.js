var emptyCartButton = document.getElementById("empty-cart-button");
emptyCartButton.addEventListener("click", emptyCart);


function emptyCart() {
	var emptyRequest = new XMLHttpRequest();
	var requestURL = "/clear";
	emptyRequest.open('POST', requestURL);

	emptyRequest.send();

	location.reload();

	console.log("delete everything from the database");
}