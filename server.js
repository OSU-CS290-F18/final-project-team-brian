var path = require('path');
var express = require('express');
var app = express();
var port = process.env.PORT || 4247;
var exphbs = require('express-handlebars');
var bodyParser = require('body-parser');

var MongoClient = require('mongodb').MongoClient;
var whatever;

//var mongoHost = "localhost"
//var mongoPort = 27017;
//var mongoUser = "user";
//var mongoPassword = "290Final*";
var mongoDBName = "cart";

//console.log("mongoHost: " + mongoHost);
//console.log("mongoPort: " + mongoPort);
//console.log("mongoDBName: " + mongoDBName);

var mongoURL = "mongodb://user:290Final*@cluster0-shard-00-00-iwk6u.mongodb.net:27017,cluster0-shard-00-01-iwk6u.mongodb.net:27017,cluster0-shard-00-02-iwk6u.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true"

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use(bodyParser.json());


//index page - send albumdata
app.get(['/', '/index.html'], function (req, res) {
	var data = require('./albums.json');
	res.status(200).render('index', {albums: data});
});


//cart page - mongo
app.get(['/cart', '/cart/index.html'], function (req, res) {
	var albumCollection = whatever.collection('albums');
	albumCollection.find({}).toArray(function (err, albums){
		if(err){
			res.status(500).send("error connecting to db");
		}
		res.status(200).render('cart', {albums: albums})
	});
	//console.log(data.body, 'cart');
});

app.post(['/index/addToCart'], function(req, res, next){
	console.log(req.body, "buying");
	var albumCollection = whatever.collection('albums');
	albumCollection.insertOne({
		"artist-name": req.body.artistname,
		"album-name": req.body.albumname,
		"cover-art": req.body.coverart,
		"price": req.body.price,
		"background": req.body.background,
		"url": req.body.url,
		"id": req.body.id
	});
	res.status(200).render('cart');
});

app.post(['/clear'], function(req, res, next){
	var albumCollection = whatever.collection('albums');
	albumCollection.remove({});
	res.status(200).render('cart');
})


app.use(express.static('public'));

app.get('*', function (req, res) {
	res.status(404).render('404');
});

MongoClient.connect(mongoURL, function (err, client) {
	if (err) {
		throw err;
	}
	
	whatever = client.db(mongoDBName);
	app.listen(port, function () {
		console.log("== Server listening on port", port);
	});
});