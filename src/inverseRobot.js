'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const invertedCopy = {};
  const values = Object.values(robot);

  for (let i = 0; i < values.length; i++) {
    for (let j = i + 1; j < values.length; j++) {
      if (values[i] === values[j]) {
        return null;
      }
    }
  }

  for (const key in robot) {
    invertedCopy[robot[key]] = key + '';
  }

  return invertedCopy;
}

module.exports = inverseRobot;
