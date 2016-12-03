var Point = function() {

  this.x = 0;
  this.y = 0;
};

Point.prototype = {
  moveX: function( distance ) {
    this.x += distance;
  },
  moveY: function( distance ) {
    this.y += distance;
  }
};

module.exports = Point;
