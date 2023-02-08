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
    const resultValue = key;

    if (result.hasOwnProperty(resultKey)) {
      return null;
    }

    result[resultKey] = resultValue;
  }

  return result;
}

module.exports = inverseRobot;
