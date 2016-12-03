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
  },

  normalise: function( data ) {

    var directionMap = {
      U: {
        R: 'R',
        L: 'L',
      },
      R: {
        R: 'D',
        L: 'U'
      },
      D: {
        R: 'L',
        L: 'R'
      },
      L: {
        R: 'U',
        L: 'D'
      }
    };

    var currentDirection = 'U';

    var result = data.map( function( item ) {

      var itemRotation = item[0];
      var itemDistance = item[1];
      currentDirection = directionMap[currentDirection][itemRotation];

      return [ currentDirection, itemDistance ];

    }.bind( this ) );

    return result;
  }
};

module.exports = dataParser;
