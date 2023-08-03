'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  // write code here

  const inverseRobotResult = {};
  const arrayOfKeys = [];

  for (const key in robot) {
    inverseRobotResult[robot[key]] = key;
    arrayOfKeys.push(robot[key]);
  }

  arrayOfKeys.sort();

  for (let i = 0; i < arrayOfKeys.length; i++) {
    if (arrayOfKeys[i] === arrayOfKeys[i + 1]) {
      return null;
    }
  }

  return inverseRobotResult;
}

module.exports = inverseRobot;
