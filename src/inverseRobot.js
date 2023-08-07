'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const inversedRobot = {};

  for (const key in robot) {
    inversedRobot[robot[key]] = key;
  }

  const robotLength = Object.entries(robot).length;
  const inversedRobotLength = Object.entries(inversedRobot).length;

  if (robotLength !== inversedRobotLength) {
    return null;
  }

  return inversedRobot;
}

module.exports = inverseRobot;
