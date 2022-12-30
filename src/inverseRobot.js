'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const result = {};

  for (const key in robot) {
    const robotKey = robot[key];

    if (result.hasOwnProperty(robotKey)) {
      return null;
    }

    result[robotKey] = key;
  }

  return result;
}

module.exports = inverseRobot;
