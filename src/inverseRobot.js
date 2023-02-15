'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
 */

function inverseRobot(robot) {
  const reverse = {};

  for (const key in robot) {
    if (reverse.hasOwnProperty(robot[key])) {
      return null;
    }

    reverse[robot[key]] = key;
  }

  return reverse;
}

module.exports = inverseRobot;
