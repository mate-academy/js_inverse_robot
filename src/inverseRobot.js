'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const keys = Object.keys(robot);

  for (let i = 0; i <= keys.length; i++) {
    for (let j = i + 1; j <= keys.length; j++) {
      if (robot[keys[i]] === robot[keys[j]]) {
        return null;
      }
    }
  }

  const result = {};

  for (const key in robot) {
    result[robot[key]] = key;
  }

  return result;
}

module.exports = inverseRobot;
