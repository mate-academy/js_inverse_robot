'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const result = {};

  const arrKeys = [];

  for (const key in robot) {
    arrKeys.push(key);
  }

  const arrValues = [];

  for (const key in robot) {
    arrValues.push(robot[key]);
  }

  for (let i = 0; i < arrKeys.length; i++) {
    if (arrValues[i] in result) {
      return null;
    }
    result[arrValues[i]] = arrKeys[i];
  }

  return result;
}

module.exports = inverseRobot;
