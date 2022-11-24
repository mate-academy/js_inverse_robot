'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const obj = {};

  for (const key in robot) {
    if (!obj[robot[key]]) {
      obj[robot[key]] = key;
    } else {
      return null;
    }
  }

  return obj;
}

module.exports = inverseRobot;
