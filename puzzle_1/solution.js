var DataParser = require('./data_parser');
var Location = require('./location');

var Solution = function() {

  this.location = new Location();
}

Solution.prototype = {

  xTotal: function() {
    return this.location.x;
  },

  yTotal: function() {
    return this.location.y;
  },

  right: {
    turnRight: 'down',
    turnLeft: 'up',
    move: function( count, location ) { location.moveX( count ) }
  },

  left: {
    turnRight: 'up',
    turnLeft: 'down',
    move: function( count, location ) { location.moveX( -count ) }
  },

  up: {
    turnRight: 'right',
    turnLeft: 'left',
    move: function( count, location ) { location.moveY( count ) }
  },

  down: {
    turnRight: 'left',
    turnLeft: 'right',
    move: function( count, location ) { location.moveY( -count ) }
  },

  solve: function( rawData ) {

    var dataParser = new DataParser();
    var data = dataParser.parseData( rawData );
    var currentDirection = 'up';
    var nextMovement = dataParser.next();

    while ( nextMovement != undefined ) {

      var nextDirection = nextMovement[0];
      var nextCount = nextMovement[1];

      currentDirection = this[currentDirection][nextDirection];
      var moveFunction = this[currentDirection].move;
      moveFunction( nextCount, this.location );
      nextMovement = dataParser.next();
    }
  }
}

module.exports = Solution;
