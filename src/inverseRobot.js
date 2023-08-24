'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const clone = {};

  for (const key in robot) {
    const inverse = robot[key];

    if (clone[inverse]) {
      return null;
    }
    clone[inverse] = key;
  }

  return clone;
}

module.exports = inverseRobot;
