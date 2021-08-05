'use strict';

const fs = require('fs');
const path = require('path');

var accessLogStream = fs.createWriteStream(path.join(__dirname, '../../logs/access.log'), { flags: 'a' })

module.exports = {
  stream: accessLogStream
};
