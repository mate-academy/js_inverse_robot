'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const arrKeys = Object.values(robot);

  for (let i = 0; i < arrKeys.length; i++) {
    if (arrKeys[i] === arrKeys[i + 1]) {
      return null;
    }
  }

  const inverse = {};

  for (const key in robot) {
    inverse[robot[key]] = key;
  }// write code here

  return inverse;
}

module.exports = inverseRobot;
