'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const result = {};

  for (const key in robot) {
    const i = robot[key];

    if (result[i]) {
      return null;
    }

    result[i] = key;
  }

  return result;
}

module.exports = inverseRobot;
