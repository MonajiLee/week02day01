var https = require('https');

function getHTML (options, callback) {

    /* Add your code here */
    https.get(options, function(response){
        
        response.setEncoding('utf8');
        
        response.on('data', function(data){
            let datavar = data;
            callback(datavar);
        });
    
        response.on('end', function(){
            console.log('Response stream complete.')
        })
    });
  }
  
  // callback function
  var printer = function printHTML (html) {
    console.log(html);
  }
  
  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step4.html'
  };

getHTML(requestOptions, printer);