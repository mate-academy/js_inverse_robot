'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const result = {};

  for (const item in robot) {
    if (robot[item] in result) {
      return null;
    }

    result[robot[item]] = item;
  }

  return result;
}

module.exports = inverseRobot;
