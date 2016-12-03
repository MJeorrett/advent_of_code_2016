var assert = require('assert');
var Solver = require('../solver');

describe( "Solver", function() {

  var solver = null;

  beforeEach( function() {

    solver = new Solver();
  });

  it ( "should return [0, 0] from rowAndColumnOfNumber( 1 )", function() {
    assert.deepEqual( [0, 0], solver.rowAndColumnOfNumber( 1 ) );
  });

  it ( "should return [0, 2] from rowAndColumnOfNumber( 3 )", function() {
    assert.deepEqual( [0, 2], solver.rowAndColumnOfNumber( 3 ) );
  });

  it ( "should return [1, 1] from rowAndColumnOfNumber( 5 )", function() {
    assert.deepEqual( [1, 1], solver.rowAndColumnOfNumber( 5 ) );
  });

  it ( "should return [2, 1] from rowAndColumnOfNumber( 8 )", function() {
    assert.deepEqual( [2, 1], solver.rowAndColumnOfNumber( 8 ) );
  });

  // it( "should return answer '1985' to example problem 1", function() {
  //
  //   var input = "ULL\nRRDDD\nLURDL\nUUUUD";
  //   var solver = new Solver();
  //   var actual = solver.solve( input );
  //   assert.equal( 1985, actual );
  // });

});
