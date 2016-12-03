var fs = require('fs');

var buffer = fs.readFileSync( "puzzle.txt" );
var data = buffer.toString();

module.exports = data;
