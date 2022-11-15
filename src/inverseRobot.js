'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const res = {};

  for (const key in robot) {
    if (res[robot[key]] === undefined) {
      res[robot[key]] = key;
    } else {
      return null;
    }
  }

  return res;
}

module.exports = inverseRobot;
