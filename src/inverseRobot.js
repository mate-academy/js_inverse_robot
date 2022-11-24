'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  // write code here
  const inverse = {};

  for (const key in robot) {
    if (inverse.hasOwnProperty(robot[key])) {
      return null;
    }

    const lo = robot[key];

    inverse[lo] = key;
  }

  return inverse;
}

module.exports = inverseRobot;
