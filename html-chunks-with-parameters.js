var https = require('https');

function getAndPrintHTML (options) {
    /* Add your code here */
    
    let datavar = "";
    https.get(options, function(response){
        
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

var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step3.html'
};
  

getAndPrintHTML(requestOptions);