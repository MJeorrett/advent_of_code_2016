var assert = require('assert');
var loadFile = require('../../general/file_loader');

describe( "Data Parser", function() {

  it( "Should parse example data correctly", function() {
    var input = "eedadn";
    input += "\ndrvtee";
    input += "\neandsr";
    input += "\nraavrd";
    input += "\natevrs";
    input += "\ntsrnev";
    input += "\nsdttsa";
    input += "\nrasrtv";
    input += "\nnssdts";
    input += "\nntnada";
    input += "\nsvetve";
    input += "\ntesnvt";
    input += "\nvntsnd";
    input += "\nvrdear";
    input += "\ndvrsen";
    input += "\nenarar";
    
    var expected = [
      "ederatsrnnstvvde",
      "eraatsdastvenrvn",
      "dvnaertssnestdra",
      "atdvvntrdatnsesr",
      "desrresttdvvnaea",
      "nerdsvavsaetdrnr"
    ];
    assert.equal( expected, dataParser.parse( input ) );
  });
});
