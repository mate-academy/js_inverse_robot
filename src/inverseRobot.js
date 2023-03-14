'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const robotValues = Object.values(robot);
  const firstRobotValue = robotValues[0];

  for (let i = 1; i < robotValues.length; i++) {
    if (robotValues[i] === firstRobotValue) {
      return null;
    }
  }

  const swapedRobot = Object.entries(robot).map(
    ([key, value]) => [value, key]
  );

  return Object.fromEntries(swapedRobot);
}

module.exports = inverseRobot;
