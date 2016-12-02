var dataParser = {
  parse: function( data ) {

    var items = data.split( ", " );
    return items;
  }
};

module.exports = dataParser;
