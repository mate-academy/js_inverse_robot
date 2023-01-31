'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const robotValues = Object.values(robot);
  const uniqueRobotValues = new Set(robotValues);

  if (robotValues.length !== uniqueRobotValues.size) {
    return null;
  }

  const fixedRobot = {};

  for (const key in robot) {
    fixedRobot[robot[key]] = key;
  }

  return fixedRobot;
}

module.exports = inverseRobot;
