var assert = require('assert');
var stringShifter = require('../string_shifter');

describe( "String Shifter", function() {

    it( "should return 'bcd-efg-hij' from 'abc-def-ghi' shifted 1", function() {
      assert.equal( "bcd-efg-hij", stringShifter( "abc-def-ghi", 1 ) );
    });

    it( "should return 'bcd-efg-hij' from 'zab-cde-fgh' shifted 2", function() {
      assert.equal( "bcd-efg-hij", stringShifter( "zab-cde-fgh", 2 ) );
    });

    it( "should return 'bcd-efg-hij' from 'bcd-efg-hij' shifted 0", function() {
      assert.equal( "bcd-efg-hij", stringShifter( "bcd-efg-hij", 0 ) );
    });

});
