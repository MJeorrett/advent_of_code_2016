var loadFile = require('../general/file_loader');
var solver = require('./solver');

var rawData = loadFile( "input.txt" );
var answer = solver.solve( rawData );

console.log( "The anser is", answer );
