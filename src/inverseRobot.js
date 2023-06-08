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

    if (inverse.hasOwnProperty(inverseKey)) {
      return null;
    }

    inverse[inverseKey] = key;
  }

  return inverse;
}

module.exports = inverseRobot;
