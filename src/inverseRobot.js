'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const reverse = {};

  for (const key in robot) {
    const value = robot[key];

    if (reverse.hasOwnProperty(value)) {
      return null;
    }

    reverse[value] = key;
  }

  return reverse;
}

module.exports = inverseRobot;
