'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const invert = {};

  for (const [key, value] of Object.entries(robot)) {
    if (value in invert) {
      return null;
    }

    invert[value] = key;
  }

  return invert;
}

module.exports = inverseRobot;
