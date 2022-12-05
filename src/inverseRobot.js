'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const reversedRobot = {};

  for (const key in robot) {
    if (robot[key] in reversedRobot) {
      return null;
    }
    reversedRobot[robot[key]] = key;
    delete reversedRobot[key];
  }

  return reversedRobot;
}

module.exports = inverseRobot;
