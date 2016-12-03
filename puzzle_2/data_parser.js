var DataParser = function() {};

DataParser.prototype.parse = function( dataString ) {

  var dataLines = dataString.split( "\n" );
  var output = [];

  dataLines.forEach( function( dataLine ) {
    
    var charList = dataLine.split( "" );
    output.push( charList );
  });

  return output;
};

module.exports = DataParser;
