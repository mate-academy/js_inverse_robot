'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const repairRobot = {};

  for (const key in robot) {
    if (robot[key] in repairRobot) {
      return null;
    }

    repairRobot[robot[key]] = key;
  }

  return repairRobot;
}

module.exports = inverseRobot;
