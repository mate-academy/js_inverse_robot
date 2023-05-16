/* eslint-disable quotes */
"use strict";

/*
 * @param {object} robot
 *
 * @return {object}
 */

function inverseRobot(robot) {
  // write code here
  const res = {};

  for (const key in robot) {
    const newKey = robot[key];

    if (res.hasOwnProperty(newKey)) {
      return null;
    }

    res[newKey] = key;
  }

  return res;
}

module.exports = inverseRobot;
