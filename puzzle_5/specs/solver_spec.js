var assert = require('assert');
var solver = require('../solver');

describe( "Solver", function() {

  it( "should return correct result for example 1", function() {
    var expected = [ 3231929, '1' ];
    assert.equal( expected, solver.getNextChar( 'abc', 0 ) );
  });

  it( "should return correct result for example 2", function() {
    var expected = [ 5017308, '8' ];
    assert.equal( expected, solver.getNextChar( 'abc', 3231930 ) );
  });

  it( "should return correct result for example 3", function() {
    var expected = [ 5278568, 'f' ];
    assert.equal( expected, solver.getNextChar( 'abc', 5017309 ) );
  });

});
