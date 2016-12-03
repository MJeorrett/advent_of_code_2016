var assert = require('assert');
var solver = require('../solver');

describe( "Solver", function() {

  it( "should return false from solveRow([5, 20, 25])", function() {

    assert.equal( false, solver.solveRow( [5, 20, 25] ) );
  });

  it( "should return false from solveRow([4, 20, 25])", function() {

    assert.equal( false, solver.solveRow( [4, 20, 25] ) );
  });

  it( "should return true from solveRow([6, 20, 25])", function() {

    assert.equal( true, solver.solveRow( [6, 20, 25] ) );
  });

  it( "should solve test 1", function() {
    var input = "123  120  6";
    input +=  "\n11  222  333";
    assert.equal( 1, solver.solve( input ) );
  });

  it( "should solve test 2", function() {
    var input = "481  880  626" //true
    input += "\n155  951  361" //false
    input += "\n365  273  946" //false
    input += "\n555  163   93" //false
    input += "\n163   11  515" //false
    input += "\n582  168  495" //true
    input += "\n128  732  752" //true
    input += "\n489  685  558" //true
    input += "\n529  788  341" //true
    input += "\n820  489   73" //false
    input += "\n941  118  684" //false
    input += "\n188  545  680" //true
    input += "\n64   923  188"; //false

     assert.equal( 6, solver.solve( input ) );
  });

});
