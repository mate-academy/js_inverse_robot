'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  // write code here
  const result = {};

  for (const value in robot) {
    const key = robot[value];

    if (result.hasOwnProperty(key)) {
      return null;
    }

    result[key] = value;
  }

  return result;
}

module.exports = inverseRobot;
