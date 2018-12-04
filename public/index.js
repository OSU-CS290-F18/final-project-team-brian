console.log("this is working");

//var addButton = document.getElementById("add-button");
//addButton.addEventListener("click", addToCart);

var addButtons = document.getElementsByClassName("add-button");

var searchButton = document.getElementById("filter-search-button");
searchButton.addEventListener("click", search);

for(i = 0; i < addButtons.length; i++) {
	addButtons[i].addEventListener("click", addToCart);
}

function addToCart(event) {
	console.log(event.target.getAttribute("album-id"));
	console.log("add to cart");
}

function search() {
	var albums = document.getElementsByClassName("card");
	var artist = document.getElementById("filter-artist-name").value.toLowerCase();
	var album = document.getElementById("filter-album-name").value.toLowerCase();
	
	console.log("--search function");
	console.log("	--artist: " + artist);
	console.log("	--album: " + album);
	
	for(i = 0; i < albums.length; i++) {
		present = false;
		console.log("--Checking albums[" + i + "]");
		console.log(albums[i]);
		if(albums[i].getAttribute("album-name").toLowerCase() == album) {
			present = true;
		}
		if(albums[i].getAttribute("artist-name").toLowerCase() == artist) {
			present = true;
		}
		if(present == false) {
			albums[i].remove();
			i--;
		}
	}
}


