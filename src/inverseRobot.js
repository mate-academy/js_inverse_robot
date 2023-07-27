'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const inverse = {};

  for (const key in robot) {
    const objPropertyValue = robot[key];

    if (inverse.hasOwnProperty(objPropertyValue)) {
      return null;
    }
    inverse[objPropertyValue] = key;
  }

  return inverse;
}

module.exports = inverseRobot;
