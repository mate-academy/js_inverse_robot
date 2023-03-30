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
    if (out.hasOwnProperty(robot[key])) {
      return null;
    }
    out[robot[key]] = key;
  }

  return out;
}
// typeof (out[robot[key]]) !== 'undefined'
module.exports = inverseRobot;
