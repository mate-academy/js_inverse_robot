'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const newRobotObject = {};

  for (const value in robot) {
    const realKey = robot[value];

    if (realKey in newRobotObject) {
      return null;
    }

    newRobotObject[realKey] = value;
  }

  return newRobotObject;
}

module.exports = inverseRobot;
