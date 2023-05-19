'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const inversRobot = {};

  for (const key in robot) {
    const inversRobotValue = robot[key];

    if (inversRobot.hasOwnProperty(inversRobotValue)) {
      return null;
    }

    inversRobot[inversRobotValue] = key;
  }

  return inversRobot;
}

module.exports = inverseRobot;
