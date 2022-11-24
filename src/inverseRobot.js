'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const reverse = {};

  for (const [value, key] of Object.entries(robot)) {
    if (reverse.hasOwnProperty(key)) {
      return null;
    }
    reverse[key] = value;
  }

  return reverse;
}

module.exports = inverseRobot;
