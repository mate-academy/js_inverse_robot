'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const fixed = {};

  for (const value in robot) {
    if (fixed[robot[value]]) {
      return null;
    }

    fixed[robot[value]] = value;
  }

  return fixed;
}

module.exports = inverseRobot;
