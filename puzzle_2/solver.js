var DataParser = require('./data_parser');

var Solver = function() {};

Solver.prototype = {

  keypad: [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ],

  solve: function ( dataString ) {

    var dataParser = new DataParser;
    var clues = dataParser.parse( dataString );
    var answer = "";
    var currentPosition = 5;

    for( var aClue of clues ) {

      aClue.forEach( function( direction ) {

        currentPosition = this.moveDirectionFrom( direction, currentPosition );
      }.bind( this ) );
      answer += currentPosition.toString();
    }

    return answer;

  },

  moveDirectionFrom: function( direction, startNumber ) {

    var result = startNumber;
    var topRow = 0;
    var bottomRow = 2;
    var rightColumn = 2;
    var leftColumn = 0;

    switch ( direction ) {
      case 'U':
        if ( this.rowOfNumber( startNumber ) > topRow ) { result -= 3 }
        break;

      case 'D':
        if ( this.rowOfNumber( startNumber ) < bottomRow ) { result += 3 }
        break;

      case 'L':
        if ( this.columnOfNumber( startNumber ) > leftColumn ) { result -= 1 }
        break;

      case 'R':
        if ( this.columnOfNumber( startNumber ) < rightColumn ) { result += 1 }
        break;
    }

    return result;
  },

  numberRowsAndColumns: {
    '1': {
      row: 0,
      column: 0
    },
    '2': {
      row: 0,
      column: 1
    },
    '3': {
      row: 0,
      column: 2
    },
    '4': {
      row: 1,
      column: 0
    },
    '5': {
      row: 1,
      column: 1
    },
    '6': {
      row: 1,
      column: 2
    },
    '7': {
      row: 2,
      column: 0
    },
    '8': {
      row: 2,
      column: 1
    },
    '9': {
      row: 2,
      column: 2
    },
  },

  rowOfNumber: function( number ) {

    return this.numberRowsAndColumns[ number.toString() ].row;
  },

  columnOfNumber: function( number ) {

    return this.numberRowsAndColumns[ number.toString() ].column;
  }
};

module.exports = Solver;
