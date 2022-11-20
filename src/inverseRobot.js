'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const reverse = {};

  for (const i in robot) {
    if (reverse.hasOwnProperty(robot[i])) {
      return null;
    }
    reverse[robot[i]] = i;
  }

  return reverse;
}

module.exports = inverseRobot;
