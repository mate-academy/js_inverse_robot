'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const inverse = {};

  for (const key in robot) {
    if (robot[key] in inverse) {
      return null;
    }
    inverse[robot[key]] = key;
  }

  return inverse;
}
module.exports = inverseRobot;
