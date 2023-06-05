'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const result = {};
  const duplicateCheck = Object.values(robot);

  for (let i = 0; i < duplicateCheck.length; i++) {
    for (let j = i + 1; j < duplicateCheck.length; j++) {
      if (duplicateCheck[i] === duplicateCheck[j]) {
        return null;
      }
    }
  }

  for (const key in robot) {
    result[robot[key]] = key;
  }

  return result;
}

module.exports = inverseRobot;
