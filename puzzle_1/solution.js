var DataParser = require('./data_parser');

var Solution = function() {

  this.xTotal = 0;
  this.yTotal = 0;

  var self = this;

  this.moveX = function( count ) { this.xTotal += count };
  this.moveY = function( count ) { this.yTotal += count };

  this.right = {
    turnRight: 'down',
    turnLeft: 'up',
    move: function( count ) { self.moveX( count ) }
  };

  this.left = {
    turnRight: 'up',
    turnLeft: 'down',
    move: function( count ) { self.moveX( -count ) }
  };

  this.up = {
    turnRight: 'right',
    turnLeft: 'left',
    move: function( count ) { self.moveY( count ) }
  };

  this.down = {
    turnRight: 'left',
    turnLeft: 'right',
    move: function( count ) { self.moveY( -count ) }
  };
}

Solution.prototype = {

  solve: function( rawData ) {

    var dataParser = new DataParser();
    var data = dataParser.parseData( rawData );
    var currentDirection = 'up';
    var nextMovement = dataParser.next();

    while ( nextMovement != undefined ) {

      var nextDirection = nextMovement[0];
      var nextCount = nextMovement[1];

      currentDirection = this[currentDirection][nextDirection];      this[currentDirection].move( nextCount );
      nextMovement = dataParser.next();
    }
  }
}

module.exports = Solution;
