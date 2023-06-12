"use strict";

/*
 * @param {object} robot
 *
 * @return {object}
 */

function inverseRobot(robot) {
  const result = {};
  for (let key in robot) {
    if (robot[key] in result) {
      return null;
    }
    result[robot[key]] = key;
  }
  return result;
}

module.exports = inverseRobot;
