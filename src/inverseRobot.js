'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  // write code here
  const out = {};

  for (const key in robot) {
    if (typeof (out[robot[key]]) !== 'undefined') {
      return null;
    }
    out[robot[key]] = key;
  }

  return out;
}

module.exports = inverseRobot;
