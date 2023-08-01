'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const robotInversed = {};

  for (const key in robot) {
    const value = robot[key];

    if (robotInversed.hasOwnProperty(value)) {
      return null;
    }

    robotInversed[value] = key;
  }

  return robotInversed;
}

module.exports = inverseRobot;
