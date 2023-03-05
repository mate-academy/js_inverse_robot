'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const inverse = {};

  const values = Object.values(robot);

  for (let i = 0; i < values.length; i++) {
    for (let j = i + 1; j < values.length; j++) {
      if (values[i] === values[j]) {
        return null;
      } else {
        for (const key in robot) {
          inverse[robot[key]] = key;
        }
      }
    }
  }

  return inverse;
}

module.exports = inverseRobot;
