'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const inv = {};

  for (const key in robot) {
    const value = robot[key];

    if (inv[value] !== undefined) {
      return null;
    }

    inv[value] = key;
  }

  return inv;
}

module.exports = inverseRobot;
