var dataParser = {
  parse: function( data ) {

    var items = data.split( ", " );
    return items;
  },
  getValues: function( entry ) {

    var direction = entry[0];
    var countString = entry.substring( 1 );
    var count = parseInt( countString );
    return [ direction, count ];
  }
};

module.exports = dataParser;
