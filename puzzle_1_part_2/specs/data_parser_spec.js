var assert = require('assert');
var dataParser = require('../data_parser');

describe( "Data Parser", function() {

  it( "should return array containing turn and distance from parseItem()", function() {
    input = "R45"
    expected = [ "R", 45 ];
    assert.deepEqual( expected, dataParser.parseItem( input ) );
  });

  it( "should contain array of parsed items from parse()", function() {
    input = "R4, R2, L192, R5, L2, R53";
    expected = [
      ['R', 4],
      ['R', 2],
      ['L', 192],
      ['R', 5],
      ['L', 2],
      ['R', 53],
    ];
    assert.deepEqual( expected, dataParser.parse( input ) );
  });

  it( "should normalise round in circle correctly", function() {
    input = [
      ['R', 1],
      ['R', 2],
      ['R', 3],
      ['R', 4]
    ];
    expected = [
      ['R', 1],
      ['D', 2],
      ['L', 3],
      ['U', 4]
    ];
    assert.deepEqual( expected, dataParser.normalise( input ) );
  });
});
