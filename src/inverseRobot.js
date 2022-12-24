'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const inverse = {};

  for (const key in robot) {
    inverse[robot[key]] = key;
  }

  const counts = {};

  for (const value of Object.values(robot)) {
    if (counts[value]) {
      return null;
    } else {
      counts[value] = 1;
    }
  }

  return inverse;
}

module.exports = inverseRobot;
