'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const inverse = {};

  for (const key in robot) {
    const i = robot[key];

    if (inverse[i]) {
      return null;
    }

    inverse[i] = key;
  }

  return inverse;
}

module.exports = inverseRobot;
