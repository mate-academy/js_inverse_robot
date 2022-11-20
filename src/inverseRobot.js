'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const repairRobot = {};

  for (const key in robot) {
    if (repairRobot[robot[key]]) {
      return null;
    }
    repairRobot[robot[key]] = key;
  }

  return repairRobot;
}

module.exports = inverseRobot;
