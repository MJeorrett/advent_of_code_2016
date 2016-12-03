var assert = require('assert');
var Solver = require('../solver');

describe( "Solver", function() {

  it( "should return answer '1985' to example problem 1", function() {

    var input = "ULL\nRRDDD\nLURDL\nUUUUD";
    var solver = new Solver();
    var actual = solver.solve( input );
    assert.equal( 1985, actual );
  });

});
