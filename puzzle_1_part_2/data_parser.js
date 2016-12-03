var dataParser = {
  parseItem: function( itemString ) {

    var turn = itemString[0];
    var distanceString = itemString.substring( 1 );
    var distance = parseInt( distanceString );

    return [ turn, distance ];
  }
};

module.exports = dataParser;
