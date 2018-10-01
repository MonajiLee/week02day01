var https = require('https');
var request = require('request');
var fs = require('fs');

// Create a new .js file and using request, make a 'GET' request to 
// 'https://sytantris.github.io/http-examples/future.jpg' using chaining.

request.get('https://sytantris.github.io/http-examples/future.jpg')
       .on('error', function(err) {
            throw err;
        })
       
       .on('response', function(response) {
            console.log('Downloading image...')
            console.log(response.statusCode, response.statusMessage, response.headers['content-type'])
        })

       .on('end', function() {
            console.log('Download complete.');
        })

       .pipe(fs.createWriteStream('./future.jpg'));

// The chain should:
// Use .on('error') to handle any errors
// Use .on('response') to log the HTTPS response code, response message (response.statusMessage) 
//    and content type (response.headers['content-type'])
// Use piping and fs.createWriteStream to save the file to your working directory 
// ('./future.jpg')