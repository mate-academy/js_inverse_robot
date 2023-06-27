'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  // write code here
  const robotValues = Object.values(robot);
  const uniqueRobotValues = new Set(robotValues);
  const inversedRobot = {};

  if (robotValues.length !== uniqueRobotValues.size) {
    return null;
  }

  for (const key in robot) {
    inversedRobot[robot[key]] = key;
  }

  return inversedRobot;
}

module.exports = inverseRobot;
