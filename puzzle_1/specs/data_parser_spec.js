var assert = require('assert');
var dataParser = require('../data_parser');

describe( "Data Parser", function() {

  it( "should parse test 1 correctly", function() {

    assert.deepEqual( ["R3", "L3"], dataParser.parse( "R3, L3" ) );
  });
});
