var util = require('util');

var ticks = 0;

module.exports = function (c) {
  if (ticks % 50 === 0) {
    util.print(' \n');
  } else if (ticks % 10 === 0) {
    util.print(' ');
  }
  ticks++;
  util.print(c || '.');
};
