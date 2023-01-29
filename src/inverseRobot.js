'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const result = {};

  for (const key in robot) {
    if (result[robot[key]]) {
      return null;
    };
    result[robot[key]] = key;
  }

  return result;
}

module.exports = inverseRobot;
