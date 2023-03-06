'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const inverse = {};

  const keys = Object.keys(robot);

  for (const key of keys) {
    if (inverse.hasOwnProperty(robot[key])) {
      return null;
    } else {
      inverse[robot[key]] = key;
    }
  }

  return inverse;
}

module.exports = inverseRobot;
