var Solution = function() {

  this.xTotal = 0;
  this.yTotal = 0;

  this.model = {
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
  }
}

module.exports = Solution;
