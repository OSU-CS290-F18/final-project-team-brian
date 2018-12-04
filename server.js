var path = require('path');
var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var exphbs = require('express-handlebars');

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

var mongoDataBase;

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');


//index page - send albumdata - mongo
app.get(['/', '/index.html'], function (req, res) {
	var data = require('./albums.json');
	res.status(200).render('index', {albums: data});
});


//cart page - mongo
app.get(['/cart', '/cart/index.html'], function (req, res) {
	
	res.status(200).render('cart');
});


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