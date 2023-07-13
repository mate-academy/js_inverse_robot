'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const repairRobot = {};

  for (const key in robot) {
    const newKey = robot[key];

    if (repairRobot.hasOwnProperty(newKey)) {
      return null;
    }

    repairRobot[newKey] = key;
  }

  return repairRobot;
}

module.exports = inverseRobot;
