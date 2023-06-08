'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const keys = [];

  for (const key in robot) {
    keys.push(robot[key]);
  }

  for (let i = 0; i < keys.length; i++) {
    if (keys.includes(keys[i], i + 1)) {
      return null;
    }
  }

  const inverse = {};

  for (const key in robot) {
    inverse[robot[key]] = key;
  }

  return inverse;
}

module.exports = inverseRobot;
