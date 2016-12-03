var dataParser = {
  parseItem: function( itemString ) {

    var turn = itemString[0];
    var distanceString = itemString.substring( 1 );
    var distance = parseInt( distanceString );

    return [ turn, distance ];
  },

  parse: function( dataString ) {

    var itemStrings = dataString.split( ", " );
    
    return itemStrings.map( function( itemString ) {

      return this.parseItem( itemString );
    }.bind( this ) );
  }
};

module.exports = dataParser;
