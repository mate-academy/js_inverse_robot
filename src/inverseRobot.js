'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const clone = {};

  for (const key in robot) {
    const newKey = robot[key];

    if (clone.hasOwnProperty(newKey)) {
      return null;
    }
    clone[newKey] = key;
  }

  return clone;
}

module.exports = inverseRobot;
