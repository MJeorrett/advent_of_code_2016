var data = require('./file_loader');
var Solution = require('./solution');

var solution = new Solution();
solution.solve( data );

console.log( "The answer is: ", solution.answer );
