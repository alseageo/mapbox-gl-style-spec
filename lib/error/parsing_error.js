'use strict';

function ParsingError(error) {
    this.error = error;
    this.message = error.message;
    var match = error.message.match(/line (\d+)/);
    this.line = match ? parseInt(match[1], 10) : 0;
}

module.exports = ParsingError;
