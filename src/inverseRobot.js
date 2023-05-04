'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  // write code here
  const robotValues = Object.values(robot).sort();

  for (let i = 1; robotValues.length > i; i++) {
    if (robotValues[i] === robotValues[i - 1]) {
      return null;
    }
  }

  const result = {};

  Object.entries(robot).forEach(([key, value]) => {
    result[value] = key;
  });

  return result;
}

module.exports = inverseRobot;
