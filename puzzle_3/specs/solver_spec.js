var assert = require('assert');
var solver = require('../solver');

describe( "Solver", function() {

  it( "should return false from solveRow([5, 10, 25])", function() {

    assert.equal( false, solver.solveRow( [5, 20, 25] ) );
  });

  it( "should return false from solveRow([4, 10, 25])", function() {

    assert.equal( false, solver.solveRow( [4, 20, 25] ) );
  });

  it( "should return true from solveRow([6, 10, 25])", function() {

    assert.equal( true, solver.solveRow( [6, 20, 25] ) );
  });

  it( "should solve example 1", function() {
    var input = "123  45  6";
    input +=  "\n11  222  333";
    assert.equal( 1, solver.solve( input ) );
  });

});
