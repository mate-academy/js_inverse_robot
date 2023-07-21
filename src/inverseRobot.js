'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  // write code here
  const inversedRobot = {};

  for (const key in robot) {
    const inversedRobotKey = robot[key];

    if (inversedRobot.hasOwnProperty(inversedRobotKey)) {
      return null;
    }
    inversedRobot[inversedRobotKey] = key;
  }

  return inversedRobot;
}

module.exports = inverseRobot;
