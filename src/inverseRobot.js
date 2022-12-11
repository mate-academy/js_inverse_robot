'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const res = {};

  for (const r in robot) {
    if (res[robot[r]] !== undefined) {
      return null;
    }
    res[robot[r]] = r;
  }

  return res;
}

module.exports = inverseRobot;
