var express = require('express');

var app = express.createServer(express.logger());

var text = "";
var infile = "index.html";
text = fs.readFileSync(infile);
app.get('/', function(request, response) {
  response.send(text);
}
 port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
