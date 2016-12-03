var assert = require('assert');
var Location = require('../location');

describe( "Location", function() {

  var myLocation = null;

  beforeEach( function() {

    myLocation = new Location();
  });

  it( "should start with x = 0", function() {

    assert.equal( 0, myLocation.x );
  });

  it( "should start with x = 0", function() {

    assert.equal( 0, myLocation.x );
  });

  it( "should increase x by positive value passed to moveX()", function() {
    myLocation.moveX( 4 );
    assert( 4, myLocation.x );
  });

  it( "should increase y by positive value passed to moveY()", function() {
    myLocation.moveY( 16 );
    assert( 16, myLocation.y );
  });

  it( "should decrease x by negative value passed to moveX()", function() {
    myLocation.moveX( -5 );
    assert( -5, myLocation.x );
  });

  it( "should decrease y by negative value passed to moveY()", function() {
    myLocation.moveY( -32 );
    assert( -32, myLocation.y );
  });

});
