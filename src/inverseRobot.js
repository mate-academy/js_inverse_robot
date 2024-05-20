'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const reversedRobot = {};

  for (const key in robot) {
    if (!reversedRobot[robot[key]]) {
      reversedRobot[robot[key]] = key;
    } else {
      return null;
    }
  }

  return reversedRobot;
}

module.exports = inverseRobot;
