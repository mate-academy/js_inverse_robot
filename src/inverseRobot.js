'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  // write code here
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
