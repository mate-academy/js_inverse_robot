'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  let result = {};

  for (const key in robot) {
    if (robot[key] in result) {
      result = null;
      break;
    }
    result[robot[key]] = key;
  }

  return result;
}

module.exports = inverseRobot;
