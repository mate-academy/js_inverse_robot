'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const inverse = {};

  for (const i in robot) {
    if (inverse.hasOwnProperty(robot[i])) {
      return null;
    }

    inverse[robot[i]] = i;
  }

  return inverse;
}

module.exports = inverseRobot;
