'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const result = {};
  let newKey = '';

  for (const key in robot) {
    newKey = robot[key];

    if (newKey in result) {
      return null;
    } else {
      result[newKey] = key;
    }
  }

  return result;
}

module.exports = inverseRobot;
