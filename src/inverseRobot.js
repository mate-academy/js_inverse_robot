'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  let repaired = {};

  for (const key in robot) {
    if (robot[key] in repaired) {
      repaired = null;
      break;
    }

    repaired[robot[key]] = key;
  }

  return repaired;
}

module.exports = inverseRobot;
