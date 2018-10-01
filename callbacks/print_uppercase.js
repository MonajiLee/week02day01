var getHTML = require('../html-chunks-with-callbacks');

var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step5.html'
};

// print_uppercase.js : Transforms the html string into ALL CAPS and prints it to the console.
function printUpperCase (html) {
    let upperCaseHTML = html.toUpperCase();
    console.log(upperCaseHTML);
};

// module.exports = function getHTML (options, callback) {}
getHTML(requestOptions, printUpperCase);