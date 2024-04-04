'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const naturalRobot = {};

  for (const key in robot) {
    if (robot[key] in naturalRobot) {
      return null;
    }

    naturalRobot[robot[key]] = key;
  }

  return naturalRobot;
}

module.exports = inverseRobot;
