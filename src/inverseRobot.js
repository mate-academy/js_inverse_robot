'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const copy = {};

  for (const key in robot) {
    const value = robot[key];

    if (copy[value] !== undefined) {
      return null;
    }
    copy[value] = key;
  }

  return copy;
}

module.exports = inverseRobot;
