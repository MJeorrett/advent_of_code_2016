var assert = require('assert');
var dataParser = require('../data_parser');

describe( "Data Parser", function() {

  it( "should parse test 1 correctly", function() {

    assert.deepEqual( ["R3", "L3"], dataParser.splitData( "R3, L3" ) );
  });

  it( "should split value into direction and count", function() {
    var actual = dataParser.getDirectionCount( "R14" );
    assert.deepEqual( ["turnRight", 14], actual );
  })

  it( "should return array of directions and counts from parseData -- test 1", function() {
    var input = "R14, L3";
    var expected = [["turnRight", 14], ["turnLeft", 3]];
    assert.deepEqual( expected, dataParser.parseData( input ) );
  });
});
