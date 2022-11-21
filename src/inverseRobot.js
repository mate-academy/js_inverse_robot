'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
 */

function inverseRobot(robot) {
  const copy = {};

  for (const key in robot) {
    if (copy.hasOwnProperty(robot[key])) {
      return null;
    }
    copy[robot[key]] = key;
  }

  return copy;
}

module.exports = inverseRobot;
