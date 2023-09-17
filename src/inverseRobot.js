'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const inverse = {};

  for (const key in robot) {
    const inverseKey = robot[key];

    if (inverseKey in inverse) {
      return null;
    }

    inverse[inverseKey] = key;
  }

  return inverse;
}

module.exports = inverseRobot;
