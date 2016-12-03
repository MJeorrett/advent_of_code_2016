var dataParser = function( data ) {

console.log("data start");
  console.log( data );
  console.log( "data end");

  var lines = data.split( "\n" );

  var result = lines.map( function( line ) {

    var numberStrings = line.trim().split( /\s+/ );

    var numbers = numberStrings.map( function( numberString ){
      return parseInt( numberString );
    });
    return numbers;
  });

  return result;
};

module.exports = dataParser;
