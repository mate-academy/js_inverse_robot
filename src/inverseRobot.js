'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const result = {};

  for (const value in robot) {
    if (!result[robot[value]]) {
      result[robot[value]] = value;
    } else {
      return null;
    }
  }

  return result;
}

module.exports = inverseRobot;
