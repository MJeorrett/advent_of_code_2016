var letterShifter = require('./letter_shifter');

var stringShifter = function( inputString, count ) {

  var lettersArray = inputString.split( "" );
  var shiftedString = "";

  for ( var aLetter of lettersArray ) {

    if ( aLetter === "-" ) {
      shiftedString += "-";
    }
    else {
      shiftedString += letterShifter( aLetter, count );
    }
  }

  return shiftedString;
};

module.exports = stringShifter;
