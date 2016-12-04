var dataParser = require('./data_parser');

var solver = {

  getLetterCounts: function( letters ) {
    var lettersArr = letters.split( "" );
    var letterCounts = {};

    for ( var aLetter of lettersArr ) {
      if ( letterCounts.hasOwnProperty( aLetter ) ) {
        letterCounts[ aLetter ] += 1;
      }
      else {
        letterCounts[ aLetter ] = 1;
      }
    }

    return letterCounts;
  },

  getChecksum: function( letterCounts ) {

    var letterCountsArray = [];

    for ( var letter in letterCounts) {
      var count = letterCounts[ letter ];
      letterCountsArray.push( [ count, letter ] );
    }

    letterCounts = letterCountsArray.sort( function( letterCount1, letterCount2 ) {
      var count1 = letterCount1[0];
      var count2 = letterCount2[0];

      if ( count1 > count2 ) return -1;
      if ( count2 > count1 ) return 1;

      var letter1 = letterCount1[1];
      var letter2 = letterCount2[1];

      if ( letter1 < letter2 ) return -1;
      if ( letter2 < letter1 ) return 1;

      return 0;
    });

    var result = "";

    for ( var i = 0; i < 5; i++ ) {
      var letterCount = letterCountsArray[i];
      var letter = letterCount[1];
      result += letter;
    }

    return result;
  },

  solve: function( data ) {
    var dataLines = data.split( "\n" );
    var sectorIdTotal = 0;

    for ( var dataLine of dataLines ) {
      var parsedLine = dataParser.parseLine( dataLine );
      var letterCounts = this.getLetterCounts( parsedLine.letters );
      var correctChecksum = this.getChecksum( letterCounts );
      if ( parsedLine.checksum === correctChecksum ) {
        sectorIdTotal += parsedLine.sectorId;
      }
    }

    return sectorIdTotal;
  }
};

module.exports = solver;
