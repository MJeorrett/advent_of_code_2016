var assert = require('assert');
var Solution = require('../solution');

describe( "Solution", function() {

  var solution = null;

  beforeEach( function() {
    solution = new Solution();
  });

  it( "Should have xTotal starting at 0", function() {
    assert.equal( 0, solution.xTotal );
  })

  it( "Should have yTotal starting at 0", function() {
    assert.equal( 0, solution.yTotal );
  })
});
