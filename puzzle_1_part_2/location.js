var Location = function() {

  this.x = 0;
  this.y = 0;
};

Location.prototype = {
  moveX: function( distance ) {
    this.x += distance;
  },
  moveY: function( distance ) {
    this.y += distance;
  }
};

module.exports = Location;
