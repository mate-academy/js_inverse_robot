'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const result = {};

  for (const key in robot) {
    if (!(result.hasOwnProperty(robot[key]))) {
      result[robot[key]] = key;
    } else {
      return null;
    }
  }

  return result;
}

module.exports = inverseRobot;
