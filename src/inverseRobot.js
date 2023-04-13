'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const res = {};

  for (const key in robot) {
    const newKey = robot[key];

    if (newKey in res) {
      return null;
    }
    res[newKey] = key;
  }

  return res;
}

module.exports = inverseRobot;
