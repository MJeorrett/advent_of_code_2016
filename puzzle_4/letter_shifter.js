var letterShifter = function( letter, count ) {
  var currentIndex = letter.charCodeAt( 0 ) - 97;
  var newIndex = (currentIndex + count) % 26;
  var newCharCode = newIndex + 97;
  var newLetter = String.fromCharCode( newCharCode );

  return newLetter;
};

module.exports = letterShifter;
