var dataParser = require('./data_parser');

var solver = {

  solveRow: function( data ) {

    if ( data[0] + data[1] > data[2] ) {
      return true;
    }

    return false;
  },

  solve: function( dataString ) {

    var data = dataParser( dataString );
    var answer = data.reduce( function( count, dataRow ) {

      var permutation1 = dataRow;
      var permutation2 = [ dataRow[1], dataRow[2], dataRow[0] ];
      var permutation3 = [ dataRow[2], dataRow[0], dataRow[1] ];

      var perm1True = this.solveRow( permutation1 );
      var perm2True = this.solveRow( permutation2 );
      var perm3True = this.solveRow( permutation3 );


      if ( perm1True && perm2True && perm3True ) {
        count++;
      }

      return count;
    }.bind( this ), 0 );

    return answer;
  }
};

module.exports = solver;
