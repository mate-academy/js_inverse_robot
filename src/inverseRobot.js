'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const result = {};
  let resultValue;

  for (const key in robot) {
    resultValue = robot[key];

    if (result.hasOwnProperty(resultValue)) {
      return null;
    }

    result[resultValue] = key;
  }

  return result;
}

module.exports = inverseRobot;
