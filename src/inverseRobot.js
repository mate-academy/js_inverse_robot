'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const result = {};

  for (const key in robot) {
    result[robot[key]] = key;
  }

  const countKeyPassedObject = Object.keys(robot).length;
  const countKeyResult = Object.keys(result).length;

  if (countKeyPassedObject > countKeyResult) {
    return null;
  }

  return result;
}

module.exports = inverseRobot;
