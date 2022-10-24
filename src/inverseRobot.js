'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const inverse = {};

  for (const [key, val] of Object.entries(robot)) {
    if (inverse.hasOwnProperty(val)) {
      return null;
    }
    inverse[val] = key;
  }

  return inverse;
}

module.exports = inverseRobot;
