'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const result = {};

  for (const key in robot) {
    const value = robot[key];

    if (result.hasOwnProperty(value)) {
      return null;
    }
    result[value] = key;
  }

  return result;
}

module.exports = inverseRobot;
