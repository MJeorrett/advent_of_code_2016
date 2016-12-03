var loadFile = require('../general/file_loader');
var solver = require('./solver');

var dataString = loadFile( "input.txt" );
var answer = solver.solve( dataString );

console.log( "The answer is:", answer );
