var solver = {

  solveRow: function( data ) {

    if ( data[0] + data[1] > data[2] ) {
      return true;
    }

    return false;
  }
};

module.exports = solver;
