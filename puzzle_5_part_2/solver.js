var md5 = require('md5');

String.prototype.replaceAt=function(index, character) {
    return this.substr(0, index) + character + this.substr(index+character.length);
}

var solver = {
  getNextChar: function( key, startingInt ) {

    var first5Chars = "";
    var aHash = "";
    var aInt = startingInt;
    var charFound = false;
    var char6 = "";
    var number6 = null;

    while ( !charFound ) {

      aHash = md5( key + aInt.toString() );
      first5Chars = aHash.substr( 0, 5 );
      char6 = aHash.substr( 5, 1 );
      number6 = parseInt( char6 );

      if ( number6 != NaN && number6 < 8 && first5Chars === "00000" ) {
        charFound = true;

      } else {
        aInt++;
      }
    }

    return [ aInt, number6, aHash.substr( 6, 1 ) ];
  },

  solve: function( key ) {

    var aResult = null;
    var currentInt = 0;
    var result = "        ";

    for( var i = 0; result.replace( " ", "" ).length < 8; i++ ) {

      aResult = this.getNextChar( key, currentInt );
      currentInt = aResult[0] + 1;
      if ( result.substr( aResult[1], 1 ) === " " ) {
        result = result.replaceAt( aResult[1], aResult[2] );
      }
      console.log( result );
    }

    return result;
  }
}

module.exports = solver;
