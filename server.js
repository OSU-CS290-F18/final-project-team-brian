var path = require('path');
var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var exphbs = require('express-handlebars');

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');


//index page - send albumdata
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

app.listen(port, function () {
  console.log("== Server is listening on port", port);
});