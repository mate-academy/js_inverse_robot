'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const reversed = {};

  for (const key in robot) {
    const robotValue = robot[key];

    if (reversed.hasOwnProperty(robotValue)) {
      return null;
    }
    reversed[robotValue] = key;
  }

  return reversed;
}

module.exports = inverseRobot;
