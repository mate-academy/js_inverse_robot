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
    if (Object.prototype.hasOwnProperty.call(inverse, robot[key])) {
      return null;
    }

    inverse[robot[key]] = key;
  }

  return inverse;
}
module.exports = inverseRobot;
