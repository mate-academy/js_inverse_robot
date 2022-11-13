'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const result = {};

  for (const key in robot) {
    const resultKey = robot[key];

    if (result[resultKey]) {
      return null;
    }

    result[resultKey] = key;
  }

  return result;
}

module.exports = inverseRobot;
