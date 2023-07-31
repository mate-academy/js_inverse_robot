'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const newRobot = {};

  for (const newRobotDetailValue in robot) {
    const newRobotDetailName = robot[newRobotDetailValue];

    if (newRobot.hasOwnProperty(newRobotDetailName)) {
      return null;
    }

    newRobot[newRobotDetailName] = newRobotDetailValue;
  }

  return newRobot;
}

module.exports = inverseRobot;
