var assert = require('assert');
var solver = require('../solver');

describe( "Solver", function() {
  it( "should solve example problem", function() {

    assert.equal( 4, solver.solve( "R8, R4, R4, R8" ) );
  });
});
