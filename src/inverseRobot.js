'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const result = {};

  for (const robotKey in robot) {
    const robotValue = robot[robotKey];

    if (result[robotValue] !== undefined) {
      return null;
    }

    result[robotValue] = robotKey;
  }

  return result;
}

module.exports = inverseRobot;
