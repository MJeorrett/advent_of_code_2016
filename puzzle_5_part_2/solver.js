var md5 = require('md5');

var solver = {
  getNextChar: function( key, startingInt ) {

    var first5Chars = "";
    var aHash = "";
    var aInt = startingInt;

    while ( first5Chars !== "00000" && aInt < 100000000 ) {

      aHash = md5( key + aInt.toString() );
      first5Chars = aHash.substr( 0, 5 );
      aInt++;
    }
console.log('hash:', aHash );
    return [ aInt - 1, aHash.substr( 5, 1 ) ];
  },

  solve: function( key ) {

    var aResult = null;
    var currentInt = 0;
    var result = "";

    for( var i = 0; i < 8; i++ ) {

      aResult = this.getNextChar( key, currentInt );
      currentInt = aResult[0] + 1;
      result += aResult[1];
    }

    return result;
  }
}

module.exports = solver;
