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
	var artistName = event.target.getAttribute("artist-name");
	var albumName = 
	var coverArt = 
	var price = 
	var background = 
	var url = 
	var id = 
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
		console.log("album-name: " + albums[i].getAttribute("album-name"));
		console.log("artist-name: " + albums[i].getAttribute("artist-name"));
		
		if(album && albums[i].getAttribute("album-name").toLowerCase().includes(album)) {
			console.log("album-name check");
			present = true;
		}
		if(artist && albums[i].getAttribute("artist-name").toLowerCase().includes(artist)) {
			console.log("artist-name check");
			present = true;
		}
		if(present == false) {
			console.log("------item " + i + "removed");
			albums[i].remove();
			i--;
		}

	}
}


