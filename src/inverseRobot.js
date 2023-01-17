'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const repaired = {};

  for (const key in robot) {
    if (robot[key] in repaired) {
      return null;
    }

    repaired[robot[key]] = key;
  }

  return repaired;
}

module.exports = inverseRobot;
