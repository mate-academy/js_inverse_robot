'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const swap = {};

  for (const key in robot) {
    if (swap.hasOwnProperty(robot[key])) {
      return null;
    } else {
      swap[robot[key]] = key;
    }
  }

  return swap;
}

module.exports = inverseRobot;
