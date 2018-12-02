var express = require ("express")
var app = express();
var http = require('http');

var readFiles = function(){
    var path = require ("path");
    var fs = require("fs");
    var directoryPath = path.join(__dirname, 'data');
    var jsn = {};
    fs.readdir(directoryPath, function(err, files) {
        files.forEach(function (file) {
            // Do whatever you want to do with the file
            jsn['name'] = file;

        });
    });
    return jsn;
};

var server = app.listen(8080, function () {
    var host = server.address().address
    var port = server.address().port
  
    console.log("Example app listening at http://%s:%s", host, port)
})


