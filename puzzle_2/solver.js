var DataParser = require('./data_parser');

var Solver = function() {};

Solver.prototype = {

  keypad: [
    [1, 2 ,3],
    [4, 5, 6],
    [7, 8, 9]
  ],

  rowAndColumnOfNumber: function( number ) {

    var row = -1;
    var column = -1;

    while ( column === -1 ) {

      row++;
      var aRow = this.keypad[row];
      var column = aRow.indexOf( number );
    }

    return [ row , column ];
  }
};

Solver.prototype.solve = function ( dataString ) {

  var dataParser = new DataParser;
  var dataArray = dataParser.parse( dataString );


};

module.exports = Solver;
