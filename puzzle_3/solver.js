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
      if ( this.solveRow( dataRow ) ) {
        count++;
      }

      return count;
    }.bind( this ), 0 );

    return answer;
  }
};

module.exports = solver;
