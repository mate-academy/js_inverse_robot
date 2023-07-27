'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const revertRobot = {};

  for (const key in robot) {
    const robotPart = robot[key];

    if (revertRobot.hasOwnProperty(robotPart)) {
      return null;
    }

    revertRobot[robotPart] = key;
  }

  return revertRobot;
}
module.exports = inverseRobot;
