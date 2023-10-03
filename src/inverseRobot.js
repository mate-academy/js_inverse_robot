'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const inRobot = {};

  for (const key in robot) {
    if (robot[key] in inRobot) {
      return null;
    }

    inRobot[robot[key]] = key;
  }

  return inRobot;
}

module.exports = inverseRobot;
