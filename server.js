var express = require('express');
var fs = require('fs');

var app = express();
app.use(express.bodyParser());

app.configure(function() {
	console.log('Publishing static content directory: ' + __dirname + '/static');
	app.use(express.static(__dirname + '/static'));
});

app.post('/share', function(req,res){
	console.log('Writing to shared file');
	fs.writeFile("./static/savedUrl.html", req.body.url, function(err) {
		if(err) {
			console.log(err);
		} else {
			console.log("The file was saved!");
		}
	});		
	console.log(req.body.url);	
	res.send(1);
});

app.listen(1337);
console.log('Listening on port 1337');