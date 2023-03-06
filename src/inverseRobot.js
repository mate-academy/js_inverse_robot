'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  let newKey;
  let newValue;
  const result = {};

  for (const key in robot) {
    newKey = robot[key];
    newValue = key;

    const keyArr = Object.keys(result);

    if (keyArr.includes(newKey)) {
      return null;
    }

    result[newKey] = newValue;
  }

  return result;
}

module.exports = inverseRobot;
