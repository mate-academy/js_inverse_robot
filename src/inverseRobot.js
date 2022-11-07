'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const inversedRobot = {};
  const arrKeys = [];
  const arrValues = [];

  for (const key in robot) {
    arrKeys.push(key);
  }

  for (const key in robot) {
    arrValues.push(robot[key]);
  }

  for (let i = 0; i < arrValues.length; i++) {
    for (let j = i + 1; j < arrValues.length; j++) {
      if (arrValues[i] === arrValues[j]) {
        return null;
      }
    }
  }

  for (let i = 0; i < arrKeys.length; i++) {
    inversedRobot[arrValues[i]] = arrKeys[i];
  }

  return inversedRobot;
}

module.exports = inverseRobot;
