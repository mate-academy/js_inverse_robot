'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  let inverse = {};

  for (const key in robot) {
    if (inverse[robot[key]]) {
      inverse = null;
      break;
    }

    inverse[robot[key]] = key;
  }

  return inverse;
}

module.exports = inverseRobot;
