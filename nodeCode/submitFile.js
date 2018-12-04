
$(document).ready(function(){
    
    function doSubmit(){
        // Form Data
        var formData = new FormData();
    
        var fileSelect = document.getElementById("fileSelect");
        if(fileSelect.files && fileSelect.files.length == 1){
         var file = fileSelect.files[0]
         formData.set("file", file , file.name);
        }
    
        var input1 = document.getElementById("input1");
        formData.set("input1", input1.value)
        // Http Request  
        var request = new XMLHttpRequest();
        request.open('POST', "http://localhost:8080/testMultipart");
        request.send(formData);
      };




    /*$('#myForm').on('submit', function(e) {
        e.preventDefault(); // <-- important
        $(this).ajaxSubmit({
            target: '#output',
            action: '/file_upload',
            method: 'POST'
        });
    });
    $('#submitForm').submit(function(data) {
        //debugger;
        event.preventDefault();
        
        
        var values = {};
        values['file'] = $('#submitForm :input').val() 
        
        //debugger;
        //$.post("/file_upload", values[0]);
        $.ajax({
            // Your server script to process the upload
            url: '/file_upload',
            type: 'POST',
    
            // Form data
            data: new FormData(values),
    
            // Tell jQuery not to process data or worry about content-type
            // You *must* include these options!
            cache: false,
            contentType: false,
            processData: false,
    
            xhr: function() {
                var myXhr = $.ajaxSettings.xhr();
                if (myXhr.upload) {
                    // For handling the progress of the upload
                    myXhr.upload.addEventListener('progress', function(e) {
                        if (e.lengthComputable) {
                            $('progress').attr({
                                value: e.loaded,
                                max: e.total,
                            });
                        }
                    } , false);
                }
                return myXhr;
            }
           
        });
    });*/
});