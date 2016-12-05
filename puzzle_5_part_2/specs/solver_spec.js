var assert = require('assert');
var solver = require('../solver');

describe( "Solver", function() {

  it( "should return correct result for example 1", function() {
    var expected = [ 3231929, 1, '5' ];
    assert.equal( expected, solver.getNextChar( 'abc', 0 ) );
  });

  it( "should return correct result for example 2", function() {
    var expected = [ 5357525, 4, 'e' ];
    assert.equal( expected, solver.getNextChar( 'abc', 3231930 ) );
  });

});
