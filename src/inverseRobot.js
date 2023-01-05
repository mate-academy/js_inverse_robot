'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
 */

function inverseRobot(robot) {
  // write code here
  const robotKeys = [];
  const robotValues = [];
  const reversedRobot = {};

  for (const key in robot) {
    robotKeys.push(key);
    robotValues.push(robot[key]);
  }

  if (robotValues.length !== new Set(robotValues).size) {
    return null;
  }

  for (let i = 0; i < robotKeys.length; i++) {
    reversedRobot[robotValues[i]] = robotKeys[i];
  }

  return reversedRobot;
}

module.exports = inverseRobot;
