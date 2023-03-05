'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const toEqual = {};

  for (const val in robot) {
    if (toEqual[robot[val]]) {
      return null;
    } else {
      toEqual[robot[val]] = val;
    }
  }

  return toEqual;
}

module.exports = inverseRobot;
