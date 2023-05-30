'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const res = {};

  for (const value in robot) {
    if (res[robot[value]]) {
      return null;
    }
    res[robot[value]] = value;
  }

  return res;
}

module.exports = inverseRobot;
