'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  // write code here
  const result = {};

  for (const key in robot) {
    const value = robot[key];

    if (value in result) {
      return null;
    }

    result[value] = key;
  }

  return result;
}

module.exports = inverseRobot;
