var dataParser = {
  parseLine: function( dataLine ) {

    var lastDashIndex = dataLine.lastIndexOf( "-" );

    var letters = dataLine.substr( 0, lastDashIndex );
    var letters = letters.replace( /-/g, "" );

    var sectorIdAndChecksum = dataLine.substr( lastDashIndex + 1 );
    var openSquareBracketIndex = sectorIdAndChecksum.indexOf( "[" );

    var sectorIdString = sectorIdAndChecksum.substr( 0, openSquareBracketIndex );
    var sectorId = parseInt( sectorIdString );

    var checksumLength = sectorIdAndChecksum.length - openSquareBracketIndex - 2;
    var checksum = sectorIdAndChecksum.substr( openSquareBracketIndex + 1, checksumLength );

    return {
      letters: letters,
      sectorId: sectorId,
      checksum: checksum
    };
  }
};

module.exports = dataParser;
