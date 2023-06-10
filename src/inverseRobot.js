'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const robotInversed = {};

  for (const key in robot) {
    const robotValue = robot[key];

    if (robotInversed.hasOwnProperty(robotValue)) {
      return null;
    }

    robotInversed[robotValue] = key;
  }

  return robotInversed;
}

module.exports = inverseRobot;
