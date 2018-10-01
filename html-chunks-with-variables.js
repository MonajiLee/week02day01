var https = require('https');

function getAndPrintHTML () {

    var requestOptions = {
      host: 'sytantris.github.io',
      path: '/http-examples/step2.html'
    };

    let datavar = "";
    https.get(requestOptions, function(response){
        
        response.setEncoding('utf8');
        
        response.on('data', function(data){
            datavar += data;
        });
    
        response.on('end', function(){
            console.log(datavar);
            console.log('Response stream complete.')
        })
    });
}

getAndPrintHTML();