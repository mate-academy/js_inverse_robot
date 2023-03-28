'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
 */

function inverseRobot(robot) {
  const robotNew = {};

  for (const key in robot) {
    const value = robot[key];

    if (robotNew[value]) {
      return null;
    }
    robotNew[value] = key;
  }

  return robotNew;
}

module.exports = inverseRobot;
