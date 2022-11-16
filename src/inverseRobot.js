'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const reparedRobot = {};

  for (const key in robot) {
    if (robot[key] in reparedRobot) {
      return null;
    }

    reparedRobot[robot[key]] = key;
  }

  return reparedRobot;
}

module.exports = inverseRobot;
