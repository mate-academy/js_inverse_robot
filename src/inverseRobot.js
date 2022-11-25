'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const reversedRobot = {};

  for (const key in robot) {
    if (!(robot[key] in reversedRobot)) {
      reversedRobot[robot[key]] = key;
    } else {
      return null;
    }
  }

  return reversedRobot;
}
module.exports = inverseRobot;
