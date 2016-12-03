var loadFile = require('../general/file_loader');
var Solver = require('./solver');

var dataString = loadFile( "input.txt" );
var solver = new Solver();
var answer = solver.solve( dataString );

console.log( "The answer is:", answer );
