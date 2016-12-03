var assert = require('assert');

describe( "DataParser", function() {

  var input1 = "ULL\nRRDDD\nLURDL\nUUUUD"
  var dataParser = null;

  beforeEach( function() {

    dataParser = new DataParser();
  });

  it( "should return correct output from input1", function() {

    var L = "L";
    var R = "R";
    var U = "U";
    var D = "D"

    var expected = [
      [U, L ,L],
      [R, R, D, D, D],
      [L, U, R, D, L],
      [U, U, U, U, D]
    ];

    assert.equal( expected, dataParser.parse( input1 ) );
  });
});
