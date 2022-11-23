'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const upgradeRobot = {};

  for (const key in robot) {
    if (robot[key] in upgradeRobot) {
      return null;
    }
    upgradeRobot[robot[key]] = key;
  }

  return upgradeRobot;
}

module.exports = inverseRobot;
