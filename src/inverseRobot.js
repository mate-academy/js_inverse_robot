'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const robotNew = {};

  for (const key in robot) {
    if (robotNew[robot[key]]) {
      return null;
    }

    robotNew[robot[key]] = key;
  }

  return robotNew;
}

module.exports = inverseRobot;
