'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  // write code here
  const inverseRobot1 = {};

  for (const key in robot) {
    if (robot[key] in inverseRobot1) {
      return null;
    }
    inverseRobot1[robot[key]] = key;
  }

  return inverseRobot1;
}

module.exports = inverseRobot;
