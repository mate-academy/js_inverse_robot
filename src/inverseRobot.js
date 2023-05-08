'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  // write code here
  const result = {};
  const valueList = [];

  for (const key in robot) {
    const value = robot[key];

    if (valueList.includes(value)) {
      return null;
    }

    valueList.push(value);

    result[value] = key;
  }

  return result;
}

module.exports = inverseRobot;
