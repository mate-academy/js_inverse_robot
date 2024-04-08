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

    if (!result[robotKey]) {
      result[robotKey] = key;
    } else {
      return null;
    }
  }

  return result;
}

module.exports = inverseRobot;
