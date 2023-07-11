'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  if (!robot) {
    return null;
  }

  const formatted = {};

  for (const key in robot) {
    const newKey = robot[key];

    if (formatted[newKey]) {
      return null;
    }

    formatted[newKey] = key;
  }

  return formatted;
}

module.exports = inverseRobot;
