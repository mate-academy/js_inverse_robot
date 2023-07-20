'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const inverse = {};

  for (const key in robot) {
    const keyValue = robot[key];

    if (inverse.hasOwnProperty(keyValue)) {
      return null;
    }
    inverse[keyValue] = key;
  }

  return inverse;
}

module.exports = inverseRobot;
