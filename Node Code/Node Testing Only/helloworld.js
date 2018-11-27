var http = require('http');
var url = require('url');
var dt = require('./myFirstModule');
var fs= require('fs');
var uc = require('upper-case');
var events = require('events');
var eventEmitter = new events.EventEmitter();
var formidable  = require('formidable');
var nodemailer = require ('nodemailer');

/*  Reading a File and outputting it
http.createServer(function (req, res){
    fs.readFile('test.html', function(err, data){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
    });

}).listen(8080);
*/



/*      Append a value at the end of a file
fs.appendFile('mynewfile.txt', 'Here\'s some text', function(err){
    if(err) throw err;
    console.log('Saved!!');
});*/



/*  Rename a File
fs.rename('mynewfile.txt','oralePerro.txt', function(err){
    if (err) throw err;
    console.log('File Renamed');
});*/



/*
var adr = 'http://localhost:8080/default.htm?year=2017&month=february';
var q = url.parse(adr, true);

console.log(q.host);
console.log(q.pathname);
console.log(q.search)

var qdata = q.query
console.log(qdata.year);
*/


/*
http.createServer(function(req, res){
    var q = url.parse(req.url, true);
    var filename = '.' + q.pathname;
    fs.readFile(filename, function (err, data){
        if(err){
            res.writeHead(404, {'Content-Type': 'text/html'});
            return res.end('404 NOT FOUND');
        }
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    });
}).listen(8080);
*/



/*
http.createServer(function (req, res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(uc('Hello World'));
    res.end();
}).listen(8080);
*/


/*  Opening a File
var rs = fs.createReadStream('./summer.html');
rs.on('open', function(){
    console.log('The file is open');
});*/

/*    Event Handeler
var eventHandeler = function(){
    console.log('I am not okay');
}
eventEmitter.on('not', eventHandeler);

eventEmitter.emit('not');*/

http.createServer(function(req, res){

    if(req.url == '/fileupload'){
        var form = new formidable.IncomingForm();
        form.parse(req, function (err, fields, files){
            var oldpath = files.filetoupload.path;
            var newpath = 'C:\\Users\\diego.vanegaszuniga' + files.filetoupload.name;
            fs.rename(oldpath, newpath, function(err){
                if (err) throw err;
                res.write('File Uploaded and moved!');
                res.end();
            });
        });
    }
    else{
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<form action="fileupload" method = "post enctype = "multipart/form-data">');
        res.write('<input type = "file" name="filetoupload"><br>');
        res.write('<input type = "submit">');
        res.write('</form>');
        return res.end();
    }
    
}).listen(8080);



