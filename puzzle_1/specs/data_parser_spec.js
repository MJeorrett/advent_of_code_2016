var assert = require('assert');
var DataParser = require('../data_parser');

describe( "Data Parser", function() {

  var dataParser = null;

  beforeEach( function() {

    dataParser = new DataParser();
  });

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
    dataParser.parseData( input )
    assert.deepEqual( expected, dataParser.data );
  });

  it( "should return items in order from next()", function() {

    var input = "R14, L3";
    dataParser.parseData( input )
    assert.deepEqual( ["turnRight", 14], dataParser.next() );
    assert.deepEqual( ["turnLeft", 3], dataParser.next() );
    assert.equal( undefined, dataParser.next() );
  });

});
