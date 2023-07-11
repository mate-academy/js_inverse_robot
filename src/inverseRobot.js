'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const result = {};

  for (const robotKey in robot) {
    const resultKey = robot[robotKey];

    if (result.hasOwnProperty(resultKey)) {
      return null;
    }
    result[resultKey] = robotKey;
  }

  return result;
}

module.exports = inverseRobot;
