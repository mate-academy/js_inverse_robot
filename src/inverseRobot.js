'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  // write code here
  const inverse = {};

  for (const key in robot) {
    if (inverse[robot[key]] !== undefined) {
      // If the value is already a key in the inverse object, return null
      return null;
    }
    inverse[robot[key]] = key;
  }

  return inverse;
}

module.exports = inverseRobot;
