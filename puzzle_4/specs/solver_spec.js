var assert = require('assert')
var solver = require('../solver');

describe( "Solver", function() {

  it( "should return object containing letter counts from getLetterCounts( example_1 )", function() {
    var input = "aaaaabbbzyx";
    expected = { a: 5, b: 3, y: 1, x: 1, z: 1 };
    assert.equal( expected, solver.getLetterCounts( input ) );
  });

  it( "should return object containing letter counts from getLetterCounts( example_1 )", function() {
    var input = "abcdefgh";
    expected = { a: 1, b: 1, c: 1, d: 1, e: 1, f: 1, g: 1, h: 1 };
    assert.equal( expected, solver.getLetterCounts( input ) );
  });

  it( "should return object containing letter counts from getLetterCounts( example_1 )", function() {
    var input = "notarealroom";
    expected = { n: 1, o: 3, t: 1, a: 2, r: 2, e: 1, l: 1, m: 1 };
    assert.equal( expected, solver.getLetterCounts( input ) );
  });

  it( "should return object containing letter counts from getLetterCounts( example_1 )", function() {
    var input = "totallyrealroom";
    expected = { t: 2, o: 3, a: 2, l: 3, y: 1, r: 2, e: 1, m: 1 };
    assert.equal( expected, solver.getLetterCounts( input ) );
  });
});
