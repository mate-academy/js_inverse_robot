'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const inverse = {};

  for (const [key, value] of Object.entries(robot)) {
    if (inverse[value] !== undefined) {
      return null;
    }

    inverse[value] = key;
  }

  return inverse;
}

module.exports = inverseRobot;
