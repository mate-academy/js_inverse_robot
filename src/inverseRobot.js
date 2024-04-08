'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const values = Object.values(robot);
  const keys = Object.keys(robot);
  const inverse = {};

  for (let i = 0; i < values.length; i++) {
    for (let j = i + 1; j < values.length; j++) {
      if (values[i] === values[j]) {
        return null;
      }
    }

    const value = values[i];
    const key = keys[i];

    inverse[value] = key;
  }

  return inverse;
}

module.exports = inverseRobot;
