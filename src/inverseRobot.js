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

    if (Object.keys(inverse).includes(value.toString())) {
      return null;
    } else {
      inverse[value] = key;
    }
  }

  return inverse;
}

module.exports = inverseRobot;
