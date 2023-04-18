'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const inverse = {};

  for (const key in robot) {
    const value = robot[key];
    const name = key;

    if (value in inverse) {
      return null;
    }

    inverse[value] = name;
  }

  return inverse;
}

module.exports = inverseRobot;
