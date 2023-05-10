'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const reversed = {};

  for (const key in robot) {
    if (reversed.hasOwnProperty(robot[key])) {
      return null;
    }

    reversed[robot[key]] = key;
  }

  return reversed;
}

module.exports = inverseRobot;
