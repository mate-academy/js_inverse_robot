'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const res = {};
  const keys = [];

  for (const key in robot) {
    if (keys.includes(robot[key])) {
      return null;
    }
    keys.push(robot[key]);
    res[robot[key]] = key;
  }

  return res;
}

module.exports = inverseRobot;
