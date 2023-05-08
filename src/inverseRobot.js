'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const invertRobot = {};

  for (const key in robot) {
    if (robot[key] in invertRobot) {
      return null;
    }
    invertRobot[robot[key]] = key;
  }

  return invertRobot;
}

module.exports = inverseRobot;
