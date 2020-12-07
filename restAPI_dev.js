// JavaScript Document

var express = require("express");
var app = express();
var PORT = process.env.PORT||POST;

var api_routes = require('./api_routes_dev.js');
app.use('/api', api_routes);

app.use('/demo',express.static('front_end'));

app.listen(PORT, function(){
			console.log("Server is running");
			//console.log(course)
		   })
