var getHTML = require('../html-chunks-with-callbacks');

var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step6/lowercase.html'
};

// print_uppercase.js : Transforms the html string into ALL CAPS and prints it to the console.
function printLowerCase (html) {
    let lowerCaseHTML = html.toLowerCase();
    console.log(lowerCaseHTML);
};

// module.exports = function getHTML (options, callback) {}
getHTML(requestOptions, printLowerCase);