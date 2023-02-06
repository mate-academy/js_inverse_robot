'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const result = {};

  for (const keys in robot) {
    const newKey = robot[keys];
    const newValue = keys;

    if (result.hasOwnProperty(newKey)) {
      return null;
    }
    result[newKey] = newValue;
  }

  return result;
}
module.exports = inverseRobot;
