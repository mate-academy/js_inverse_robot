'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const reverse = {};

  for (const key in robot) {
    if (robot[key] in reverse) {
      return null;
    }

    reverse[robot[key]] = key;
  }

  return reverse;
}

module.exports = inverseRobot;
