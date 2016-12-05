var loadFile = require('../general/file_loader');
var solver = require('./solver');

var rawData = loadFile( "input.txt" );
var realRooms = solver.getRealRooms( rawData );

solver.solve( realRooms );
