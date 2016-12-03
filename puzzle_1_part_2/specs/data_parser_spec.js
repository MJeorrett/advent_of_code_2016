var assert = require('assert');
var dataParser = require('../data_parser');

describe( "Data Parser", function() {

  it( "should return array containing turn and distance from parseItem()", function() {
    input = "R45"
    expected = [ "R", 45 ];
    assert.deepEqual( expected, dataParser.parseItem( input ) );
  });
});
