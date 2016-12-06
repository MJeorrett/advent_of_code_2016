var solver = {
  mostCommon: function( letters ) {
    var lettersArray = letters.split( "" );
    var letterCounts = {};

    lettersArray.forEach( function( letter ) {
      if ( letterCounts.hasOwnProperty( letter ) ) {
        letterCounts[letter]++;
      }
      else {
        letterCounts[letter] = 1;
      }
    });

    var biggestCount = 0;
    var mostCommon = "";
    var count = null;

    for ( var letter in letterCounts ) {
      if ( letterCounts.hasOwnProperty( letter ) ) {

        count = letterCounts[letter];
        if ( count > biggestCount ) {
          mostCommon = letter;
          biggestCount = count;
        }
      }
    }

    return mostCommon;
  }
};

module.exports = solver;
