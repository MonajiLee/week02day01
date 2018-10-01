var https = require('https');

var getHTML = require('./html-chunks-with-callbacks');

var printer = function printHTML (html) {
    console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};

getHTML(requestOptions, printer);