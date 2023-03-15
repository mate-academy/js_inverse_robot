'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const robotValuesMas = Object.values(robot);
  const originalRobotValues = [];

  for (const curr of robotValuesMas) {
    if (originalRobotValues.includes(curr)) {
      return null;
    }

    originalRobotValues.push(curr);
  }

  const changedObj = {};

  for (const key in robot) {
    changedObj[robot[key]] = key;
  }

  return changedObj;
}

module.exports = inverseRobot;
