'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const countKeys = Object.values(robot).sort();
  const result = {};

  for (let i = 0; i < countKeys.length - 1; i++) {
    if (countKeys[i] === countKeys[i + 1]) {
      return null;
    }
  }

  for (const key in robot) {
    result[robot[key]] = key;
  }

  return result;
}

module.exports = inverseRobot;
