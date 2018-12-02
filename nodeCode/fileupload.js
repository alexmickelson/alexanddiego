var express = require('express');
var app = express();
var fs = require("fs");

var bodyParser = require('body-parser');
var multer = require('multer');
app.use(express.static(__dirname + '/css'));
//app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
var upload = multer({ dest: '/tmp' })

app.get('/fileupload.html', function (req, res) {
   res.sendFile( __dirname + "/" + "fileupload.html" );
})

app.post('/file_upload', upload.single("file"), function (req, res) {
   var file = __dirname + "/img/" + req.file.originalname;
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

var server = app.listen(8081, function () {
  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)
})
