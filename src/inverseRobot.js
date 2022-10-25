'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const inverse = {};

  for (const key in robot) {
    if (inverse.hasOwnProperty([robot[key]])) {
      return null;
    }

    inverse[robot[key]] = key;
  }

  return inverse;
}

module.exports = inverseRobot;
