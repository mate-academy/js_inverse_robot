'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const fixed = {};

  for (const key in robot) {
    const value = robot[key];

    if (fixed.hasOwnProperty(value)) {
      return null;
    }
    fixed[value] = key;
  }

  return fixed;
}

module.exports = inverseRobot;
