'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const inverse = {};

  for (const key in robot) {
    if (inverse[robot[key]]) {
      return null;
    } else {
      inverse[robot[key]] = key;
    }
  }

  return inverse;
}

module.exports = inverseRobot;
