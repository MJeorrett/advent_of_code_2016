var assert = require('assert');
var dataParser = require('../data_parser');

describe( "Data Parser", function() {
  it( "split() should return object containing letters, sector id and checksum for example 1", function() {
    var input = "aaaaa-bbb-z-y-x-123[abxyz]";
    var expected = {
      letters: "aaaaabbbzyx",
      sectorId: 123,
      checksum: "abxyz"
    };
    assert.deepEqual( expected, dataParser.parseLine( input ) );
  });

  it( "split() should return object containing letters, sector id and checksum for example 2", function() {
    var input = "a-b-c-d-e-f-g-h-987[abcde]";
    var expected = {
      letters: "abcdefgh",
      sectorId: 987,
      checksum: "abcde"
    };
    assert.deepEqual( expected, dataParser.parseLine( input ) );
  });

  it( "split() should return object containing letters, sector id and checksum for example 1", function() {
    var input = "not-a-real-room-404[oarel]";
    var expected = {
      letters: "notarealroom",
      sectorId: 404,
      checksum: "oarel"
    }
    assert.deepEqual( expected, dataParser.parseLine( input ) );
  });

  it( "split() should return object containing letters, sector id and checksum for example 1", function() {
    var input = "totally-real-room-200[decoy]";
    var expected = {
      letters: "totallyrealroom",
      sectorId: 200,
      checksum: "decoy"
    }
    assert.deepEqual( expected, dataParser.parseLine( input ) );
  });
});
