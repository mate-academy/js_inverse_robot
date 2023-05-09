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
    const value = robot[key];

    if (inverse[value] !== undefined) {
      return null;
    }

    inverse[value] = key;
  }

  return inverse;
}

module.exports = inverseRobot;
