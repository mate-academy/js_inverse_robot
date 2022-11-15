'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const res = {};

  for (const key in robot) {
    if (res.hasOwnProperty(robot[key])) {
      return null;
    }

    res[robot[key]] = key;
  }

  return res;
}

module.exports = inverseRobot;
