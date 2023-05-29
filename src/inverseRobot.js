'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const transposition = {};

  const arrayKeys = Object.values(robot);

  for (let i = 0; i < arrayKeys.length; i++) {
    for (let j = i + 1; j < arrayKeys.length; j++) {
      if (arrayKeys[i] === arrayKeys[j]) {
        return null;
      }
    }
  }

  for (const key in robot) {
    transposition[robot[key]] = key;
  }

  return transposition;
}

module.exports = inverseRobot;
