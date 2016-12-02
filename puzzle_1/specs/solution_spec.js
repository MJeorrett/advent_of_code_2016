var assert = require('assert');
var Solution = require('../solution');

describe( "Solution", function() {

  var solution = null;

  beforeEach( function() {
    solution = new Solution();
  });

  it( "Should have xTotal starting at 0", function() {
    assert.equal( 0, solution.xTotal );
  });

  it( "Should have yTotal starting at 0", function() {
    assert.equal( 0, solution.yTotal );
  });

  // it( "Should have correct x and y after example problem 1", function() {
  //   var input = "R2, L3";
  //   var result = solution.solve( input );
  //   assert.equal( 2, solution.xTotal );
  //   assert.equal( 3, solution.yTotal );
  // });
  //
  // it( "Should have correct x and y after example problem 2", function() {
  //   var input = "R2, R2, R2";
  //   var result = solution.solve( input );
  //   assert.equal( 0, solution.xTotal );
  //   assert.equal( -2, solution.yTotal );
  // });
  //
  // it( "Should have correct x and y after example problem 2", function() {
  //   var input = "R5, L5, R5, R3";
  //   var result = solution.solve( input );
  //   assert.equal( 10, solution.xTotal );
  //   assert.equal( 2, solution.yTotal );
  // });

});
