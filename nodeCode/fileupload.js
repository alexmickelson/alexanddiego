var express = require('express');
var app = express();
var fs = require("fs");
var path = require ("path")
var bodyParser = require('body-parser');
var multer = require('multer');


app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({ extended: false }));
var upload = multer({ dest: '/tmp' })

app.get('/fileupload.html', function (req, res) {
   res.sendFile( __dirname + "/" + "fileupload.html" );
})

app.get('/aboutUs.html', function (req, res) {
     res.sendFile( __dirname + "/" + "aboutUs.html" );
  })

app.post('/file_upload', upload.single("file"), function (req, res) {
   var file = __dirname + "/data/" + req.file.originalname;
   fs.readFile( req.file.path, function (err, data) {
        fs.writeFile(file, data, function (err) {
         if( err ){
              console.error( err );
              response = {
                   message: 'Sorry, file couldn\'t be uploaded.',
                   filename: req.file.originalname
              };
         }else{
               response = {
                   message: 'File uploaded successfully',
                   filename: req.file.originalname
              };
          }
          res.end( JSON.stringify( response ) );
       });
   });
})
/*
var readFiles = function(){
     var path = require ("path");
     var fs = require("fs");
     var directoryPath = path.join(__dirname, 'data');
     var jsn = {};
     fs.readdir(directoryPath, function(err, files) {
         files.forEach(function (file) {
             // Do whatever you want to do with the file
             jsn['name'] = file;
               console.log(jsn);
         });
     });
     return jsn;
 }();


app.get('/file_list', function(req, res){
     res.end(JSON.stringify( readFiles));
});
*/

var server = app.listen(8081, function () {
  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)
})
