'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const inverse = {};

  for (const key in robot) {
    if (!inverse[robot[key]]) {
      inverse[robot[key]] = key;
    } else {
      return null;
    }
  }

  return inverse;
}

module.exports = inverseRobot;
