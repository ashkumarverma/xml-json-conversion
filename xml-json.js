var fs = require('fs');
var xml2js = require('xml2js');

var parser = new xml2js.Parser();
fs.readFile(__dirname + '/sample.xml', function(err, data) {
    parser.parseString(data, function (err, result) {
        console.dir(JSON.stringify(result));
        console.log('Done');
    });
});