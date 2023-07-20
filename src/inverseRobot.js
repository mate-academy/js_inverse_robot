'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const inverse = {};

  for (const value in robot) {
    if (inverse.hasOwnProperty(robot[value])) {
      return null;
    }
    inverse[robot[value]] = value;
  }

  return inverse;
}

module.exports = inverseRobot;
