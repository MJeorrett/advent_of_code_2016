var dataParser = {

  splitData: function( data ) {

    var items = data.split( ", " );
    return items;
  },

  getDirectionCount: function( entry ) {

    var directionSymbol = entry[0];
    var direction = directionSymbol === "R" ? "turnRight" : "turnLeft";
    var countString = entry.substring( 1 );
    var count = parseInt( countString );
    return [ direction, count ];
  },
  parseData: function( data ) {

    var splitData = this.splitData( data );
    var output = splitData.map( function( item ){
      return this.getDirectionCount( item );
    }.bind( this ) );
    return output;
  }
};

module.exports = dataParser;
