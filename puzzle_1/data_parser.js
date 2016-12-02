var dataParser = {

  splitData: function( data ) {

    var items = data.split( ", " );
    return items;
  },

  getDirectionCount: function( entry ) {

    var direction = entry[0];
    var countString = entry.substring( 1 );
    var count = parseInt( countString );
    return [ direction, count ];
  }
};

module.exports = dataParser;
