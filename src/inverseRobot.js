'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const values = Object.values(robot);
  const inverse = {};

  for (let i = 0; i < values.length; i++) {
    for (let j = 0; j < i; j++) {
      if (values[j] === values[i]) {
        return null;
      }
    }
  }

  for (const key in robot) {
    inverse[robot[key]] = key;
  }

  return inverse;
}

module.exports = inverseRobot;
