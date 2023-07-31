'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const reversed = {};

  for (const key in robot) {
    const value = robot[key];

    if (reversed.hasOwnProperty(value)) {
      return null;
    }

    reversed[value] = key;
  }

  return reversed;
}

module.exports = inverseRobot;
