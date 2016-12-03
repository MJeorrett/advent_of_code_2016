var assert = require('assert');
var Solver = require('../solver');

describe( "Solver", function() {

  var solver = null;

  var row1 = [1, 2, 3];
  var row2 = [4, 5, 6];
  var row3 = [7, 8, 9];

  var column1 = [1, 4, 7];
  var column2 = [2, 5, 8];
  var column3 = [3, 6, 9];

  beforeEach( function() {

    solver = new Solver();
  });

  it( "should return same number when moving up from row 1", function() {

    for ( var num of row1 ) {
      assert.equal( num, solver.moveDirectionFrom( "U", num ) );
    }
  });

  it( "should return same number when moving down from row 3", function() {

    for ( var num of row3 ) {
      assert.equal( num, solver.moveDirectionFrom( "D", num ) );
    }
  });

  it( "should return same number when moving left from column 1", function() {

    for ( var num of column1 ) {
      assert.equal( num, solver.moveDirectionFrom( "L", num ) );
    }
  });

  it( "should return same number when moving right from column 3", function() {

    for ( var num of column3 ) {
      assert.equal( num, solver.moveDirectionFrom( "R", num ) );
    }
  });

  it( "should return number + 1 when moving right from columns 1 and 2", function() {
    var input = column1.concat( column2 );

    for ( var num of input ) {
      assert.equal( num + 1, solver.moveDirectionFrom( "R", num ) );
    }
  });

  it( "should return number - 1 when moving left from columns 2 and 3", function() {
    var input = column2.concat( column3 );

    for ( var num of input ) {
      assert.equal( num - 1, solver.moveDirectionFrom( "L", num ) );
    }
  });

  it( "should return number + 3 when moving down from rows 1 and 2", function() {
    var input = row1.concat( row2 );

    for ( var num of input ) {
      assert.equal( num + 3, solver.moveDirectionFrom( "D", num ) );
    }
  });

  it( "should return number - 3 when moving up from rows 2 and 3", function() {
    var input = row2.concat( row3 );

    for ( var num of input ) {
      assert.equal( num - 3, solver.moveDirectionFrom( "U", num ) );
    }
  });

  // it( "should return answer '1985' to example problem 1", function() {
  //
  //   var input = "ULL\nRRDDD\nLURDL\nUUUUD";
  //   var solver = new Solver();
  //   var actual = solver.solve( input );
  //   assert.equal( 1985, actual );
  // });

});
