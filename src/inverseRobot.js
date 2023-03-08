'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const result = {};

  for (const key in robot) {
    const newKey = robot[key];
    const newValue = key;

    if (result[newKey]) {
      return null;
    }

    result[newKey] = newValue;
  }

  return result;
}

module.exports = inverseRobot;
