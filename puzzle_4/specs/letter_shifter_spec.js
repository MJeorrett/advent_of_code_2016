var assert = require('assert');

describe( "Letter Shifter", function() {

  it( "should return 'a' from shift( a, 0 )", {
    assert.equal( "a", letterShifter( "a", 0 ) );
  } );

  it( "should return 'b' from shift( a, 1 )", {
    assert.equal( "b", letterShifter( "a", 1 ) );
  } );

  it( "should return 'a' from shift( a, 2 )", {
    assert.equal( "c", letterShifter( "a", 2 ) );
  } );

  it( "should return 'a' from shift( a, 26 )", {
    assert.equal( "a", letterShifter( "a", 26 ) );
  } );

  it( "should return 'b' from shift( a, 27 )", {
    assert.equal( "b", letterShifter( "a", 27 ) );
  } );

  it( "should return 'z' from shift( a, 25 )", {
    assert.equal( "z", letterShifter( "a", 25 ) );
  } );

  it( "should return 'o' from shift( m, 2 )", {
    assert.equal( "o", letterShifter( "m", 2 ) );
  } );

  it( "should return 's' from shift( t, 25 )", {
    assert.equal( "s", letterShifter( "t", 25 ) );
  } );
});
