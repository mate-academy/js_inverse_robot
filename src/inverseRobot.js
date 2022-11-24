'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const repairRobot = {};

  for (const key in robot) {
    const repairKey = robot[key];

    if (repairRobot.hasOwnProperty(repairKey)) {
      return null;
    }

    repairRobot[repairKey] = key;
  }

  return repairRobot;
}

module.exports = inverseRobot;
