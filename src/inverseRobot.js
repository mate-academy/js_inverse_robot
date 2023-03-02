'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const newObj = {};
  const values = Object.values(robot);

  for (let i = 0; i < values.length - 1; i++) {
    for (let j = i; j < values.length - 1; j++) {
      if (values[i] === values[j + 1]) {
        return null;
      }
    }
  }

  for (const key in robot) {
    newObj[robot[key]] = key;
  }

  return newObj;
}

module.exports = inverseRobot;
