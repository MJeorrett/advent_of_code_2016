var dataParser = require('./data_parser');

var solver = {

  solve: function( dataString ) {

    var x = 0;
    var y = 0;
    var visitedPoints = {};
    var data = dataParser.parseNormalised( dataString );

    function checkOverlap() {

      if visitedPoints.hasOwnProperty( [x, y] ) {
        return true;
      }
      else {
        visitedPoints[[x, y]] = true;
      }
    }

    function moveX( distance ) {

      for ( var i = 0; i < distance )
    }

    data.forEach( function( item ) {}

      var direction = item[0];
      var distance = item[1];

      switch ( direction ) {
        case 'U':

          break;
        default:

      }

    }.bind( this ) );
  }
};

module.exports = solver;
