'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const swapped = {};

  for (const key in robot) {
    if (swapped.hasOwnProperty(robot[key])) {
      return null;
    } else {
      swapped[robot[key]] = key;
    }
  }

  return swapped;
}

module.exports = inverseRobot;
