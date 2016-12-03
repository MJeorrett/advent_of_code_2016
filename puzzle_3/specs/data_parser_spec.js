var assert = require('assert');
var dataParser = require('../data_parser');

describe( "Data Parser", function() {

  it("should parse example data correctly", function() {

    var input = "123  45  6";
    input +=  "\n11  222  333";

    var expected = [
      [123, 45, 6],
      [11, 222, 333]
    ];

    assert.deepEqual( expected, dataParser( input ) );
  });
});
