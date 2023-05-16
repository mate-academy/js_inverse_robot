'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const inverse = {};

  for (const key in robot) {
    const value = robot[key];

    if (value in inverse) {
      // If the value is already a key in the inverse object, return null
      return null;
    }
    inverse[value] = key;
  }

  return inverse;
}

module.exports = inverseRobot;
