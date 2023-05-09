'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const repairedRobot = {};

  for (const key in robot) {
    const sourceRobotValue = robot[key];

    if (repairedRobot.hasOwnProperty(sourceRobotValue)) {
      return null;
    }

    repairedRobot[sourceRobotValue] = key;
  }

  return repairedRobot;
}

module.exports = inverseRobot;
