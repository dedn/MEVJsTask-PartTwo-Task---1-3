var exec = require("child_process").exec;
var fs = require('fs');


function start(response, postData) {
    console.log("Request handler 'start' was called.");

    var body = '<html>'+
        '<head>'+
        '<meta http--=equiv="Content-Type" content="text/html; '+
        'charset=UTF-8" />'+
        '</head>'+
        '<body>'+
        '</form>'+
        '<script>' +  'function getProducts() {' +
        ' var xhr = new XMLHttpRequest();'+
        ' xhr.open(\'GET\', \'/test\', false);'+
        ' xhr.send();'+
        ' if (xhr.status != 200) {'+
        '    alert(xhr.status + ": " + xhr.statusText);'+
        '} else {'+
        '    alert(xhr.responseText);'+
        '}'+
        '}'+
        'getProducts();'+
        '</script>'+
        '</body>'+
        '</html>';

    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(body);
    response.end();
}

function upload(response, postData) {
    console.log("Request handler 'upload' was called.");
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("You've sent: " + postData);
    response.end();
}

function test(response, postData) {
    console.log("Request handler 'test' was called.");
    response.writeHead(200, {"Content-Type": "text/plain"});

    var contents = fs.readFileSync('test.json').toString();
    response.write(contents);
    response.end();
}



exports.start = start;
exports.upload = upload;
exports.test = test;






