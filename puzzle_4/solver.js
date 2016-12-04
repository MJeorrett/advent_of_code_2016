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
  }
};

module.exports = solver;
