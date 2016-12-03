var assert = require('assert');
var Solution = require('../solution');

describe( "Solution", function() {

  var emptySolution = null;
  var solution1 = null;
  var solution2 = null;
  var solution3 = null;

  beforeEach( function() {
    emptySolution = new Solution();
    solution1 = new Solution();
    solution2 = new Solution();
    solution3 = new Solution();

    var problem1 = "R2, L3";
    var problem2 = "R2, R2, R2";
    var problem3 = "R5, L5, R5, R3";

    solution1.solve( problem1 );
    solution2.solve( problem2 );
    solution3.solve( problem3 );
  });

  it( "Should have xTotal starting at 0", function() {
    assert.equal( 0, emptySolution.xTotal() );
  });

  it( "Should have yTotal starting at 0", function() {
    assert.equal( 0, emptySolution.yTotal() );
  });

  it( "Should have correct x and y after example problem 1", function() {

    assert.equal( 2, solution1.xTotal() );
    assert.equal( 3, solution1.yTotal() );
  });

  it( "Should have correct x and y after example problem 2", function() {

    assert.equal( 0, solution2.xTotal() );
    assert.equal( -2, solution2.yTotal() );
  });

  it( "Should have correct x and y after example problem 3", function() {

    assert.equal( 10, solution3.xTotal() );
    assert.equal( 2, solution3.yTotal() );
  });

  it( "Should ")

});
