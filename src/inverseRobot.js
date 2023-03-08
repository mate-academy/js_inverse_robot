'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const result = {};

  for (const key in robot) {
    const k = robot[key];

    if (k in result) {
      return null;
    }

    result[k] = key;
  }

  return result;
}

module.exports = inverseRobot;
