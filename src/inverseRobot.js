'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const correctRobotObject = {};

  for (const key in robot) {
    if (correctRobotObject[robot[key]]) {
      return null;
    }

    correctRobotObject[robot[key]] = key;
  }

  return correctRobotObject;
}
module.exports = inverseRobot;
