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

    if (result[value] !== undefined) {
      return null;
    }
    result[value] = key;
  }

  return result;
}

module.exports = inverseRobot;
