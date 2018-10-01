var getHTML = require('../html-chunks-with-callbacks');

var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step6/reverse.html'
};

function printReverse (html) {
    let reverseHTML = html.split().reverse().join();
    console.log(reverseHTML);
};

// module.exports = function getHTML (options, callback) {}
getHTML(requestOptions, printReverse);