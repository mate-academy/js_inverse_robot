'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const res = {};

  for (let key in robot) {
    if (robot[key] in res) {
      return null;
    } else {
      res[robot[key]] = key;
    }
  }

  return res;
}

module.exports = inverseRobot;
