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
    const newKey = robot[key];

    if (result[newKey]) {
      return null;
    } else {
      result[newKey] = key;
    }
  }

  return result;
}

module.exports = inverseRobot;
