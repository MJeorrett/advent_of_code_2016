var assert = require('assert');
var solver = require('../solver');

describe( "Solver", function() {

  it( "should return the correct first letter from example 1", function() {

    var input = "ederatsrnnstvvde";
    assert.equal( "e", solver.mostCommon( input ) );
  });

  it( "should return the correct first letter from example 2", function() {

    var input = "eraatsdastvenrvn";
    assert.equal( "a", solver.mostCommon( input ) );
  });

  it( "should return the correct first letter from example 3", function() {

    var input = "dvnaertssnestdra";
    assert.equal( "s", solver.mostCommon( input ) );
  });
});
