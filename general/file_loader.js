var fs = require('fs');

var FileLoader = function() {};

FileLoader.prototype.load = function( filename ) {
  var buffer = fs.readFileSync( filename );
  var bufferString = undefined;

  if ( buffer === undefined ) {
    console.log( "FileLoader: Error could not load file", filename );
  }
  else {
    var bufferString = buffer.toString;
  }

  return bufferString;
};
