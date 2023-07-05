'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const resultObject = {};
  const valueSet = new Set();

  for (const key in robot) {
    const value = robot[key];

    if (valueSet.has(value)) {
      return null;
    }

    resultObject[value] = key;
    valueSet.add(value);
  }

  return resultObject;
}

module.exports = inverseRobot;
