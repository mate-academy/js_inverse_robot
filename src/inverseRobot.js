'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const inverse = {};

  for (const key in robot) {
    const property = robot[key];

    if (inverse.hasOwnProperty(property)) {
      return null;
    }
    inverse[property] = key;
  }

  return inverse;
}
module.exports = inverseRobot;
