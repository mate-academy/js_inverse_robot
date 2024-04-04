'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const inversedRobot = {};

  for (const key in robot) {
    const inversedRobotValue = robot[key];

    if (inversedRobot.hasOwnProperty(robot[key])) {
      return null;
    }

    inversedRobot[inversedRobotValue] = key;
  }

  return inversedRobot;
}

module.exports = inverseRobot;
