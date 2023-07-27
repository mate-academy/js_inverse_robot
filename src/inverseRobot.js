'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const inversedRobot = {};

  for (const key in robot) {
    const incomingRobotValue = robot[key];

    if (inversedRobot.hasOwnProperty(incomingRobotValue)) {
      return null;
    }
    inversedRobot[incomingRobotValue] = key;
  }

  return inversedRobot;
}

module.exports = inverseRobot;
