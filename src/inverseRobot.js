'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot = null) {
  // write code here
  const result = {};

  for (const key in robot) {
    const values = robot[key];

    if (result[values]) {
      return null;
    }

    result[values] = key;
  }

  return result;
}

module.exports = inverseRobot;
