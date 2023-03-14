'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const corectRobot = {};

  for (const key in robot) {
    if (robot[key] in corectRobot) {
      return null;
    }

    corectRobot[robot[key]] = key;
  }

  return corectRobot;
}

module.exports = inverseRobot;
