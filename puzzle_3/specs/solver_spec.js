var assert = require('assert');

describe( "Solver", function() {

  it( "should return false from solveRow([5, 10, 25])", function() {

    assert.equal( false, solver.solveRow( [5, 10, 25] ) );
  });

  it( "should return false from solveRow([4, 10, 25])", function() {

    assert.equal( false, solver.solveRow( [4, 10, 25] ) );
  });

  it( "should return true from solveRow([6, 10, 25])", function() {

    assert.equal( true, solver.solveRow( [6, 10, 25] ) );
  });

});
