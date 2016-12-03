var assert = require('assert');

describe( "Data Parser", function() {

  it( "should return array containing turn and distance from parse item", function() {
    input = "R45"
    expected = [ "R", 45 ];
    assert.deepEqual( expected = dataParser.splitItem( input ) );
  });
});
