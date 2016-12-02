var assert = require('assert');

describe( "Data Parser", function() {

  it( "should parse test 1 correctly", function() {

    assert.deepEqual( ["R3", "L3"], DataParser.parse( "R2, L3" ) );
  });
});
