window.onload = function(){
        //debugger;
        $.get("/file_list", function(data, status){
            //debugger;
            var parsed = JSON.parse(data)
            for (all of parsed){
                //debugger;
                $('.showFiles').append('<div class = \'icon\'>' +  '<img src = css/img/file.png id = \'filePic\'><br>' +all.name + '<br><br> <button class = "download" onclick = \'dnl("' + all.name + '")\'>Download</button></div>');
            }
    });
};