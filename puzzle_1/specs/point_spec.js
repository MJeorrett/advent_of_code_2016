var assert = require('assert');
var Point = require('../point');

describe( "Point", function() {

  var myPoint = null;

  beforeEach( function() {

    myPoint = new Point();
  });

  it( "should start with x = 0", function() {

    assert.equal( 0, myPoint.x );
  });

  it( "should start with x = 0", function() {

    assert.equal( 0, myPoint.x );
  });

  it( "should increase x by positive value passed to moveX()", function() {
    myPoint.moveX( 4 );
    assert( 4, myPoint.x );
  });

  it( "should increase y by positive value passed to moveY()", function() {
    myPoint.moveY( 16 );
    assert( 16, myPoint.y );
  });

  it( "should decrease x by negative value passed to moveX()", function() {
    myPoint.moveX( -5 );
    assert( -5, myPoint.x );
  });

  it( "should decrease y by negative value passed to moveY()", function() {
    myPoint.moveY( -32 );
    assert( -32, myPoint.y );
  });

});
