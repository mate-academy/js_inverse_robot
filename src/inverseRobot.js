'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const obj = {};

  for (const i in robot) {
    if (!obj[robot[i]]) {
      obj[robot[i]] = i;
    } else {
      return null;
    }
  }

  return obj;
}

module.exports = inverseRobot;
