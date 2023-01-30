'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const reversed = {};

  for (const key in robot) {
    if (robot[key] in reversed) {
      return null;
    }

    reversed[robot[key]] = key;
  }

  return reversed;
}

module.exports = inverseRobot;
