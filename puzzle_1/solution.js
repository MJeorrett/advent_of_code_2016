var dataParser = require('./data_parser');

var Solution = function() {

  this.xTotal = 0;
  this.yTotal = 0;
}

Solution.prototype = {

  model: {
    right: {
      turnRight: 'down',
      turnLeft: 'up',
      move: function( count ) { this.x += count }
    },
    left: {
      turnRight: 'up',
      turnLeft: 'down',
      move: function( count ) { this.x -= count }
    },
    up: {
      turnRight: 'right',
      turnLeft: 'left',
      move: function( count ) { this.y += count }
    },
    down: {
      turnRight: 'left',
      turnLeft: 'right',
      move: function( count ) { this.y -= count }
    }
  },

  solve: function( rawData ) {

    var data = dataParser.parseData( rawData );
    var current_direction
  }
}

module.exports = Solution;
