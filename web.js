#!/usr/bin/env node

var express = require('express');                                                        
var app = express();                                                                     
var fs = require('fs');                                                                  
                     
var getResponse = function() {
    var result;
    var readBuffer = Buffer( fs.readFileSync('index.html') );

    result = readBuffer.toString('utf-8');

    return result;
};

app.use(express.logger());

app.get('/', function(request, response) {
  response.send( getResponse() );
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
