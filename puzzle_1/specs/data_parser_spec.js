var assert = require('assert');
var dataParser = require('../data_parser');

describe( "Data Parser", function() {

  it( "should parse test 1 correctly", function() {

    assert.deepEqual( ["R3", "L3"], dataParser.splitData( "R3, L3" ) );
  });

  it( "should split value into direction and count", function() {
    assert.deepEqual( ["R", 14], dataParser.getDirectionCount( "R14" ) );
  })

  it( "should return array of directions and counts from parseData -- test 1", function() {
    var input = "R14, L3";
    var expected = [["R", 14], ["L", 3]];
    assert.deepEqual( expected, dataParser.parseData( input ) );
  });
});
