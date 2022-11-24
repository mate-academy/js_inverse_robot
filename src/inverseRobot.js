'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const robotNew = {};

  for (const key in robot) {
    const robotKey = robot[key];

    if (robotNew.hasOwnProperty(robotKey)) {
      return null;
    }

    robotNew[robotKey] = key;
  }

  return robotNew;
}

module.exports = inverseRobot;
