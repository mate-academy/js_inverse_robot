'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const swapped = {};

  for (const key in robot) {
    const item = robot[key];

    if (swapped.hasOwnProperty(item)) {
      return null;
    }

    swapped[item] = key;
  }

  return swapped;
}

module.exports = inverseRobot;
