'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
 */

function inverseRobot(robot) {
  const res = {};

  for (const key in robot) {
    const value = robot[key];

    if (res.hasOwnProperty(value)) {
      return null;
    }

    res[value] = key;
  }

  return res;
}

module.exports = inverseRobot;
