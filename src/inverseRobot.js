'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const inverse = {};

  for (const key in robot) {
    const prop = robot[key];

    if (inverse.hasOwnProperty(prop)) {
      return null;
    }

    inverse[prop] = key;
  }

  return inverse;
}

module.exports = inverseRobot;
