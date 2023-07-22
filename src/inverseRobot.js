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

    if (value in robotInversed) {
      return null;
    }

    robotInversed[value] = key;
  }

  return robotInversed;
}

module.exports = inverseRobot;
